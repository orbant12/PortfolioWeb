
import React, {useState,useEffect} from 'react';
import "../CSS/fullstack.css"
import betterByteLogo from "../assets/BetterByteLogo.png"
import { AndroidOriginal, AppleOriginal, ExpressOriginal, ExpressOriginalWordmark, FirebaseOriginal, ReactOriginal, ReactnavigationOriginal, SwiftOriginal, XcodeOriginal } from 'devicons-react';
import MetaLogo from "../assets/meta-logo.jpeg"
import CourseraLogo from "../assets/Coursera.png"
import SurferboyLogo from "../assets/SurferboyLogo.jpeg"
import UdemyLogo from "../assets/UdemyIMAGE.png"
import AngelaYu from "../assets/Angela_Yu.jpeg"
import Modal from '@mui/material/Modal';
import Fullstack_Udemy_cert from "../assets/UdemyIosCert.jpeg"
import Meta_cert from "../assets/META.jpg"

import { SocialIcon } from "react-social-icons";

const MobilePage = () => {

  //STATE FOR Data Representation

  const [isSelected, setIsSelected] = useState("clippifyMobile");

  const [open, setOpen] = useState(false);

  const [modelInput, setModelInput] = useState("")

  //<**********-DATA-*****************>

  const Clippify_data = {
    "project": "RNN",
    "total_users": "90%",
    "record_live_users": "Clippify App"
  }

  const Lupody_data = {
    "project": 11,
    "total_users": 0,
    "record_live_users": 0
  }

  const Portfolio_data = {
    "project": 0,
    "total_users": 0,
    "record_live_users": 0
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
        <h1>Mobile Development</h1>
        <h5>Let me introduce to you my fullstack development journey ...</h5>
        <div className='experience-row'>
          <h4>Experience Level:</h4>
          <h5 className='filled_experience'>• • • •</h5>
          <h5 className='no_filled_experience'>•</h5>
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
                <h3 onClick={() => setIsSelected("swiftUi")} className={isSelected === "swiftUi" ? "selected" : "select"}>Swift UI</h3>
                <h3 onClick={() => setIsSelected("clippifyMobile")} className={isSelected === "clippifyMobile" ? "selected" : "select"}>Clippify Mobile</h3>
                <h3 onClick={() => setIsSelected("lupodyMobile")} className={isSelected === "lupodyMobile" ? "selected" : "select"}>Lupody Mobile</h3>
      </div>
    { isSelected == "swiftUi" ? (
      <>
      <div className='stat-middle'>
        <div className='middle-table'>
            <div className='table-row'>
                  <h2>Solution: </h2>
                  <h4>{Clippify_data.project}</h4>
            </div>

            <div className='table-row'>
                  <h2>Model Accuracy: </h2>
                  <h4>{Clippify_data.total_users}</h4>
            </div>

            <div className='table-row'>
                  <h2>API: </h2>
                  <h4>{Clippify_data.record_live_users}</h4>
            </div>

            <div className="social_accs">
                <SocialIcon url="https://github.com/orbant12/Clippify---REST-API" />
                <SocialIcon url="https://instagram.com/clippify.app" />                   
            </div>  
        </div>

        <div className='middle-thumbnail'>
          
        </div> 
      </div>

      <div className='language-row-fullstack'>
        <SwiftOriginal size={50} />
        <XcodeOriginal size={50} />
        <FirebaseOriginal size={50} />
        <AppleOriginal size={50} />
      </div>

      <div className='stat-bottom'>
        <div className='bottom-box' style={{background: "linear-gradient(to right, cyan 30%, transparent 100%)"}}>
            <h3>SwiftUI</h3>
            <h6>60%</h6>
        </div>

        <div className='bottom-box' style={{background: "linear-gradient(to right, cyan 100%, transparent 100%)"}}>
          <h3>Xcode Env.</h3>
          <h6>100%</h6>
        </div>

        <div className='bottom-box' style={{background: "linear-gradient(to right, cyan 100%, transparent 100%)"}}>
          <h3>Firebase Cons.</h3>
          <h6>100%</h6>
        </div>

        <div className='bottom-box' style={{background: "linear-gradient(to right, cyan 100%, transparent 100%)"}}>
          <h3>Apple Developer</h3>
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
    ):isSelected == "clippifyMobile" ? (
      (
        <>
        <div className='stat-middle'>
          <div className='middle-table'>
              <div className='table-row'>
                    <h2>Best Placement: </h2>
                    <h4>{Lupody_data .project}</h4>
              </div>
  
              <div className='table-row'>
                    <h2>Competition: </h2>
                    <h4>{Lupody_data .total_users}</h4>
              </div>
  
              <div className='table-row'>
                    <h2>Deep Leaning: </h2>
                    <h4>{Lupody_data .record_live_users}</h4>
              </div>

              <div className='table-row'>
                    <h2>ML: </h2>
                    <h4>{Lupody_data .record_live_users}</h4>
              </div>


            <div className="social_accs">
                <SocialIcon url="https://github.com/orbant12/Clippify---REST-API" />
                <SocialIcon url="https://instagram.com/clippify.app" />                   
            </div>  
          </div>
  
          <div className='middle-thumbnail'>
            
          </div> 
        </div>
  
        <div className='language-row-fullstack'>
          <ReactOriginal size={50} />
          <ExpressOriginal size={50} />
          <FirebaseOriginal size={50} />
          <AppleOriginal size={50} />
          <AndroidOriginal size={50} />
        </div>
  
        <div className='stat-bottom'>
        <div className='bottom-box' style={{background: "linear-gradient(to right, cyan 100%, transparent 100%)"}}>
            <h3>React Native</h3>
            <h6>100%</h6>
        </div>

        <div className='bottom-box' style={{background: "linear-gradient(to right, cyan 60%, transparent 100%)"}}>
          <h3>Expo</h3>
          <h6>80%</h6>
        </div>

        <div className='bottom-box' style={{background: "linear-gradient(to right, cyan 100%, transparent 100%)"}}>
          <h3>Firebase Utils</h3>
          <h6>100%</h6>
        </div>

        <div className='bottom-box' style={{background: "linear-gradient(to right, cyan 100%, transparent 100%)"}}>
          <h3>Appstore</h3>
          <h6>100%</h6>
        </div>

        <div className='bottom-box' style={{background: "linear-gradient(to right, cyan 100%, transparent 100%)"}}>
          <h3>PlayStore</h3>
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
    ):isSelected == "lupodyMobile" ? (
      (
        <>
        <div className='stat-middle'>
          <div className='middle-table'>
              <div className='table-row'>
                    <h2>Project: </h2>
                    <h4>{Portfolio_data.project}</h4>
              </div>
  
              <div className='table-row'>
                    <h2>Registered Users: </h2>
                    <h4>{Portfolio_data.total_users}</h4>
              </div>
  
              <div className='table-row'>
                    <h2>Record traffic: </h2>
                    <h4>{Portfolio_data.record_live_users}</h4>
              </div>

            <div className="social_accs">
                <SocialIcon url="https://github.com/orbant12/Clippify---REST-API" />
                <SocialIcon url="https://instagram.com/clippify.app" />                   
            </div>  
          </div>
  
          <div className='middle-thumbnail'>
            
          </div> 
        </div>
  
        <div className='language-row-fullstack'>
          <ReactOriginal size={50} />
          <ExpressOriginal size={50} />
          <FirebaseOriginal size={50} />
          <AppleOriginal size={50} />
          <AndroidOriginal size={50} />
        </div>
  
        <div className='stat-bottom'>
        <div className='bottom-box' style={{background: "linear-gradient(to right, cyan 100%, transparent 100%)"}}>
            <h3>React Native</h3>
            <h6>100%</h6>
        </div>

        <div className='bottom-box' style={{background: "linear-gradient(to right, cyan 60%, transparent 100%)"}}>
          <h3>Expo</h3>
          <h6>80%</h6>
        </div>

        <div className='bottom-box' style={{background: "linear-gradient(to right, cyan 100%, transparent 100%)"}}>
          <h3>Firebase Utils</h3>
          <h6>100%</h6>
        </div>

        <div className='bottom-box' style={{background: "linear-gradient(to right, cyan 100%, transparent 100%)"}}>
          <h3>Appstore</h3>
          <h6>100%</h6>
        </div>

        <div className='bottom-box' style={{background: "linear-gradient(to right, cyan 100%, transparent 100%)"}}>
          <h3>PlayStore</h3>
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
      <h5>Click the icon for Certificate</h5>
        <h1 style={{marginTop:10}}>My Learning Journey</h1>

        <div className='learning-path'>
        <ol class="timeline">
          <li class="timeline-item">
            <span class="timeline-item-icon | avatar-icon">
              <i class="avatar">
                <img src={UdemyLogo} />
              </i>
            </span>
            <div class="timeline-item-description">
              <span><a href="#">Andrew Ng's</a> moved <a href="#">Eric Lubin</a> to <a href="#">📚 Technical Test</a> on <time datetime="20-01-2021">Jan 20, 2021</time></span>
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
              <span><a href="#">Andrew Ng's</a> Lecture <a href="#">2 attributes</a> on <time datetime="21-01-2021">Dec 11, 2023</time></span>
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
              <span><a href="#">Andrew Ng's</a> moved <a href="#">Eric Lubin</a> to <a href="#">📚 Technical Test</a> on <time datetime="20-01-2021">Jan 20, 2021</time></span>
            </div>
          </li>
          <li class="timeline-item">
          <span class="timeline-item-icon | faded-icon" onClick={() => handleOpen(Fullstack_Udemy_cert)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 24" width="24" height="24">
              <path class="cls-1" d="M28,5H4A2,2,0,0,0,2,7V24a2,2,0,0,0,2,2H18v3a1,1,0,0,0,.53.88,1,1,0,0,0,1-.05L22,28.2l2.45,1.63A1,1,0,0,0,26,29V26h2a2,2,0,0,0,2-2V7A2,2,0,0,0,28,5ZM22.59,21.94a3,3,0,1,1,2.35-2.35A3,3,0,0,1,22.59,21.94ZM24,27.13l-1.45-1a1,1,0,0,0-1.1,0l-1.45,1V23.58a5,5,0,0,0,4,0ZM28,24H26V22s0,0,0,0a4.93,4.93,0,0,0,.88-4.1A5,5,0,0,0,17,19a4.93,4.93,0,0,0,1,3s0,0,0,0v2H4V7H28Z"/><path class="cls-1" d="M7,12H25a1,1,0,0,0,0-2H7a1,1,0,0,0,0,2Z"/><path class="cls-1" d="M7,16h8a1,1,0,0,0,0-2H7a1,1,0,0,0,0,2Z"/><path class="cls-1" d="M7,20h8a1,1,0,0,0,0-2H7a1,1,0,0,0,0,2Z"/>
            </svg>
            </span>
            <div class="timeline-item-description">
              <i class="avatar | small">
                <img src={AngelaYu} />
              </i>
              <span><a href="#">Andrew Ng's</a> moved <a href="#">Eric Lubin</a> to <a href="#">📚 Technical Test</a> on <time datetime="20-01-2021">Jan 20, 2021</time></span>
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

        <hr />

        <ol class="timeline">
          <li class="timeline-item">
            <span class="timeline-item-icon | avatar-icon">
              <i class="avatar">
                <img src={CourseraLogo} />
              </i>
            </span>
            <div class="timeline-item-description">
              <span><a href="#">Andrew Ng's</a> moved <a href="#">Eric Lubin</a> to <a href="#">📚 Technical Test</a> on <time datetime="20-01-2021">Jan 20, 2021</time></span>
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
                <img src={MetaLogo} />
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
                <img src={MetaLogo} />
              </i>
              <span>Pandas - <time datetime="20-01-2021">Jan 20, 2021</time></span>
            </div>
          </li>
          <li class="timeline-item">
          <span class="timeline-item-icon | faded-icon" onClick={() => handleOpen(Meta_cert)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 24" width="24" height="24">
              <path class="cls-1" d="M28,5H4A2,2,0,0,0,2,7V24a2,2,0,0,0,2,2H18v3a1,1,0,0,0,.53.88,1,1,0,0,0,1-.05L22,28.2l2.45,1.63A1,1,0,0,0,26,29V26h2a2,2,0,0,0,2-2V7A2,2,0,0,0,28,5ZM22.59,21.94a3,3,0,1,1,2.35-2.35A3,3,0,0,1,22.59,21.94ZM24,27.13l-1.45-1a1,1,0,0,0-1.1,0l-1.45,1V23.58a5,5,0,0,0,4,0ZM28,24H26V22s0,0,0,0a4.93,4.93,0,0,0,.88-4.1A5,5,0,0,0,17,19a4.93,4.93,0,0,0,1,3s0,0,0,0v2H4V7H28Z"/><path class="cls-1" d="M7,12H25a1,1,0,0,0,0-2H7a1,1,0,0,0,0,2Z"/><path class="cls-1" d="M7,16h8a1,1,0,0,0,0-2H7a1,1,0,0,0,0,2Z"/><path class="cls-1" d="M7,20h8a1,1,0,0,0,0-2H7a1,1,0,0,0,0,2Z"/>
            </svg>
            </span>
            <div class="timeline-item-description">
              <i class="avatar | small">
                <img src={MetaLogo} />
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
              <img className='cert-image-clippifyMobile'  src={modelInput} alt="" />
          </div>
        </Modal>

        </div>
    </div>
  </div>
)
}

export default MobilePage;