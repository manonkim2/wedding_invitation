import Section from '../shared/Section'
import classNames from 'classnames/bind'
import styles from './ImageGallery.module.scss'
import ImageViewer from '../ImageViewer/ImageViewer'
import { useState } from 'react'
import generateImageUrl from '@/utils/generateImageUrl'

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
              <picture>
                <source
                  srcSet={generateImageUrl({
                    filename: src,
                    format: 'webp',
                    option: 'w_240,h_240,q_auto,c_fill',
                  })}
                  type="image/webp"
                />
                <img
                  src={generateImageUrl({
                    filename: src,
                    format: 'jpg',
                    option: 'w_240,h_240,c_fill,q_auto',
                  })}
                  alt="이미지"
                />
              </picture>
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
