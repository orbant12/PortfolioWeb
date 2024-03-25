
import React, {useState,useEffect} from 'react';
import "../CSS/fullstack.css"
import betterByteLogo from "../assets/BetterByteLogo.png"
import { ReactOriginal } from 'devicons-react';
import CtfImage from "../assets/CTF.jpeg"
import Pentest from "../assets/Pentest.jpeg"

const CyberSecurityPage = () => {

  //STATE FOR Data Representation

  const [isSelected, setIsSelected] = useState("ctf");

  //<**********-DATA-*****************>

  const Pentest_data = {
    "project": "RNN",
    "total_users": "90%",
    "record_live_users": "Clippify App",
    "thumbnail":Pentest,
  }

  const CTF_data = {
    "project": 11,
    "total_users": 0,
    "record_live_users": 0,
    "thumbnail":CtfImage,
  }

  const Portfolio_data = {
    "project": 0,
    "total_users": 0,
    "record_live_users": 0
  }


return(
  <div className="fullstack">
    <div className='fullstack-hero'>
      <div className='hero-left'>
        <h1>Pentesting</h1>
        <h5>Let me introduce to you my fullstack development journey ...</h5>
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
                <h3 onClick={() => setIsSelected("pentest")} className={isSelected === "pentest" ? "selected" : "select"}>Pentesting</h3>
                <h3 onClick={() => setIsSelected("ctf")} className={isSelected === "ctf" ? "selected" : "select"}>Capture The Flag</h3>
      </div>
    { isSelected == "pentest" ? (
      <>
      <div className='stat-middle'>
        <div className='middle-table'>
            <div className='table-row'>
                  <h2>Solution: </h2>
                  <h4>{Pentest_data.project}</h4>
            </div>

            <div className='table-row'>
                  <h2>Model Accuracy: </h2>
                  <h4>{Pentest_data.total_users}</h4>
            </div>

            <div className='table-row'>
                  <h2>API: </h2>
                  <h4>{Pentest_data.record_live_users}</h4>
            </div>
        </div>

        <div className='middle-thumbnail'>
            <img src={Pentest_data.thumbnail} className='thumbnail-image' alt="CTF" />
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
    ):isSelected == "ctf" ? (
      (
        <>
        <div className='stat-middle'>
          <div className='middle-table'>
              <div className='table-row'>
                    <h2>Best Placement: </h2>
                    <h4>{CTF_data.project}</h4>
              </div>
  
              <div className='table-row'>
                    <h2>Competition: </h2>
                    <h4>{CTF_data .total_users}</h4>
              </div>
  
              <div className='table-row'>
                    <h2>Deep Leaning: </h2>
                    <h4>{CTF_data .record_live_users}</h4>
              </div>

              <div className='table-row'>
                    <h2>ML: </h2>
                    <h4>{CTF_data .record_live_users}</h4>
              </div>
          </div>
  
          <div className='middle-thumbnail'>
            <img src={CTF_data.thumbnail} className='thumbnail-image' alt="CTF" />
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
          </div>
  
          <div className='middle-thumbnail'>
            
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
  </div>
)
}

export default CyberSecurityPage;