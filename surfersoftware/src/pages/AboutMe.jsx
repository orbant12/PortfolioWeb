
import Spline from '@splinetool/react-spline';
import React, {useState,useEffect} from 'react';
import "../CSS/navbar.css"

const AboutMe = () => {

    const [mobileModal, setMobileModal] = useState(false);

    useEffect(() => {
      const handleOrientationChange = () => {
        const isMobilePortrait = window.innerWidth < 768 && window.innerHeight > window.innerWidth;
  
        if (isMobilePortrait) {
          setMobileModal(true)
        }
      };
  
      // Initial check
      handleOrientationChange();
  
      // Add event listener for orientation change
      window.addEventListener("orientationchange", handleOrientationChange);
  
      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener("orientationchange", handleOrientationChange);
      };
    }, []);
return(
    <div className="aboutMePage">
            {mobileModal ?(
            <>
            <div style={{display:"block",width:"100%",height:"100%",backgroundColor:"black",position:"absolute",opacity:0.8}}></div>
            <div style={{display:"flex",flexDirection:"column",position:"absolute",justifyContent:"center",background:"black",marginTop:200,textAlign:"center",padding:20}}>
                    <h3 style={{fontWeight:500,color:"white"}}>Rotate Your Phone for better experience</h3>
                    <h5 onClick={() => setMobileModal(false)} style={{color:"white",padding:"10px 5px",border:"1px solid white",marginTop:20,opacity:0.6}}>OK</h5>
            </div>
            </>
        ):null}
        <Spline scene="https://prod.spline.design/yDvGHB5Cg3y7eB3c/scene.splinecode" />
    </div>
)
}

export default AboutMe;