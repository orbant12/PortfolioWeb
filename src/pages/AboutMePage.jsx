import React from 'react';

// Import images (these would be your actual image imports)
import hockeyImage from "../assets/abtME/hock.jpg"
import classImage from "../assets/abtME/class.jpeg"
import vuBImage from "../assets/abtME/vu_b.jpg"
import webImage from "../assets/abtME/c5.png"
import kaliImage from "../assets/abtME/kali.png"
import internImage from "../assets/abtME/intern.jpeg"
import mlImage from "../assets/abtME/andrew.png"
import vusecImage from "../assets/abtME/vusec.jpg"
import mobileImage from "../assets/abtME/mobile.png"
import htbCert from "../assets/htbCert.png"
import demoLab from "../assets/demoLab.png"

const AboutMePage = () => {
  // Animated Matrix-style background with purple theme
  const MatrixBackground = () => (
    <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-10">
      <div className="matrix-rain">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="matrix-column"
            style={{
              left: `${i * 2}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            {[...Array(20)].map((_, j) => (
              <span key={j} className="text-purple-400 text-xs font-mono">
                {String.fromCharCode(0x30A0 + Math.random() * 96)}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );

  // Glitch text effect
  const GlitchText = ({ children, className = "" }) => (
    <div className={`glitch ${className}`} data-text={children}>
      {children}
    </div>
  );

  // macOS-style terminal window
  const TerminalWindow = ({ title, children, className = "" }) => (
    <div className={`bg-black border border-purple-500 rounded-lg shadow-lg shadow-purple-500/20 terminal-border ${className}`}>
      <div className="flex items-center p-4 border-b border-purple-700">
        <div className="flex space-x-2 mr-4">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
        </div>
        <span className="text-purple-400 font-mono text-sm">{title}</span>
      </div>
      <div className="p-6">
        {children}
      </div>
    </div>
  );

  // Skill badge component
  const SkillBadge = ({ skill }) => (
    <span className="px-3 py-1 bg-purple-900/30 border border-purple-600 rounded text-purple-300 font-mono text-xs hover:border-purple-500 hover:bg-purple-800/40 transition-all duration-300 m-1">
      {skill}
    </span>
  );

  // Timeline item component
  const TimelineItem = ({ year, title, description, skills, inspiration, imageUrl, isReversed = false }) => (
    <div className={`flex flex-col ${isReversed ? 'xl:flex-row-reverse' : 'xl:flex-row'} items-center w-full mb-20 relative`}>
      {/* Image section */}
      <div className="w-full xl:w-1/2 mb-6 xl:mb-0">
        <TerminalWindow title={`~/timeline/${year.toLowerCase().replace(/\s+/g, '_')}`}>
          <div className="h-[290px] bg-gray-800 rounded border border-purple-700 overflow-hidden">
            <img 
              src={imageUrl} 
              alt={title}
              className="w-full h-full object-cover relative"
            />
          </div>
        </TerminalWindow>
      </div>

      {/* Content section */}
      <div className={`w-full xl:w-1/2 ${isReversed ? 'xl:pr-8' : 'xl:pl-8'}`}>
        <TerminalWindow title={`~/profile/${year.toLowerCase().replace(/\s+/g, '_')}.log`}>
          <div className="text-purple-400 font-mono">
            <div className="text-purple-500 font-mono text-sm mb-2">[SYSTEM_LOG]</div>
            <div className="text-purple-300 font-mono text-lg mb-4">{year} - {title}</div>
            
            <div className="text-purple-400 font-mono text-sm mb-4 leading-relaxed">
              {description}
            </div>

            {skills && skills.length > 0 && (
              <div className="mb-4">
                <div className="text-purple-300 font-mono text-sm mb-2"># Skills Acquired:</div>
                <div className="flex flex-wrap">
                  {skills.map((skill, index) => (
                    <SkillBadge key={index} skill={skill} />
                  ))}
                </div>
              </div>
            )}

            {inspiration && (
              <div className="bg-gray-900 border border-purple-700 rounded p-3 mt-4">
                <div className="text-purple-300 font-mono text-xs mb-1"># Inspiration:</div>
                <div className="text-purple-400 font-mono text-xs">{inspiration}</div>
              </div>
            )}
          </div>
        </TerminalWindow>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-purple-400 font-mono relative overflow-hidden">
      <MatrixBackground />
      
      {/* Styles */}
      <style jsx>{`
        @keyframes matrix-fall {
          0% { transform: translateY(-100vh); }
          100% { transform: translateY(100vh); }
        }
        
        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }
        
        @keyframes flicker {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        
        @keyframes neural-pulse {
          0%, 100% { box-shadow: 0 0 5px #8b5cf6; }
          50% { box-shadow: 0 0 20px #8b5cf6, 0 0 30px #8b5cf6; }
        }
        
        .matrix-column {
          position: absolute;
          animation: matrix-fall linear infinite;
          display: flex;
          flex-direction: column;
        }
        
        .glitch {
          position: relative;
          animation: flicker 2s infinite;
        }
        
        .glitch:before,
        .glitch:after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: black;
        }
        
        .glitch:before {
          animation: glitch 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
          color: #ff0066;
          z-index: -1;
        }
        
        .glitch:after {
          animation: glitch 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both infinite;
          color: #8b5cf6;
          z-index: -2;
        }
        
        .terminal-border {
          position: relative;
        }
        
        .terminal-border:before {
          content: '';
          position: absolute;
          top: -1px;
          left: -1px;
          right: -1px;
          bottom: -1px;
          background: linear-gradient(45deg, #8b5cf6, #6366f1, #8b5cf6);
          border-radius: inherit;
          z-index: -1;
          animation: neural-pulse 3s infinite;
        }
      `}</style>

      {/* Main content */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="text-purple-500 font-mono text-sm mb-2">[PERSONAL_PROFILE_INIT]</div>
          <GlitchText className="text-4xl md:text-6xl font-bold text-purple-300 mb-8">
            ABOUT_ME
          </GlitchText>
          <div className="text-purple-400 font-mono mb-8">
            <span className="text-purple-500">user@profile:~$</span> cat personal_timeline.log
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-6xl mx-auto">
          <TimelineItem
            year="2009-2020"
            title="Ice Hockey"
            description="From 2009 to 2020, I was deeply involved in competitive ice hockey. This experience not only honed my skills on the ice but also allowed me to form lasting friendships with teammates whom I still hang out with today. Being part of a team taught me the value of collaboration and teamwork. Serving as the team captain for three years further developed my leadership abilities, shaping me into a confident and effective leader."
            skills={["Team Work", "Discipline", "Learning from failure"]}
            imageUrl={hockeyImage}
            isReversed={false}
          />

          <TimelineItem
            year="2018-2023"
            title="Informatics & Mathematics Highschool"
            description="From 2018 to 2023, I attended Informatics & Mathematics High School, where I developed a strong passion for math and informatics—my favorite subjects. During this time, I actively participated in programming and math competitions, which helped me sharpen my problem-solving skills and deepen my understanding of both fields. While these subjects captured my interest, I found my real passion in programming and continued to build on that foundation through personal projects and challenges."
            skills={["Mathematics", "Programming", "Problem Solving", "Competitive Programming"]}
            imageUrl={classImage}
            isReversed={true}
          />

          <TimelineItem
            year="2021"
            title="Web Development"
            description="My interest in web development began with a fascination for how the web works and a desire to build my own applications. The first project that truly rooted my knowledge in web development was inspired by my love for podcasts. I wanted to create a space where I could store podcast snippets and make notes with the help of AI, which led to the development of my app, Clippify. This project deepened my understanding of full-stack development and allowed me to explore how AI can enhance user experiences."
            skills={["JS, HTML, CSS", "GO", "Typescript", "React", "Next JS", "AWS EC2", "Docker", "Firebase", "Node", "SQL", "Web Servers", "REST API's"]}
            inspiration="Wanted to build a web app to store podcast snippets with notes"
            imageUrl={webImage}
            isReversed={false}
          />

          <TimelineItem
            year="2022"
            title="Offensive Cyber Security"
            description="I also have a strong passion for Offensive Cyber Security, driven by my love for IT, ethical hacking, and exploitation. I enjoy testing the security of my web apps, and the continuous learning required in this field fuels my curiosity and drive to keep improving."
            skills={["Pentesting", "Networking", "OSI Model", "Enumeration", "CTF's HTB, THM, Pico", "Kali Linux"]}
            inspiration="Wanted know the vulnerabilities of my web app's and got hooked in the process"
            imageUrl={kaliImage}
            isReversed={true}
          />

          <TimelineItem
            year="2023/24"
            title="First Internship (Getcon - Network Security Company)"
            description="In 2023/24, I completed a 9-month internship at Getcon, where I gained hands-on experience in upgrading and migrating IT infrastructure. This role allowed me to develop a deeper understanding of IT systems and processes while working on real-world projects."
            skills={["IT Infrastructure", "System Migration", "Network Security", "Real-world Experience"]}
            imageUrl={internImage}
            isReversed={false}
          />

          <TimelineItem
            year="2023/24"
            title="Machine Learning & Deep Learning"
            description="I have a strong interest in Machine Learning and Deep Learning, fascinated by how they work. I've used these technologies to power my apps and even built applications around useful models, integrating AI to enhance functionality and user experience."
            skills={["Python", "Flask", "Tensorflow", "Pandas", "SQL", "Numpy"]}
            inspiration="Curiosity and the still remaining fascinations about it's processes"
            imageUrl={mlImage}
            isReversed={true}
          />

          <TimelineItem
            year="2024"
            title="Mobile Development"
            description="I primarily build mobile applications using React Native, though I have some experience with Swift as well. I love the versatility of React Native, allowing me to create apps for both web and mobile, giving me flexibility in how I bring my ideas to life."
            skills={["React Native", "Typescript", "Go", "Expo", "Swift UI"]}
            inspiration="Wanted to learn Typescript, GO, React Native and put my freshly learned ML knowledge into use"
            imageUrl={mobileImage}
            isReversed={false}
          />

          <TimelineItem
            year="2024-2027"
            title="Vrije University Amsterdam"
            description="I started my BSc in Computer Science at Vrije University Amsterdam in 2024, moving from Budapest to pursue my studies and further my passion for technology."
            skills={["Computer Science", "Academic Research", "Software Engineering"]}
            imageUrl={vuBImage}
            isReversed={true}
          />

          <TimelineItem
            year="2024"
            title="HackTheBox University CTF"
            description="Placement: 31 out of 1128 universities. Team: Vrije University Amsterdam. My Responsibility: Web Hacking"
            skills={["Web Hacking", "CTF Competition", "Team Collaboration"]}
            imageUrl={htbCert}
            isReversed={false}
          />

          <TimelineItem
            year="2025"
            title="Startup phase with Demonstrator Lab Amsterdam"
            description="I've joined a startup incubator organization, trying to elevate my skin cancer prevention [Screen Screen] startup. This given me opportunities to learn startup management, business operations, venture capital and more... Also it given me many invitations to startup conferences, where I could network and learn."
            skills={["Startup Management", "Business Operations", "Venture Capital", "Networking", "Product Development"]}
            imageUrl={demoLab}
            isReversed={true}
          />
        </div>
      </div>

      {/* Terminal footer */}
      <div className="border-t border-purple-500 bg-black p-4">
        <div className="text-purple-400 font-mono text-center">
          <span className="text-purple-500">user@profile:~$</span> Profile scan complete // End of timeline
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;