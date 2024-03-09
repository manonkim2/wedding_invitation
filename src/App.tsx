import React from 'react'
import logo from './logo.svg'
import './App.css'

import classNames from 'classnames/bind'
import styles from './App.module.scss'

const cx = classNames.bind(styles)

function App() {
  return (
    <div className={cx('container')}>hi</div>
  )
}

export default App
