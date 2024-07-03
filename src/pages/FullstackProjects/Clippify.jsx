
import "./f-projects.css"
import { useParams } from "react-router-dom";
import {useEffect,useState} from 'react';
import ClippifyLogo from "../../assets/Clippify-log.svg";
import ClippifyThumbnail from "../../assets/ClippifyScreen.png"
import { FirebaseOriginal, GooglecloudOriginal, NodejsOriginal,ViteOriginalWordmark,AndroidOriginal, AppleOriginal, ExpressOriginal, ReactOriginal } from 'devicons-react';
import {
    ClippifyData
} from '../../portfolio.jsx'
import GitHubIcon from '@mui/icons-material/GitHub';
import {FaArrowRight} from "react-icons/fa";
import { SocialIcon } from "react-social-icons";
import LupodyThumbnail from "../../assets/LupodyScreen2.png"
//PORTFOLIO
import PortfolioThumbnail from "../../assets/Portfolio.png"


const ClippifyPage = () => {

    const [isSelectedDate, setIsSelectedDate] = useState("Month");
    const [isSelected, setIsSelected] = useState("web");

      const Portfolio_data = {
        "project": 0,
        "total_users": 0,
        "record_live_users": 0,
        "thumbnail": PortfolioThumbnail
      }
    

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
            <Header 
                handleVisitClick={handleVisitClick}
                setIsSelectedDate={setIsSelectedDate}
                isSelectedDate={isSelectedDate}
            />
            <div className="project-details-page">
                {/* <h4 className="d-p-title">About The Project</h4> */}
                <div className="portfolio-page" >
                    <VideoContainer 
                        pageData={pageData}
                    />
                    <TableForStats 
                        isSelected={isSelected}
                        setIsSelected={setIsSelected}
                        Portfolio_data={Portfolio_data}
                        handleVisitClick={handleVisitClick}
                    />
                    <MadeMeExpertIn 
                        pageData={pageData}
                    />
                </div>
            </div>
        </div>
    );
}

export default ClippifyPage;


const Header = ({
    handleVisitClick,
    setIsSelectedDate,
    isSelectedDate
}) => {
    return(
        <>
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
            <div className="d-cont-right">
                <a href="#Skills">Skills & Version</a>
                <a href="#Skills">Problems</a>
                <a href="#Lexical Rich Text Editor">Text Editor</a>
                <a href="">OpenAI API</a>
                <a href="#Dealing with Video - FFmpeg">FFmpeg</a>
                <a href="">RNN</a>
                <a href="#Stripe Payment">Stripe API</a>
                <a href="#Stripe Payment">OAuth 2</a>
                <a href="#Stripe Payment">CO Isolation</a>
            </div>
            {/* <div className="project-stat">
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
            </div> */}
        </>
    )
}

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


const ExpertTitle = ({}) => {
    return(
        <div className='stat-title' style={{marginBottom:-50,marginTop:50,borderTop:"2px dashed lightgray",width:"80%"}}>
            <h5 style={{border:"0px solid black",padding:"5px 10px",borderRadius:10,opacity:0.4,boxShadow: "inset 1px 1px 5px 1px black",marginBottom:10}}>Features</h5>
            <h2>This project made me an expert in</h2>
        </div>
    )
}
 
export const MadeMeExpertIn = ({
    pageData,

}) => {
    return(
        <div className="this-project-box">
         <ExpertTitle />
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
            />

            <IconRow 
                icons={[
                    <ReactOriginal size={50} />,
                    <FirebaseOriginal size={50} />,
                    <NodejsOriginal size={50} />,
                    <GooglecloudOriginal size={50} />,
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

export const TableTitle = ({}) => {
    return(
        <div className='stat-title'>
            <h5 style={{border:"0px solid black",padding:"5px 10px",borderRadius:10,opacity:0.4,boxShadow: "inset 1px 1px 5px 1px black",marginBottom:10}}>Skills & Versions</h5>
            <h2>Get Useful Insight</h2>
        </div>
    )
}

export const TableNavbar = ({
    setValue,
    value,
    titles
}) => {
    return(
        <div className="services-pick-fullstack">
            {titles.map((title, index) => {
                return (
                    <h3 key={index} onClick={() => setValue(title.value)} className={value === title.value ? "selected" : "select"}>{title.text}</h3>
                )
            })}
    </div>
    )
}


export const TableTagRow = ({
    tags
}) => {
    return(
        <div className='tag-section'>
            {tags.map((tag, index) => {
                return (
                    <div key={index} className='tagbar'>
                        <h5>{tag}</h5>
                    </div>
                )
            })}
        </div>
    )
}

export const BoxProgressRow = ({
    items
}) => {
    return(
        <div className='stat-bottom'>
            {items.map((item, index) => {
                return (
                    <div key={index} className='bottom-box' style={{background: `linear-gradient(to right, cyan ${item.progress}, transparent ${item.progress})`}}>
                        <h3>{item.title}</h3>
                        <h6>{item.progress}</h6>
                    </div>
                )
            })}
      </div>
    )
}

export const IconRow = ({
    icons
}) => {
    return(
        <div className='language-row-fullstack'>
            {icons.map((icon, index) => {
                return (
                    <div key={index} className='icon-box'>
                        {icon}
                    </div>
                )
            })}
      </div>
    )
}


export const TableMiddleStat = ({
    Clippify_data,
    handleVisitClick,
    socials
}) => {
    return(
        <div className='stat-middle'>
        <div className='middle-table'>
            <div className='table-row'>
                <h2>Project: </h2>
                <h4>{Clippify_data.project}</h4>
            </div>

            <div className='table-row'>
                <h2>Registered Users: </h2>
                <h4>{Clippify_data.total_users}</h4>
            </div>

            <div className='table-row'>
                <h2>Record traffic: </h2>
                <h4>{Clippify_data.record_live_users}</h4>
            </div>
            <div className="social_accs">
                   {socials.map((social, index) => {
                        return (
                        <SocialIcon key={index} url={social.url} />
                        )
                   })}            
            </div>
        </div>

        <div className='middle-thumbnail'>
            <img src={Clippify_data.thumbnail} className='thumbnail-image' alt="CTF" />
            <div className='visit-btn' onClick={() => handleVisitClick("Clippify")}> 
                <h3>See All</h3>
            </div>
            <h5 style={{position:"absolute",color:"black",marginTop:-290,borderBottom:"1px solid black",opacity:"0.3"}}>Click to see more</h5>
        </div> 
      </div>
    )
}
