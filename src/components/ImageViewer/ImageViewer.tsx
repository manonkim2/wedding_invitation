import classNames from 'classnames/bind'
import { Swiper, SwiperSlide } from 'swiper/react'
import Dimmed from '../shared/Dimmed'
import styles from './ImageViewer.module.scss'
import './swiper.css'

const cx = classNames.bind(styles)

const ImageViewer = ({
  images,
  open,
  selectedIdx,
  onClose,
}: {
  images: string[]
  open: boolean
  selectedIdx: number
  onClose: () => void
}) => {
  if (!open) return null

  return (
    <Dimmed>
      <CloseButton onClose={onClose} className={cx('icon-close')} />
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop
        initialSlide={selectedIdx}
      >
        {images.map((src, id) => (
          <SwiperSlide key={id}>
            <img src={`/assets/image/${src}.jpeg`} alt="slide-img" />
          </SwiperSlide>
        ))}
      </Swiper>
    </Dimmed>
  )
}

const CloseButton = ({
  onClose,
  className,
}: {
  onClose: () => void
  className: string
}) => {
  return (
    <svg
      className={className}
      onClick={onClose}
      id="Layer_1"
      version="1.1"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <style type="text/css"></style>
      <g>
        <g id="Icon-Close-O" transform="translate(378.000000, 278.000000)">
          <path
            d="M-345.9-222.1c-13.2,0-23.9-10.7-23.9-23.9c0-13.2,10.7-23.9,23.9-23.9     c13.2,0,23.9,10.7,23.9,23.9C-322-232.9-332.7-222.1-345.9-222.1L-345.9-222.1z M-345.9-267.4c-11.7,0-21.3,9.6-21.3,21.3     c0,11.7,9.6,21.3,21.3,21.3s21.3-9.6,21.3-21.3C-324.6-257.8-334.2-267.4-345.9-267.4L-345.9-267.4z"
            id="Fill-52"
          />
          <polyline
            id="Fill-53"
            points="-356.3,-233.8 -358.2,-235.7 -335.6,-258.3 -333.7,-256.4 -356.3,-233.8    "
          />
          <polyline
            id="Fill-54"
            points="-335.6,-233.8 -358.2,-256.4 -356.3,-258.3 -333.7,-235.7 -335.6,-233.8    "
          />
        </g>
      </g>
    </svg>
  )
}

export default ImageViewer
