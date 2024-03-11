import { useEffect } from 'react'
import classNames from 'classnames/bind'
import styles from './App.module.scss'

const cx = classNames.bind(styles)

function App() {
  useEffect(() => {
    return () => {}
  }, [])

  return <div className={cx('container')}>hi</div>
}

export default App
