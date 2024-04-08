

import "./f-projects.css"

import React, {useState} from "react";

import {FaArrowRight} from "react-icons/fa";

const ClippifyPage = () => {

    const [isSelectedDate, setIsSelectedDate] = useState("Month");

    const handleVisitClick = (navigationTitle) => {
        //Coursera Notes
        if(navigationTitle == "Clippify"){
            window.location.href = "https://clippify.net/landing"
        }
    }

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
        </div>
    );
}

export default ClippifyPage;