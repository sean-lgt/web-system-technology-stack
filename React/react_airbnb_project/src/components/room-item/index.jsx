import React, { memo } from "react";
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Rating from '@mui/material/Rating';

import { RoomItemWrapper } from './style'

import { changeDetailInfosAction } from '@/store/modules/detail'

const RoomItem = memo((props) => {
  const { itemData, itemWidth = "25%" } = props

  const navigate = useNavigate()
  const dispatch = useDispatch()

  function itemClick() {
    navigate("/detail")
    dispatch(changeDetailInfosAction(itemData))
  }

  return (
    <RoomItemWrapper verifyColor={ itemData?.verify_info?.text_color || "#39576a"} itemWidth={itemWidth} onClick={itemClick}>
      <div className='inner'>
        <div className='cover'>
          <img src={itemData.picture_url} alt="" />
        </div>
        <div className='desc'>
          {itemData.verify_info.messages.join(" · ")}
        </div>
        <div className='name'>{itemData.name}</div>
        <div className='price'>¥{itemData.price}/晚</div>

        <div className='bottom'>
          <Rating 
            value={itemData.star_rating ?? 5}
            precision={0.1}
            readOnly 
            sx={{ fontSize: "12px", color: "#00848A", marginRight: "-1px" }}
          />
          <span className='count'>{itemData.reviews_count}</span>
          {
            itemData.bottom_info && <span className='extra'>·{itemData.bottom_info?.content}</span>
          }
        </div>
      </div>
    </RoomItemWrapper>
  )
  
})

RoomItem.propTypes = {
  itemData: PropTypes.object,
  verifyColor: PropTypes.string,
  itemWidth: PropTypes.string,

}

export default RoomItem