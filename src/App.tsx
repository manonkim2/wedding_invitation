import { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './App.module.scss'
import FullScreenMessage from './components/shared/FullScreenMessage'
import Heading from './components/sections/Heading'
import Video from './components/sections/Video'
import { Wedding } from './models/wedding'

const cx = classNames.bind(styles)

function App() {
  const [wedding, setWedding] = useState<null | Wedding>(null)
  const [loading, setloading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setloading(true)

    fetch('http://localhost:8888/wedding')
      .then((response) => {
        if (response.ok === false) {
          throw new Error('정보를 불러우지 못했습니다.')
        }

        return response.json()
      })
      .then((data) => {
        setWedding(data)
      })
      .catch((error) => {
        console.log('에러발생', error)
        setError(true)
      })
      .finally(() => {
        setloading(false)
      })
  }, [])

  if (loading) {
    return <FullScreenMessage type="loading" />
  }

  if (error) {
    return <FullScreenMessage type="error" />
  }

  if (wedding == null) return null

  const { date } = wedding

  return (
    <div className={cx('container')}>
      <Heading date={date} />
      <Video />
    </div>
  )
}

export default App
