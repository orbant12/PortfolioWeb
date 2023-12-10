import { useParams } from "react-router-dom";
import React,{useEffect} from 'react';
import '../CSS/navbar.css';


const PortfolioPage = () => {

const { id } = useParams();



const Clippify = {
    title:"Clippify",
    list:[
        "Clip trimming, saving, storing",
        "Machine Learning Model for transcript extraction",
        "Built in OpenAi api - Fine Tuned","Rich Text Editor",
        "Smooth Subscription and Payment with Stripe api",
        "Firebase Backend"
    ],
    expertise:[
        {
            logo:"https://images.unsplash.com/photo-1631397833242-fc6213046352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2xpcHBpZnklMjBsb2dvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            title:"Machine Learning Model",
            text:[
                "Video type manipulation (blob, data:url, base64)",
                "FFmpeg syntax for video manipulation",
                "Timeline Bar from thubnails"
            ],
        },
        {
            logo:"https://images.unsplash.com/photo-1631397833242-fc6213046352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2xpcHBpZnklMjBsb2dvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            title:"Dealing with Video - FFmpeg",
            text:[
                "Video type manipulation (blob, data:url, base64)",
                "FFmpeg syntax for video manipulation",
                "Timeline Bar from thubnails"
            ],
        },
        {
            logo:"https://images.unsplash.com/photo-1631397833242-fc6213046352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2xpcHBpZnklMjBsb2dvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            title:"Dealing with Video - FFmpeg",
            text:[
                "Video type manipulation (blob, data:url, base64)",
                "FFmpeg syntax for video manipulation",
                "Timeline Bar from thubnails"
            ],
        }
    ]
}

const [pageData,setPageData] = React.useState({title:"",list:[],expertise:[{logo:"",title:"",text:[]}]});

useEffect(() => {
    if(id == "Clippify"){
        setPageData(Clippify);
    }
},[]);

return(
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
                <div style={{marginTop:40,marginBottom:20,width:"100%",display:"flex"}}>
                    <a className="tryFree" href="https://clippify.net">Try it for Free</a>
                </div>
            </div>
            <iframe className="youtube-frame"  src="https://www.youtube.com/embed/xNRJwmlRBNU?si=f7WTiSJIPG9jg3Ad" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen ></iframe>
        </div>

        <div className="this-project-box">
            <h3 className="this-project-title">This Project <br /> Made Me an Expert In</h3>
            {pageData.expertise.map((item, index) => {
                return (
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
                );
            })}
        </div>
    </div>
)
}

export default PortfolioPage;