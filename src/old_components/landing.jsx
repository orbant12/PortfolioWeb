const OldHero = () => {
    return(
        <div className="row1">
        <div className="hero">
            <div className="wrapper">
                <motion.div
                    className="textContainer"
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                >
                    <motion.h2 variants={textVariants}>Hi, I'm <span>Tamas. 👋</span></motion.h2>
                    <motion.h1 variants={textVariants}>
                    <span className="hero-span">Fullstack Developer</span> and <span className="hero-span">IT Enthusiast</span> in <span className="hero-span">Several Subject</span>. I'm responsible to code your ideas into reality.
                    </motion.h1>
                    <motion.div variants={textVariants} className="buttons">
                        <motion.button className="p-4" variants={textVariants}>
                            <a onClick={openResume}  href="">See my career resume</a>
                        </motion.button>
                        <motion.button className="p-4 ml-5" variants={textVariants}><a href="/contact">Contact Me</a></motion.button>
                    </motion.div>
                    <motion.img
                        variants={textVariants}
                        animate="scrollButton"
                        src={downArrow}
                        alt="dasdsd"
                        className="scrollButton"
                    />
                </motion.div>
            </div>

            <div className="spline3D">
                <img src={betterByteLogo} className="profile-image" alt="" />
            </div>
        </div>
    </div>
    )
  }


  const OldServices = () => {
    return(
        <>
        <div className="services-pick">
        <h3 onClick={() => setIsSelected("web")} className={isSelected === "web" ? "selected" : "select"}>Fullstack</h3>
        <h3 onClick={() => setIsSelected("cross")} className={isSelected === "cross" ? "selected" : "select"} >Machine Learning</h3>
        <h3  onClick={() => setIsSelected("cyber")} className={isSelected === "cyber" ? "selected" : "select"}>Cyber Security</h3>
        <h3 onClick={() => setIsSelected("mobile")} className={isSelected === "mobile" ? "selected" : "select"}>Mobile</h3>
    </div>

    <div className="service-show">
        {/* <ServiceBox props={isSelected === "web" ? webData : isSelected === "mobile" ? mobileData : isSelected === "cross" ? crossData : null} />  */}
        <div className="service-grid-box">
            <h2 className="service-help-title font-bold">I CAN HELP YOU</h2>
            {isSelected === "web" ?  <ServiceBox /> : isSelected === "mobile" ? <ServiceBoxMobile /> : isSelected === "cross" ? <ServiceBoxAi /> : isSelected === "cyber" ? <ServiceBoxCyber/> : null}
        </div>
        {isSelected === "web" ?   
        <div className="specific-project-show" >
            
            <PortfolioItem
                title="Lupody"
                subtitle1="Social Media Platform"
                subtitle2="AI Powered"
                subtitle3="Firebase Backend"
                onClick={() => handlePortfolioNavigation("Lupody")}
            />

            <div onClick={() => handlePortfolioNavigation("Clippify")} className="project-show">
                <h3>Clippify</h3>
                <div>
                    <h6>Ai Clip Analysing</h6>
                    <h6>Clip Saving and Storing</h6>
                    <h6>Firebase Backend</h6>
                </div>
                
            </div>
        </div>  : 
        isSelected === "mobile" ?  
        <div className="specific-project-show" >
            
            <div onClick={() => handlePortfolioNavigation("Lupody Mobile")} className="project-show">
                <h3>Lupody Mobile</h3>
                <div>
                    <h6>Social Media Platform</h6>
                    <h6>Ai Powered</h6>
                    <h6>Firebase Backend</h6>
                </div>
                
            </div>

            <div onClick={() => handlePortfolioNavigation("Clippify-Mobile")} className="project-show">
                <h3>Clippify Mobile</h3>
                <div>
                    <h6>Ai Clip Analysing</h6>
                    <h6>Clip Saving and Storing</h6>
                    <h6>Firebase Backend</h6>
                </div>
                
            </div>
        </div> 
        : isSelected === "cross" ? 
        <div className="specific-project-show" >
            
        <div onClick={() => handlePortfolioNavigation("Clippify")} className="project-show">
            <h3>Speech To Text</h3>
            <div>
                <h6>Self-Made with Tensorflow</h6>
                <h6>Recurrent Neural Network</h6>
                <h6>CTC loss & Word Error Rate</h6>
                <h6>Embedded into Web Application</h6>
            </div>
            
        </div>

        <div onClick={() => handlePortfolioNavigation("Clippify")} className="project-show">
            <h3>Object Detection</h3>
            <div>
                <h6>Self-Made with Tensorflow</h6>
                <h6>OpenCV</h6>
                <h6>Convolutional Neural Network</h6>
                <h6>Process for Detecting anything</h6>
                <h6>Embedded into Web Application</h6>
            </div>
            
        </div>

        <div onClick={() => handlePortfolioNavigation("Clippify")} className="project-show">
            <h3>Kaggle Solutions</h3>
            <div>
                <h6>Free Time Activity</h6>
                <h6>ML Algorythms for Competitions</h6>
            </div>
            
        </div>
        </div>  
        : isSelected === "cyber" ? 
        <div className="specific-project-show" >
            <div onClick={() => handlePortfolioNavigation("Clippify")} className="project-show">
                <h3>Capture The Flag</h3>
                <div>
                    <h6>Free Time Activity</h6>
                    <h6>Hack The Box</h6>
                    <h6>Try Hack Me</h6>
                    <h6>Kali Linux</h6>
                </div>
            </div>

            <div onClick={() => handlePortfolioNavigation("Clippify")} className="project-show">
                <h3>Pentesting My Web Apps</h3>
                <div>
                    <h6>Free Time Activity</h6>
                    <h6>Hack The Box</h6>
                    <h6>Try Hack Me</h6>
                    <h6>Kali Linux</h6>
                </div>
            </div>

            <div onClick={() => handlePortfolioNavigation("Clippify")} className="project-show">
                <h3>Pentesting My Mobile Apps</h3>
                <div>
                    <h6>Free Time Activity</h6>
                    <h6>Hack The Box</h6>
                    <h6>Try Hack Me</h6>
                    <h6>Kali Linux</h6>
                </div>
            </div>

        </div> :
            null}
    </div>
    </>
    )
}


const PortfolioItem = ({ title, subtitle1, subtitle2, subtitle3, onClick }) => {
    return (
      <div
        onClick={onClick}
        className="bg-white shadow-lg rounded-lg cursor-pointer hover:shadow-xl hover:border transition duration-300 ease-in-out w-[100%]"
      >
        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
          <div className="text-gray-600">
            <h6 className="text-sm mb-1">{subtitle1}</h6>
            <h6 className="text-sm mb-1">{subtitle2}</h6>
            <h6 className="text-sm mb-1">{subtitle3}</h6>
          </div>
        </div>
      </div>
    );
  };