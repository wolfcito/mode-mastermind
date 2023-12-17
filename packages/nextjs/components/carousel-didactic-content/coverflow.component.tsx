import { useId } from 'react';
import { useRouter } from 'next/router'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import { DidacticContentCards } from '~~/constants/didacitc-contnet.constants';
import { Button } from '../button';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import styles from '~~/styles/carousel-didactic-content.module.css';


const DidacticContentCoverflow = () => {
    const idDidacticContentCoverflow = useId();
    const router = useRouter()
    return (
        <>
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
                {
                    DidacticContentCards.map((card) => (
                        <SwiperSlide className={styles.swiperSlide} key={`${idDidacticContentCoverflow}-${card.id}`}>
                            <h5 >{card.title}</h5>
                            <img
                                alt={card.title}
                                src={card.img.path}
                            />
                            <Button label='START!' onClick={() => { router.push(card.link) }} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    );
}


export default DidacticContentCoverflow