//CSS
import "../CSS/navbar.css";
import "../CSS/mian.css"
//REACT
import React from "react";

//IMAGE
import GetconLogo from "../assets/gtcon.png"
import '../../node_modules/swiper/swiper-bundle.css';
import getcon from "../assets/getcon.png"
import vuSec from "../assets/vusec.png"
import vrImage from "../assets/vr.png"
//ICONS
import { SocialIcon } from "react-social-icons";

//COMPONENTS

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, EffectCoverflow, Autoplay } from 'swiper/modules'
import CancelIcon from '@mui/icons-material/Cancel';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import BasicModal from "../components/CertificateModal/certifitaceModal";
import metaLogo from "../assets/meta-logo.jpeg";
import metaCertificate from '../assets/META.jpg'
import udemyLogo from '../assets/udemyIMAGE.png'
import UdemyIosCertificate from '../assets/UdemyIosCert.jpeg'
import ibmLogo from '../assets/ibm.svg'
import ClippifyLogo from '../assets/Clippify-log.svg'
import LupodyLogo from '../assets/Lupody_Black.png';
import LupodyScreen from '../assets/LupodyScreen2.png';
import ClippifyScreen from '../assets/ClippifyScreen.png';
import ClippifyMobileScreen from '../assets/ClippifyMobileScreen.png';
import OT from "../assets/OT.jpg"
import LupodyMobileScreen from '../assets/LupodyMobileScreen.png';
import { Link } from "react-router-dom";
import MyResume from '../assets/OT_Resume.pdf'
import { AmazonwebservicesOriginalWordmark, AndroidOriginal, AppleOriginal, Css3Original, DockerOriginalWordmark, ExpressOriginal, ExpressOriginalWordmark, FirebaseOriginal, FlaskOriginal, GoOriginal, Html5Original, JavascriptOriginal, NextjsOriginal, NodejsOriginal, NumpyOriginal, OpencvOriginal, PandasOriginal, PythonOriginal, ReactOriginal, ReactOriginalWordmark, TailwindcssOriginal, TensorflowOriginal, TypescriptOriginal, VitejsOriginal, ViteOriginal } from 'devicons-react';
import zIndex from "@mui/material/styles/zIndex";

const LandingPage = () => {

//<**************VARIABLES**********************>

const slider = [
        {
        title: "Clippify",
        description: "CLippify is a web app for CLIPPING -> STORING, SAVING, ANALISING videos. Suited with AI Speech To Text and AI chatbot.",
        url: ClippifyScreen,
        logo: ClippifyLogo
        },
        {
            title: "Skin Cancer App",
            description: "CLippify is a web app for CLIPPING -> STORING, SAVING, ANALISING videos. Suited with AI Speech To Text and AI chatbot.",
            url: ClippifyScreen,
            logo: ClippifyLogo
        },
        {
            title: "Skin Cancer Detection Model",
            description: "CLippify is a web app for CLIPPING -> STORING, SAVING, ANALISING videos. Suited with AI Speech To Text and AI chatbot.",
            url: ClippifyScreen,
            logo: ClippifyLogo
        },
        {
        title: "Lupody",
        description: "Lupody is a PODCAST social media platform with AI chatbot and AI powered content.",
        url: LupodyScreen,
        logo: LupodyLogo
        },
        {
        title: "Lupody Mobile",
        description: "Lupody Mobile is a PODCAST social media platform with AI chatbot and AI powered content.",
        url: LupodyMobileScreen,
        logo: LupodyLogo
        },
]

//IS SELECTED | WEB | MOBILE | CROSS
const [isSelected, setIsSelected] = React.useState("cross");

const [isAiChatOpen, setIsAiChatOpen]= React.useState(false);

//WEB DATA
const webData = {
    title: "Fullstack Development",
    desc: "Web App Desc",
}

//MOBILE DATA
const mobileData = {
    title: "Mobile Development",
    desc: "Mobile App Desc",
}

//CROSS DATA
const crossData = {
    title: "Cross-Platform",
    desc: "Cross-Platform Desc",
}

//<**************FUNCTIONS**********************>

//HANDLE PORTFOLIO NAVIGATION
const handlePortfolioNavigation = (title) => {
    if(title === "Lupody"){
        window.location.href = "/fullstack-projects/lupody"
    }
    
    if(title === "Clippify"){
        window.location.href = "/fullstack-projects/clippify"
    }

    if(title === "Lupody-Mobile"){
        window.location.href = "/mobile-project/lupody-mobile"
    }

    if(title === "Clippify-Mobile"){
        window.location.href = "/mobile-project/clippify-mobile"
    }

    if(title === "Speech To Text"){
        window.location.href = "/cross-project/speech-to-text"
    }

    if(title === "Object Detection"){  
        window.location.href = "/cross-project/object-detection"
    }

    if(title === "Kaggle Solutions"){
        window.location.href = "/cross-project/kaggle-solutions"
    }

    if(title === "Capture The Flag"){
        window.location.href = "/cyber-project/capture-the-flag"
    }

    if(title === "Pentesting My Web Apps"){
        window.location.href = "/cyber-project/pentesting-web"
    }

    if(title === "Pentesting My Mobile Apps"){
        window.location.href = "/cyber-project/pentesting-mobile"
    }

    if(title === "Vr"){
        window.location.href = "/about-me"
    }

}
//DOWNLOAD RESUME
function downloadResume() {
    // Replace 'your_resume_file_url' with the actual URL of the resume file
    const url = MyResume;
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Orban_Tamas_Resume.pdf'); // Change 'resume.pdf' to the desired file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

//OPEN RESUME
function openResume() {
    const url = MyResume;
    window.open(url, '_blank');
}

const handleSeeMore = (navigationTitle) => {
    //GITHUB
    if(navigationTitle == "Github"){
        window.location.href = "https://github.com/orbant12"
    }

    //YOUTUBE
    if(navigationTitle == "Youtube"){
        window.location.href = "https://www.youtube.com/channel/UCV32IuRS4IQiA2_TWVJDd_w"
    }

     //Getcon
    if(navigationTitle == "Getcon"){
        window.location.href = "https://www.getcon.hu/"
    }
}



return (
<div className="landing-page">
    <HeroSection 
        openResume={openResume}
    />

    <WidgetSection />

    <MyPortfolio 
        slider={slider}
    />


    <div style={{borderTop:"1px solid black", display:"flex",flexDirection:"column", height:"100%"}}>
        <div id="services">           

            <Bubbles 
                handleSeeMore={handleSeeMore}
            />

            <AboutMe 
                handlePortfolioNavigation={handlePortfolioNavigation}
            />

            <BottomButton 
                openResume={openResume}
                setIsAiChatOpen={setIsAiChatOpen}
                isAiChatOpen={isAiChatOpen}
                downloadResume={downloadResume}
            />
        </div>
    </div>
</div>
)};

export default LandingPage;






const HeroSection = ({openResume}) => {
    return(
        <div className="row1">
        <div className="hero-left">
            <div className="hero-m-title">
                <h2 className="max-w-[200px] md:max-w-[500px]">Hey I'm Tamas 👋</h2>
            </div>
            <div className="hero-s-title">
                <h4>Fullstack Developer and IT Enthusiast in Several Subject. I'm responsible to code your ideas into reality.</h4>
            </div>
            <div className="hero-b-row">
                <div onClick={openResume} className="filled-btn">
                    <h4>My Resume</h4>
                </div>
                <div className="unfilled-btn">
                    <h4>About me</h4>
                </div>
            </div>
            <div className="trust-row">
                <h6 className="text-ms font-medium md:text-lg">Worked for:</h6>
                <img src={getcon} className="w-20 h-20 relative pb-1 hover:scale-110 cursor-pointer" title="Visit Getcon" onClick={() => window.location.href = "https://www.getcon.com/"} alt="" />
                <img src={vuSec} className="w-[140px] h-[40px] relative pb-1 hover:scale-110 cursor-pointer ml-5" title="Visit VU Cyber Security" onClick={() => window.location.href = "https://www.vusec.net/"} alt="" />
            </div>
        </div>
        <div className="bg-gradient-primary-rev p-2 rounded lg:block imageHero">
            <div className="loader hidden lg:block"></div>
            <img loading="lazy" src={OT} alt="" className="w-80 h-100 object-cover rounded  shadow-lg  relative hidden lg:block" />
        </div>
    </div>
    )
};

const TechModal = ({
    selectedModal,
    setSelectedModal,
    visible
}) => {

  const AnimatedBackground = () => (
    <>
      <style jsx>{`
        @keyframes backgroundFade {
          0% {
            background-color: rgba(255, 255, 255, 0.1);
          }
          50% {
            background-color: rgba(255, 255, 255, 0.3);
          }
          100% {
            background-color: rgba(255, 255, 255, 0.1);
          }
        }
  
        .animated-bg {
          animation: backgroundFade 5s infinite;
        }
      `}</style>
    </>
  );

    return(
        <>
        {visible &&
        <div className="w-[100%] h-[100%] fixed bg-overlay top-0 flex flex-col justify-center items-center" style={{zIndex:9990}}>
            <div className="w-[80%] h-[90%] min-h-[0px] lg:min-h-[500px] lg:h-[60%] bg-gradient relative rounded border-4 border-magenta lg:overflow-y-hidden overflow-y-scroll flex flex-col justify-center p-10 lg:pr-20 pr-10 pt-[400px] sm:pt-40 lg:pt-10" style={selectedModal === 'ml' ? {paddingTop:0}:{}}>
                <div onClick={() => setSelectedModal(null)} className="flex flex-col absolute top-5 right-5 px-3 p-1 bg-black border-3 border-red cursor-pointer hover:scale-90 active:scale-50" style={{borderRadius:100}}>
                <h2 className="text-sm font-medium" style={{color:"red"}}>Close</h2>
                </div>
                <AnimatedBackground />
                {selectedModal === 'web' ? (
                <>
                <h1 className="mb-5 text-white opacity-80 font-bold ">Web Technologies</h1>
                <div className="flex flex-col items-center p-5 bg-gray-900 rounded lg:flex-row lg:justify-between animated-bg">
                    <h1 className="text-white text-md opacity-85 self-center font-bold lg:self-left mb-5 lg:mb-0">Frontend: </h1>
                    <div className="flex flex-wrap items-center p-5 rounded justify-center" style={{backgroundColor:"rgba(0,0,0,0.4)"}}>
                        <JavascriptOriginal className="m-3 mx-4" size={35} />
                        <TypescriptOriginal className="m-3 mx-4" size={35} />
                        <Html5Original className="m-3 mx-4" size={35} />
                        <Css3Original className="m-3 mx-4" size={35} />
                    </div>
                        <h3 className="text-white lg:ml-0 lg:mt-0 lg:mb-0 my-5">•</h3>
                        <div className="flex flex-wrap items-center p-3 rounded lg:ml-8 justify-center" style={{backgroundColor:"rgba(0,0,0,0.4)"}}>
                        <ReactOriginal className="m-3 mx-4" size={35} />
                        <VitejsOriginal color='white' className='m-3 mx-4' size={35} />
                        <NextjsOriginal className='m-3 mx-4' size={35} />
                        <TailwindcssOriginal className='m-3 mx-4' size={35} />
                    </div>
                </div>

                <div className="flex flex-col mt-10 items-center p-5 bg-gray-900 rounded lg:flex-row lg:justify-between animated-bg">
                    <h1 className="text-white text-md opacity-85 self-center font-bold lg:self-left mb-5 lg:mb-0">Backend: </h1>
                    <div className="flex flex-wrap justify-center items-center p-5 bg-gray-900 rounded" style={{backgroundColor:"rgba(0,0,0,0.4)"}}>
                        <GoOriginal className="m-3 mx-4" size={35} />
                        <JavascriptOriginal className="m-3 mx-4" size={35} />
                        <TypescriptOriginal className="m-3 mx-4" size={35} />
                        <CplusplusOriginal className="m-3 mx-4" size={35} />
                        <JavaOriginal className="m-3 mx-4" size={35} />
                        <PythonOriginal className="m-3 mx-4" size={35} />
                    </div>
                        <h3 className="text-white lg:ml-0 lg:mt-0 lg:mb-0 my-5">•</h3>
                        <div className="flex flex-wrap items-center p-3 bg-gray-600 rounded lg:ml-8 justify-center" style={{backgroundColor:"rgba(0,0,0,0.4)"}}>
                        <NodejsOriginal className="m-3 mx-4" size={35} />
                        <DockerOriginalWordmark color='white' className="m-3 mx-4"  size={35} />
                        <FlaskOriginal className='m-3 mx-4 bg-white rounded p-1' size={35} />
                        <AmazonwebservicesOriginalWordmark className='m-3 bg-white rounded p-1 mx-4' size={35} />
                        <FirebaseOriginal className='m-3 mx-4' size={35} />
                        </div>
                </div>
                </>
                ):selectedModal === 'mobile' ?(
                    <>
                     <h1 className="mb-5 text-white opacity-80 font-bold ">Mobile Technologies</h1>
                    <div className="flex flex-col items-center p-5 bg-gray-900 rounded lg:flex-row lg:justify-between animated-bg">
                    <h1 className="text-white text-md opacity-85 self-center font-bold lg:self-left">Frontend: </h1>
                        <div className="flex flex-wrap justify-center items-center p-5 bg-gray-900 rounded" style={{backgroundColor:"rgba(0,0,0,0.4)"}}>
                        <JavascriptOriginal className='m-3 mx-4' size={35} />
                        <TypescriptOriginal className='m-3 mx-4' size={35} />
                        <ReactOriginalWordmark className='m-3 mx-4' size={35} />
                        </div>
                        <h3 className="text-white lg:ml-0 lg:mt-0 lg:mb-0 my-5">•</h3>
                        <div className="flex flex-wrap items-center p-3 bg-gray-600 rounded lg:ml-8 justify-center" style={{backgroundColor:"rgba(0,0,0,0.4)"}}>
                            <ReactOriginal className="m-3 mx-4" size={35} />
                            <ExpressOriginal color='white' className='m-3 bg-white rounded p-1 mx-4' size={35} />
                        </div>
                </div>

                <div className="flex flex-col mt-10 items-center p-5 bg-gray-900 rounded lg:flex-row lg:justify-between animated-bg">
                    <h1 className="text-white text-md opacity-85 self-center font-bold lg:self-left">Backend: </h1>
                        <div className="flex flex-wrap justify-center items-center p-5 bg-gray-900 rounded" style={{backgroundColor:"rgba(0,0,0,0.4)"}}>
                        <GoOriginal className='m-3 mx-4' size={35} />
                        <JavascriptOriginal className='m-3 mx-4' size={35} />
                        <TypescriptOriginal className='m-3 mx-4' size={35} />
                        <PythonOriginal className='m-3 mx-4' size={35} />
                        </div>
                        <h3 className="text-white lg:ml-0 lg:mt-0 lg:mb-0 my-5">•</h3>
                        <div className="flex flex-wrap items-center p-3 bg-gray-600 rounded lg:ml-8 justify-center" style={{backgroundColor:"rgba(0,0,0,0.4)"}}>
                            <NodejsOriginal className="m-3 mx-4" size={35} />
                            <DockerOriginalWordmark color='white' className="m-3 mx-4"  size={35} />
                            <FlaskOriginal className='m-3 mx-4 bg-white rounded p-1' size={35} />
                            <AmazonwebservicesOriginalWordmark className='m-3 bg-white rounded p-1 mx-4' size={35} />
                            <FirebaseOriginal className='m-3 mx-4' size={35} />
                        </div>
                </div>
                </>
                ):selectedModal === 'ml' ?(
                    <>
                    <h1 className="mb-5 text-white opacity-80 font-bold ">Machine Learning Technologies</h1>
                    <div className="flex flex-col mt-10 items-center p-5 bg-gray-900 rounded lg:flex-row lg:justify-between animated-bg">
                    <h1 className="text-white text-md opacity-85 self-center font-bold lg:self-left">Tools: </h1>
                    <div className="flex flex-row items-center p-5 rounded" style={{backgroundColor:"rgba(0,0,0,0.4)"}}>
                        <JavascriptOriginal className="mr-8 mt-4 lg:mt-0" size={35} />
                        <PythonOriginal className="mr-8 mt-4 lg:mt-0" size={35} />
                      </div>
                        <h3 className="text-white lg:ml-0 lg:mt-0 lg:mb-0 my-5">•</h3>
                        <div className="flex flex-wrap items-center p-3 rounded lg:ml-8 justify-center" style={{backgroundColor:"rgba(0,0,0,0.4)"}}>
                          <TensorflowOriginal className="m-3 mx-4" size={35} />
                          <NumpyOriginal color='white' className='m-3 mx-4' size={35} />
                          <PandasOriginal className='m-3 mx-4' size={35} />
                          <OpencvOriginal className='m-3 mx-4' size={35} />
                        </div>
                </div>
                </>
                ):null}
            </div>
        </div>
        }
        </>
    )
}

const WidgetSection = ({
}) => {
    const [selectedModal, setSelectedModal] = React.useState(null);
    return(    
    <section id="why-us">
        <div className="why-us-divider">
            <hr />
            <h6 className="text-xs ">Why Choose me ?</h6>
            <hr style={{borderImage:"linear-gradient(to left, rgba(0, 0, 0, 0.3), rgba(83, 83, 83)) 1"}} />
        </div>
        <h3 className="why-us-title text-center text-3xl max-w-[300px] lg:max-w-[500px] lg:text-5xl"> <span className="gradient-span-purple">Modern</span> & <span className="gradient-span-green">Powerful</span> skillsett</h3>
        <h5 className="why-us-desc">Each member of our team is highly skilled and experienced in their domain, which makes our service quick, powerful and most up to date to the current market</h5>

        <div className="why-bubble-container">
            <div className="why-us-cont_t-1">
                <div className="why-bubble-t">
                    <div className="bubble-title">
                        <h4>My <span style={{color:"white",fontWeight:700}}>tech-stack</span> solutions</h4>    
                    </div>
                    <div className="bubble-badge-green">
                        <h3>+ University of amsterdam</h3>
                    </div>
                </div>
                
                <div className="why-bubble-b bg-widget" style={{position:"relative"}}>
                    <h2 className="mb-3 max-w-[300px] xxl:max-w-[1000px] ">Fullstack App Development</h2>
                    <Link to={"/fullstack-projects"} className="bubble-badge-green mr-[130px] xxl:mr-0 " style={{marginBottom:0}}>
                        <h3>See More</h3>
                    </Link>
                    <div onClick={() => setSelectedModal("mobile")} className="cursor-pointer right-0 bottom-0 hover:scale-99 hover:-right-0.5 hover:-bottom-0.5 active:scale-90 active:-right-3 transition-all" style={{position:"absolute",width:150,height:30,background:"rgba(0,0,0,0.8)",display:"flex",flexDirection:"column",borderTopLeftRadius:20,justifyContent:"center"}}>
                       <h6 className="text-xs ml-4">Known Technologies</h6>
                    </div>
                    <div className="left-[200px] xxl:top-[120px] rounded-bl-[20px] xxl:rounded-bl-[00px] rounded-tr-[0px] xxl:rounded-tr-[20px] top-0 bottom-0 xxl:left-0 border-b xxl:border-0" style={{position:"absolute",width:100,height:30,background:"rgba(0,0,0,0.8)",display:"flex",flexDirection:"column",justifyContent:"center"}}>
                       <h6 className="text-xs ml-4">+2 Projects</h6>
                    </div>
                </div>
            </div>

            <div className="why-us-cont_t-2">
                <div className="why-bubble-t relative bg-widget">
                    <h2 className="mb-3">Pentesting CTF's</h2>
                    <Link to={"/fullstack-projects"} className="bubble-badge-green" style={{marginBottom:0}}>
                        <h3>See More</h3>
                    </Link>
                </div>
                <div className="why-bubble-b relative bg-gradient-primary-bigger">
                <h2 className="mb-3 text-center">Web Development</h2>
                    <Link to={"/fullstack-projects"} className="bubble-badge-green" style={{marginBottom:0}}>
                        <h3>See More</h3>
                    </Link>
                    <div onClick={() => setSelectedModal("web")} className="cursor-pointer right-0 bottom-0 hover:scale-99 hover:-right-0.5 hover:-bottom-0.5 active:scale-90 active:-right-3 transition-all" style={{position:"absolute",width:150,height:30,background:"rgba(0,0,0,0.8)",display:"flex",flexDirection:"column",borderTopLeftRadius:20,justifyContent:"center"}}>
                       <h6 className="text-xs ml-4">Known Technologies</h6>
                    </div>
                    <div className="left-[100px] xxl:top-[370px] rounded-bl-[20px] xxl:rounded-bl-[00px] rounded-tr-[0px] xxl:rounded-tr-[20px] top-0 bottom-0 xxl:left-0 border-b xxl:border-0" style={{position:"absolute",width:100,height:30,background:"rgba(0,0,0,0.8)",display:"flex",flexDirection:"column",justifyContent:"center"}}>
                       <h6 className="text-xs ml-4">+4 Projects</h6>
                    </div>
                </div>
            </div>

            <div className="why-us-cont_t-3">
            
                <div className="why-bubble-t relative bg-gradient-primary-bigger">
                <h2 className="mb-3 text-center">Machine Learning</h2>
                    <Link to={"/fullstack-projects"} className="bubble-badge-green" style={{marginBottom:0}}>
                        <h3>See More</h3>
                    </Link>
                    <div onClick={() => setSelectedModal("ml")} className="cursor-pointer right-0 bottom-0 hover:scale-99 hover:-right-0.5 hover:-bottom-0.5 active:scale-90 active:-right-3 transition-all" style={{position:"absolute",width:150,height:30,background:"rgba(0,0,0,0.8)",display:"flex",flexDirection:"column",borderTopLeftRadius:20,justifyContent:"center"}}>
                       <h6 className="text-xs ml-4">Known Technologies</h6>
                    </div>
                    <div className="left-[100px] xxl:top-[370px] rounded-bl-[20px] xxl:rounded-bl-[00px] rounded-tr-[0px] xxl:rounded-tr-[20px] top-0 bottom-0 xxl:left-0 border-b xxl:border-0" style={{position:"absolute",width:100,height:30,background:"rgba(0,0,0,0.8)",display:"flex",flexDirection:"column",justifyContent:"center"}}>
                       <h6 className="text-xs ml-4">+3 Projects</h6>
                    </div>
                </div>
                
                <div className="why-bubble-b bg-widget relative">
                <h2 className="mb-3">Learning Journey</h2>
                    <Link to={"/fullstack-projects"} className="bubble-badge-green" style={{marginBottom:0}}>
                        <h3>+ 10 years</h3>
                    </Link>
     
                </div>
            </div>
        </div>

        <TechModal 
            selectedModal={selectedModal}
            visible={selectedModal !== null}
            setSelectedModal={setSelectedModal}
        />


        <Swiper
            modules={[Pagination, EffectCoverflow, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            grabCursor={true}   
            centeredSlides={true}
            effect={"coverflow"}
            scrollbar={{ draggable: true }}
            autoplay={{delay: 3500}}
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
              }}
            loop={true}
            coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 3,
                slideShadows: true
            }}
            pagination={{clickable:true}}
            className="why-bubble-container pager pb-20"
        >
            <SwiperSlide className="why-us-cont_t-1 self-center flex direction-col">
                {/*Fullstack Web Stack*/}
                <div className="why-bubble-t">
                    <div className="bubble-title" style={{height:120}}>
                        <h4>My <span style={{color:"white",fontWeight:700}}>tech-stack</span> solutions</h4>    
                    </div>
                    <div className="bubble-badge-green">
                        <h3>+ University of amsterdam</h3>
                    </div>
                </div>
                {/*Web Tools Stack*/}
                <div className="why-bubble-b bg-widget" style={{position:"relative"}}>
                    <h2 className="mb-3 max-w-[300px] xxl:max-w-[1000px] ">Fullstack App Development</h2>
                    <Link to={"/fullstack-projects"} className="bubble-badge-green mr-[130px] xxl:mr-0 " style={{marginBottom:0}}>
                        <h3>See More</h3>
                    </Link>
                    <div onClick={() => setSelectedModal("mobile")} className="cursor-pointer right-0 bottom-0 hover:scale-99 hover:-right-0.5 hover:-bottom-0.5 active:scale-90 active:-right-3 transition-all" style={{position:"absolute",width:150,height:30,background:"rgba(0,0,0,0.8)",display:"flex",flexDirection:"column",borderTopLeftRadius:20,justifyContent:"center"}}>
                       <h6 className="text-xs ml-4">Known Technologies</h6>
                    </div>
                    <div className="left-[200px] xxl:top-[120px] rounded-bl-[20px] xxl:rounded-bl-[00px] rounded-tr-[0px] xxl:rounded-tr-[20px] top-0 bottom-0 xxl:left-0 border-b xxl:border-0" style={{position:"absolute",width:100,height:30,background:"rgba(0,0,0,0.8)",display:"flex",flexDirection:"column",justifyContent:"center"}}>
                       <h6 className="text-xs ml-4">+2 Projects</h6>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide className="why-us-cont_t-2 self-center flex direction-col">
                <div className="why-bubble-t relative bg-widget flex flex-col justify-center" style={{width:200, height:190, alignItems:"center"}}>
                    <h2 className="mb-3">s</h2>
                    <Link to={"/fullstack-projects"} className="bubble-badge-green ml-[20px]" style={{marginBottom:0}}>
                        <h3>+ University</h3>
                    </Link>
                </div>
                <div className="why-bubble-b relative bg-gradient-primary-bigger">
                <h2 className="mb-3 text-center">Web Development</h2>
                    <Link to={"/fullstack-projects"} className="bubble-badge-green ml-[25px]" style={{marginBottom:0}}>
                        <h3>See More</h3>
                    </Link>
                    <div onClick={() => setSelectedModal("web")} className="cursor-pointer right-0 bottom-0 hover:scale-99 hover:-right-0.5 hover:-bottom-0.5 active:scale-90 active:-right-3 transition-all" style={{position:"absolute",width:150,height:30,background:"rgba(0,0,0,0.8)",display:"flex",flexDirection:"column",borderTopLeftRadius:20,justifyContent:"center"}}>
                       <h6 className="text-xs ml-4">Known Technologies</h6>
                    </div>
                    <div className="left-[100px] xxl:top-[370px] rounded-bl-[20px] xxl:rounded-bl-[00px] rounded-tr-[0px] xxl:rounded-tr-[20px] top-0 bottom-0 xxl:left-0 border-b xxl:border-0" style={{position:"absolute",width:100,height:30,background:"rgba(0,0,0,0.8)",display:"flex",flexDirection:"column",justifyContent:"center"}}>
                       <h6 className="text-xs ml-4">+4 Projects</h6>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide className="why-us-cont_t-3 self-center flex direction-col">
                {/*ML Stack*/}
                <div className="why-bubble-t relative bg-gradient-primary-bigger">
                <h2 className="mb-3 text-center">Machine Learning</h2>
                    <Link to={"/fullstack-projects"} className="bubble-badge-green ml-[25px]" style={{marginBottom:0}}>
                        <h3>See More</h3>
                    </Link>
                    <div onClick={() => setSelectedModal("ml")} className="cursor-pointer right-0 bottom-0 hover:scale-99 hover:-right-0.5 hover:-bottom-0.5 active:scale-90 active:-right-3 transition-all" style={{position:"absolute",width:150,height:30,background:"rgba(0,0,0,0.8)",display:"flex",flexDirection:"column",borderTopLeftRadius:20,justifyContent:"center"}}>
                       <h6 className="text-xs ml-4">Known Technologies</h6>
                    </div>
                    <div className="left-[100px] xxl:top-[370px] rounded-bl-[20px] xxl:rounded-bl-[00px] rounded-tr-[0px] xxl:rounded-tr-[20px] top-0 bottom-0 xxl:left-0 border-b xxl:border-0" style={{position:"absolute",width:100,height:30,background:"rgba(0,0,0,0.8)",display:"flex",flexDirection:"column",justifyContent:"center"}}>
                       <h6 className="text-xs ml-4">+3 Projects</h6>
                    </div>
                </div>
                
                <div className="why-bubble-b bg-widget relative" style={{width:200, height:190, alignItems:"center"}}>
                <h2 className="mb-3">s</h2>
                    <Link to={"/fullstack-projects"} className="bubble-badge-green ml-[19px]" style={{marginBottom:0}}>
                        <h3>+ University</h3>
                    </Link>
     
                </div>
            </SwiperSlide>
        </Swiper>
    

</section>)
};

const MyPortfolio = ({
    slider
}) => {
    return(
        <section id="services">
            <div className="why-us-divider">
                <hr />
                <h6 className="text-xs ">Why Choose me ?</h6>
                <hr style={{borderImage:"linear-gradient(to left, rgba(0, 0, 0, 0.3), rgba(83, 83, 83)) 1"}} />
            </div>
            <h3 className="why-us-title"> My <span className="gradient-span-purple">Projects</span> </h3>
            <h5 className="why-us-desc">Each member of our team is highly skilled and experienced in their domain, which makes our service quick, powerful and most up to date to the current market</h5>
            
        
    
     
            <div className="services-container">
                <div id="portfolio">
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
                                <SwiperSlide key={data.title} style={{ backgroundImage: `url(${data.url})` }} className="myswiper-slider">
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
    
            <div className="service-bottom-row">
                <div className="consultation-box">
                    <h5>+ 2 years Student Association</h5>
                    <h2>VU - <span>Cyber Security</span> Association</h2>
                    <h3>In order to make an appointment you will need to answer a few crutial questions designed for understanding your needs ...</h3>
                    <div className="consultation-btn">
                        <h4>Get Started</h4>
                    </div>
                </div>
    
                <div className="consultation-box">
                    <h5>+6 month Internship</h5>
                    <h2>Getcon - <span>IT networks</span> & and security</h2>
                    <h3>In order to make an appointment you will need to answer a few crutial questions designed for understanding your needs ...</h3>
                    <div className="consultation-btn">
                        <h4>Get Started</h4>
                    </div>
                </div>
            </div>
    
        </section>
    )
};

const Bubbles = ({
    handleSeeMore
}) => {
    return(
        
        <div className="flex flex-col w-[100%] px-5 scrollbar scrollbar-thumb-slate-700 scrollbar-track-slate-300 overflow-x-scroll">
        <div className="bubble-rows">
            {/* COL 1 */}
            <div className="bubbleCol">
                <div className="bubble-type1">
                    <div className="cert-logo">
                        <img src={metaLogo} alt="" />
                    </div>
                    <h3>NATIVE APP DEVELOPMENT</h3>
                    <div>
                        <BasicModal input={metaCertificate}  />
                    </div>
                </div>

                <div className="bubble-type2">
                <h3 className="font-black text-lg">Live Coding</h3>
                    <h5 style={{opacity:0.7,fontWeight:400,marginTop:5}}>Hacking / Data Science<br /> <span style={{fontWeight:800}}>Programming </span><br/></h5>
                    <div className="see-more_btn" onClick={()=> handleSeeMore("Youtube")}>
                        <h5>Videos</h5>
                    </div>
                </div>

            </div>
            {/* COL 2 */}
            <div className="bubbleCol">
                <div className="bubble-type2">
                <h3 className="font-black text-lg">Github</h3>
                    <h5 style={{opacity:0.7,fontWeight:400,marginTop:5}}>All of my personal projects<br /> <span style={{fontWeight:800}}>Passion</span><br/></h5>
                    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginTop:20}}>
                        <SocialIcon url="https://github.com/orbant12" />
                    </div>
                    
                </div>

                <div className="bubble-type1">
                    <div className="cert-logo">
                        <img src={udemyLogo} alt="" />
                    </div>
                    <h3>IOS APP DEVELOPMENT</h3>
                    <div>
                        <BasicModal input={UdemyIosCertificate} />
                    </div>
                </div>

            </div>
            {/* COL 3 */}
            <div className="bubbleCol">
            <div className="bubble-type1">
                    <div className="cert-logo">
                        <img src={ibmLogo} alt="" />
                    </div>

                    <h3>Machine Leaning</h3>
                    <div>
                        <BasicModal />
                    </div>
                </div>

                <div className="bubble-type2">
                    <h3 className="font-black text-lg">Socials</h3>
                        <h5 style={{opacity:0.7,fontWeight:400,marginTop:5}}>Feel free to check me out<br /> <span style={{fontWeight:800}}>Budapest, Hungary</span><br/></h5>
                        <div className="social_accs cursor-pointer">
                            <SocialIcon className="hover:scale-90 " url="https://twitter.com/TamasOrban12" />
                            <SocialIcon className="hover:scale-90 " url="https://instagram.com/orbant12" />
                            <SocialIcon className="hover:scale-90 " url="https://www.linkedin.com/in/tamas-orban-30921524b/" />                   
                        </div>
                </div>

            </div>
            {/* COL 4 */}
            <div className="bubbleCol">
                <div className="bubble-type1">
                    <div className="cert-logo">
                        <img src={metaLogo} alt="" />
                    </div>

                    <h3>Backend Development</h3>
                    <div>
                        <BasicModal />
                    </div>
                </div>

                <div className="bubble-type2">
                    <h3 className="font-black text-lg">University</h3>
                    <h5 style={{opacity:0.7,fontWeight:400,marginTop:5}}>Vrije University Amsterdam <br /> <span style={{fontWeight:800}}>Computer Science</span><br/></h5>
                    <div className="see-more_btn text-sm">
                        <h5>See More</h5>
                    </div>
                </div>

            </div>
            {/* COL 5 */}
            <div className="bubbleCol">
            <div className="bubble-type2">
            <h3 className="text-lg font-black">Intern Experience</h3>
                    <h5 style={{opacity:0.7,fontWeight:400,marginTop:5, fontSize:12}}>Company: <a  className="text-sm font-black" href="https://getcon.hu">Getcon</a><br />Duration: 6 months</h5>
                    <div className="see-more_btn text-sm">
                        <h5>See More</h5>
                    </div>
            </div>

            <div className="bubble-type1">
                    <div className="cert-logo">
                        <img src={udemyLogo} alt="" />
                    </div>
                    <h3>Fullstack Web Development</h3>
                    <div>
                        <BasicModal input={metaCertificate} />
                    </div>
            </div>

            </div>
        </div>
        </div>
    
    )
}

const AboutMe = ({
    handlePortfolioNavigation
}) => {
    return(
        <div className="aboutme-section">
        <h2 className="font-black text-lg">About Me</h2>
        <h5 className="text-sm text-center" style={{padding:"8px 20px",borderRadius:30,opacity:0.7,boxShadow: "inset 1px 1px 5px 1px black",marginTop:5,fontWeight:550}}>Let me show you with another perspective</h5>
        <div onClick={() => handlePortfolioNavigation("Vr")} className="flex flex-col w-[100%] items-center justify-center h-[100%]" style={{cursor:"pointer"}}> 
            <img src={vrImage} className="w-[300px] h-[150px]" alt="" />
        </div>
    </div>
    )
};

const BottomButton = ({
    openResume,
    setIsAiChatOpen,
    isAiChatOpen,
    downloadResume
}) => {
    return(
        <>
        <div onClick={() => setIsAiChatOpen(!isAiChatOpen)} className="ai-chat-support">
        <QuestionMarkIcon />
    </div>

    {isAiChatOpen &&
    <div className="ai-chat">
        <div className="cancel-icon" onClick={() => setIsAiChatOpen(!isAiChatOpen)}>
            <CancelIcon />
        </div>
        <div className="ai-chat-title">
            <h3>Quick Information</h3>
        </div>
        <div className="ai-chat-content">
            <div className="ai-chat-row">
                <h2>Email:</h2>
                <h3>orbant1@gmail.com</h3>
            </div>
            <div className="ai-chat-row">
                <h2>Location:</h2>
                <h3 style={{color:"black",opacity:1}}>Netherlands, Amsterdam</h3>
            </div>

            <div className="social_accs cursor-pointer">
                <SocialIcon className="hover:scale-90 " url="https://github.com/orbant12" />
                <SocialIcon className="hover:scale-90 " url="https://instagram.com/orbant12" />
                <SocialIcon className="hover:scale-90 " url="https://www.linkedin.com/in/tamas-orban-30921524b/" />                   
            </div>

            <div className="ai-chat-row">
                <h2>Resume</h2>
                <div style={{display:"flex",flexDirection:"row",width:"100%",justifyContent:"space-evenly",alignItems:"center",marginTop:10}}>

                <h3 onClick={openResume} style={{padding:"5px 10px",border:"1px solid black",borderRadius:10,opacity:0.6}}>Quick Look</h3>
                
                <hr style={{height:20}} />
                
                <h3 onClick={downloadResume} style={{padding:"5px 10px",border:"1px solid black",borderRadius:10,background:"white"}} >Download</h3>

                </div>
                
            </div>
        </div>
    </div>}
    </>
    )
}