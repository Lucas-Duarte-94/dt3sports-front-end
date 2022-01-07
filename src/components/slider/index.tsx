import styles from './styles.module.scss';

// import Swiper bundle with all modules installed
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper'

interface SliderProps {
    urls: string[];
}

export function Slider({ urls }: SliderProps) {
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            className={styles.container}
        >
            {urls.map(image => {
                return (
                    <SwiperSlide key={image}>
                        <div className={styles.sliderContent}>
                            <img src={image} alt="Cadeira Rhino" />
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}