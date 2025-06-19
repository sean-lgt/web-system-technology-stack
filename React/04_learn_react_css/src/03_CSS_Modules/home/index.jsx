import React, { PureComponent } from "react";
import styles from "./index.module.css"

export class Home extends PureComponent { 
  render () {
    return (
      <div>
        <div className={styles.section}>
          <div className={styles.title}>Home的标题</div>
        </div>
      </div>
    )
  }
}

export default Home