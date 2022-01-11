import React,{useEffect,useState} from "react";
import sports from "../data/sports";
import Card from "./Card";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])
const Tarif = () => {
    const [width, setWidth] = useState(window.innerWidth);
    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    let isMobile = (width <= 768);
    return (
        <div id='tarif'>
            <div className="s-heading">
                <h1>Tarifs</h1>
                <p>Voici nos tarifs</p>
            </div>
            <div className='b-container'>
                <Swiper
                spaceBetween={40}
                slidesPerView={isMobile ? (1):(3)}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {sports.map(sport =>
                        <SwiperSlide key={sport.titre}>
                            <Card
                                titre={sport.titre}
                                image={sport.image}
                                description={sport.dedie}
                                prix={sport.prix}
                                key={sport.titre}
                            />
                        </SwiperSlide>

                    )}
                </Swiper>
            </div>

        </div>
    )
}

export default Tarif