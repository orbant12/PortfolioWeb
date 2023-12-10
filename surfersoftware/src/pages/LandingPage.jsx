import "../CSS/navbar.css";
import { motion } from "framer-motion";
import Spline from '@splinetool/react-spline';

import React, { useEffect } from "react";
import downArrow from "../assets/down-arrow.png";
import ServiceBox from "../components/serviceBox";

import slide_image_1 from "../assets/react.svg";


import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, EffectCoverflow, Autoplay } from 'swiper/modules'


import '../../node_modules/swiper/swiper-bundle.min.css'
import '../../node_modules/swiper/swiper.min.css'


const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const splineRef = React.createRef();


const LandingPage = () => {

    const slider = [
        {
            title: "Clippify",
            description: "Our Donut Collection Offers a Mouthwatering Array of Flavors, Toppings, and Shapes for Every Craving and Occasion.",
            url: "https://images.unsplash.com/photo-1612240498936-65f5101365d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            logo: "https://images.unsplash.com/photo-1612240498936-65f5101365d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xpcHBpZnklMjBsb2dvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          },
          {
            title: "Lupody",
            description: "Our Donut Collection Offers a Mouthwatering Array of Flavors, Toppings, and Shapes for Every Craving and Occasion.",
            url: "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
            logo: "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2xpcHBpZnklMjBsb2dvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          },
          {
            title: "Lupody Mobile",
            description: "Our Donut Collection Offers a Mouthwatering Array of Flavors, Toppings, and Shapes for Every Craving and Occasion.",
            url: "https://images.unsplash.com/photo-1646615077267-97c6088b74d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80",
            logo: "https://images.unsplash.com/photo-1646615077267-97c6088b74d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2xpcHBpZnklMjBsb2dvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          },
        
          {
            title: "Clippify Mobile",
            description: "Our Donut Collection Offers a Mouthwatering Array of Flavors, Toppings, and Shapes for Every Craving and Occasion.",
            url: "https://images.unsplash.com/photo-1631397833242-fc6213046352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            logo: "https://images.unsplash.com/photo-1631397833242-fc6213046352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2xpcHBpZnklMjBsb2dvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          },
    ]





//<**************VARIABLES**********************>

const [isSelected, setIsSelected] = React.useState("web");


//WEB DATA
const webData = {
    title: "Web App",
    desc: "Web App Desc",
}

//MOBILE DATA
const mobileData = {
    title: "Mobile App",
    desc: "Mobile App Desc",
}

//CROSS DATA
const crossData = {
    title: "Cross-Platform",
    desc: "Cross-Platform Desc",
}

//<**************FUNCTIONS**********************>

const handlePortfolioNavigation = (title) => {
    window.location.href = '/portfolio/'+title;
}


return (
<>
    <div className="row1">
        <div className="hero">
        <div className="wrapper">
            <motion.div
            className="textContainer"
            variants={textVariants}
            initial="initial"
            animate="animate"
            >
            <motion.h2 variants={textVariants}>Hi, I'm <span>Tamas. 👋</span></motion.h2>
            <motion.h1 variants={textVariants}>
                Fullstack Web and Mobile developer
            </motion.h1>
            <motion.div variants={textVariants} className="buttons">
                <motion.button variants={textVariants}>
                See the Latest Works
                </motion.button>
                <motion.button variants={textVariants}>Contact Me</motion.button>
            </motion.div>
            
            
            <motion.img
                variants={textVariants}
                animate="scrollButton"
                src={downArrow}
                alt="dasdsd"
                className="scrollButton"
            />
            </motion.div>
        </div>

        <div className="spline3D" ref={splineRef}>
            <Spline scene="https://prod.spline.design/7Tw5Onj31K29lbsG/scene.splinecode" />
            </div>
        </div>
    </div>

    <div>
        <div id="services">
            <div className="services-pick">
                <h3 onClick={() => setIsSelected("mobile")} className={isSelected === "mobile" ? "selected" : "select"}>Mobile App</h3>
                <h3 onClick={() => setIsSelected("web")} className={isSelected === "web" ? "selected" : "select"} >Web App</h3>
                <h3  onClick={() => setIsSelected("cross")} className={isSelected === "cross" ? "selected" : "select"}>Cross-Platform</h3>

            </div>

            <div className="service-show">
                
                <ServiceBox props={isSelected === "web" ? webData : isSelected === "mobile" ? mobileData : isSelected === "cross" ? crossData : null} /> 
                
    
                <div className="service-list">
                    <h5>• Fene</h5>
                    <h5>• Fene</h5>
                    <h5>• Fene</h5>
                    <h5>• Fene</h5>
                    <h5>• Fene</h5>
                    <h5>• Fene</h5>

                </div>
            </div>

            <div className="service-fee-row">
                <div className="h-rate">
                    <h4>Price : 30$ / h</h4>
                </div>
            </div>

            <div id="portfolio">
                <div className="portfolio-title">
                    <h1>Portfolio</h1>
                </div>

                <div style={{marginTop:50, maxWidth:1000,width: 1000,marginBottom:100}}>
                <Swiper 
                    className='myswiper'
                    modules={[Pagination, EffectCoverflow, Autoplay]}
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 3,
                        slideShadows: true
                    }}
                    loop={true}
                    pagination={{clickable: true}}

                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2
                        },
                        768: {
                            slidesPerView: 1
                        },
                        1024: {
                            slidesPerView: 2
                        },
                        1560: {
                            slidesPerView: 3
                        },
                    }}
                    >
                    {
                    slider.map(data => (
                        <SwiperSlide style={{ backgroundImage: `url(${data.url})` }} className="myswiper-slider">
                            <div>
                                <h2>{data.title}</h2>
                                <p>{data.description}</p>
                                <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",width:"0%",height:100,marginTop:30}}>
                                    <img src={data.logo} className="swiper-image" alt="" />
                                    <a onClick={() => handlePortfolioNavigation(data.title)} target="_blank" className='slider-btn'>explore</a>
                                </div>
                                
                            </div>
                        </SwiperSlide>
                    ))
                    }
                </Swiper>
                </div>
            </div>
        </div>
    </div>
</>
  );
};

export default LandingPage;