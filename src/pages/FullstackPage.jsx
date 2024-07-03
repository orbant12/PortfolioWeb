
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


const FullstackPage = () => {

  //STATE FOR Data Representation
  const [open, setOpen] = useState(false);

  const [modelInput, setModelInput] = useState("")

  //<**********-DATA-*****************>


const handleOpen = (certInput) => {
  setOpen(true);
  setModelInput(certInput)
};
const handleClose = () => setOpen(false);


return(
  <div className="fullstack">
    {/*1.) Hero SECTION*/}
    <div className='fullstack-hero'>
      <div className='hero-left'>
        <h1 className='text-white text-xl'>Fullstack Development</h1>
        <h5>Let me introduce to you my fullstack development journey ...</h5>
        <div className='experience-row'>
          <h4 className='text-white opacity-60'>Experience Level:</h4>
          <h5 className='filled_experience'>• • • •</h5>
          <h5 className='no_filled_experience'>•</h5>
        </div>
      </div> 

      <div className='hero-right'>
        <img src={betterByteLogo} alt="Fullstack Development" />
      </div>   
      
    </div>
    <div className='flex flex-col items-center border-t mt-16'>
      <h1 className='text-xl font-medium m-10 p-3 text-white' >Projects</h1>
      <ProductView 
        icon={ClippifyImage}
        title="Clippify"
        description="A comprehensive course on Fullstack Web Development, covering Frontend, Backend, and Databases."
        tags={["Web Development", "Frontend", "Backend", "Databases"]}
        navigation={"/fullstack-projects/clippify"}
      />
      <ProductView 
        icon={ClippifyImage}
        title="Lupody"
        description="A comprehensive course on Fullstack Web Development, covering Frontend, Backend, and Databases."
        tags={["Web Development", "Frontend", "Backend", "Databases"]}
        navigation={"/fullstack-projects/lupody"}
      />
      <ProductView 
        icon={ClippifyImage}
        title="Pocket Protect"
        description="A comprehensive course on Fullstack Web Development, covering Frontend, Backend, and Databases."
        tags={["Web Development", "Frontend", "Backend", "Databases"]}
        navigation={"fullstack-projects/lupody"}
      />
      <ProductView 
        icon={ClippifyImage}
        title="Portfolio Website"
        description="A comprehensive course on Fullstack Web Development, covering Frontend, Backend, and Databases."
        tags={["Web Development", "Frontend", "Backend", "Databases"]}
        navigation={"/lupody"}
      />
    </div>



    {/*3.) Learning-Path SECTION*/}
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
                    1. <span className='comment-highlight'>Supervised Learning:</span> Understanding how to train algorithms to make predictions based on labeled data. <br />
                    • Linear Regression <br />
                    • Gradient Descent <br />
                    • Logistic Regression <br />
                    • Decision Trees <br />
                    • Skit-learn <br />
                    <br />
              
                    2. <span className='comment-highlight'>Neural Networks:</span> Building blocks of deep learning, understanding their structure, and how they learn from data. <br />
                    • CNN <br />
                    • Tensorflow <br />
                    <br />
                    3. <span className='comment-highlight'>Model Evaluation: </span> Techniques for assessing the performance of machine learning models and choosing the right one for your task. <br /> <br />
                    4. <span className='comment-highlight'>Regularization:</span>  Methods to prevent overfitting and improve the generalization of models. <br /> <br />
                    5. <span className='comment-highlight'>Clustering:</span> Algorithms for grouping similar data points together. <br /> <br />
                    6. <span className='comment-highlight'>Dimensionality Reduction:</span> Techniques for reducing the number of features in a dataset while preserving its important characteristics. <br /> <br />
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

        <hr />

        <ol class="timeline">
          <li class="timeline-item">
            <span class="timeline-item-icon | avatar-icon">
              <i class="avatar">
                <img src={UdemyLogo} />
              </i>
            </span>
            <div class="timeline-item-description">
              <span><a href="#">Andrew Ng's</a> moved <a href="#">Eric Lubin</a> to <a className='learned-course-title' href="#">📚 Technical Test</a> on <time datetime="20-01-2021">Jan 20, 2021</time></span>
            </div>
          </li>
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
              <span>Intro to Machine Learning - <time datetime="21-01-2021">Dec 11, 2023</time></span>
            </div>
          </li>
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
              <span>Pandas - <time datetime="20-01-2021">Jan 20, 2021</time></span>
            </div>
          </li>
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
              <span>Intermediate Machine Learning - <time datetime="20-01-2021">Jan 20, 2021</time></span>
            </div>
          </li>
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
                <p>I've sent him the assignment we discussed recently, he is coming back to us this week. Regarding to our last call, I really enjoyed talking to him and so far he has the profile we are looking for. Can't wait to see his technical test, I'll keep you posted and we'll debrief it all together!😊</p>
                <button class="button">👏 2</button>
                <button class="button | square">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM7 12a5 5 0 0 0 10 0h-2a3 3 0 0 1-6 0H7z" />
                  </svg>
                </button>
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
  </div>
)
}

export default FullstackPage;



const ProductView = ({ icon, title, description, tags, navigation }) => {
  return (
    <div className="flex items-start p-10 border border-gray-200 items-center rounded shadow-lg mb-10">
      <div className="flex flex-col">
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
      <div className="flex flex-col justify-center">
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
    </div>
  );
};





