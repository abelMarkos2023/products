import React from 'react'
import css from './Testemonials.module.css'
import Hero from '../../assets/testimonialHero.png'
    import {Swiper,SwiperSlide} from 'swiper/react'
import {TestimonialsData} from '../../data/testimonials'
const Testemonials = () => {
  return (
    <div className={css.Testemonials}>
        <div className={css.wrapper}>
            <div className={css.container}>
                <span>Top Rated</span>
                <span>Seedily says she had a disposal rejoice</span>
            </div>
            <img src={Hero} alt="" />
            <div className={css.container}>
                <span>100K</span>
                <span>Happy customer with us</span>
            </div>
        </div>
        <div className={css.reviews}>Reviews</div>
        <div className={css.carousel}>
            <Swiper 
            slidesPerView={3}
            slidesPerGroup={1}
            className={css.tCarousel}
            spaceBetween={20}
            
            >
                    {
                        TestimonialsData.map((testi,i)=>(
                                <SwiperSlide>
                                    <div className={css.testimonial}>
                                        <img src={testi.image} alt="" />
                                        <span>{testi.comment}</span>
                                        <hr />
                                        <span>{testi.name}</span>
                                    </div>
                                    
                                </SwiperSlide>
                        ))
                    }
            </Swiper>
        </div>
    </div>
  )
}

export default Testemonials