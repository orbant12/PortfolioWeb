//CSS
import "../CSS/navbar.css";
import "../CSS/mian.css"
//REACT
import React from "react";

//IMAGE
import downArrow from "../assets/down-arrow.png";
import mePicture from "../assets/mePic.png"
import GetconLogo from "../assets/gtcon.png"
import '../../node_modules/swiper/swiper-bundle.css';
//ICONS
import { SocialIcon } from "react-social-icons";

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
import { AppleOriginal, DiscordjsOriginal, DiscordjsOriginalWordmark, FacebookOriginal, FigmaOriginal, GoogleOriginal, OpenalOriginal, ReactOriginal } from 'devicons-react';

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
            <div className="divider-row">
                <h4 style={{fontWeight:550,padding:"8px 20px",borderRadius:10,opacity:0.8,boxShadow: "inset -3px -3px 5px 1px black"}} >Worked with ...</h4>
                <img src={GetconLogo} onClick={() => handleSeeMore("Getcon")}/>
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
                                <div className="social_accs">
                                    <SocialIcon url="https://twitter.com/TamasOrban12" />
                                    <SocialIcon url="https://instagram.com/orbant12" />
                                    <SocialIcon url="https://www.linkedin.com/in/tamas-orban-30921524b/" />                   
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

            <div className="aboutme-section">
                <h2 className="font-black text-lg">About Me</h2>
                <h5 style={{padding:"8px 20px",borderRadius:30,opacity:0.7,boxShadow: "inset 1px 1px 5px 1px black",marginTop:5,fontWeight:550}}>Let me show you with another perspective</h5>
                <div onClick={() => handlePortfolioNavigation("Vr")} style={{cursor:"pointer"}}> 
                    <div className="spline-visionPro" > 
                        
                    </div>
                </div>
            </div>

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
            </div>}
        </div>
    </div>
</div>
)};

export default LandingPage;


const PortfolioItem = ({ title, subtitle1, subtitle2, subtitle3, onClick }) => {
    return (
      <div
        onClick={onClick}
        className="bg-white shadow-lg rounded-lg cursor-pointer hover:shadow-xl hover:border transition duration-300 ease-in-out w-[100%]"
      >
        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
          <div className="text-gray-600">
            <h6 className="text-sm mb-1">{subtitle1}</h6>
            <h6 className="text-sm mb-1">{subtitle2}</h6>
            <h6 className="text-sm mb-1">{subtitle3}</h6>
          </div>
        </div>
      </div>
    );
  };



//   const OldHero = () => {
//     return(
//         <div className="row1">
//         <div className="hero">
//             <div className="wrapper">
//                 <motion.div
//                     className="textContainer"
//                     variants={textVariants}
//                     initial="initial"
//                     animate="animate"
//                 >
//                     <motion.h2 variants={textVariants}>Hi, I'm <span>Tamas. 👋</span></motion.h2>
//                     <motion.h1 variants={textVariants}>
//                     <span className="hero-span">Fullstack Developer</span> and <span className="hero-span">IT Enthusiast</span> in <span className="hero-span">Several Subject</span>. I'm responsible to code your ideas into reality.
//                     </motion.h1>
//                     <motion.div variants={textVariants} className="buttons">
//                         <motion.button className="p-4" variants={textVariants}>
//                             <a onClick={openResume}  href="">See my career resume</a>
//                         </motion.button>
//                         <motion.button className="p-4 ml-5" variants={textVariants}><a href="/contact">Contact Me</a></motion.button>
//                     </motion.div>
//                     <motion.img
//                         variants={textVariants}
//                         animate="scrollButton"
//                         src={downArrow}
//                         alt="dasdsd"
//                         className="scrollButton"
//                     />
//                 </motion.div>
//             </div>

//             <div className="spline3D">
//                 <img src={betterByteLogo} className="profile-image" alt="" />
//             </div>
//         </div>
//     </div>
//     )
//   }


// const OldServices = () => {
//     return(
//         <>
//         <div className="services-pick">
//         <h3 onClick={() => setIsSelected("web")} className={isSelected === "web" ? "selected" : "select"}>Fullstack</h3>
//         <h3 onClick={() => setIsSelected("cross")} className={isSelected === "cross" ? "selected" : "select"} >Machine Learning</h3>
//         <h3  onClick={() => setIsSelected("cyber")} className={isSelected === "cyber" ? "selected" : "select"}>Cyber Security</h3>
//         <h3 onClick={() => setIsSelected("mobile")} className={isSelected === "mobile" ? "selected" : "select"}>Mobile</h3>
//     </div>

//     <div className="service-show">
//         {/* <ServiceBox props={isSelected === "web" ? webData : isSelected === "mobile" ? mobileData : isSelected === "cross" ? crossData : null} />  */}
//         <div className="service-grid-box">
//             <h2 className="service-help-title font-bold">I CAN HELP YOU</h2>
//             {isSelected === "web" ?  <ServiceBox /> : isSelected === "mobile" ? <ServiceBoxMobile /> : isSelected === "cross" ? <ServiceBoxAi /> : isSelected === "cyber" ? <ServiceBoxCyber/> : null}
//         </div>
//         {isSelected === "web" ?   
//         <div className="specific-project-show" >
            
//             <PortfolioItem
//                 title="Lupody"
//                 subtitle1="Social Media Platform"
//                 subtitle2="AI Powered"
//                 subtitle3="Firebase Backend"
//                 onClick={() => handlePortfolioNavigation("Lupody")}
//             />

//             <div onClick={() => handlePortfolioNavigation("Clippify")} className="project-show">
//                 <h3>Clippify</h3>
//                 <div>
//                     <h6>Ai Clip Analysing</h6>
//                     <h6>Clip Saving and Storing</h6>
//                     <h6>Firebase Backend</h6>
//                 </div>
                
//             </div>
//         </div>  : 
//         isSelected === "mobile" ?  
//         <div className="specific-project-show" >
            
//             <div onClick={() => handlePortfolioNavigation("Lupody Mobile")} className="project-show">
//                 <h3>Lupody Mobile</h3>
//                 <div>
//                     <h6>Social Media Platform</h6>
//                     <h6>Ai Powered</h6>
//                     <h6>Firebase Backend</h6>
//                 </div>
                
//             </div>

//             <div onClick={() => handlePortfolioNavigation("Clippify-Mobile")} className="project-show">
//                 <h3>Clippify Mobile</h3>
//                 <div>
//                     <h6>Ai Clip Analysing</h6>
//                     <h6>Clip Saving and Storing</h6>
//                     <h6>Firebase Backend</h6>
//                 </div>
                
//             </div>
//         </div> 
//         : isSelected === "cross" ? 
//         <div className="specific-project-show" >
            
//         <div onClick={() => handlePortfolioNavigation("Clippify")} className="project-show">
//             <h3>Speech To Text</h3>
//             <div>
//                 <h6>Self-Made with Tensorflow</h6>
//                 <h6>Recurrent Neural Network</h6>
//                 <h6>CTC loss & Word Error Rate</h6>
//                 <h6>Embedded into Web Application</h6>
//             </div>
            
//         </div>

//         <div onClick={() => handlePortfolioNavigation("Clippify")} className="project-show">
//             <h3>Object Detection</h3>
//             <div>
//                 <h6>Self-Made with Tensorflow</h6>
//                 <h6>OpenCV</h6>
//                 <h6>Convolutional Neural Network</h6>
//                 <h6>Process for Detecting anything</h6>
//                 <h6>Embedded into Web Application</h6>
//             </div>
            
//         </div>

//         <div onClick={() => handlePortfolioNavigation("Clippify")} className="project-show">
//             <h3>Kaggle Solutions</h3>
//             <div>
//                 <h6>Free Time Activity</h6>
//                 <h6>ML Algorythms for Competitions</h6>
//             </div>
            
//         </div>
//         </div>  
//         : isSelected === "cyber" ? 
//         <div className="specific-project-show" >
//             <div onClick={() => handlePortfolioNavigation("Clippify")} className="project-show">
//                 <h3>Capture The Flag</h3>
//                 <div>
//                     <h6>Free Time Activity</h6>
//                     <h6>Hack The Box</h6>
//                     <h6>Try Hack Me</h6>
//                     <h6>Kali Linux</h6>
//                 </div>
//             </div>

//             <div onClick={() => handlePortfolioNavigation("Clippify")} className="project-show">
//                 <h3>Pentesting My Web Apps</h3>
//                 <div>
//                     <h6>Free Time Activity</h6>
//                     <h6>Hack The Box</h6>
//                     <h6>Try Hack Me</h6>
//                     <h6>Kali Linux</h6>
//                 </div>
//             </div>

//             <div onClick={() => handlePortfolioNavigation("Clippify")} className="project-show">
//                 <h3>Pentesting My Mobile Apps</h3>
//                 <div>
//                     <h6>Free Time Activity</h6>
//                     <h6>Hack The Box</h6>
//                     <h6>Try Hack Me</h6>
//                     <h6>Kali Linux</h6>
//                 </div>
//             </div>

//         </div> :
//             null}
//     </div>
//     </>
//     )
// }

  export const HeroSection = ({openResume}) => {
    return(
        <div className="row1">
        <div className="hero-left">
            <div className="hero-m-title">
                <h2>Hey I'm Tamas 👋</h2>
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
                <h6>Worked for</h6>
                <GoogleOriginal size={30} style={{opacity:0.5}} />
                <FacebookOriginal size={30} style={{opacity:0.5}} />
                <OpenalOriginal size={30} style={{opacity:0.5}} />
            </div>
        </div>
        <img src={betterByteLogo} alt="" className="w-80 h-80 object-cover rounded border border-gray-200 shadow-md relative hidden lg:block" />
    </div>
    )
};

export const WidgetSection = () => {
    return(    
    <section id="why-us">
        <div className="why-us-divider">
            <hr />
            <h6 className="text-xs ">Why Choose me ?</h6>
            <hr style={{borderImage:"linear-gradient(to left, rgba(0, 0, 0, 0.3), rgba(83, 83, 83)) 1"}} />
        </div>
        <h3 className="why-us-title text-center"> <span className="gradient-span-purple">Modern</span> & <span className="gradient-span-green">Powerful</span> skills</h3>
        <h5 className="why-us-desc">Each member of our team is highly skilled and experienced in their domain, which makes our service quick, powerful and most up to date to the current market</h5>

        <div className="why-bubble-container">
            <div className="why-us-cont_t-1">
                <div className="why-bubble-t">
                    <div className="bubble-title">
                        <h4>Delightful and <span style={{color:"white",fontWeight:700}}>simple</span> stat</h4>    
                    </div>
                    <div className="bubble-badge-green">
                        <h3>+ 10 000 hours of experience </h3>
                    </div>
                </div>
                
                <div className="why-bubble-b">
                    App Developers
                </div>
            </div>

            <div className="why-us-cont_t-2">
                <div className="why-bubble-t">
                    Machine Learning
                </div>
                <div className="why-bubble-b">
                    Web Developers
                </div>
            </div>
            <div className="why-us-cont_t-3">
            
                <div className="why-bubble-t">
                    Web Developers
                </div>
                
                <div className="why-bubble-b">
                    Mobile Developers
                </div>
            </div>
        </div>

        <Swiper
            modules={[Pagination, EffectCoverflow, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            centeredSlides={true}
            navigation
            loop={true}
            className="why-bubble-container pager"
        >
            <SwiperSlide className="why-us-cont_t-1 self-center flex direction-col">
                <div className="why-bubble-t">
                    <div className="bubble-title">
                    <h4>
                        Delightful and <span style={{ color: "white", fontWeight: 700 }}>simple</span> stat
                    </h4>
                    </div>
                    <div className="bubble-badge-green">
                    <h3>+ 10 000 hours of experience </h3>
                    </div>
                </div>
                <div className="why-bubble-b">App Developers</div>
            </SwiperSlide>

            <SwiperSlide className="why-us-cont_t-2 self-center flex direction-col">
            <div className="why-bubble-t">Machine Learning</div>
            <div className="why-bubble-b">Web Developers</div>
            </SwiperSlide>

            <SwiperSlide className="why-us-cont_t-3 self-center flex direction-col">
            <div className="why-bubble-t">Web Developers</div>
            <div className="why-bubble-b">Mobile Developers</div>
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
            <h3 className="why-us-title"> Our <span className="gradient-span-purple">Services</span> </h3>
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
                    <h5>We are up for the challange</h5>
                    <h2>Appoint a <span>Free</span> consultation</h2>
                    <h3>In order to make an appointment you will need to answer a few crutial questions designed for understanding your needs ...</h3>
                    <div className="consultation-btn">
                        <h4>Get Started</h4>
                    </div>
                </div>
    
                <div className="consultation-box">
                    <h5>We are up for the challange</h5>
                    <h2>Appoint a <span>Free</span> consultation</h2>
                    <h3>In order to make an appointment you will need to answer a few crutial questions designed for understanding your needs ...</h3>
                    <div className="consultation-btn">
                        <h4>Get Started</h4>
                    </div>
                </div>
            </div>
    
        </section>
    )
}