import React from 'react'
import styles from './Button1.module.css' //styles 대신 다른 단어로도 가능

const Button1 = () => {
  return (
    <button className={styles.Button}>Button1</button>
  )
}

export default Button1