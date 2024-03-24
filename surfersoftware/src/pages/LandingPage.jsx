//CSS
import "../CSS/navbar.css";
import '../../node_modules/swiper/swiper-bundle.min.css'
import '../../node_modules/swiper/swiper.min.css'

//MOTION FOR ANIMATED ELEMENTS
import { motion } from "framer-motion";

//SPLINE 3D
import Spline from '@splinetool/react-spline';

//REACT
import React from "react";

//IMAGE
import downArrow from "../assets/down-arrow.png";
import mePicture from "../assets/mePic.png"

//COMPONENTS
import ServiceBox from "../components/serviceBox";
import ServiceBoxCyber from "../components/serviceBoxCyber";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, EffectCoverflow, Autoplay } from 'swiper/modules'
import ChatMessage from "../components/ClippifyComponents/chatMessage";

import CancelIcon from '@mui/icons-material/Cancel';
import ServiceBoxMobile from "../components/serviceBoxMobile";
import ServiceBoxAi from "../components/serviceBoxAi";
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import BasicModal from "../components/CertificateModal/certifitaceModal";
import metaLogo from "../assets/meta-logo.jpeg";
import metaCertificate from '../assets/META.jpg'
import udemyLogo from '../assets/udemyIMAGE.png'
import UdemyIosCertificate from '../assets/UdemyIosCert.jpeg'
import ibmLogo from '../assets/ibm.svg'
import InstagramIcon from '@mui/icons-material/Instagram';
import betterByteLogo from '../assets/BetterByteLogo.png'
import ClippifyLogo from '../assets/Clippify-log.svg'
import LupodyLogo from '../assets/Lupody_Black.png';
import LupodyScreen from '../assets/LupodyScreen2.png';
import ClippifyScreen from '../assets/ClippifyScreen.png';
import ClippifyMobileScreen from '../assets/ClippifyMobileScreen.png';
import LupodyMobileScreen from '../assets/LupodyMobileScreen.png';
import { Link } from "react-router-dom";
import MyResume from '../assets/OT_Resume.pdf'
const LandingPage = () => {

//<**************VARIABLES**********************>

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

const slider = [
    {
        title: "Clippify",
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
    
        {
        title: "Clippify Mobile",
        description: "Cippify Mobile is a web app for CLIPPING -> STORING, SAVING, ANALISING videos. Suited with AI Speech To Text and AI chatbot.",
        url: ClippifyMobileScreen,
        logo: ClippifyLogo
        },
]

//IS SELECTED | WEB | MOBILE | CROSS
const [isSelected, setIsSelected] = React.useState("cross");

const [isAiChatOpen, setIsAiChatOpen]= React.useState(false);

const [assistantInput , setAssistantInput] = React.useState("");

const [chatLog, setChatLog] = React.useState([]);

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
    window.location.href = '/portfolio/'+title;
}

//HANDLE VR PRESSED
const handleVrPressed = () => {
    window.location.href = '/about-me';
}

//HANDLE ASSISTANT INPUT CHANGE
const handleAssistantInputChange = (e) => {
    setAssistantInput(e.target.value);
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
    // Replace 'your_resume_file_url' with the actual URL of the resume file
    const url = MyResume;
    window.open(url, '_blank');
}





return (
<div className="landing-page">
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
                    <span className="hero-span">Fullstack Developer</span> and <span className="hero-span">IT Enthusiast</span> in <span className="hero-span">Several Subject</span>. I'm responsible to code your ideas into reality.
                    </motion.h1>
                    <motion.div variants={textVariants} className="buttons">
                        <motion.button variants={textVariants}>
                            <a onClick={openResume} href="">See my career resume</a>
                        </motion.button>
                        <motion.button variants={textVariants}><a href="/contact">Contact Me</a></motion.button>
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

            <div className="spline3D">
                <img src={betterByteLogo} className="profile-image" alt="" />
            </div>
        </div>
        <div className="cube-bg">
            <Spline scene="https://prod.spline.design/8TZXGNPj0BahNLrA/scene.splinecode" />
        </div>
    </div>

    <div style={{borderTop:"1px solid black"}}>
        <div id="services">
            <div className="services-pick">
                <h3 onClick={() => setIsSelected("web")} className={isSelected === "web" ? "selected" : "select"}>Fullstack</h3>
                <h3 onClick={() => setIsSelected("cross")} className={isSelected === "cross" ? "selected" : "select"} >Machine Learning</h3>
                <h3  onClick={() => setIsSelected("cyber")} className={isSelected === "cyber" ? "selected" : "select"}>Cyber Security</h3>
                <h3 onClick={() => setIsSelected("mobile")} className={isSelected === "mobile" ? "selected" : "select"}>Mobile</h3>
            </div>

            <div className="service-show">
                {/* <ServiceBox props={isSelected === "web" ? webData : isSelected === "mobile" ? mobileData : isSelected === "cross" ? crossData : null} />  */}
                <div className="service-grid-box">
                    <h2 className="service-help-title">I CAN HELP YOU</h2>
                    {isSelected === "web" ?  <ServiceBox /> : isSelected === "mobile" ? <ServiceBoxMobile /> : isSelected === "cross" ? <ServiceBoxAi /> : isSelected === "cyber" ? <ServiceBoxCyber/> : null}
                </div>
                {isSelected === "web" ?   
                <div className="specific-project-show" >
                    
                    <div onClick={() => handlePortfolioNavigation("Lupody")} className="project-show">
                        <h3>Lupody</h3>
                        <div>
                            <h6>Social Media Platform</h6>
                            <h6>Ai Powered</h6>
                            <h6>Firebase Backend</h6>
                        </div>
                        
                    </div>

                    <div onClick={() => handlePortfolioNavigation("Clippify")} className="project-show">
                        <h3>Clippify</h3>
                        <div>
                            <h6>Ai Clip Analysing</h6>
                            <h6>Clip Saving and Storing</h6>
                            <h6>Firebase Backend</h6>
                        </div>
                        
                    </div>
                </div>  : 
                isSelected === "mobile" ?  
                <div className="specific-project-show" >
                    
                    <div onClick={() => handlePortfolioNavigation("Lupody Mobile")} className="project-show">
                        <h3>Lupody Mobile</h3>
                        <div>
                            <h6>Social Media Platform</h6>
                            <h6>Ai Powered</h6>
                            <h6>Firebase Backend</h6>
                        </div>
                        
                    </div>

                    <div onClick={() => handlePortfolioNavigation("Clippify Mobile")} className="project-show">
                        <h3>Clippify Mobile</h3>
                        <div>
                            <h6>Ai Clip Analysing</h6>
                            <h6>Clip Saving and Storing</h6>
                            <h6>Firebase Backend</h6>
                        </div>
                        
                    </div>
                </div> 
                : isSelected === "cross" ? 
                <div className="specific-project-show" >
                    
                <div onClick={() => handlePortfolioNavigation("Clippify")} className="project-show">
                    <h3>Speech To Text</h3>
                    <div>
                        <h6>Self-Made with Tensorflow</h6>
                        <h6>Recurrent Neural Network</h6>
                        <h6>CTC loss & Word Error Rate</h6>
                        <h6>Embedded into Web Application</h6>
                    </div>
                    
                </div>

                <div onClick={() => handlePortfolioNavigation("Clippify")} className="project-show">
                    <h3>Object Detection</h3>
                    <div>
                        <h6>Self-Made with Tensorflow</h6>
                        <h6>OpenCV</h6>
                        <h6>Convolutional Neural Network</h6>
                        <h6>Process for Detecting anything</h6>
                        <h6>Embedded into Web Application</h6>
                    </div>
                    
                </div>

                <div onClick={() => handlePortfolioNavigation("Clippify")} className="project-show">
                    <h3>Kaggle Solutions</h3>
                    <div>
                        <h6>Free Time Activity</h6>
                        <h6>ML Algorythms for Competitions</h6>
                    </div>
                    
                </div>
                </div>  
                : isSelected === "cyber" ? 
                <div className="specific-project-show" >
                    <div onClick={() => handlePortfolioNavigation("Clippify")} className="project-show">
                        <h3>Capture The Flag</h3>
                        <div>
                            <h6>Free Time Activity</h6>
                            <h6>Hack The Box</h6>
                            <h6>Try Hack Me</h6>
                            <h6>Kali Linux</h6>
                        </div>
                    </div>

                    <div onClick={() => handlePortfolioNavigation("Clippify")} className="project-show">
                        <h3>Pentesting My Web Apps</h3>
                        <div>
                            <h6>Free Time Activity</h6>
                            <h6>Hack The Box</h6>
                            <h6>Try Hack Me</h6>
                            <h6>Kali Linux</h6>
                        </div>
                    </div>

                    <div onClick={() => handlePortfolioNavigation("Clippify")} className="project-show">
                        <h3>Pentesting My Mobile Apps</h3>
                        <div>
                            <h6>Free Time Activity</h6>
                            <h6>Hack The Box</h6>
                            <h6>Try Hack Me</h6>
                            <h6>Kali Linux</h6>
                        </div>
                    </div>

                </div> :
                 null}
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
            <hr style={{borderStyle:"groove"}} />
            <div className="aboutme-section">
                <h2>About Me</h2>
                <h5>Let me show you with another perspective</h5>
                <div onClick={handleVrPressed} style={{cursor:"pointer"}}> 
                    <div className="spline-visionPro" > 
                        <Spline scene="https://prod.spline.design/KX8f-KHZwA3H06Gs/scene.splinecode" />
                    </div>
                </div>
            </div>

         

            <div className="review-bubbles">
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
                            <h3>Anonymus</h3>
                            <h5 style={{opacity:0.7,fontWeight:400,marginTop:5}}>"Working with Tamas was a delight! Their expertise, attention to detail, and commitment to deadlines exceeded my expectations. The app they developed met my vision. I highly recommend !!!"</h5>
                        </div>

                    </div>
                    {/* COL 2 */}
                    <div className="bubbleCol">
                        <div className="bubble-type2">
                        <h3>Anonymus</h3>
                            <h5 style={{opacity:0.7,fontWeight:400,marginTop:5,fontSize:12}}>"The quick communication on Discord made a world of difference during our app development. It played a huge role in making the process smooth and enjoyable. Respect to your team for fostering such effective communication. It truly sets your service apart!"</h5>
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
                            <h3>Anonymus</h3>
                            <h5 style={{opacity:0.7,fontWeight:400,marginTop:5,fontSize:14}}>"Your ability to effortlessly understand and implement my ideas, even through handwritings and images, made the collaboration enjoyable."</h5>
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
                            <h3>University</h3>
                            <h5 style={{opacity:0.7,fontWeight:400,marginTop:5}}>Vrije University Amsterdam <br /> <span style={{fontWeight:800}}>Computer Science</span><br/></h5>
                        </div>

                    </div>
                    {/* COL 5 */}
                    <div className="bubbleCol">
                    <div className="bubble-type2">
                    <h3>Intern Experience</h3>
                            <h5 style={{opacity:0.7,fontWeight:400,marginTop:5}}>Company: <a href="https://getcon.hu">Getcon</a><br />Duration: 6 months</h5>
                            <div style={{marginTop:20,height:80,display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
                                <h6>• Network Security Standby Management</h6>
                                <h6>• Setting up & deploying routers for Hunagrian Schools</h6>
                                <h6>• Collecting Data from Huge Network Pipelines</h6>
                                <h6>• Cleaning and drawing conclusions/predictions from the collected data with ML models</h6>
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

            <div onClick={() => setIsAiChatOpen(!isAiChatOpen)} className="ai-chat-support">
            <QuestionMarkIcon />
            </div>

            {isAiChatOpen ? 
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
                        <h3>betterbyte.business@gmail.com</h3>
                    </div>
                    <div className="ai-chat-row">
                        <h2>Resume:</h2>
                        <h3></h3>
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
              
            </div> : null}

            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="footer-col">
                            <h4>Orban Tamas</h4>
                            <ul>
                                <li><a href="/about-me">about Me</a></li>
                                <li><a href="/services">my services</a></li>
                                
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Contact Me</h4>
                            <ul>
                                <li><a href="#">Discrod</a></li>
                                <li><a href="#">LinkedIn</a></li>
                                <li><a href="#">Instagram</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Hire me</h4>
                            <ul>
                                <li><a href="#">Upwork</a></li>
                                <li><a href="#">Email</a></li>

                            </ul>
                        </div>
                
                    </div>
                </div>
            </footer>

        </div>
    </div>
</div>
)};

export default LandingPage;