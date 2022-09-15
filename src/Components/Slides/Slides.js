import { Swiper, SwiperSlide } from "swiper/react";
import {Fa500Px, FaBity, FaAtlassian, FaBuromobelexperte, FaCcDinersClub, FaCottonBureau} from 'react-icons/fa'

import "swiper/css";
import "swiper/css/navigation";
import "./Slides.css";
import { Navigation } from "swiper";
import 'swiper/css';

const Slides = () => {
  let iconStyles = { 
    fontSize: "1.5em",
    borderRadius: '20px' ,
    padding: '5px',
    cursor: 'pointer',
    backgroundColor: '#FFFFFF',
    margin: '10px'

  };

  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <Fa500Px style={iconStyles}/>loremipsum
        </SwiperSlide>
        <SwiperSlide>
          <FaBity style={iconStyles}/>loremipsum
        </SwiperSlide>
        <SwiperSlide>
          <FaAtlassian style={iconStyles}/>loremipsum
        </SwiperSlide>
        <SwiperSlide>
          <FaBuromobelexperte style={iconStyles}/>loremipsum
        </SwiperSlide>
        <SwiperSlide>
          <FaCcDinersClub style={iconStyles}/>loremipsum
        </SwiperSlide>
        <SwiperSlide>
          <FaCottonBureau style={iconStyles}/>loremipsum
        </SwiperSlide>
      </Swiper>
    
  );
};

export default Slides;