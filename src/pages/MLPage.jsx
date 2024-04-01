
import React, {useState,useEffect} from 'react';
import "../CSS/fullstack.css"
import betterByteLogo from "../assets/BetterByteLogo.png"
import { FlaskOriginal, JupyterOriginal, JupyterOriginalWordmark, KaggleOriginal, KaggleOriginalWordmark, MysqlOriginal, MysqlOriginalWordmark, NumpyOriginal, NumpyOriginalWordmark, OpencvOriginal, OpencvOriginalWordmark, OpenstackOriginal, PandasOriginal, PandasOriginalWordmark, PycharmOriginalWordmark, PythonOriginal, PythonOriginalWordmark, PytorchOriginal, ReactOriginal, SqliteOriginal, TensorflowOriginal, TensorflowOriginalWordmark } from 'devicons-react';
import RNN_Image from "../assets/RNN6.png"
import Kaggle_Image from "../assets/kaggle.png"
import OBJ_Image from "../assets/OBJ.png"
import AndrewNg from "../assets/AndrewNg.jpeg"
import CourseraLogo from "../assets/Coursera.png"
import SurferboyLogo from "../assets/SurferboyLogo.jpeg"
import Modal from '@mui/material/Modal';


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

import { SocialIcon } from "react-social-icons";

const MLPage = () => {

  //STATE FOR Data Representation

  const [isSelected, setIsSelected] = useState("kaggle");

  const [open, setOpen] = useState(false);

  const [modelInput, setModelInput] = useState("")

  //<**********-DATA-*****************>

  const Transcript_data = {
    "project": "RNN",
    "total_users": "90%",
    "record_live_users": "Clippify App",
    "thumbnail":RNN_Image,
  }

  const Kaggle_data = {
    "project": 11,
    "total_users": 0,
    "record_live_users": 0,
    "thumbnail":Kaggle_Image,
  }

  const ObjectD_data = {
    "project": 0,
    "total_users": 0,
    "record_live_users": 0,
    "thumbnail":OBJ_Image,
  }

  const handleVisitClick = (navigationTitle) => {
    //Coursera Notes
    if(navigationTitle == "CourseraNotes"){
        window.location.href = "https://drive.google.com/drive/folders/1bwS67OsNGfGbfM7_NYNljrxW4RCnttl-?usp=sharing"
    }

    //Kaggle Notes
    if(navigationTitle == "KaggleNotes"){
        window.location.href = "https://www.notion.so/Kaggle-a8855b09448a4ae6b3c614b08dc91919?pvs=4"
    }

     //Kaggle orbnat12
    if(navigationTitle == "KaggleMe"){
        window.location.href = "https://www.kaggle.com/orbntams"
    }

    //ML SPECIALIZATION
    if(navigationTitle == "ML-spec"){
      window.location.href = "https://www.coursera.org/specializations/machine-learning-introduction"
    }

        //ML SPECIALIZATION
        if(navigationTitle == "KaggleLearn"){
          window.location.href = "https://www.kaggle.com/learn"
        }
}

const handleOpen = (certInput) => {
  setOpen(true);
  setModelInput(certInput)
};
const handleClose = () => setOpen(false);


return(
  <div className="fullstack">
    <div className='fullstack-hero'>
      <div className='hero-left'>
        <h1>Machine Learning</h1>
        <h5>Let me introduce to you my fullstack development journey ...</h5>
        <div className='experience-row'>
          <h4>Experience Level:</h4>
          <h5 className='filled_experience'>• • •</h5>
          <h5 className='no_filled_experience'>• •</h5>
        </div>
      </div> 

      <div className='hero-right'>
        <img src={betterByteLogo} alt="Fullstack Development" />
      </div>   
      
    </div> 
    <div className='fullstack-stat'>
      <div className='stat-title'>
        <h6>icon</h6>
        <h5>Who am I</h5>
        <h2>Get Useful Insight</h2>
      </div>

      <div className="services-pick-fullstack">
                <h3 onClick={() => setIsSelected("transcript")} className={isSelected === "transcript" ? "selected" : "select"}>Transcript Exporter</h3>
                <h3 onClick={() => setIsSelected("kaggle")} className={isSelected === "kaggle" ? "selected" : "select"}>Kaggle</h3>
                <h3 onClick={() => setIsSelected("object")} className={isSelected === "object" ? "selected" : "select"}>Object Detetction</h3>
      </div>
    { isSelected == "transcript" ? (
      <>
      <div className='stat-middle'>
        <div className='middle-table'>
            <div className='table-row'>
              <h2>Solution: </h2>
              <h4>{Transcript_data.project}</h4>
            </div>

            <div className='table-row'>
              <h2>Model Accuracy: </h2>
              <h4>{Transcript_data.total_users}</h4>
            </div>

            <div className='table-row'>
              <h2>API: </h2>
              <h4>{Transcript_data.record_live_users}</h4>
            </div>

            <div className="social_accs">
              <SocialIcon url="https://github.com/orbant12/Clippify---REST-API" />
              <SocialIcon url="https://instagram.com/clippify.app" />                   
            </div>
        </div>

        <div className='middle-thumbnail'>
            <img src={Transcript_data.thumbnail} className='thumbnail-image' alt="CTF" />
            <div className='visit-btn'> 
                <h3>See All</h3>
            </div>
            <h5 style={{position:"absolute",color:"black",marginTop:-290,borderBottom:"1px solid black",opacity:"0.3"}}>Click to see more</h5>
        </div> 
      </div>

      <div className='language-row-fullstack'>
        <PythonOriginal size={50} />
        <JupyterOriginal size={50}  />
        <TensorflowOriginal size={50} />
        <FlaskOriginal size={50} />
      </div>

      <div className='stat-bottom'>
        <div className='bottom-box' style={{background: "linear-gradient(to right, cyan 80%, transparent 100%)"}}>
            <h3>Python</h3>
            <h6>90%</h6>
        </div>

        <div className='bottom-box' style={{background: "linear-gradient(to right, cyan 100%, transparent 100%)"}}>
          <h3>Jupyter Env.</h3>
          <h6>100%</h6>
        </div>

        <div className='bottom-box' style={{background: "linear-gradient(to right, cyan 50%, transparent 100%)"}}>
          <h3>Tensorflow</h3>
          <h6>80%</h6>
        </div>

        <div className='bottom-box' style={{background: "linear-gradient(to right, cyan 50%, transparent 100%)"}}>
          <h3>Flask</h3>
          <h6>80%</h6>
        </div>

      </div>

      <div className='tag-section'>
        <div className='tagbar'>
          <h5>Skit Learn Libary</h5>
        </div>

        <div className='tagbar'>
          <h5>Git</h5>
        </div>

        <div className='tagbar'>
          <h5>Anaconda</h5>
        </div>

        <div className='tagbar'>
          <h5>Convolutional Neural Network</h5>
        </div>

        <div className='tagbar'>
          <h5>OS Script Automation</h5>
        </div>

        <div className='tagbar'>
          <h5>Own Data Collection</h5>
        </div>

        <div className='tagbar'>
          <h5>NVDIA Cuda</h5>
        </div> 
      </div>
      </>
    ):isSelected == "kaggle" ? (
      (
        <>
        <div className='stat-middle'>
          <div className='middle-table'>
              <div className='table-row'>
                    <h2>Best Placement: </h2>
                    <h4>{Kaggle_data.project}</h4>
              </div>
  
              <div className='table-row'>
                    <h2>Competition: </h2>
                    <h4>{Kaggle_data.total_users}</h4>
              </div>
  
              <div className='table-row'>
                    <h2>Deep Leaning: </h2>
                    <h4>{Kaggle_data.record_live_users}</h4>
              </div>

              <div className='table-row'>
                    <h2>ML: </h2>
                    <h4>{Kaggle_data.record_live_users}</h4>
              </div>

              <div className="social_accs">
                <SocialIcon url="https://github.com/orbant12/Clippify---REST-API" />
                <SocialIcon url="https://instagram.com/clippify.app" />
                <KaggleOriginal size={30} style={{marginLeft:10,cursor:"pointer"}} onClick={() => handleVisitClick("KaggleMe")} />              
              </div>
          </div>
  
          <div className='middle-thumbnail'>
            <img src={Kaggle_data.thumbnail} className='thumbnail-image' alt="CTF" />
            <div className='visit-btn'> 
                <h3>See All</h3>
            </div>
            <h5 style={{position:"absolute",color:"black",marginTop:-290,borderBottom:"1px solid black",opacity:"0.3"}}>Click to see more</h5>
          </div> 
        </div>
  
        <div className='language-row-fullstack'>
          <PythonOriginal size={50} />
          <TensorflowOriginal size={50}  />
          <MysqlOriginalWordmark size={50}  />
          <PandasOriginalWordmark size={50}  />
          <NumpyOriginalWordmark size={50}  />
        </div>
  
        <div className='stat-bottom'>

          <div className='bottom-box' style={{background: "linear-gradient(to right, cyan 80%, transparent 100%)"}}>
              <h3>Python</h3>
              <h6>90%</h6>
          </div>

          <div className='bottom-box' style={{background: "linear-gradient(to right, cyan 50%, transparent 100%)"}}>
            <h3>Tensorflow</h3>
            <h6>80%</h6>
          </div>

          <div className='bottom-box' style={{background: "linear-gradient(to right, cyan 100%, transparent 100%)"}}>
            <h3>MySQL</h3>
            <h6>100%</h6>
          </div>

          <div className='bottom-box' style={{background: "linear-gradient(to right, cyan 100%, transparent 100%)"}}>
            <h3>Pandas</h3>
            <h6>100%</h6>
          </div>

          <div className='bottom-box' style={{background: "linear-gradient(to right, cyan 100%, transparent 100%)"}}>
            <h3>Numpy</h3>
            <h6>100%</h6>
          </div>

        </div>

        <div className='tag-section'>

          <div className='tagbar'>
            <h5>Skit Learn Libary</h5>
          </div>

          <div className='tagbar'>
            <h5>Git</h5>
          </div>

          <div className='tagbar'>
            <h5>Anaconda</h5>
          </div>

          <div className='tagbar'>
            <h5>Convolutional Neural Network</h5>
          </div>

          <div className='tagbar'>
            <h5>OS Script Automation</h5>
          </div>

          <div className='tagbar'>
            <h5>Own Data Collection</h5>
          </div>

          <div className='tagbar'>
            <h5>NVDIA Cuda</h5>
          </div> 
        </div>

        </>
      )
    ):isSelected == "object" ? (
      (
        <>
        <div className='stat-middle'>
          <div className='middle-table'>
              <div className='table-row'>
                    <h2>Project: </h2>
                    <h4>{ObjectD_data.project}</h4>
              </div>
  
              <div className='table-row'>
                    <h2>Registered Users: </h2>
                    <h4>{ObjectD_data.total_users}</h4>
              </div>
  
              <div className='table-row'>
                    <h2>Record traffic: </h2>
                    <h4>{ObjectD_data.record_live_users}</h4>
              </div>

              <div className="social_accs">
                <SocialIcon url="https://github.com/orbant12/Clippify---REST-API" />
                <SocialIcon url="https://instagram.com/clippify.app" />                   
              </div>  
          </div>
  
          <div className='middle-thumbnail'>
            <img src={ObjectD_data.thumbnail} className='thumbnail-image' alt="CTF" />
            <div className='visit-btn'> 
                <h3>See All</h3>
            </div>
            <h5 style={{position:"absolute",color:"black",marginTop:-290,borderBottom:"1px solid black",opacity:"0.3"}}>Click to see more</h5>
          </div> 
        </div>
  
        <div className='language-row-fullstack'>
          <PythonOriginal size={50} />
          <JupyterOriginalWordmark size={50}  />
          <TensorflowOriginal size={50}  />
          <OpencvOriginalWordmark size={50}  />
        </div>

        <div className='stat-bottom'>
          
          <div className='bottom-box' style={{background: "linear-gradient(to right, cyan 80%, transparent 100%)"}}>
              <h3>Python</h3>
              <h6>90%</h6>
          </div>

          <div className='bottom-box' style={{background: "linear-gradient(to right, cyan 100%, transparent 100%)"}}>
              <h3>Jupyter Env</h3>
              <h6>100%</h6>
          </div>

          <div className='bottom-box' style={{background: "linear-gradient(to right, cyan 50%, transparent 100%)"}}>
            <h3>Tensorflow</h3>
            <h6>80%</h6>
          </div>

          <div className='bottom-box' style={{background: "linear-gradient(to right, cyan 100%, transparent 100%)"}}>
            <h3>OpenCV</h3>
            <h6>100%</h6>
          </div>

        </div>

        <div className='tag-section'>

          <div className='tagbar'>
            <h5>Skit Learn Libary</h5>
          </div>

          <div className='tagbar'>
            <h5>Git</h5>
          </div>

          <div className='tagbar'>
            <h5>Anaconda</h5>
          </div>

          <div className='tagbar'>
            <h5>Convolutional Neural Network</h5>
          </div>

          <div className='tagbar'>
            <h5>OS Script Automation</h5>
          </div>

          <div className='tagbar'>
            <h5>Own Data Collection</h5>
          </div>

          <div className='tagbar'>
            <h5>NVDIA Cuda</h5>
          </div> 
        </div>
        </>
      )
    ):null}
    </div>
    <div className='fullstack-learning'>
      <h5 style={{border:"0px solid black",padding:"5px 10px",borderRadius:10,opacity:0.4,boxShadow: "inset 1px 1px 5px 1px black"}}>Click the icon for Certificate</h5>
        <h1 style={{marginTop:10}}>My Learning Journey</h1>

        <div className='learning-path'>
        <ol class="timeline">
          <li class="timeline-item">
            <span class="timeline-item-icon | avatar-icon" onClick={() => handleVisitClick("ML-spec")}>
              <i class="avatar">
                <img src={CourseraLogo} />
              </i>
            </span>
            <div class="timeline-item-description">
              <span><a href="https://www.coursera.org/specializations/machine-learning-introduction">Deep Learning's</a> -  🧠 <a style={{color:"black"}} href="https://www.coursera.org/specializations/machine-learning-introduction">Machine Learning Specialization</a> 🧠</span>
            </div>
          </li>
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
              <span><a style={{color:"black",opacity:0.6,fontWeight:500}} href="https://www.coursera.org/learn/machine-learning?specialization=machine-learning-introduction">Suprevised Machine Learning Regression and Classification</a> •-• <a href="https://www.coursera.org/instructor/andrewng">Andrew Ng</a> •-• <time datetime="21-01-2021">Dec 21, 2023</time></span>
            </div>
          </li>
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
              <span><a style={{color:"black",opacity:0.6,fontWeight:500}} href="https://www.coursera.org/learn/advanced-learning-algorithms?specialization=machine-learning-introduction">Advanced Leaning Algorithms</a> •-• <a href="https://www.coursera.org/instructor/andrewng">Andrew Ng</a> •-• <time datetime="20-01-2021">Dec 24, 2023</time></span>
            </div>
          </li>
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

        <hr style={{border:"2px groove black"}} />

        <ol class="timeline">
          <li class="timeline-item">
            <span class="timeline-item-icon | avatar-icon" onClick={() => handleVisitClick("KaggleNotes")}>
              <i class="avatar">
                <img src={CourseraLogo} />
              </i>
            </span>
            <div class="timeline-item-description">
            <span><a href="https://www.kaggle.com/learn">Kaggle's</a> -  🤖 <a style={{color:"black"}} href="https://www.kaggle.com/learn">Courses</a> 🤖</span>
            </div>
          </li>
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
              <span> <a href="https://www.kaggle.com/learn/intro-to-machine-learning" style={{color:"black",opacity:0.6,fontWeight:500}}>Intro to Machine Learning </a>•-• <time datetime="21-01-2021">Jan 14, 2024</time></span>
            </div>
          </li>
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
              <span> <a href="https://www.kaggle.com/learn/pandas" style={{color:"black",opacity:0.6,fontWeight:500}}>Pandas</a> •-• <time datetime="20-01-2021">Jan 15, 2024</time></span>
            </div>
          </li>
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
              <span> <a href="https://www.kaggle.com/learn/intermediate-machine-learning" style={{color:"black",opacity:0.6,fontWeight:500}}>Intermediate Machine Learning</a> •-• <time datetime="20-01-2021">Jan 14, 2024</time></span>
            </div>
          </li>
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
              <span> <a href="https://www.kaggle.com/learn/intro-to-deep-learning" style={{color:"black",opacity:0.6,fontWeight:500}}>Intro to Deep Learning</a> •-• <time datetime="20-01-2021">Jan 16, 2024</time></span>
            </div>
          </li>
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
                <p>I've sent him the assignment we discussed recently, he is coming back to us this week. Regarding to our last call, I really enjoyed talking to him and so far he has the profile we are looking for. Can't wait to see his technical test, I'll keep you posted and we'll debrief it all together!😊</p>
                <button class="button">👏 2</button>
                <button class="button | square">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM7 12a5 5 0 0 0 10 0h-2a3 3 0 0 1-6 0H7z" />
                  </svg>
                </button>
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