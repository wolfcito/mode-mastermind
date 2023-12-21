import { SwiperSlideContent } from './swiper-slide-content.component'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import useRunwayContentDidactic from '~~/hooks/content-didactic/useRunwayContentDidactic'
import styles from '~~/styles/runway-didactic-content.module.css'

export function RunwayContentDidactic() {
  const { swiperSlides } = useRunwayContentDidactic()
  return (
    <Swiper modules={[Pagination, Navigation]} className={styles.swiper}>
      {swiperSlides.map(slide => (
        <SwiperSlide key={slide.id}>
          <SwiperSlideContent slide={slide} allSlides={swiperSlides} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
