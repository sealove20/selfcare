import React from "react"

import styles from './styles.module.css'

export const Layout: React.FC = ({ children }) => {
  return (
    <div className={styles.layout}>
      {children}
    </div>
  )
}