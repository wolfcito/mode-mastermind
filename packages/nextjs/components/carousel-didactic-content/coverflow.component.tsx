import { useId } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { ButtonSuccess } from '../button/button-success.component'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import { EffectCoverflow } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { DidacticContentCards } from '~~/constants/didacitc-contnet.constants'
import styles from '~~/styles/carousel-didactic-content.module.css'

export function DidacticContentCoverflow() {
  const idDidacticContentCoverflow = useId()
  const router = useRouter()
  return (
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 150,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={false}
      modules={[EffectCoverflow]}
      className={styles.swiper}
    >
      {DidacticContentCards.map(card => (
        <SwiperSlide className={styles.swiperSlide} key={`${idDidacticContentCoverflow}-${card.id}`}>
          <h5>{card.title}</h5>
          <Image alt={card.title} src={card.img.path} />
          <ButtonSuccess
            label="START!"
            onClick={() => {
              router.push(card.link)
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
