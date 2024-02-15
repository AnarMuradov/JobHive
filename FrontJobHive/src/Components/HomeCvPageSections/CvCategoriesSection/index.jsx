import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './style.scss'

const CvCategoriesSection = () => {
    const [api,setApi] = useState([])
    useEffect(() => {
    fetch("http://localhost:3000/cvcategories")
    .then(res=>res.json())
    .then(data=>setApi(data))
    }, [])
  return (
    <section className='cvSlider'>
    <div className='cvSlider_container'>
    <Swiper
      modules={[Navigation, A11y]}
      spaceBetween={50}
      slidesPerView={5}
      navigation={true}
    
    >
        {api.map((x)=>{
           return(
            <SwiperSlide key={x._id}>
                <div className='categoriesBox'>
                {x.category}
                
                </div>
                </SwiperSlide>
           )
        })
        }
      
    </Swiper>
    </div>
    </section>
  )
}

export default CvCategoriesSection