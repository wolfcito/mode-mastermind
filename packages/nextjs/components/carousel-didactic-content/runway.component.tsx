import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import styles from "~~/styles/runway-didactic-content.module.css"
import useRunwayContentDidactic from '~~/hooks/content-didactic/useRunwayContentDidactic';
import SwiperSlideContent from './swiper-slide-content.component';


const RunwayContentDidactic = () => {
    const { swiperSlides } = useRunwayContentDidactic();
    return (
        <Swiper
            modules={[Pagination, Navigation]}
            className={styles.swiper}
        >
            {
                swiperSlides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <SwiperSlideContent slide={slide} allSlides={swiperSlides} />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
}

export default RunwayContentDidactic;