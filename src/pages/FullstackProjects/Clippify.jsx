

import "./f-projects.css"

//REACT
import { useParams } from "react-router-dom";
import {useEffect,useState} from 'react';

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
        <div className="project-page">
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
                    <div className="intro-box">
                        <div className="intro-left-bar">
                            <h3 className="intro-left-title">{id}</h3>
                            <ul className="intro-left-list">
                                {pageData.list.map((item,index) => {
                                    return(
                                        <li key={index}>{item}</li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className="youtube-frameDiv">
                            <iframe className="youtube-frame" src={pageData.youtube} title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>

                    <div className="this-project-box">
                        <h3 className="this-project-title">This Project <br /> Made Me an Expert In</h3>
                        {pageData.expertise.map((item, index) => {
                            return (
                                <div key={index}>
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