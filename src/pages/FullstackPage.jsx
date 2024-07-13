import moshImage from "../assets/mosh.jpg";
import React, {useState,useEffect} from 'react';
import "../CSS/fullstack.css"
import betterByteLogo from "../assets/BetterByteLogo.png"
import AngelaYu from "../assets/Angela_Yu.jpeg"
import CourseraLogo from "../assets/Coursera.png"
import SurferboyLogo from "../assets/SurferboyLogo.jpeg"
import UdemyLogo from "../assets/UdemyIMAGE.png"
import Modal from '@mui/material/Modal';
import ClippifyImage from "../assets/Clippify-log.svg"
import { Link } from 'react-router-dom';
import BootcampFullstack_cert from "../assets/BootcampFullstack.jpeg"
import { AmazonwebservicesOriginalWordmark, AndroidOriginal, AppleOriginal, Css3Original, ExpressOriginal, ExpressOriginalWordmark, FirebaseOriginal, FlaskOriginal, GoOriginal, Html5Original, JavascriptOriginal, NextjsOriginal, NodejsOriginal, PythonOriginal, ReactOriginal, ReactOriginalWordmark, TailwindcssOriginal, TypescriptOriginal, VitejsOriginal, ViteOriginal } from 'devicons-react';
import { div } from '@tensorflow/tfjs';
import LupodyImage from "../assets/Lupody_Black.png"


const FullstackPage = () => {

  //STATE FOR Data Representation
  const [open, setOpen] = useState(false);

  const [modelInput, setModelInput] = useState("")

  const [selectedFullstack, setSelectedFullstack] = useState("web");

  const [isScrolledPassed, setIsScrolledPassed] = useState(false);

  const scroll = React.useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (scroll.current.getBoundingClientRect().top < -60) {
        setIsScrolledPassed(true);
      } else {
        setIsScrolledPassed(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //<**********-DATA-*****************>

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

  const FadeIn = () => (
    <style jsx>{`
      @keyframes fadeIn {
        0% {
          opacity: 0;
          transform: translateY(20px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .fade-in {
        animation: fadeIn 1s ease-in-out;
      }
    `}</style>
  )

const handleOpen = (certInput) => {
  setOpen(true);
  setModelInput(certInput)
};
const handleClose = () => setOpen(false);


return(
  <div ref={scroll} className="fullstack">
    {/*1.) Hero SECTION*/}
    <FadeIn />
    <div className='flex flex-col w-[70%] p-0 mt-20 fade-in'>

        <div className="flex flex-row justify-between mb-5 mt-0 bg-white px-5 py-2 rounded relative" style={{ width: 180 }}>
          <h5 className='absolute bottom-11 text-white text-xs opacity-60 left-0 font-medium'>Click to switch</h5>
          <h4 
            className={`text-black cursor-pointer ${selectedFullstack === 'web' ? 'font-bold opacity-100' : 'opacity-50'}`}
            onClick={() => setSelectedFullstack('web')}
          >
            Web
          </h4>
          <h4>|</h4>
          <h4 
            className={`text-black cursor-pointer ${selectedFullstack === 'mobile' ? 'font-bold opacity-100' : 'opacity-50'}`}
            onClick={() => setSelectedFullstack('mobile')}
          >
            Mobile
          </h4>
        </div>
        <h1 className='text-white text-4xl'>Fullstack Development</h1>
 
      {selectedFullstack === 'web' ? (
        <>
          <AnimatedBackground />
          <div className="flex flex-col mt-10 items-center p-5 bg-gray-900 rounded lg:flex-row lg:justify-between animated-bg">
            <h1 className="text-white text-md opacity-85 self-center font-bold lg:self-left mb-5 lg:mb-0">Frontend: </h1>
              <div className="flex flex-row items-center p-5 rounded" style={{backgroundColor:"rgba(0,0,0,0.4)"}}>
                <JavascriptOriginal className="mr-8 mt-4 lg:mt-0" size={35} />
                <TypescriptOriginal className="mr-8 mt-4 lg:mt-0" size={35} />
                <Html5Original className="mr-8 mt-4 lg:mt-0" size={35} />
                <Css3Original className="mr-0 mt-4 lg:mt-0" size={35} />
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
              <div className="flex flex-row items-center p-5 bg-gray-900 rounded" style={{backgroundColor:"rgba(0,0,0,0.4)"}}>
                <GoOriginal className="mr-8 mt-4 lg:mt-0" size={35} />
                <JavascriptOriginal className="mr-8 mt-4 lg:mt-0" size={35} />
                <TypescriptOriginal className="mr-8 mt-4 lg:mt-0" size={35} />
                <PythonOriginal className="ml-0 mt-4 lg:mt-0" size={35} />
              </div>
                <h3 className="text-white lg:ml-0 lg:mt-0 lg:mb-0 my-5">•</h3>
                <div className="flex flex-wrap items-center p-3 bg-gray-600 rounded lg:ml-8 justify-center" style={{backgroundColor:"rgba(0,0,0,0.4)"}}>
                  <NodejsOriginal className="m-3 mx-4" size={35} />
                  <ExpressOriginal color='white' className='m-3 bg-white rounded p-1 mx-4' size={35} />
                  <FlaskOriginal className='m-3 mx-4 bg-white rounded p-1' size={35} />
                  <AmazonwebservicesOriginalWordmark className='m-3 bg-white rounded p-1 mx-4' size={35} />
                  <FirebaseOriginal className='m-3 mx-4' size={35} />
                </div>
        </div>
        </>
      ):(
        <>
        <div className="flex flex-col mt-10 items-center p-5 bg-gray-900 rounded lg:flex-row lg:justify-between ">
          <h1 className="text-white text-md opacity-85 self-center font-bold lg:self-left">Frontend: </h1>
            <div className="flex flex-row items-center p-5 bg-gray-900 rounded">
              <JavascriptOriginal className="mr-8 mt-4 lg:mt-0" size={35} />
              <TypescriptOriginal className="mr-8 mt-4 lg:mt-0" size={35} />
              <ReactOriginalWordmark className="mr-8 mt-4 lg:mt-0" size={35} />
            </div>
              <h3 className="text-white lg:ml-0 lg:mt-0 lg:mb-0 my-5">•</h3>
              <div className="flex flex-wrap items-center p-3 bg-gray-600 rounded lg:ml-8 justify-center">
                <ReactOriginal className="m-3 mx-4" size={35} />
                <ExpressOriginal color='white' className='m-3 bg-white rounded p-1 mx-4' size={35} />
              </div>
      </div>

      <div className="flex flex-col mt-10 items-center p-3 bg-gray-900 rounded lg:flex-row lg:justify-between" >
          <h1 className="text-white text-md opacity-85 self-center font-bold lg:self-left">Backend: </h1>
            <div className="flex flex-row items-center p-5 bg-gray-900 rounded">
              <GoOriginal className="mr-8 mt-4 lg:mt-0" size={35} />
              <JavascriptOriginal className="mr-8 mt-4 lg:mt-0" size={35} />
              <TypescriptOriginal className="mr-8 mt-4 lg:mt-0" size={35} />
              <PythonOriginal className="ml-0 mt-4 lg:mt-0" size={35} />
            </div>
              <h3 className="text-white lg:ml-0 lg:mt-0 lg:mb-0 my-5">•</h3>
              <div className="flex flex-wrap items-center p-3 bg-gray-600 rounded lg:ml-8 justify-center">
                <NodejsOriginal className="m-3 mx-4" size={35} />
                <ExpressOriginalWordmark color='white' className='m-3 bg-white rounded p-1 mx-4' size={35} />
                <FlaskOriginal className='m-3 mx-4 bg-white rounded p-1' size={35} />
                <AmazonwebservicesOriginalWordmark className='m-3 bg-white rounded p-1 mx-4' size={35} />
                <FirebaseOriginal className='m-3 mx-4' size={35} />
              </div>
      </div>
      </>
      )}
      


    </div>
    <div className='flex flex-col items-center border-t mt-16'>
      <h1 className='text-3xl font-medium m-10 p-3 text-white' >Projects</h1>
      <ProductView 
        icon={ClippifyImage}
        title={selectedFullstack == "web" ? "Skin Cancer Detection Tools for Dermotologist" : "Skin Cancer Detection Mobile App"}
        name={"Pocket Protect • ( Connected with Mobile App )"}
        type="both"
        activeType={selectedFullstack}
        description="Skin Cancer Detection APP ♋ --> CNN model and/or Dermotologist assist with web app filled with tools. Other: Blood Work Analasis wit LLM🩸-- Store skin data, and set reminders for reccomended mole updates. The Backend is connceted with the Mobile APP and the Web APP !"
        tags={["Next JS", "React Native", "Typescript", "Go", "Python + Tensorflow + Flask","ISIC Skin Cancer Dataset"]}
        navigation={"fullstack-projects/lupody"}
        level={"Senior"}
      />
      <ProductView 
        icon={ClippifyImage}
        type="web"
        activeType={selectedFullstack}
        title={selectedFullstack == "web" ? "Video Clipper with Transcript Export for ChatGPT API and Notes App " : "Skin Cancer Detection Mobile App"}
        name={"Clippify"}
        description="FULLSTACK WEB APP - For Storing Valuable Snippets from Videos with I Featuers -> ✂️ Trimming, ✍🏻Notes Section, 🗃️Storing (Folder-Style) , 📝Transcript Exporting, 👾AI-Chatbot with acces to video transcript."
        tags={["React & Vite", "Node & Express", "+ Chrome Extension", "FFMPEG", "JS, HTML, CSS & Tailwind", "Stripe & OpenAi API", "Firebase"]}
        navigation={"/fullstack-projects/clippify"}
        level={"Intermediate"}
      />
      <ProductView 
        icon={ClippifyImage}
        title={selectedFullstack == "web" ? "Video Social Media Platform with Serverless Backend" : "Video Social Media Mobile App with Serverless Backend"}
        name={"Lupody"}
        type="both"
        activeType={selectedFullstack}
        description="Social Media Platform for Podcasting --> 🧠 Recommender System, 🎞️ Clipping from Video, 🕓 Watch Later, 💬 Real Time Comment-Section, 🔎 Searchable & Visitable Users, ⚙️Profile Customization ( avatar, usename, thubnail, uploaded videos[ delete, edit] )"
        tags={["React & Vite", "React Native", "JS & CSS & HTML", "Expo", "Firebase"]}
        navigation={"/fullstack-projects/lupody"}
        level={"Beginner"}
      />
      <ProductView 
        icon={ClippifyImage}
        title="Portfolio Website"
        name={"Portfolio Website"}
        type="web"
        activeType={selectedFullstack}
        description="A comprehensive course on Fullstack Web Development, covering Frontend, Backend, and Databases."
        tags={["React & Vite", "JS, CSS & Tailwind, HTML", "Figma", "Spline 3D"]}
        navigation={"/lupody"}
        level={"Beginner"}
      />
    </div>



    {/*3.) Learning-Path SECTION*/}
    {selectedFullstack == "web" && (
    <div className='fullstack-learning'>
        <div className='flex flex-col items-center mb-10 '>
          <h5 style={{border:"0px solid black",padding:"5px 10px",borderRadius:10,opacity:0.4,boxShadow: "inset 1px 1px 5px 1px white",color:"white"}}>Click the icon for Certificate</h5>
          <h1 style={{marginTop:10, color:"white",fontSize:20}}>My Learning Journey</h1>
        </div>

        <div className='learning-path'>
        {/*FULLSTACK WEB BOOTCAMP - UDEMY COURSE*/}
        <ol class="timeline">
          {/*COURSE TITLE*/}
          <li class="timeline-item">
            <span class="timeline-item-icon | avatar-icon">
              <i class="avatar">
                <img src={UdemyLogo} />
              </i>
            </span>
            <div class="timeline-item-description">
              <span><a href="https://www.udemy.com/course/the-complete-web-development-bootcamp/?couponCode=ACCAGE0923" className='learned-course-title text-xs md:text-lg' style={{color:"white"}}>📚 Complete Web Development Bootcamp 📚</a></span>
            </div>
          </li>
          
          {/*FRONTEND COURSE ITEM*/}
          <li class="timeline-item">
            <span class="timeline-item-icon | faded-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z" />
                <path fill="currentColor" d="M12.9 6.858l4.242 4.243L7.242 21H3v-4.243l9.9-9.9zm1.414-1.414l2.121-2.122a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414l-2.122 2.121-4.242-4.242z" />
              </svg>
            </span>
            <div class="timeline-item-description">
              <i class="avatar | small">
                <img src={AngelaYu} />
              </i>
              <span><a style={{color:"white"}} className='learned-course-lesson-title' href="https://www.udemy.com/course/the-complete-web-development-bootcamp/?couponCode=ACCAGE0923">Front-End Web Development</a> •-• <a href="https://www.udemy.com/course/the-complete-web-development-bootcamp/?couponCode=ACCAGE0923#instructor-1">Dr. Angela Yu</a> •-• <time datetime="21-01-2021">Dec 11, 2023</time></span>
            </div>
          </li>
          {/*Technology's COURSE ITEM*/}
          <li class="timeline-item">
            <span class="timeline-item-icon | faded-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z" />
                <path fill="currentColor" d="M12 13H4v-2h8V4l8 8-8 8z" />
              </svg>
            </span>
            <div class="timeline-item-description">
              <i class="avatar | small">
                <img src={AngelaYu} />
              </i>
              <span><a style={{color:"white"}} className='learned-course-lesson-title' href="https://www.udemy.com/course/the-complete-web-development-bootcamp/?couponCode=ACCAGE0923">Bootstrap, jQuery, Node & Express, EJS, React, SQL, PostgreSQL, Databases </a> •-• <a href="https://www.udemy.com/course/the-complete-web-development-bootcamp/?couponCode=ACCAGE0923#instructor-1">Dr. Angela Yu</a> •-• <time datetime="21-01-2021">Dec 11, 2023</time></span>
            </div>
          </li>
          {/*BACKEND COURSE ITEM*/}
          <li class="timeline-item">
            <span class="timeline-item-icon | faded-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z" />
                <path fill="currentColor" d="M12 13H4v-2h8V4l8 8-8 8z" />
              </svg>
            </span>
            <div class="timeline-item-description">
              <i class="avatar | small">
                <img src={AngelaYu} />
              </i>
              <span><a style={{color:"white"}} className='learned-course-lesson-title' href="https://www.udemy.com/course/the-complete-web-development-bootcamp/?couponCode=ACCAGE0923">Back-End Web Development</a> •-• <a href="https://www.udemy.com/course/the-complete-web-development-bootcamp/?couponCode=ACCAGE0923#instructor-1">Dr. Angela Yu</a> •-• <time datetime="21-01-2021">Dec 11, 2023</time></span>
            </div>
          </li>
          {/*AUTH-SECURITY COURSE ITEM*/}
          <li class="timeline-item">
            <span class="timeline-item-icon | faded-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z" />
                <path fill="currentColor" d="M12 13H4v-2h8V4l8 8-8 8z" />
              </svg>
            </span>
            <div class="timeline-item-description">
              <i class="avatar | small">
                <img src={AngelaYu} />
              </i>
              <span><a style={{color:"white"}} className='learned-course-lesson-title' href="https://www.udemy.com/course/the-complete-web-development-bootcamp/?couponCode=ACCAGE0923">Authentication and Security - Handling Credentials & Designing a Secure Login</a> •-• <a href="https://www.udemy.com/course/the-complete-web-development-bootcamp/?couponCode=ACCAGE0923#instructor-1">Dr. Angela Yu</a> •-• <time datetime="21-01-2021">Dec 11, 2023</time></span>
            </div>
          </li>
          {/*API COURSE ITEM*/}
          <li class="timeline-item">
            <span class="timeline-item-icon | faded-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z" />
                <path fill="currentColor" d="M12 13H4v-2h8V4l8 8-8 8z" />
              </svg>
            </span>
            <div class="timeline-item-description">
              <i class="avatar | small">
                <img src={AngelaYu} />
              </i>
              <span><a style={{color:"white"}} className='learned-course-lesson-title' href="https://www.udemy.com/course/the-complete-web-development-bootcamp/?couponCode=ACCAGE0923">API Types and Architectures</a> •-• <a href="https://www.udemy.com/course/the-complete-web-development-bootcamp/?couponCode=ACCAGE0923#instructor-1">Dr. Angela Yu</a> •-• <time datetime="21-01-2021">Dec 11, 2023</time></span>
            </div>
          </li>
          {/*CERT*/}
          <li class="timeline-item">
          <span class="timeline-item-icon | faded-icon" onClick={() => handleOpen(BootcampFullstack_cert)} >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 24" width="24" height="24">
                  <path class="cls-1" d="M28,5H4A2,2,0,0,0,2,7V24a2,2,0,0,0,2,2H18v3a1,1,0,0,0,.53.88,1,1,0,0,0,1-.05L22,28.2l2.45,1.63A1,1,0,0,0,26,29V26h2a2,2,0,0,0,2-2V7A2,2,0,0,0,28,5ZM22.59,21.94a3,3,0,1,1,2.35-2.35A3,3,0,0,1,22.59,21.94ZM24,27.13l-1.45-1a1,1,0,0,0-1.1,0l-1.45,1V23.58a5,5,0,0,0,4,0ZM28,24H26V22s0,0,0,0a4.93,4.93,0,0,0,.88-4.1A5,5,0,0,0,17,19a4.93,4.93,0,0,0,1,3s0,0,0,0v2H4V7H28Z"/><path class="cls-1" d="M7,12H25a1,1,0,0,0,0-2H7a1,1,0,0,0,0,2Z"/><path class="cls-1" d="M7,16h8a1,1,0,0,0,0-2H7a1,1,0,0,0,0,2Z"/><path class="cls-1" d="M7,20h8a1,1,0,0,0,0-2H7a1,1,0,0,0,0,2Z"/>
                </svg>
              </span>
            <div class="timeline-item-description">
              <i class="avatar | small">
                <img src={AngelaYu} />
              </i>
            </div>
          </li>

          {/*OPINNION*/}
          <li class="timeline-item | extra-space">
            <span class="timeline-item-icon | filled-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z" />
                <path fill="currentColor" d="M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455zM7 10v2h2v-2H7zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2z" />
              </svg>
            </span>
            <div class="timeline-item-wrapper">
              <div class="timeline-item-description">
                <i class="avatar | small">
                  <img src={SurferboyLogo} />
                </i>
                <span><a href="#">What I've learned</a> from this course </span>
              </div>
              <div class="comment">
              <p>
                    1. <span className='comment-highlight'>Build websites</span> and web applications from scratch using HTML, CSS, and JavaScript.<br />
                    <br />
              
                    2. <span className='comment-highlight'>Create responsive layouts:</span> with plain CSS and frameworks like Bootstrap & Tailwind.<br />
                    <br />

                    3. <span className='comment-highlight'>Develop server-side applications: </span> using Node.js and Express. <br /> <br />
                    4. <span className='comment-highlight'>Work with databases:</span> like MongoDB and SQL.<br /> <br />
                    5. <span className='comment-highlight'>Implement user authentication and authorization</span>  <br /> <br />
                    6. <span className='comment-highlight'>Use version control:</span> with Git and GitHub.<br /> <br />
                    7. <span className='comment-highlight'>Deploy web applications to services like Heroku.</span><br /> <br />
                    8. <span className='comment-highlight'>Understand the latest web development technologies and best practices.</span><br /> <br />
                    9. <span className='comment-highlight'>Utilize APIs and handle asynchronous operations.</span><br /> <br />
                    10. <span className='comment-highlight'>Debug and troubleshoot</span> common web development issues.<br /> <br />
                  </p>
                  <button class="button">⭐⭐⭐⭐</button>
              </div>
              <button class="show-replies" onClick={() => handleVisitClick("CourseraNotes")}>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-forward" width="44" height="44" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M15 11l4 4l-4 4m4 -4h-11a4 4 0 0 1 0 -8h1" />
                </svg>
                  See My Notes
              </button>
              </div>
          </li>
        </ol>

        <div style={{height:2, width:"65%",backgroundColor:"white",margin:20}} />

        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <div style={{display:"flex",flexDirection:"column",width:"100%",alignItems:"center",marginTop:200}}>
                <img className='cert-image-kaggle'  src={modelInput} alt="" />
            </div>
        </Modal>

        </div>

    </div>
    )}

    {selectedFullstack == "mobile" && (
    <div className='fullstack-learning'>
        <div className='flex flex-col items-center mb-10 '>
          <h5 style={{border:"0px solid black",padding:"5px 10px",borderRadius:10,opacity:0.4,boxShadow: "inset 1px 1px 5px 1px white",color:"white"}}>Click the icon for Certificate</h5>
          <h1 style={{marginTop:10, color:"white",fontSize:20}}>My Learning Journey</h1>
        </div>

        <div className='learning-path'>
        {/*FULLSTACK WEB BOOTCAMP - UDEMY COURSE*/}
        <ol class="timeline">
          {/*COURSE TITLE*/}
          <li class="timeline-item">
            <span class="timeline-item-icon | avatar-icon">
              <i class="avatar">
                <img src={moshImage} />
              </i>
            </span>
            <div class="timeline-item-description">
              <span><a href="https://www.youtube.com/watch?v=0-S5a0eXPoc&ab_channel=ProgrammingwithMosh" className='learned-course-title text-xs md:text-lg' style={{color:"white"}}>📚 React Native Tutorial for Beginners 📚</a></span>
            </div>
          </li>
          
          {/*FRONTEND COURSE ITEM*/}
          <li class="timeline-item">
            <span class="timeline-item-icon | faded-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z" />
                <path fill="currentColor" d="M12.9 6.858l4.242 4.243L7.242 21H3v-4.243l9.9-9.9zm1.414-1.414l2.121-2.122a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414l-2.122 2.121-4.242-4.242z" />
              </svg>
            </span>
            <div class="timeline-item-description">
              <i class="avatar | small">
                <img src={moshImage} />
              </i>
              <span><a style={{color:"white"}} className='learned-course-lesson-title' href="https://www.youtube.com/watch?v=0-S5a0eXPoc&ab_channel=ProgrammingwithMosh">What is React Native?</a> •-• <a href="https://www.youtube.com/@programmingwithmosh">Programming with Mosh</a> •-• <time datetime="21-01-2021">Dec 11, 2023</time></span>
            </div>
          </li>
          {/*Technology's COURSE ITEM*/}
          <li class="timeline-item">
            <span class="timeline-item-icon | faded-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z" />
                <path fill="currentColor" d="M12 13H4v-2h8V4l8 8-8 8z" />
              </svg>
            </span>
            <div class="timeline-item-description">
              <i class="avatar | small">
                <img src={moshImage} />
              </i>
              <span><a style={{color:"white"}} className='learned-course-lesson-title' href="https://www.youtube.com/watch?v=0-S5a0eXPoc&ab_channel=ProgrammingwithMosh">Expo, Fundamental Concepts, Debugging </a> •-• <a href="https://www.youtube.com/@programmingwithmosh">Programming with Mosh</a> •-• <time datetime="21-01-2021">Dec 11, 2023</time></span>
            </div>
          </li>

          {/*OPINNION*/}
          <li class="timeline-item | extra-space">
            <span class="timeline-item-icon | filled-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z" />
                <path fill="currentColor" d="M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455zM7 10v2h2v-2H7zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2z" />
              </svg>
            </span>
            <div class="timeline-item-wrapper">
              <div class="timeline-item-description">
                <i class="avatar | small">
                  <img src={SurferboyLogo} />
                </i>
                <span><a href="#">What I've learned</a> from this course </span>
              </div>
              <div class="comment">
              <p>
                    1. <span className='comment-highlight'>Development Environment Setup:</span> Understand the differences between React and React Native.<br />
                    <br />
              
                    2. <span className='comment-highlight'>Build User Interfaces:</span> Create and style components using React Native's built-in components like View, Text, Image, Button, and ScrollView.<br />
                  </p>
                  <button class="button">⭐⭐⭐⭐</button>
              </div>
              <button class="show-replies" onClick={() => handleVisitClick("CourseraNotes")}>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-forward" width="44" height="44" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M15 11l4 4l-4 4m4 -4h-11a4 4 0 0 1 0 -8h1" />
                </svg>
                  See My Notes
              </button>
              </div>
          </li>
        </ol>

        <div style={{height:2, width:"65%",backgroundColor:"white",marginTop:20,marginBottom:0}} />

        <ol class="timeline">
          {/*COURSE TITLE*/}
          <li class="timeline-item">
            <span class="timeline-item-icon | avatar-icon">
              <i class="avatar">
                <img src={LupodyImage} />
              </i>
            </span>
            <div class="timeline-item-description">
              <span><a href="/fullstack-projects/lupody" className='learned-course-title text-xs md:text-lg' style={{color:"white"}}>📚 Personal Project - Lupody 📚</a></span>
            </div>
          </li>
          
          {/*FRONTEND COURSE ITEM*/}
          <li class="timeline-item">
            <span class="timeline-item-icon | faded-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z" />
                <path fill="currentColor" d="M12.9 6.858l4.242 4.243L7.242 21H3v-4.243l9.9-9.9zm1.414-1.414l2.121-2.122a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414l-2.122 2.121-4.242-4.242z" />
              </svg>
            </span>
            <div class="timeline-item-description">
              <i class="avatar | small">
                <img src={moshImage} />
              </i>
              <span><a style={{color:"white"}} className='learned-course-lesson-title' href="https://www.youtube.com/watch?v=0-S5a0eXPoc&ab_channel=ProgrammingwithMosh">What is React Native?</a> •-• <a href="https://www.youtube.com/@programmingwithmosh">Programming with Mosh</a> •-• <time datetime="21-01-2021">Dec 11, 2023</time></span>
            </div>
          </li>
          {/*Technology's COURSE ITEM*/}
          <li class="timeline-item">
            <span class="timeline-item-icon | faded-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z" />
                <path fill="currentColor" d="M12 13H4v-2h8V4l8 8-8 8z" />
              </svg>
            </span>
            <div class="timeline-item-description">
              <i class="avatar | small">
                <img src={moshImage} />
              </i>
              <span><a style={{color:"white"}} className='learned-course-lesson-title' href="https://www.youtube.com/watch?v=0-S5a0eXPoc&ab_channel=ProgrammingwithMosh">Expo, Fundamental Concepts, Debugging </a> •-• <a href="https://www.youtube.com/@programmingwithmosh">Programming with Mosh</a> •-• <time datetime="21-01-2021">Dec 11, 2023</time></span>
            </div>
          </li>

          {/*OPINNION*/}
          <li class="timeline-item | extra-space">
            <span class="timeline-item-icon | filled-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z" />
                <path fill="currentColor" d="M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455zM7 10v2h2v-2H7zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2z" />
              </svg>
            </span>
            <div class="timeline-item-wrapper">
              <div class="timeline-item-description">
                <i class="avatar | small">
                  <img src={SurferboyLogo} />
                </i>
                <span><a href="#">What I've learned</a> from this course </span>
              </div>
              <div class="comment">
              <p>
                    1. <span className='comment-highlight'>Development Environment Setup:</span> Understand the differences between React and React Native.<br />
                    <br />
              
                    2. <span className='comment-highlight'>Build User Interfaces:</span> Create and style components using React Native's built-in components like View, Text, Image, Button, and ScrollView.<br />
                  </p>
                  <button class="button">⭐⭐⭐⭐</button>
              </div>
              <button class="show-replies" onClick={() => handleVisitClick("CourseraNotes")}>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-forward" width="44" height="44" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M15 11l4 4l-4 4m4 -4h-11a4 4 0 0 1 0 -8h1" />
                </svg>
                  See My Notes
              </button>
              </div>
          </li>
        </ol>

        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <div style={{display:"flex",flexDirection:"column",width:"100%",alignItems:"center",marginTop:200}}>
                <img className='cert-image-kaggle'  src={modelInput} alt="" />
            </div>
        </Modal>

        </div>

    </div>
    )}

    
    {isScrolledPassed &&
        <div className='fixed w-[100%]' style={{borderTopWidth:3,top:70}}>
          <div className="flex flex-row justify-between mb-5 mt-0 bg-black px-5 py-3" style={{ width: 200,borderColor:"white", borderWidth:3,borderTop:0, marginLeft:40,borderRadius:10, borderTopLeftRadius:0, borderTopRightRadius:0, boxShadow:"0px 0px 0px 0px white" }}>
          <h4 
            className={`text-white cursor-pointer ${selectedFullstack === 'web' ? 'font-bold opacity-100' : 'opacity-40'}`}
            onClick={() => setSelectedFullstack('web')}
          >
            Web
          </h4>
          <h4 className='text-white'>|</h4>
          <h4 
            className={`text-white cursor-pointer ${selectedFullstack === 'mobile' ? 'font-bold opacity-100' : 'opacity-40'}`}
            onClick={() => setSelectedFullstack('mobile')}
          >
            Mobile
          </h4>
    </div>
    </div>
    }


  </div>
)
}

export default FullstackPage;



const ProductView = ({ icon, title, description, tags, navigation, level, type, activeType, name }) => {
  return (
    <>
    { (activeType == type || type == "both") &&
      <div className="flex flex-col md:flex-row md:items-center p-10 border border-magenta rounded shadow-lg mb-10 bg-gradient-primary relative w-[90%] md:w-[70%]">
        <div className="flex flex-col flex-grow">
          <h6 className="text-sm opacity-50 text-white mb-1 font-bold">{name}</h6>
          <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
          <p className="text-gray-400 mb-2 max-w-[90%] text-bac md:text-md lg:text-sd">{description}</p>
          <div className="flex flex-wrap">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded m-2"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col mt-4 md:mt-0 md:ml-4 md:self-stretch justify-end md:justify-center">
          <div className="relative inline-block">
            <div className="group">
              <div className="flex flex-col justify-center bg-white p-4 rounded pr-10 pl-10 transition duration-300 ease-in-out">
                <h5 className="text-black">Open</h5>
              </div>
              <Link to={navigation} className="absolute inset-0 bg-black opacity-90 rounded pr-10 pl-10 flex justify-center items-center group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer rounded border border-white-800">
                <h5 className="text-white font-bolder">Open</h5>
              </Link>
            </div>
          </div>
        </div>
        <div className='absolute top-0 right-0 bg-black p-2 border rounded-bl-lg w-40 flex items-center justify-center border-magenta'>
          <h5 className='text-xs text-white'><span className='opacity-60 mr-1'>Level: </span>{level}</h5>
        </div>
      </div>
    }
    </>
  );
};





