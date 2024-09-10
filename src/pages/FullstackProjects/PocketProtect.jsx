import FFmpeg from "../../assets/FFMPEG.png"
import "./f-projects.css"
import { useParams } from "react-router-dom";
import {useEffect,useState,useRef} from 'react';
import ClippifyLogo from "../../assets/Clippify-log.svg";
import ClippifyThumbnail from "../../assets/ClippifyScreen.png"
import { FirebaseOriginal, GooglecloudOriginal, NodejsOriginal,ViteOriginalWordmark,AndroidOriginal, AppleOriginal, ExpressOriginal, ReactOriginal, VitejsOriginal, GoOriginal, NextjsOriginal, Html5Original, TailwindcssOriginal, ReactOriginalWordmark } from 'devicons-react';
import {
    ClippifyData,
    PocketProtectData
} from '../../portfolio.jsx'
import GitHubIcon from '@mui/icons-material/GitHub';
import {FaArrowRight} from "react-icons/fa";
import { SocialIcon } from "react-social-icons";
import LupodyThumbnail from "../../assets/LupodyScreen2.png"
//PORTFOLIO
import PortfolioThumbnail from "../../assets/Portfolio.png"
import { Link } from "react-router-dom";



const PocketProtectPage = () => {

    const [isSelectedDate, setIsSelectedDate] = useState("Month");
    const [isSelected, setIsSelected] = useState("web");

    const [isScrolledPassed, setIsScrolledPassed] = useState(false);
    const [selectedFullstack, setSelectedFullstack] = useState('web');

    const scroll = useRef(null);

    const [visibleItems, setVisibleItems] = useState(3);
    const blogs = [
        {
            title: "Switcing Backend from TS to Go ",
            name: "Problem & Solution",
            description: "Problem: The project fetching operation was taking too long, and the app required a faster backend to handle the data fetching.",
            tags: ["Go", "REST API", "Echo", "TS to Go Switch"],
            navigation: "/"
        },
        {
            title: "Discovering the Power of Tailwind CSS",
            name: "Problem & Solution",
            description: "Problem: The project was initially built with Firebase Serverless, but as the project grew, the limitations of Firebase became apparent.",
            tags: ["Node", "REST API", "Express", "Serverless Switch"],
            navigation: "/"
        },
        {
            title: "Regret of not using Statically Typed Languages Earlier",
            name: "Problem & Solution",
            description: "Problem: The project was initially built with Firebase Serverless, but as the project grew, the limitations of Firebase became apparent.",
            tags: ["Typescript", "Go", "Javascript", "Functional Programming", "Statically Typed Languages"],
            navigation: "/"
        },
        {
            title: "Serverless To Node REST API",
            name: "Problem & Solution",
            description: "Problem: The project was initially built with Firebase Serverless, but as the project grew, the limitations of Firebase became apparent.",
            tags: ["Node", "REST API", "Express", "Serverless Switch"],
            navigation: "/"
        }
    ];

    useEffect(() => {
        const handleScroll = () => {
          if (scroll.current.getBoundingClientRect().top < 230) {
            setIsScrolledPassed(true);
          } else {
            setIsScrolledPassed(false);
          }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

      const Portfolio_data = {
        project: 10,
        total_users: 0,
        record_live_users: 0,
        thumbnail: PortfolioThumbnail
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
        setPageData(PocketProtectData);
    },[]);

    return (
        <div ref={scroll} className="project-page" style={{overflowX:"hidden", width:"100%"}} id="clippify">
            <Header 
                handleVisitClick={handleVisitClick}
                setIsSelectedDate={setIsSelectedDate}
                isSelectedDate={isSelectedDate}
            />
            <div className="project-details-page border-y-2 sm:border-0 mt-20 sm:mt-0">
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
                        setVisibleItems={setVisibleItems}
                        visibleItems={visibleItems}y
                        blogs={blogs}
                    />
                    <MadeMeExpertIn 
                        pageData={pageData}
                    />
                </div>
            </div>

            {isScrolledPassed &&
                <div className='fixed w-[100%]' style={{borderTopWidth:3,top:70,zIndex:"100"}}>
                <div className="flex flex-row justify-between mb-5 mt-0 bg-black px-5 py-3" style={{ width: 200,borderColor:"white", borderWidth:3,borderTop:0, marginLeft:40,borderRadius:10, borderTopLeftRadius:0, borderTopRightRadius:0, boxShadow:"0px 0px 0px 0px white" }}>
                <h4 
                    className={`text-white cursor-pointer ${selectedFullstack === 'web' ? 'font-bold opacity-100' : 'opacity-40'}`}
                    onClick={() => setSelectedFullstack('web')}
                >
                    Web
                </h4>
                <h4 className='text-white'>|</h4>
                <h4 
                    className={`text-white cursor-pointer ${selectedFullstack === 'mobile' ? 'font-bold opacity-100' : 'opacity-40'}`}
                    onClick={() => setSelectedFullstack('mobile')}
                >
                    Mobile
                </h4>
            </div>
                </div>
            }
        </div>
    );
}

export default PocketProtectPage;


const Header = ({
    handleVisitClick,
    setIsSelectedDate,
    isSelectedDate
}) => {
    return(
        <div className="flex -mt-10 mb-20">
            <div className="project-hero">
            <div className="hero-top">
                <h2>Clippify</h2>
                <h1 className="text-3xl text-white w-[90%] md:w-[50%] lg:text-5xl ">Your dermotologist software for keeping you safe from skin cancer</h1>
                <h5 className="text-xs text-white opacity-50 w-[90%] md:w-[50%] md:text-5xs">Pocket Protect enables you to scan and store you moles with features like CNN model scan, reminder for recommended update base on sevirity, scan by a real life dermotologist and get a professional report ... </h5>
            </div>

            <div className="flex flex-wrap items-center w-[100%] justify-center relative my-10">
                <div className="visit-p-btn m-3" onClick={() => handleVisitClick("Clippify")}>
                    <h4>Pocket Protect Web</h4>
                    <FaArrowRight className="arrow active" />
                </div>
                <div className="visit-p-btn m-3" onClick={() => handleVisitClick("Clippify")}>
                    <h4>App Store</h4>
                    <FaArrowRight className="arrow active" />
                </div>
                <div className="visit-p-btn m-3" onClick={() => handleVisitClick("Clippify")}>
                    <h4>Play Store</h4>
                    <FaArrowRight className="arrow active" />
                </div>
        </div>
            </div>
            <div className="d-cont-right" style={{marginRight:40}}>
                <a href="#Problems">Project Blogs</a>
                <a href="#Techstack">Tech Stack</a>
                <a href="#Lexical Rich Text Editor">Text Editor</a>
                <a href="#RNN & Open AI">OpenAI API</a>
                <a href="#FFmpeg">FFmpeg</a>
                <a href="Python, Tensorflow">RNN</a>
                <a href="#Stripe API">Stripe API</a>
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
        </div>
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
                    <img src={pageData.logo} alt="" />
                </div>
                <h6>What is {pageData.title} ?</h6>
                <h1>{pageData.title}</h1>
            </div>
            <div className="l-desc">
            <h5>Clippify enables you to effortlessly collect and store video clips from various sources. Whether it's the funny moments from your family gatherings, educational tutorials, or your favorite movie quotes, Clippify helps you organize and access them with ease.</h5><br />
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
        <div className='bg-gradient-primary flex flex-col w-[100%] p-5 justify-center items-center mt-10'>
            <h5 style={{border:"0px solid white",padding:"5px 10px",borderRadius:10,opacity:0.4,boxShadow: "inset 1px 1px 5px 1px white",marginBottom:10,color:"white"}}>Under the hood</h5>
            <h2 className="text-white text-3xl pb-10 text-center">Fetures and Components</h2>
        </div>
    )
}
 
export const MadeMeExpertIn = ({
    pageData
}) => {
    return(
      <div className="flex flex-col w-[100%] border-t mt-20">
            <ExpertTitle />
            {pageData.expertise.map((item, index) => {
                return (
                    <FeatureComponent data={item} />
                )
            })}
      </div>
    )
}

const FeatureComponent = ({data}) => {
    return(
        <div className="flex flex-col w-[100%] border-b-2 border-white p-5 py-18 justify-between items-center bg-gradient-sec pr-[5%] lg:flex-row lg:py-24" id={data.tech}>
            <div className="flex  flex-col mb-10 lg:mb-0">
                <div className="flex flex-row items-center">
                    <img src={data.logo} alt="" className="relative w-24 h-24 mr-3 border-4 bg-white" />
                    <div className="flex flex-col">
                        <h4 className="text-white text-md mb-2 font-medium opacity-70">{data.tech}</h4>
                        <h4 className="text-white text-4xl font-bold">{data.title}</h4>
                    </div>
                </div>
                <div className="flex flex-col border-l-4 pl-5">
                    {data.text.map((item, index) => {
                        return(
                        <h1 key={index} className="text-white mt-5">{item}</h1>
                        )   
                    })}
                    <div className="border-2 border-magenta flex flex-row justify-center items-center w-80 h-16 rounded mt-20 cursor-pointer hover:scale-90 hover:border-white">
                        <GitHubIcon className="mr-3" color="secondary" />
                        <h3 className="text-white">Visit Source Code</h3>
                    </div>
                </div>
            </div>
            {data.show && data.show()}
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
    Mobile_data ,
    blogs,
    visibleItems,
    setVisibleItems
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
                    Clippify_data={Portfolio_data}
                    handleVisitClick={handleVisitClick}
                    socials={[
                        {url:"https://github.com/orbant12/Podcast-Social-Media---WebApp.git"},
                        {url:"https://https://www.tiktok.com/@lupody.tv"}
                    ]}
                    setVisibleItems={setVisibleItems}
                    visibleItems={visibleItems}
                    blogs={blogs}
            />

            <IconRow 
                icons={[
                    <ReactOriginal size={50} />,
                    <GoOriginal size={50} />,
                    <NextjsOriginal size={50} />,
                    <Html5Original size={50} />,
                    <TailwindcssOriginal size={50} />
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
                    setVisibleItems={setVisibleItems}
                    visibleItems={visibleItems}
                    blogs={blogs}
                />


                <IconRow 
                    icons={[
                        <ReactOriginalWordmark size={50} />,
                        <ExpressOriginal size={50} />,
                        <GoOriginal size={50} />,
                        <AppleOriginal size={50} />,
                        <AndroidOriginal size={50} />
                    ]}
                />
                <TableTagRow
                    tags={[
                        "Unit Tested",
                        "Version Controlled",
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
            <h5 style={{border:"0px solid white",padding:"5px 10px",borderRadius:10,opacity:0.4,boxShadow: "inset 1px 1px 5px 1px white",marginBottom:10,color:"white"}}>Skills & Versions</h5>
            <h2 className="text-white text-xl">Get Useful Insight</h2>
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
                    <h3 key={index} onClick={() => setValue(title.value)} className={value === title.value ? (index != titles.length -1) ? ("selected -ml-20") : ("selected ml-5") : "select mx-5"}>{title.text}</h3>
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
                        <h5 className="text-white text-md font-medium">{tag}</h5>
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
                    <div key={index} className='bottom-box' style={{background: `linear-gradient(to right, #cc87fc ${item.progress}, transparent ${item.progress})`}}>
                        <h3 className="text-lg font-bold">{item.title}</h3>
                        <h6 className="text-md font-bold">{item.progress}</h6>
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
        <div className='language-row-fullstack overflow-x-scroll sm:overflow-x-hidden' id="Techstack">
            {icons.map((icon, index) => {
                return (
                    <div key={index} className='icon-box mr-10 sm:mr-0'>
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
    socials,
    blogs,
    visibleItems,
    setVisibleItems
}) => {
    const handleLoadMore = () => {
        setVisibleItems(blogs.length);
    };
    return(
        <div className='stat-middle'>
        <div className='middle-table'>
            <div className='table-row' style={{display:"flex", flexDirection:"row",padding:30}}>
                <h2 className=" font-bold">Project: </h2>
                <h4 className="text-white">{Clippify_data?.project}</h4>
            </div>

            <div className='table-row' style={{display:"flex", flexDirection:"row",padding:30}}>
                <h2 className="text-white font-bold">Registered Users: </h2>
                <h4 className="text-white">{Clippify_data?.total_users}</h4>
            </div>

            <div className='table-row' style={{display:"flex", flexDirection:"row",padding:30}}>
                <h2 className="text-white font-bold">Record traffic: </h2>
                <h4 className="text-white">{Clippify_data?.record_live_users}</h4>
            </div>
            <div className="social_accs">
                   {socials.map((social, index) => {
                        return (
                        <SocialIcon key={index} url={social.url} />
                        )
                   })}            
            </div>
        </div>
        
        <div className="flex flex-col items-center" id="Problems">
            {blogs.slice(0, visibleItems).map((product, index) => (
                <ProductView
                    key={index}
                    title={product.title}
                    name={product.name}
                    description={product.description}
                    tags={product.tags}
                    navigation={product.navigation}
                />
            ))}
            {visibleItems < blogs.length ? (
                <div 
                    onClick={handleLoadMore} 
                    className="flex cursor-pointer flex-col hover:border-magenta items-center p-3 border rounded w-[100%] mb-10 hover:opacity-100 opacity-60"
                >
                    <h4 className="text-white">Load More</h4>
                </div>
            ):(
                <div 
                    onClick={() => setVisibleItems(2)} 
                    className="flex cursor-pointer flex-col hover:border-magenta items-center p-3 border rounded w-[100%] mb-10 hover:opacity-100 opacity-60"
                >
                <h4 className="text-white">Show Less</h4>
            </div>
            )            
            }
        </div>
        
      </div>
    )
}


const ProductView = ({ title, description, tags, navigation,name }) => {
    return (
      <>
        <div className="flex flex-col md:flex-row md:items-center p-10 border border-magenta rounded shadow-lg mb-10 bg-gradient-primary relative w-[100%] md:w-[100%]">
          <div className="flex flex-col flex-grow">
            <h6 className="text-sm opacity-50 text-white mb-1 font-bold">{name}</h6>
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
        </div>
      </>
    );
};