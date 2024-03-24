import Section from '../shared/Section'
import classNames from 'classnames/bind'
import styles from './ImageGallery.module.scss'
import ImageViewer from '../ImageViewer/ImageViewer'
import { useState } from 'react'

const cx = classNames.bind(styles)

const ImageGallery = ({ image }: { image: string[] }) => {
  const [selectedIdx, setselectedIdx] = useState(-1)

  const open = selectedIdx > -1

  const handleSelectedImage = (idx: number) => {
    setselectedIdx(idx)
  }

  const onClose = () => {
    setselectedIdx(-1)
  }

  return (
    <>
      <Section title="사진첩">
        <ul className={cx('wrap-images')}>
          {image.map((src, id) => (
            <li
              key={id}
              className={cx('wrap-image')}
              onClick={() => handleSelectedImage(id)}
            >
              <img src={`/assets/image/${src}.jpeg`} alt="img" />
            </li>
          ))}
        </ul>
      </Section>
      <ImageViewer
        images={image}
        open={open}
        selectedIdx={selectedIdx}
        onClose={onClose}
      />
    </>
  )
}

export default ImageGallery
