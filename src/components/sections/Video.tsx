import classNames from 'classnames/bind'
import Section from '../shared/Section'
import styles from './Video.module.scss'

const cx = classNames.bind(styles)

const Video = () => {
  return (
    <Section className={cx('container')}>
      <video muted poster="/assets/thumbnail.png" controls>
        <source src="/assets/main.mp4" type="video/mp4"></source>
      </video>
    </Section>
  )
}

export default Video
