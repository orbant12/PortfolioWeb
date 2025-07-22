import React, { useState,useRef,useEffect } from 'react';
import { Shield, Target, Code, BookOpen, Award, ChevronRight, Lock, Bug, Search, Database, Globe, Smartphone, Terminal, Zap, Trophy, Star, Users, Calendar, Download, Eye, ExternalLink, Sword } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import resume from "../assets/TO-port.pdf";

const CybersecLandingPage = () => {
  const [selectedModal, setSelectedModal] = useState(null);
  const [isAiChatOpen, setIsAiChatOpen] = useState(false);
  

  // CTF and Cybersecurity Projects Data
  const ctfProjects = [
    {
      title: "[HTB] Artificial",
      category: "2025-07-06",
      difficulty: "Medium",
      description: "AI-themed machine featuring TensorFlow web application vulnerable to malicious .h5 model uploads.",
      tags:[".h5 file upload", "keras RCE", "sqlite enumeration", "hash cracking", "backrest WebUI RCE", "port forwarding"],
      status: "Completed",
      points: "CTF"
    },
    {
      title: "[HTB] Codify",
      category: "2025-07-07",
      difficulty: "Easy",
      description: "Fascinating challenge that demonstrates the dangers of code sandboxes and privilege escalation through misconfigured scripts.",
      tags: ["vm2 js sandbox escape", "CVE-2023-30547", "sqlite enumeration", "hash cracking", "sudo privileges", "bash script exploitation", "terminal spoofing"],
      status: "Completed",
      points: "CTF"
    },
   {
      title: "[HTB] Pilgrimage",
      category: "2025-07-11",
      difficulty: "Easy",
      description: "Intriguing challenge that showcases the power of git repository leakage and CVE exploitation.",
      tags: ["git repository leak", "CVE-2022-44268", "ImageMagick exploit", "arbitrary file read", "CVE-2022-4510", "binwalk RCE", "terminal spoofing"],
      status: "Completed",
      points: "CTF"
    },
       {
      title: "[HTB] CozyHosting",
      category: "2025-07-15",
      difficulty: "Medium",
      description: "Spring Boot enumeration techniques, command injection vulnerabilities, and lateral movement through PostgreSQL database credential",
      tags: ["Spring Boot enumeration", "actuator endpoints", "command injection", "PostgreSQL", "hash cracking", "lateral movement", "sudo privileges", "GTFOBins"],
      status: "Completed",
      points: "CTF"
    },

    {
      title: "[HTB] Busqueda",
      category: "2025-07-20",
      difficulty: "Easy",
      description: "Dangers of Python eval() and f-string injection vulnerabilities. Explore how improper input sanitization in a Flask application leads to RCE, exposed git repositories containing sensitive credentials, Docker configuration mismanagement enables privilege escalation",
      tags:["Python eval injection", "f-string escape", "CVE-2023-43364", "git credential leak", "Docker privilege escalation", "Searchor 2.4.0", "Flask exploitation", "sudo misconfiguration"],
      status: "Completed",
      points: "CTF"
    },

           {
      title: "[HTB] Squashed",
      category: "2025-07-20",
      difficulty: "Easy",
      description: "Network File System (NFS) misconfigurations and X11 session hijacking. Discover how improper NFS exports can lead to user impersonation, explore the intricacies of UID manipulation, and learn how X11 can be leveraged for privilege escalation",
      tags: ["NFS", "nfs root_squash mis-config", "X11 hijacking", ".Xauthority", "xwd screenshot", "uid impersonation", "PHP reverse shell"],
      status: "Completed",
      points: "CTF"
    },

           {
      title: "[HTB] Precious",
      category: "2025-07-21",
      difficulty: "Easy",
      description: "Master URL input command injection through PDFKit exploitation, navigate through Ruby YAML deserialization attacks, and escalate privileges via misconfigured sudo permissions",
      tags: ["URL input", "command injection", "PDFKit CVE-2022-25765", "YAML deserialization", "ruby exploitation", "credential discovery", "sudo misconfiguration", "lateral movement"],
      status: "Completed",
      points: "CTF"
    },

             {
      title: "[HTB] Photobomb",
      category: "2025-07-21",
      difficulty: "Easy",
      description: "Demonstrates how image processing applications can be exploited through filtered command injection, credential discovery in JavaScript source code, and PATH injection privilege escalation vulnerabilities",
      tags: ["filter enumeration", "filtered command injection", "PATH injection privilege escalation", "JavaScript analysis", "credential discovery", "image processing", "sudo exploitation", "bash built-ins"],
      status: "Completed",
      points: "CTF"
    },

             {
      title: "[HTB] Irked",
      category: "2025-07-22",
      difficulty: "Medium",
      description: "Exploit a backdoor in UnrealIRCd, uncover hidden credentials through steganography, and escalate privileges through SUID binary exploitation with reverse engineering via ghidra",
      tags: ["Backdoored version exploit", "Ghidra", "RCI Enumeration", "Reverse engineering", "SUID", "Steganography", "IRC exploitation", "Binary analysis"],
      status: "Completed",
      points: "CTF"
    },
  ];

  const certifications = {
    completed: [
      {
        name: "CompTIA Security+",
        provider: "CompTIA",
        level: "Foundation",
        badge: "🏆",
        completedDate: "April 2025",
        xpEarned: 2500,
        description: "Security fundamentals and core concepts mastered",
        skills: ["Risk Management", "Cryptography", "Network Security", "Identity Management"],
        blogPost: "Security+ Journey: From Zero to Certified in 3 Months",
        isBlog:false
      },
    ],
    inProgress: [
      {
        name: "Offsec OSCP",
        provider: "Offensive Security",
        level: "Expert",
        badge: "🔥",
        completedDate: "August 2024", 
        xpEarned: 5000,
        description: "Elite penetration testing certification - Try Harder!",
        skills: ["Buffer Overflows", "Active Directory", "Privilege Escalation", "Manual Exploitation"],
        blogPost: "OSCP Experience: 90 Days in the Labs and Exam Success",
        isBlog:false
      },
      {
        name: "CBBH (Certified Bug Bounty Hunter)",
        provider: "HackTheBox Academy",
        level: "Professional",
        progress: 75,
        totalModules: 16,
        completedModules: 12,
        badge: "🎯",
        estimatedCompletion: "January 2025",
        xpProgress: 3750,
        maxXp: 5000,
        description: "Advanced web application security and bug bounty techniques",
        recentBlog: "CBBH Progress Update: Advanced SQLi and XSS Techniques",
        isBlog:false
      }
    ]
  };

  const fullstackProjects = [
    {
      title: "Clippify",
      description: "AI-powered video analysis platform with speech-to-text and intelligent chatbot features",
      tech: ["React", "Node.js", "AI/ML", "FFMpeg","Firebase DB"],
      type: "Web Application",
      security: "Implemented OAuth 2.0, JWT tokens, and input sanitization"
    },
    {
      title: "Skin Cancer Detection", 
      description: "Social media platform for podcasters with AI-powered content recommendations",
      tech: ["React Native", "Go", "NoSQL", "Typescript"],
      type: "Mobile Application",
      security: "End-to-end encryption for messages, secure API design"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Cybersecurity Focus Section */}
      <CybersecurityShowcase ctfProjects={ctfProjects} />
      
      <div className='shadow-lg' style={{
        width: "100%", 
        position: "relative",
        backgroundColor: "rgba(187, 0, 249, 0.2)", 
        height: "1px", 
        border: "1px solid purple",
    }} />

      {/* Gaming-Style Certification Dashboard */}
      <CertificationDashboard certifications={certifications} />
      
      {/* CTF Writeups & Learning Hub */}
      <LearningHub />
      
      {/* Fullstack Development Section */}
      <FullstackSection projects={fullstackProjects} />
      
      {/* Skills & Technologies */}
      <SkillsSection setSelectedModal={setSelectedModal} />
      
      {/* Contact & Resume */}
      <ContactSection isAiChatOpen={isAiChatOpen} setIsAiChatOpen={setIsAiChatOpen} />
      
      {/* Tech Stack Modal */}
      <TechModal selectedModal={selectedModal} setSelectedModal={setSelectedModal} />
    </div>
  );
};

const HeroSection = () => {

  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-500 rounded-full animate-ping"></div>
      </div>
      
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-green-400">
              <Shield className="w-6 h-6" />
              <span className="text-sm font-medium tracking-wider">CYBERSECURITY</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Hey I'm <span className="bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">Tamas</span> 👋
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
              Penetration Tester & Ethical Hacker specializing in web application security, 
              CTF challenges, and secure fullstack development.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <div onClick={() => window.open(resume, '_blank')} className="bg-gradient-to-r relative from-purple-500 cursor-pointer to-purple-600 hover:from-purple-600 hover:to-purple-700 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
              <Eye className="w-5 h-5" />
              <span>View Resume</span>
            </div>

            <div onClick={() => navigate("/cyber_security-projects")} className="border-2 cursor-pointer relative border-green-400 text-green-400 hover:bg-green-400 hover:text-black px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2">
              <Target className="w-5 h-5" />
              <span>CTF Writeups</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-6 pt-4 relative">
            <div className="flex items-center space-x-2 text-gray-400">
              <span className="text-sm">Worked for:</span>
            </div>
            <div className="bg-gray-800 px-4 py-2 relative rounded-lg border border-gray-700 hover:border-purple-400 transition-colors cursor-pointer">
              <span className="text-purple-400 font-semibold">Getcon</span>
            </div>
            <div className="bg-gray-800 px-4 py-2 rounded-lg relative border border-gray-700 hover:border-purple-400 transition-colors cursor-pointer">
              <span className="text-purple-400 font-semibold">VU Studsec</span>
            </div>
            <div className="bg-gray-800 px-4 py-2 rounded-lg relative border border-gray-700 hover:border-purple-400 transition-colors cursor-pointer">
              <span className="text-purple-400 font-semibold">Road.io</span>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="bg-gradient-to-r relative from-purple-400/20 to-green-400/20 p-8 rounded-2xl backdrop-blur-sm border border-gray-700">
            <div className="aspect-square relative bg-gray-800 rounded-xl flex items-center justify-center">
              <div className="text-6xl">👨‍💻</div>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute -top-4 -right-4  bg-purple-500 p-3 rounded-full animate-bounce">
            <Shield className="w-6 h-6 text-black" />
          </div>
          <div className="absolute -bottom-4 -left-4 bg-green-500 p-3 rounded-full animate-pulse">
            <Lock className="w-6 h-6 text-black" />
          </div>
        </div>
      </div>
    </section>
  );
};

const CybersecurityShowcase = ({ ctfProjects }) => {
  
  const navigate = useNavigate();
  const [isPaused, setIsPaused] = useState(false);
  const [currentTransform, setCurrentTransform] = useState(0);
  const sliderRef = useRef(null);
  const animationRef = useRef(null);
  const startTimeRef = useRef(null);
  const pausedTimeRef = useRef(0);

  const handleNav = (title) => {
    if(title == "[HTB] Artificial"){
      navigate("/cyber_security-projects/artificial-writeup")
    } else if (title == "[HTB] Codify"){
      navigate("/cyber_security-projects/codify-writeup")
    } else if(title === "[HTB] Pilgrimage"){
      navigate("/cyber_security-projects/pilgrimage-writeup")
    } else if(title === "[HTB] CozyHosting"){
      navigate("/cyber_security-projects/cozyhosting-writeup")
    } else if(title === "[HTB] Busqueda"){
      navigate("/cyber_security-projects/busqueda-writeup")
    } else if(title === "[HTB] Squashed"){
      navigate("/cyber_security-projects/squashed-writeup")
    } else if(title === "[HTB] Precious"){
      navigate("/cyber_security-projects/precious-writeup")
    } else if(title === "[HTB] Photobomb"){
      navigate("/cyber_security-projects/photobomb-writeup")
    } else if(title === "[HTB] Irked"){
      navigate("/cyber_security-projects/irked-writeup")
    }
  }

  // Duplicate projects for seamless loop
  const duplicatedProjects = [...ctfProjects, ...ctfProjects];

  const animate = (timestamp) => {
    if (!startTimeRef.current) {
      startTimeRef.current = timestamp - pausedTimeRef.current;
    }
    
    const elapsed = timestamp - startTimeRef.current;
    const duration = 110000; // 60 seconds in milliseconds
    const progress = (elapsed % duration) / duration;
    const translateX = progress * -50; // Move from 0% to -50%
    
    setCurrentTransform(translateX);
    
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(${translateX}%)`;
    }
    
    if (!isPaused) {
      animationRef.current = requestAnimationFrame(animate);
    }
  };

  useEffect(() => {
    if (!isPaused) {
      animationRef.current = requestAnimationFrame(animate);
    } else {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      // Store how much time has passed when paused
      if (startTimeRef.current) {
        pausedTimeRef.current = performance.now() - startTimeRef.current;
      }
    }
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    startTimeRef.current = null; // Reset start time to continue from current position
    setIsPaused(false);
  };

  return (
    <section className="py-20 px-6 bg-gray-910 w-[100%]">
      <div className="mx-10 w-[100%]">
        <div className="text-center mb-16 w-[100%]">
          <div className="flex items-center justify-center space-x-2 text-green-400 mb-4">
            <Target className="w-6 h-6" />
            <span className="text-sm font-medium tracking-wider">PENETRATION TESTING & CTF</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">My Penetration Test</span> Writeups
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From web exploitation to Active Directory attacking - explore my journey through CTF challenges, and ethical hacking methodologies.
          </p>
        </div>
        
        {/* Slider Container */}
        <div className="relative overflow-hidden p-10 w-[750%]">
          <div 
            ref={sliderRef}
            className="flex gap-8 relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              width:'100%',
              willChange: 'transform'
            }}
          >
            {duplicatedProjects.map((project, index) => (
              <div 
                key={`${project.title}-${index}`} 
                onClick={() => handleNav(project.title)} 
                className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-purple-400 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer flex-shrink-0 w-80 w-[400px]"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    project.difficulty === 'Easy' ? 'bg-green-500/20 text-green-400' :
                    project.difficulty === 'Medium' ? 'bg-purple-500/20 text-purple-400' :
                    'bg-gray-500/20 text-gray-400'
                  }`}>
                    {project.difficulty}
                  </span>
                  <div className="flex items-center space-x-1 text-green-400">
                    <Sword className="w-4 h-4 fill-current" />
                    <span className="text-sm font-medium">{project.points}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.category}</p>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-gray-700 text-gray-300 px-2 py-1 text-xs rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const CertificationDashboard = ({ certifications }) => {
  const totalCerts = certifications.completed.length + certifications.inProgress.length;
  
  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-green-400 mb-4">
            <Terminal className="w-6 h-6" />
            <span className="text-sm font-medium tracking-wider font-mono">CERTIFICATION_STATUS</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-mono">
            <span className="text-green-400">[root@security]# </span>
            <span className="bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">cert --list</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-mono">
            > Displaying active security certifications and training progress...
          </p>
        </div>
        
        {/* Terminal-style Stats */}
        <div className="bg-black border border-green-400 rounded-lg p-6 mb-12 font-mono">
          <div className="text-green-400 mb-4">
            <span className="text-purple-400">┌──(</span>
            <span className="text-white">tamas㉿security-station</span>
            <span className="text-purple-400">)-[</span>
            <span className="text-green-400">~/certifications</span>
            <span className="text-purple-400">]</span>
          </div>
          <div className="text-green-400 mb-2">└─$ certification_status --summary</div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-6 text-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400 mb-1">{certifications.completed.length}</div>
              <div className="text-gray-400 uppercase tracking-wider">COMPLETED</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400 mb-1">{certifications.inProgress.length}</div>
              <div className="text-gray-400 uppercase tracking-wider">IN_PROGRESS</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400 mb-1">{totalCerts}</div>
              <div className="text-gray-400 uppercase tracking-wider">TOTAL_CERTS</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400 mb-1">EXPERT</div>
              <div className="text-gray-400 uppercase tracking-wider">SKILL_LEVEL</div>
            </div>
          </div>
        </div>

        {/* Completed Certifications */}
        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <Shield className="w-6 h-6 text-green-400" />
            <h3 className="text-2xl font-bold text-green-400 font-mono">[COMPLETED_CERTIFICATIONS]</h3>
          </div>
          
          <div className="space-y-6">
            {certifications.completed.map((cert, index) => (
              <div key={index} className="bg-gray-900 border border-green-400/50 rounded-lg p-6 hover:border-green-400 transition-colors">
                <div className="grid lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-1 text-center">
                    <div className="text-3xl mb-2">{cert.badge}</div>
                    <div className="text-xs text-green-400 font-mono">VERIFIED</div>
                  </div>
                  
                  <div className="lg:col-span-8">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-green-400 font-mono text-sm">[CERT]</span>
                      <h4 className="text-xl font-bold text-white">{cert.name}</h4>
                    </div>
                    <div className="text-gray-400 text-sm mb-2 font-mono">
                      Provider: {cert.provider} | Level: {cert.level}
                    </div>
                    <p className="text-gray-300 text-sm">{cert.description}</p>
                  </div>
                  
                  <div className="lg:col-span-3">
                    <div className="text-right mb-4">
                      <div className="text-purple-400 font-mono text-sm">COMPLETED</div>
                      <div className="text-green-400 font-bold">{cert.completedDate}</div>
                    </div>
                    
                    <div className="space-y-2">
                      {cert.skills.slice(0, 2).map((skill, skillIndex) => (
                        <div key={skillIndex} className="bg-black border border-gray-600 px-2 py-1 text-xs text-green-400 font-mono">
                          > {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {cert.isBlog &&
                          <div className="lg:col-span-2 text-center">
                          <div className="bg-transparent border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black px-4 py-2 rounded text-sm font-mono transition-colors w-full">
                            VIEW_BLOG
                          </div>
                        </div>
                  }
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* In Progress Certifications */}
        <div>
          <div className="flex items-center space-x-3 mb-8">
            <Target className="w-6 h-6 text-purple-400" />
            <h3 className="text-2xl font-bold text-purple-400 font-mono">[TRAINING_IN_PROGRESS]</h3>
          </div>
          
          <div className="space-y-6">
            {certifications.inProgress.map((cert, index) => (
              <div key={index} className="bg-gray-900 border border-purple-400/50 rounded-lg p-6 hover:border-purple-400 transition-colors">
                <div className="grid lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-1 text-center">
                    <div className="text-3xl mb-2">{cert.badge}</div>
                    <div className="text-xs text-purple-400 font-mono animate-pulse">ACTIVE</div>
                  </div>
                  
                  <div className="lg:col-span-5">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-purple-400 font-mono text-sm">[TRAINING]</span>
                      <h4 className="text-xl font-bold text-white">{cert.name}</h4>
                    </div>
                    <div className="text-gray-400 text-sm mb-2 font-mono">
                      Provider: {cert.provider} | Level: {cert.level}
                    </div>
                    <p className="text-gray-300 text-sm mb-4">{cert.description}</p>
                    
        
                  </div>
                  
                  <div className="lg:col-span-6">
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-2 font-mono">
                        <span className="text-gray-400">PROGRESS:</span>
                        <span className="text-green-400">{cert.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-sm h-2 border border-gray-600">
                        <div 
                          className="bg-gradient-to-r from-purple-500 to-green-400 h-2 rounded-sm transition-all duration-500"
                          style={{ width: `${cert.progress}%` }}
                        ></div>
                      </div>
                      <div className="text-xs text-gray-400 mt-1 font-mono">
                        [{cert.completedModules}/{cert.totalModules}] modules completed
                      </div>
                    </div>
                    
                    <div className="text-xs font-mono">
                      <div className="text-gray-400">ETA: <span className="text-green-400">{cert.estimatedCompletion}</span></div>
                    </div>
                  </div>
                  {cert.isBlog &&
                      <div className="lg:col-span-2 space-y-2">
                      <div className="bg-transparent border border-green-400 text-green-400 hover:bg-green-400 hover:text-black px-3 py-2 rounded text-xs font-mono transition-colors w-full">
                        READ_BLOG
                      </div>
                    </div>
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Terminal Footer */}
        <div className="mt-12 text-center">
          <div className="text-green-400 font-mono text-sm">
            <span className="text-gray-400">└─$ </span>
            <span className="animate-pulse">█</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const LearningHub = () => {
  const blogPosts = [
    {
      title: "🔑 Credhunter",
      category: "Post Exploitation",
      readTime: ".sh file",
      date: "July 2025",
      excerpt: "A powerful bash script designed to hunt for credentials, API keys, passwords, and sensitive files across directory structures. Perfect for OSCP exam preparation and ethical penetration testing."
    },

  ];

  return (
    <section className="py-20 px-6 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-green-400 mb-4">
            <BookOpen className="w-6 h-6" />
            <span className="text-sm font-medium tracking-wider">LEARNING & WRITEUPS</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Self-Built <span className="bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">Pentest Tools</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Custom-built penetration testing tools. These are the tools I always wanted but never found so I built it myself.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-purple-400 transition-all duration-300 hover:transform hover:-translate-y-2">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-green-500/20 text-green-400 px-3 py-1 text-xs font-semibold rounded-full">
                  {post.category}
                </span>
                <span className="text-gray-400 text-sm">{post.date}</span>
              </div>
              
              <h3 className="text-xl font-bold mb-3 hover:text-purple-400 cursor-pointer transition-colors">
                {post.title}
              </h3>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">{post.readTime}</span>
                <div className="text-purple-400 hover:text-purple-300 flex items-center space-x-1 text-sm font-medium">
                  <span>View Tool</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-500 to-green-500 hover:from-purple-600 hover:to-green-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 mx-auto w-[202px]">
            <BookOpen className="w-5 h-5" />
            <span>View All Tools</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const FullstackSection = ({ projects }) => {
  return (
    <section className="py-20 px-6 bg-gray-1000">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-green-400 mb-4">
            <Code className="w-6 h-6" />
            <span className="text-sm font-medium tracking-wider">SECURE DEVELOPMENT</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">Fullstack</span> Development
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Building secure, scalable applications with security-first mindset and modern technologies.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-purple-400 transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <span className="bg-green-500/20 text-green-400 px-3 py-1 text-sm font-semibold rounded-full">
                  {project.type}
                </span>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="mb-6">
                <div className="text-sm text-gray-400 mb-2">Technologies:</div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-gray-700 text-gray-300 px-3 py-1 text-sm rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mb-6">
                <div className="flex items-center space-x-2 mb-2">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span className="text-sm font-semibold text-green-400">Security Features</span>
                </div>
                <p className="text-sm text-gray-300">{project.security}</p>
              </div>
              
              <div className="flex space-x-4">
                <div className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2">
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </div>
                <div className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-black px-6 py-2 rounded-lg font-medium transition-colors">
                  View Code
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillsSection = ({ setSelectedModal }) => {
  const skillCategories = [
    {
      title: "Penetration Testing",
      icon: <Shield className="w-8 h-8" />,
      skills: ["Web App Testing", "Network Scanning", "Vulnerability Assessment", "Social Engineering"],
      color: "from-purple-500 to-purple-600",
      modalKey: "pentest"
    },
    {
      title: "Programming & Development", 
      icon: <Code className="w-8 h-8" />,
      skills: ["JavaScript/TypeScript", "Python", "Go", "React", "Node.js"],
      color: "from-green-500 to-green-600",
      modalKey: "programming"
    },
    {
      title: "Security Tools",
      icon: <Terminal className="w-8 h-8" />,
      skills: ["Burp Suite", "Metasploit", "Nmap", "Wireshark", "OWASP ZAP"],
      color: "from-purple-500 to-green-500", 
      modalKey: "tools"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Technical <span className="bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">Expertise</span>
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              onClick={() => setSelectedModal(category.modalKey)}
              className="bg-gray-900 rounded-xl p-8 border border-gray-700 hover:border-purple-400 transition-all duration-300 cursor-pointer hover:transform hover:scale-105"
            >
              <div className={`bg-gradient-to-r ${category.color} p-4 rounded-lg w-fit mb-6`}>
                {category.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{category.title}</h3>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="bg-gray-800 rounded-lg px-3 py-2 text-sm">
                    {skill}
                  </div>
                ))}
              </div>
              
              <div className="mt-6 text-purple-400 hover:text-purple-300 flex items-center space-x-1 text-sm font-medium">
                <span>View Details</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = ({ isAiChatOpen, setIsAiChatOpen }) => {
  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          Ready to <span className="bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">Collaborate?</span>
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Whether you need penetration testing, security consultation, or fullstack development - let's build something secure together.
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
            <Download className="w-5 h-5" />
            <span>Download Resume</span>
          </div>
          <div className="border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2">
            <span>Contact Me</span>
          </div>
        </div>
        
        <div className="text-gray-400">
          <p>📧 orbant1@gmail.com • 📍 Amsterdam, Netherlands</p>
        </div>
      </div>
      
      {/* Quick Info Chat div */}
      <div 
        onClick={() => setIsAiChatOpen(!isAiChatOpen)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-500 to-green-500 p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50"
      >
        <Users className="w-6 h-6" />
      </div>
      
      {/* Quick Info Panel */}
      {isAiChatOpen && (
        <div className="fixed bottom-24 right-6 bg-gray-800 border border-gray-600 rounded-xl p-6 shadow-2xl z-50 w-80">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-white">Quick Contact</h3>
            <div 
              onClick={() => setIsAiChatOpen(false)}
              className="text-gray-400 hover:text-white"
            >
              ✕
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Email:</span>
              <span className="text-purple-400">orbant1@gmail.com</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Location:</span>
              <span className="text-green-400">Amsterdam, NL</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Status:</span>
              <span className="text-green-400">Available</span>
            </div>
            
            <div className="flex space-x-3 pt-4">
              <div className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                View Resume
              </div>
              <div className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Download CV
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const TechModal = ({ selectedModal, setSelectedModal }) => {
  const modalContent = {
    pentest: {
      title: "Penetration Testing Arsenal",
      sections: [
        {
          category: "Web Application Security",
          items: ["SQL Injection", "XSS (Stored/Reflected/DOM)", "CSRF/XSRF", "IDOR", "Authentication Bypass", "Session Management", "File Upload Vulnerabilities"]
        },
        {
          category: "Network Security",
          items: ["Port Scanning", "Service Enumeration", "Network Mapping", "MITM Attacks", "Wireless Security", "VPN Assessment"]
        },
        {
          category: "System Security", 
          items: ["Privilege Escalation", "Buffer Overflows", "Binary Exploitation", "Reverse Engineering", "Malware Analysis"]
        }
      ]
    },
    programming: {
      title: "Programming & Development Stack",
      sections: [
        {
          category: "Frontend Technologies",
          items: ["JavaScript/TypeScript", "React.js", "Next.js", "HTML5/CSS3", "Tailwind CSS", "Responsive Design"]
        },
        {
          category: "Backend Technologies",
          items: ["Node.js", "Python", "Go", "Express.js", "Flask", "RESTful APIs", "GraphQL"]
        },
        {
          category: "Security Implementation",
          items: ["OAuth 2.0", "JWT Tokens", "Input Sanitization", "HTTPS/TLS", "Password Hashing", "Rate Limiting"]
        }
      ]
    },
    tools: {
      title: "Security Tools & Frameworks",
      sections: [
        {
          category: "Penetration Testing Tools",
          items: ["Burp Suite Professional", "OWASP ZAP", "Metasploit Framework", "Nmap", "Nikto", "SQLmap", "Gobuster"]
        },
        {
          category: "Forensics & Analysis",
          items: ["Wireshark", "Volatility", "Autopsy", "Ghidra", "IDA Pro", "OllyDbg", "Binwalk"]
        },
        {
          category: "Development & DevOps",
          items: ["Docker", "Git", "AWS", "Firebase", "PostgreSQL", "MongoDB", "Redis"]
        }
      ]
    }
  };

  if (!selectedModal || !modalContent[selectedModal]) return null;

  const content = modalContent[selectedModal];

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 rounded-xl max-w-4xl w-full max-h-[80vh] overflow-y-auto border border-gray-600 mt-20">
        <div className="sticky top-0 bg-gray-800 p-6 border-b border-gray-600 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">{content.title}</h2>
          <div 
            onClick={() => setSelectedModal(null)}
            className="text-gray-400 hover:text-white text-2xl font-bold"
          >
            ✕
          </div>
        </div>
        
        <div className="p-6 space-y-8">
          {content.sections.map((section, index) => (
            <div key={index} className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-purple-400 mb-4">{section.category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="bg-gray-700 text-gray-200 px-3 py-2 rounded-lg text-sm font-medium">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};



export default CybersecLandingPage;