import classNames from 'classnames/bind'
import Section from '@shared/Section'
import styles from './Heading.module.scss'
import { format, getDay, parseISO } from 'date-fns'

const cx = classNames.bind(styles)

const DAYS = [
  '일요일',
  '월요일',
  '화요일',
  '수요일',
  '목요일',
  '금요일',
  '토요일',
]

const Heading = ({ date }: { date: string }) => {
  const weddingDate = parseISO(date)

  return (
    <Section className={cx('container')}>
      <div className={cx('text-date')}>{format(weddingDate, 'yy.mm.dd')}</div>
      <div className={cx('text-day')}>{DAYS[getDay(weddingDate)]}</div>
    </Section>
  )
}

export default Heading
