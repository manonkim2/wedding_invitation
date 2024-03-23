import Section from '../shared/Section'
import classNames from 'classnames/bind'
import styles from './ImageGallery.module.scss'

const cx = classNames.bind(styles)

const ImageGallery = ({ image }: { image: string[] }) => {
  return (
    <Section title="사진첩">
      <ul className={cx('wrap-images')}>
        {image.map((src, id) => (
          <li key={id} className={cx('wrap-image')}>
            <img src={`/assets/image/${src}.jpeg`} alt="img" />
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default ImageGallery
