

import "./f-projects.css"

//REACT
import { useParams } from "react-router-dom";
import {useEffect,useState} from 'react';
import ClippifyLogo from "../../assets/Clippify-log.svg";
//CSS


//DATA JSON --> portfolio.jsx
import {
    ClippifyData
} from '../../portfolio.jsx'

//ICONS
import GitHubIcon from '@mui/icons-material/GitHub';


import {FaArrowRight} from "react-icons/fa";




const ClippifyPage = () => {

    const [isSelectedDate, setIsSelectedDate] = useState("Month");

    const handleVisitClick = (navigationTitle) => {
        //Coursera Notes
        if(navigationTitle == "Clippify"){
            window.location.href = "https://clippify.net/landing"
        }
    }

        const { id } = useParams();

        const [pageData,setPageData] = useState({
            title:"",
            list:[],
            expertise:[{logo:"",title:"",text:[]}],
            navigation:"",
            youtube:"",
            youtubeHref:""
        });

        useEffect(() => {
            setPageData(ClippifyData);
        },[]);

    return (
        <div className="project-page" id="clippify">
            <div className="project-hero">
                <div className="hero-top">
                    <h2>Clippify</h2>
                    <h1>Your second brain software for storing video information</h1>
                    <h5>Clippify enables you to effortlessly collect and store video clips from various sources. Whether it's the funny moments from your family gatherings, educational tutorials...</h5>
                </div>

                <div className="hero-bottom">
                <div className="visit-p-btn" onClick={() => handleVisitClick("Clippify")}>
                    <h4>Visit Clippify WebApp</h4>
                    <FaArrowRight />
                </div>
            </div>
            </div>
            <div className="project-stat">
                <div className="stat-top">
                    <h4 onClick={() => setIsSelectedDate("Month")} className={isSelectedDate == "Month"?("selected-date"):("not-selected-date")}>Month</h4>
                    <h4 onClick={() => setIsSelectedDate("Year")} className={isSelectedDate == "Year"?("selected-date"):("not-selected-date")}>Year</h4>
                    <h4 onClick={() => setIsSelectedDate("All-Time")} className={isSelectedDate == "All-Time"?("selected-date"):("not-selected-date")}>All Time</h4>
                </div>
                <div className="stat-bottom">
                    <div className="stat-item">
                        <h2>2 lvl</h2>
                        <h5>Are currently spam</h5>
                    </div>
                    <div className="stat-item">
                        <h2>2 lvl</h2>
                        <h5>Are currently spam</h5>
                    </div>
                    <div className="stat-item">
                        <h2>2 lvl</h2>
                        <h5>Are currently spam</h5>
                    </div>
                    <div className="stat-item" style={{border:"none"}}>
                        <h2>2 lvl</h2>
                        <h5>Are currently spam</h5>
                    </div>
                </div>
            </div>
            <div className="project-details-page">
                <h4 className="d-p-title">About The Project</h4>
                <div className="portfolio-page" >
                    <div className="details-container">
                        <div className="d-cont-left">
                            <div className="l-title">
                                <div className="l-logo">
                                    <img src={ClippifyLogo} alt="" />
                                </div>
                                <h6>What is Clippify ?</h6>
                                <h1>Clippify</h1>
                            </div>
                            <div className="l-desc">
                            <h5>Clippify enables you to effortlessly collect and store video clips from various sources. Whether it's the funny moments from your family gatherings, educational tutorials, or your favorite movie quotes, Clippify helps you organize and access them with ease.</h5><br />
                                <h5>Clippify enables you to effortlessly collect and store video clips from various sources. Whether it's the funny moments from your family gatherings, educational tutorials, or your favorite movie quotes, Clippify helps you organize and access them with ease.</h5>
                            </div>
                        </div>

                        <div className="d-video-frame">
                            <iframe className="m-video-frame" src={pageData.youtube} title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>

                        <div className="d-cont-right">
                            <a href="#Lexical Rich Text Editor">Text Editor</a>
                            <a href="">OpenAI API</a>
                            <a href="#Dealing with Video - FFmpeg">FFmpeg</a>
                            <a href="">RNN</a>
                            <a href="#Stripe Payment">Stripe API</a>
                            <a href="#Stripe Payment">OAuth 2</a>
                            <a href="#Stripe Payment">CO Isolation</a>
                        </div>
                    </div>
                    <div className="this-project-box">
                        <h3 className="this-project-title">This Project <br /> Made Me an Expert In</h3>
                        {pageData.expertise.map((item, index) => {
                            return (
                                <div key={index} id={item.title}>
                                    <div className="github-link">
                                        <GitHubIcon />
                                    </div>
                                <div className={index % 2 == 0 ? "experience-box" : "experience-box-reverse"} key={index}>
                                    <img className="exp-img" src={item.logo} alt="" />
                                    <div className="exp-text">
                                        
                                        <h4 className="exp-title">{item.title}</h4>
                                        <ul>
                                            {item.text.map((item2, index2) => {
                                                return (
                                                    <li key={index2}>{item2}</li>
                                                )
                                            })}
                                        </ul> 
                                    </div>
                                </div>
                                    {item.show && item.show()}
                            </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ClippifyPage;