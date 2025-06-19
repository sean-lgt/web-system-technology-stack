import React, { PureComponent } from 'react'
import styles from "./index.module.css"

export class Profile extends PureComponent {
  render() {
    return (
      <div>
        <div className={styles.section}>
          Profile Section
        </div>
      </div>
    )
  }
}

export default Profile