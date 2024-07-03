
//REACT
import { useParams } from "react-router-dom";
import "./f-projects.css"
import {useEffect,useState} from 'react';
import ClippifyLogo from "../../assets/Clippify-log.svg";
import ClippifyThumbnail from "../../assets/ClippifyScreen.png"
import { FirebaseOriginal, GooglecloudOriginal, NodejsOriginal,ViteOriginalWordmark,AndroidOriginal, AppleOriginal, ExpressOriginal, ReactOriginal, Css3Original } from 'devicons-react';
import {
    ClippifyData
} from '../../portfolio.jsx'
import {FaArrowRight} from "react-icons/fa";
import { SocialIcon } from "react-social-icons";
import LupodyThumbnail from "../../assets/LupodyScreen2.png"
import PortfolioThumbnail from "../../assets/Portfolio.png"
import "./f-projects.css"
import {
    LupodyData
} from '../../portfolio.jsx'
import GitHubIcon from '@mui/icons-material/GitHub';
import { BoxProgressRow, IconRow, MadeMeExpertIn, TableMiddleStat, TableNavbar, TableTagRow, TableTitle } from "./Clippify.jsx";



const LupodyPage = () => {

    const [isSelectedDate, setIsSelectedDate] = useState("Month");
    const [isSelected, setIsSelected] = useState("web");

    const { id } = useParams();

    const handleVisitClick = (navigationTitle) => {
        //Coursera Notes
        if(navigationTitle == "Clippify"){
            window.location.href = "https://clippify.net/landing"
        }
    }

    const Mobile_data = {
        "project": 11,
        "total_users": 0,
        "record_live_users": 0,
    }

    const Clippify_data = {
        "project": 11,
        "total_users": 31,
        "record_live_users": 13,
        "thumbnail":ClippifyThumbnail 
      }

      const Portfolio_data = {
        "project": 0,
        "total_users": 0,
        "record_live_users": 0,
        "thumbnail": PortfolioThumbnail
      }

    const [pageData,setPageData] = useState({
        title:"",
        list:[],
        expertise:[{logo:"",title:"",text:[]}],
        navigation:"",
        youtube:"",
        youtubeHref:""
    });

    useEffect(() => {
        setPageData(LupodyData);
    },[]);

    return (
        <div className="project-page">
            <div className="project-hero">
                <div className="hero-top">
                    <h2>Lupody</h2>
                    <h1>Your second brain software for storing video information</h1>
                    <h5>Clippify enables you to effortlessly collect and store video clips from various sources. Whether it's the funny moments from your family gatherings, educational tutorials...</h5>
                </div>

                <div className="hero-bottom">
                <div className="visit-p-btn">
                    <h4>Visit Lupody WebApp</h4>
                    <FaArrowRight />
                </div>
            </div>
            </div>
     
            <div className="project-details-page">
                {/* <h4 className="d-p-title">About The Project</h4> */}
                <div className="portfolio-page" >
                    <VideoContainer 
                        pageData={pageData}
                    />
                    <TableForStats 
                        isSelected={isSelected}
                        setIsSelected={setIsSelected}
                        Clippify_data={Clippify_data}
                        Portfolio_data={Portfolio_data}
                        handleVisitClick={handleVisitClick}
                        Mobile_data={Mobile_data}
                    />
                    <MadeMeExpertIn 
                        pageData={pageData}
                    />
                </div>
            </div>
        </div>
    );
}

export default LupodyPage;

const VideoContainer = ({
    pageData,
}) => {
    return(
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
    </div>
    )
}

const TableForStats = ({
    isSelected,
    setIsSelected,
    Clippify_data,
    Lupody_data,
    Portfolio_data,
    handleVisitClick,
    Mobile_data 
}) => {
    return(
        <div className='fullstack-stat'>
        <TableTitle />
  
        <TableNavbar
            setValue={setIsSelected}
            titles={[
                {text:"Web",value:"web"},
                {text:"Mobile",value:"mobile"},
                
            ]}
            value={isSelected}
        />
        { isSelected == "web" ? (
        <>
            <TableMiddleStat
                    Clippify_data={Clippify_data}
                    handleVisitClick={handleVisitClick}
                    socials={[
                        {url:"https://github.com/orbant12/Podcast-Social-Media---WebApp.git"},
                        {url:"https://https://www.tiktok.com/@lupody.tv"}
                    ]}
            />

            <IconRow
                icons={[
                    <ReactOriginal size={50} />,
                    <FirebaseOriginal size={50} />,
                    <Css3Original size={50} />,
                    <ViteOriginalWordmark size={50} />
                ]}
            />

        <BoxProgressRow
            items={[
                {title:"React",progress:"100%"},
                {title:"Firebase Utils",progress:"100%"},
                {title:"Node JS",progress:"100%"},
                {title:"Google Cloud",progress:"100%"},
                {title:"Vite",progress:"100%"}
            ]}
        />
  
        <TableTagRow
            tags={[
                "Skit Learn Libary",
                "Git",
                "Anaconda",
                "Convolutional Neural Network",
                "OS Script Automation",
                "Own Data Collection",
                "NVDIA Cuda"
            ]}
          />
          </>
        ):isSelected == "mobile" &&(
            (
                <>
                <TableMiddleStat 
                    Clippify_data={Mobile_data}
                    handleVisitClick={handleVisitClick}
                    socials={[
                        {url:"https://github.com/orbant12/Podcast-Social-Media---WebApp.git"},
                        {url:"https://https://www.tiktok.com/@lupody.tv"}
                    ]}
                />

                <IconRow 
                    icons={[
                        <ReactOriginal size={50} />,
                        <ExpressOriginal size={50} />,
                        <FirebaseOriginal size={50} />,
                        <AppleOriginal size={50} />,
                        <AndroidOriginal size={50} />
                    ]}
                />
                <BoxProgressRow
                    items={[
                        {title:"React Native",progress:"100%"},
                        {title:"Expo",progress:"80%"},
                        {title:"Firebase Utils",progress:"100%"},
                        {title:"Appstore",progress:"100%"},
                        {title:"PlayStore",progress:"100%"}
                    ]}
                />
                <TableTagRow
                    tags={[
                        "Skit Learn Libary",
                        "Git",
                        "Anaconda",
                        "Convolutional Neural Network",
                        "OS Script Automation",
                        "Own Data Collection",
                        "NVDIA Cuda"
                    ]}
                />
                </>
              )
        )}
      </div>
    )
}