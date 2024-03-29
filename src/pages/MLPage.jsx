
import React, {useState,useEffect} from 'react';
import "../CSS/fullstack.css"
import betterByteLogo from "../assets/BetterByteLogo.png"
import { ReactOriginal } from 'devicons-react';
import RNN_Image from "../assets/RNN6.png"
import Kaggle_Image from "../assets/kaggle.png"
import OBJ_Image from "../assets/OBJ.png"
import AndrewNg from "../assets/AndrewNg.jpeg"
import CourseraLogo from "../assets/Coursera.png"
import SurferboyLogo from "../assets/SurferboyLogo.jpeg"

const MLPage = () => {

  //STATE FOR Data Representation

  const [isSelected, setIsSelected] = useState("kaggle");

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
    //GITHUB
    if(navigationTitle == "CourseraNotes"){
        window.location.href = "https://drive.google.com/drive/folders/1bwS67OsNGfGbfM7_NYNljrxW4RCnttl-?usp=sharing"
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
        <ReactOriginal />
        <ReactOriginal />
        <ReactOriginal />
        <ReactOriginal />
        <ReactOriginal />
      </div>

      <div className='stat-bottom'>
        <div className='bottom-box'>
            <h3>30%</h3>
        </div>

        <div className='bottom-box'>
            <h3>30%</h3>
        </div>

        <div className='bottom-box'>
            <h3>30%</h3>
        </div>

        <div className='bottom-box'>
            <h3>30%</h3>
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
          <ReactOriginal />
          <ReactOriginal />
          <ReactOriginal />
          <ReactOriginal />
          <ReactOriginal />
        </div>
  
        <div className='stat-bottom'>
          <div className='bottom-box'>
              <h3>30%</h3>
          </div>
  
          <div className='bottom-box'>
              <h3>30%</h3>
          </div>
  
          <div className='bottom-box'>
              <h3>30%</h3>
          </div>
  
          <div className='bottom-box'>
              <h3>30%</h3>
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
          <ReactOriginal />
          <ReactOriginal />
          <ReactOriginal />
          <ReactOriginal />
          <ReactOriginal />
        </div>
  
        <div className='stat-bottom'>
          <div className='bottom-box'>
              <h3>30%</h3>
          </div>
  
          <div className='bottom-box'>
              <h3>30%</h3>
          </div>
  
          <div className='bottom-box'>
              <h3>30%</h3>
          </div>
  
          <div className='bottom-box'>
              <h3>30%</h3>
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
                <img src={AndrewNg} />
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
                <img src={AndrewNg} />
              </i>
              <span><a href="#">Andrew Ng's</a> moved <a href="#">Eric Lubin</a> to <a href="#">📚 Technical Test</a> on <time datetime="20-01-2021">Jan 20, 2021</time></span>
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
                <img src={AndrewNg} />
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
                <img src={AndrewNg} />
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
                <img src={AndrewNg} />
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
                <img src={AndrewNg} />
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

        </div>
    </div>
  </div>
)
}

export default MLPage;