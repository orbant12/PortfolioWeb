
import React, {useState,useEffect} from 'react';
import "../CSS/fullstack.css"

import CourseraLogo from "../assets/Coursera.png"
import SurferboyLogo from "../assets/SurferboyLogo.jpeg"
import Modal from '@mui/material/Modal';
import ClippifyImage from "../assets/Clippify-log.svg"
import { Link } from 'react-router-dom';
import { AmazonwebservicesOriginalWordmark, Css3Original, ExpressOriginal, FirebaseOriginal, FlaskOriginal, GoOriginal, Html5Original, JavascriptOriginal, NextjsOriginal, NodejsOriginal, NumpyOriginal, OpenclOriginal, OpencvOriginal, PandasOriginal, PythonOriginal, ReactOriginal, TailwindcssOriginal, TensorflowOriginal, TypescriptOriginal, VitejsOriginal, ViteOriginal } from 'devicons-react';


import AndrewNg from "../assets/AndrewNg.jpeg"
//KAGGLE LOGOS
import ML_Introduction from "../assets/kaggle/ML_Introduction.png"
import Pandas from "../assets/kaggle/Pandas.png"
import ML_Intermediate from "../assets/kaggle/ML_Internmediate.png"
import DL_Introduction from "../assets/kaggle/DeepLearning_Introduction.png"

//KAGGLE CERTS
import ML_Intermediate_cert from "../assets/kaggle/certs/ML_Intermediate_cert.png"
import ML_Introduction_cert from "../assets/kaggle/certs/ML_Intro_cert.png"
import Pandas_cert from "../assets/kaggle/certs/Pandas_cert.png"
import DL_Introduction_cert from "../assets/kaggle/certs/DL_Intro_cert.png"

//COURSERA CERTS
import Suprevised_cert from "../assets/coursera/certs/Suprevised_cert.png"
import Advanced_Algo_cert from "../assets/coursera/certs/Advanced_Algo_cert.png"



const MLPage = () => {

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
    <div className='flex flex-col w-[70%] p-0 mt-20'>
        <h1 className='text-white text-md'>Main Menu</h1>
        <h1 className='text-white text-4xl'>Machine Learning</h1>
        <div className="flex flex-col mt-10 items-center p-5 bg-gray-900 rounded lg:flex-row lg:justify-between ">
          <h1 className="text-white text-md opacity-85 self-center font-bold lg:self-left">Tools: </h1>
            <div className="flex flex-row items-center p-5 bg-gray-900 rounded">
              <JavascriptOriginal className="mr-8 mt-4 lg:mt-0" size={35} />
              <PythonOriginal className="mr-8 mt-4 lg:mt-0" size={35} />
            </div>
              <h3 className="text-white lg:ml-0 lg:mt-0 lg:mb-0 my-5">•</h3>
              <div className="flex flex-wrap items-center p-3 bg-gray-600 rounded lg:ml-8 justify-center">
                <TensorflowOriginal className="m-3 mx-4" size={35} />
                <NumpyOriginal color='white' className='m-3 mx-4' size={35} />
                <PandasOriginal className='m-3 mx-4' size={35} />
                <OpencvOriginal className='m-3 mx-4' size={35} />
              </div>
      </div>

    </div>
    <div className='flex flex-col items-center border-t mt-16'>
      <h1 className='text-3xl font-medium m-10 p-3 text-white' >Projects</h1>
      <ProductView 
        icon={ClippifyImage}
        title="Skin Cancer Detection"
        description=""
        tags={["CNN", "ISIC Skin Cancer Dataset"]}
        navigation={"fullstack-projects/lupody"}
        level={"Senior"}
      />
      <ProductView 
        icon={ClippifyImage}
        title="Speech To Text"
        description=""
        tags={["RNN","LJSpeech Dataset"]}
        navigation={"/fullstack-projects/clippify"}
        level={"Intermediate"}
      />
      <ProductView 
        icon={ClippifyImage}
        title="Object Detection"
        description=""
        tags={["SSD"]}
        navigation={"/fullstack-projects/lupody"}
        level={"Beginner"}
      />
      <ProductView 
        icon={ClippifyImage}
        title="Kaggle Competitions"
        description="A comprehensive course on Fullstack Web Development, covering Frontend, Backend, and Databases."
        tags={["React & Vite", "JS, CSS & Tailwind, HTML", "Figma", "Spline 3D"]}
        navigation={"/lupody"}
        level={"Beginner"}
      />
    </div>



    {/*3.) Learning-Path SECTION*/}
    <div className='fullstack-learning'>
        <div className='flex flex-col items-center mb-10 '>
          <h5 style={{border:"0px solid black",padding:"5px 10px",borderRadius:10,opacity:0.4,boxShadow: "inset 1px 1px 5px 1px white",color:"white"}}>Click the icon for Certificate</h5>
          <h1 style={{marginTop:10, color:"white",fontSize:20}}>My Learning Journey</h1>
        </div>

        <div className='learning-path'>

        {/*ML-SPECIALIZATION - COURSERA COURSE*/}
        <ol class="timeline">

        {/*COURSE TITLE*/}
        <li class="timeline-item">
            <span class="timeline-item-icon | avatar-icon" onClick={() => handleVisitClick("ML-spec")}>
            <i class="avatar">
                <img src={CourseraLogo} />
            </i>
            </span>
            <div class="timeline-item-description">
            <span><a href="https://www.coursera.org/specializations/machine-learning-introduction">Deep Learning's</a> -   <a style={{color:"black"}} className='learned-course-title' href="https://www.coursera.org/specializations/machine-learning-introduction">🧠 Machine Learning Specialization 🧠</a> </span>
            </div>
        </li>

        {/*SUPREVISED LEARNING - COURSE*/}
        <li class="timeline-item">
            <span class="timeline-item-icon | faded-icon" onClick={() => handleOpen(Suprevised_cert)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 24" width="24" height="24">
            <path class="cls-1" d="M28,5H4A2,2,0,0,0,2,7V24a2,2,0,0,0,2,2H18v3a1,1,0,0,0,.53.88,1,1,0,0,0,1-.05L22,28.2l2.45,1.63A1,1,0,0,0,26,29V26h2a2,2,0,0,0,2-2V7A2,2,0,0,0,28,5ZM22.59,21.94a3,3,0,1,1,2.35-2.35A3,3,0,0,1,22.59,21.94ZM24,27.13l-1.45-1a1,1,0,0,0-1.1,0l-1.45,1V23.58a5,5,0,0,0,4,0ZM28,24H26V22s0,0,0,0a4.93,4.93,0,0,0,.88-4.1A5,5,0,0,0,17,19a4.93,4.93,0,0,0,1,3s0,0,0,0v2H4V7H28Z"/><path class="cls-1" d="M7,12H25a1,1,0,0,0,0-2H7a1,1,0,0,0,0,2Z"/><path class="cls-1" d="M7,16h8a1,1,0,0,0,0-2H7a1,1,0,0,0,0,2Z"/><path class="cls-1" d="M7,20h8a1,1,0,0,0,0-2H7a1,1,0,0,0,0,2Z"/>
            </svg>
            </span>
            <div class="timeline-item-description">
            <i class="avatar | small">
                <img src={AndrewNg} />
            </i>
            <span><a style={{color:"white"}} className='learned-course-lesson-title' href="https://www.coursera.org/learn/machine-learning?specialization=machine-learning-introduction">Suprevised Machine Learning Regression and Classification</a> •-• <a href="https://www.coursera.org/instructor/andrewng">Andrew Ng</a> •-• <time datetime="21-01-2021">Dec 21, 2023</time></span>
            </div>
        </li>
        {/*ADVANCED ALGO - COURSE*/}
        <li class="timeline-item">
            <span class="timeline-item-icon | faded-icon" onClick={() => handleOpen(Advanced_Algo_cert)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 24" width="24" height="24">
            <path class="cls-1" d="M28,5H4A2,2,0,0,0,2,7V24a2,2,0,0,0,2,2H18v3a1,1,0,0,0,.53.88,1,1,0,0,0,1-.05L22,28.2l2.45,1.63A1,1,0,0,0,26,29V26h2a2,2,0,0,0,2-2V7A2,2,0,0,0,28,5ZM22.59,21.94a3,3,0,1,1,2.35-2.35A3,3,0,0,1,22.59,21.94ZM24,27.13l-1.45-1a1,1,0,0,0-1.1,0l-1.45,1V23.58a5,5,0,0,0,4,0ZM28,24H26V22s0,0,0,0a4.93,4.93,0,0,0,.88-4.1A5,5,0,0,0,17,19a4.93,4.93,0,0,0,1,3s0,0,0,0v2H4V7H28Z"/><path class="cls-1" d="M7,12H25a1,1,0,0,0,0-2H7a1,1,0,0,0,0,2Z"/><path class="cls-1" d="M7,16h8a1,1,0,0,0,0-2H7a1,1,0,0,0,0,2Z"/><path class="cls-1" d="M7,20h8a1,1,0,0,0,0-2H7a1,1,0,0,0,0,2Z"/>
            </svg>
            </span>
            <div class="timeline-item-description">
            <i class="avatar | small">
                <img src={AndrewNg} />
            </i>
            <span><a style={{color:"white"}} className='learned-course-lesson-title' href="https://www.coursera.org/learn/advanced-learning-algorithms?specialization=machine-learning-introduction">Advanced Leaning Algorithms</a> •-• <a href="https://www.coursera.org/instructor/andrewng">Andrew Ng</a> •-• <time datetime="20-01-2021">Dec 24, 2023</time></span>
            </div>
        </li>

        {/*OPINNION*/}
        <li class="timeline-item | extra-space">
            <span class="timeline-item-icon | filled-icon" onClick={() => handleVisitClick("CourseraNotes")}>
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
                <span>What I've learned from this course </span>
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
                <button class="button">⭐⭐⭐⭐⭐</button>
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

        <div style={{height:2, width:"65%",backgroundColor:"white",marginTop:20}} />

        {/*DATA-SCIENCE - KAGGLE COURSES*/}
        <ol class="timeline">
        {/*COURSE TITLE*/}
        <li class="timeline-item">
            <span class="timeline-item-icon | avatar-icon" onClick={() => handleVisitClick("KaggleNotes")}>
            <i class="avatar">
                <img src={CourseraLogo} />
            </i>
            </span>
            <div class="timeline-item-description">
            <span><a href="https://www.kaggle.com/learn">Kaggle's</a> - <a style={{color:"white"}} className='learned-course-title text-xs md:text-lg' href="https://www.kaggle.com/learn">🤖 Courses 🤖</a></span>
            </div>
        </li>

        {/*INTRO-ML - COURSE*/}
        <li class="timeline-item">
            <span class="timeline-item-icon | faded-icon" onClick={() => handleOpen(ML_Introduction_cert)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 24" width="24" height="24">
            <path class="cls-1" d="M28,5H4A2,2,0,0,0,2,7V24a2,2,0,0,0,2,2H18v3a1,1,0,0,0,.53.88,1,1,0,0,0,1-.05L22,28.2l2.45,1.63A1,1,0,0,0,26,29V26h2a2,2,0,0,0,2-2V7A2,2,0,0,0,28,5ZM22.59,21.94a3,3,0,1,1,2.35-2.35A3,3,0,0,1,22.59,21.94ZM24,27.13l-1.45-1a1,1,0,0,0-1.1,0l-1.45,1V23.58a5,5,0,0,0,4,0ZM28,24H26V22s0,0,0,0a4.93,4.93,0,0,0,.88-4.1A5,5,0,0,0,17,19a4.93,4.93,0,0,0,1,3s0,0,0,0v2H4V7H28Z"/><path class="cls-1" d="M7,12H25a1,1,0,0,0,0-2H7a1,1,0,0,0,0,2Z"/><path class="cls-1" d="M7,16h8a1,1,0,0,0,0-2H7a1,1,0,0,0,0,2Z"/><path class="cls-1" d="M7,20h8a1,1,0,0,0,0-2H7a1,1,0,0,0,0,2Z"/>
            </svg>


            </span>
            <div class="timeline-item-description">
            <i class="avatar | small">
                <img src={ML_Introduction} />
            </i>
            <span> <a href="https://www.kaggle.com/learn/intro-to-machine-learning" style={{color:"white"}} className='learned-course-lesson-title' >Intro to Machine Learning </a>•-• <time datetime="21-01-2021">Jan 14, 2024</time></span>
            </div>
        </li>
        {/*PANDAS - COURSE*/}
        <li class="timeline-item">
            <span class="timeline-item-icon | faded-icon" onClick={() => handleOpen(Pandas_cert)} >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 24" width="24" height="24">
                <path class="cls-1" d="M28,5H4A2,2,0,0,0,2,7V24a2,2,0,0,0,2,2H18v3a1,1,0,0,0,.53.88,1,1,0,0,0,1-.05L22,28.2l2.45,1.63A1,1,0,0,0,26,29V26h2a2,2,0,0,0,2-2V7A2,2,0,0,0,28,5ZM22.59,21.94a3,3,0,1,1,2.35-2.35A3,3,0,0,1,22.59,21.94ZM24,27.13l-1.45-1a1,1,0,0,0-1.1,0l-1.45,1V23.58a5,5,0,0,0,4,0ZM28,24H26V22s0,0,0,0a4.93,4.93,0,0,0,.88-4.1A5,5,0,0,0,17,19a4.93,4.93,0,0,0,1,3s0,0,0,0v2H4V7H28Z"/><path class="cls-1" d="M7,12H25a1,1,0,0,0,0-2H7a1,1,0,0,0,0,2Z"/><path class="cls-1" d="M7,16h8a1,1,0,0,0,0-2H7a1,1,0,0,0,0,2Z"/><path class="cls-1" d="M7,20h8a1,1,0,0,0,0-2H7a1,1,0,0,0,0,2Z"/>
            </svg>
            </span>
            <div class="timeline-item-description">
            <i class="avatar | small">
                <img src={Pandas} />
            </i>
            <span> <a href="https://www.kaggle.com/learn/pandas" style={{color:"white"}} className='learned-course-lesson-title'>Pandas</a> •-• <time datetime="20-01-2021">Jan 15, 2024</time></span>
            </div>
        </li>
        {/*INTERM-ML - COURSE*/}
        <li class="timeline-item">
            <span class="timeline-item-icon | faded-icon" onClick={() => handleOpen(ML_Intermediate_cert)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 24" width="24" height="24">
            <path class="cls-1" d="M28,5H4A2,2,0,0,0,2,7V24a2,2,0,0,0,2,2H18v3a1,1,0,0,0,.53.88,1,1,0,0,0,1-.05L22,28.2l2.45,1.63A1,1,0,0,0,26,29V26h2a2,2,0,0,0,2-2V7A2,2,0,0,0,28,5ZM22.59,21.94a3,3,0,1,1,2.35-2.35A3,3,0,0,1,22.59,21.94ZM24,27.13l-1.45-1a1,1,0,0,0-1.1,0l-1.45,1V23.58a5,5,0,0,0,4,0ZM28,24H26V22s0,0,0,0a4.93,4.93,0,0,0,.88-4.1A5,5,0,0,0,17,19a4.93,4.93,0,0,0,1,3s0,0,0,0v2H4V7H28Z"/><path class="cls-1" d="M7,12H25a1,1,0,0,0,0-2H7a1,1,0,0,0,0,2Z"/><path class="cls-1" d="M7,16h8a1,1,0,0,0,0-2H7a1,1,0,0,0,0,2Z"/><path class="cls-1" d="M7,20h8a1,1,0,0,0,0-2H7a1,1,0,0,0,0,2Z"/>
            </svg>
            </span>
            <div class="timeline-item-description">
            <i class="avatar | small">
                <img src={ML_Intermediate} />
            </i>
            <span> <a href="https://www.kaggle.com/learn/intermediate-machine-learning" style={{color:"white"}} className='learned-course-lesson-title'>Intermediate Machine Learning</a> •-• <time datetime="20-01-2021">Jan 14, 2024</time></span>
            </div>
        </li>
        {/*INTRO-DL - COURSE*/}
        <li class="timeline-item">
            <span class="timeline-item-icon | faded-icon" onClick={() => handleOpen(DL_Introduction_cert)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 24" width="24" height="24">
            <path class="cls-1" d="M28,5H4A2,2,0,0,0,2,7V24a2,2,0,0,0,2,2H18v3a1,1,0,0,0,.53.88,1,1,0,0,0,1-.05L22,28.2l2.45,1.63A1,1,0,0,0,26,29V26h2a2,2,0,0,0,2-2V7A2,2,0,0,0,28,5ZM22.59,21.94a3,3,0,1,1,2.35-2.35A3,3,0,0,1,22.59,21.94ZM24,27.13l-1.45-1a1,1,0,0,0-1.1,0l-1.45,1V23.58a5,5,0,0,0,4,0ZM28,24H26V22s0,0,0,0a4.93,4.93,0,0,0,.88-4.1A5,5,0,0,0,17,19a4.93,4.93,0,0,0,1,3s0,0,0,0v2H4V7H28Z"/><path class="cls-1" d="M7,12H25a1,1,0,0,0,0-2H7a1,1,0,0,0,0,2Z"/><path class="cls-1" d="M7,16h8a1,1,0,0,0,0-2H7a1,1,0,0,0,0,2Z"/><path class="cls-1" d="M7,20h8a1,1,0,0,0,0-2H7a1,1,0,0,0,0,2Z"/>
            </svg>
            </span>
            <div class="timeline-item-description">
            <i class="avatar | small">
                <img src={DL_Introduction} />
            </i>
            <span> <a href="https://www.kaggle.com/learn/intro-to-deep-learning" style={{color:"white"}} className='learned-course-lesson-title'>Intro to Deep Learning</a> •-• <time datetime="20-01-2021">Jan 16, 2024</time></span>
            </div>
        </li>

        {/*OIPINNION*/}
        <li class="timeline-item | extra-space">
            <span class="timeline-item-icon | filled-icon" onClick={() => handleVisitClick("KaggleNotes")}>
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
            <button class="show-replies" onClick={() => handleVisitClick("KaggleNotes")}>
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
  </div>
)
}


export default MLPage;


const ProductView = ({ icon, title, description, tags, navigation, level }) => {
  return (
<div className="flex flex-col md:flex-row md:items-center p-10 border border-magenta rounded shadow-lg mb-10 bg-gradient-primary relative w-[90%] md:w-[70%]">
  <div className="flex flex-col flex-grow">
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


  );
};


