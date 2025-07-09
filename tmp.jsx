import React, { useState, useEffect, useRef } from 'react';

// Mock tech icons - replace with actual devicons-react imports
const TechIcon = ({ name, size = 35, className = "" }) => (
  <div className={`w-8 h-8 bg-green-500 rounded flex items-center justify-center text-black text-xs font-bold ${className}`} style={{width: size, height: size}}>
    {name.slice(0,2).toUpperCase()}
  </div>
);

// Animated background component
const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden opacity-20">
    <div className="matrix-rain">
      {[...Array(20)].map((_, i) => (
        <div key={i} className="matrix-column" style={{left: `${i * 5}%`, animationDelay: `${i * 0.1}s`}}>
          {[...Array(20)].map((_, j) => (
            <span key={j} className="matrix-char">
              {String.fromCharCode(0x30A0 + Math.random() * 96)}
            </span>
          ))}
        </div>
      ))}
    </div>
    <style jsx>{`
      @keyframes matrix-fall {
        0% { transform: translateY(-100vh); opacity: 1; }
        100% { transform: translateY(100vh); opacity: 0; }
      }
      .matrix-column {
        position: absolute;
        top: 0;
        color: #00ff41;
        font-family: 'Courier New', monospace;
        font-size: 14px;
        animation: matrix-fall 3s linear infinite;
      }
      .matrix-char {
        display: block;
        line-height: 1.2;
      }
    `}</style>
  </div>
);

// Terminal-style typing effect
const TerminalText = ({ text, delay = 0 }) => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      let i = 0;
      const typeInterval = setInterval(() => {
        if (i <= text.length) {
          setDisplayText(text.slice(0, i));
          i++;
        } else {
          clearInterval(typeInterval);
        }
      }, 50);
      return () => clearInterval(typeInterval);
    }, delay);

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearTimeout(timer);
      clearInterval(cursorInterval);
    };
  }, [text, delay]);

  return (
    <span className="font-mono">
      {displayText}
      <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} text-green-400`}>|</span>
    </span>
  );
};

const FullstackPage = () => {
  const [selectedFullstack, setSelectedFullstack] = useState("web");
  const [isScrolledPassed, setIsScrolledPassed] = useState(false);
  const [open, setOpen] = useState(false);
  const [modelInput, setModelInput] = useState("");
  const scroll = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (scroll.current?.getBoundingClientRect().top < -60) {
        setIsScrolledPassed(true);
      } else {
        setIsScrolledPassed(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpen = (certInput) => {
    setOpen(true);
    setModelInput(certInput);
  };

  const handleClose = () => setOpen(false);

  return (
    <div ref={scroll} className="min-h-screen bg-black text-green-400 relative overflow-hidden">
      {/* Global Styles */}
      <style jsx global>{`
        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }
        
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes pulse-green {
          0%, 100% { box-shadow: 0 0 5px #00ff41, 0 0 10px #00ff41, 0 0 15px #00ff41; }
          50% { box-shadow: 0 0 10px #00ff41, 0 0 20px #00ff41, 0 0 30px #00ff41; }
        }
        
        .terminal-window {
          background: linear-gradient(145deg, #0a0a0a, #1a1a1a);
          border: 2px solid #00ff41;
          border-radius: 8px;
          box-shadow: 0 0 20px rgba(0, 255, 65, 0.3);
        }
        
        .glitch-effect:hover {
          animation: glitch 0.3s ease-in-out;
        }
        
        .fade-in-up {
          animation: fadeInUp 0.8s ease-out;
        }
        
        .pulse-border {
          animation: pulse-green 2s infinite;
        }
        
        .matrix-bg {
          background: radial-gradient(circle at center, rgba(0, 255, 65, 0.1) 0%, transparent 70%);
        }
      `}</style>

      <AnimatedBackground />

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center w-full px-8 pt-20 pb-16">
        <div className="w-full max-w-6xl fade-in-up">
          
          {/* Terminal Header */}
          <div className="terminal-window mb-8 p-6">
            <div className="flex items-center mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="ml-4 text-green-300 font-mono text-sm">~/portfolio/fullstack-dev</div>
            </div>
            
            {/* Mode Switcher */}
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-green-300 font-mono text-sm">$</span>
              <span className="text-gray-400 font-mono text-sm">mode --select</span>
              <div className="flex bg-gray-900 border border-green-500 rounded-lg overflow-hidden">
                <button
                  className={`px-6 py-2 font-mono text-sm transition-all duration-300 ${
                    selectedFullstack === 'web' 
                      ? 'bg-green-500 text-black font-bold' 
                      : 'text-green-400 hover:bg-green-900'
                  }`}
                  onClick={() => setSelectedFullstack('web')}
                >
                  [WEB]
                </button>
                <div className="w-px bg-green-500"></div>
                <button
                  className={`px-6 py-2 font-mono text-sm transition-all duration-300 ${
                    selectedFullstack === 'mobile' 
                      ? 'bg-green-500 text-black font-bold' 
                      : 'text-green-400 hover:bg-green-900'
                  }`}
                  onClick={() => setSelectedFullstack('mobile')}
                >
                  [MOBILE]
                </button>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-green-400 mb-4 glitch-effect">
              <TerminalText text=">> FULLSTACK_DEVELOPMENT" />
            </h1>
            <div className="text-green-300 font-mono">
              <TerminalText text="Status: [ONLINE] | Mode: [HACKER] | Level: [EXPERT]" delay={2000} />
            </div>
          </div>

          {/* Tech Stack Display */}
          {selectedFullstack === 'web' ? (
            <div className="space-y-6">
              {/* Frontend */}
              <div className="terminal-window p-6 relative overflow-hidden">
                <div className="matrix-bg absolute inset-0"></div>
                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex items-center mb-4 lg:mb-0">
                      <span className="text-green-300 font-mono text-sm mr-2">$</span>
                      <h3 className="text-xl font-bold text-green-400 font-mono">FRONTEND_ARSENAL</h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-4">
                      <div className="bg-black border border-green-500 rounded-lg p-4 pulse-border">
                        <div className="flex flex-wrap gap-3">
                          <TechIcon name="JS" className="hover:scale-110 transition-transform" />
                          <TechIcon name="TS" className="hover:scale-110 transition-transform" />
                          <TechIcon name="HTML" className="hover:scale-110 transition-transform" />
                          <TechIcon name="CSS" className="hover:scale-110 transition-transform" />
                        </div>
                      </div>
                      
                      <div className="text-green-300 font-mono self-center text-2xl">●</div>
                      
                      <div className="bg-black border border-green-500 rounded-lg p-4">
                        <div className="flex flex-wrap gap-3">
                          <TechIcon name="RC" className="hover:scale-110 transition-transform" />
                          <TechIcon name="VT" className="hover:scale-110 transition-transform" />
                          <TechIcon name="NX" className="hover:scale-110 transition-transform" />
                          <TechIcon name="TW" className="hover:scale-110 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Backend */}
              <div className="terminal-window p-6 relative overflow-hidden">
                <div className="matrix-bg absolute inset-0"></div>
                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex items-center mb-4 lg:mb-0">
                      <span className="text-green-300 font-mono text-sm mr-2">$</span>
                      <h3 className="text-xl font-bold text-green-400 font-mono">BACKEND_WEAPONS</h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-4">
                      <div className="bg-black border border-green-500 rounded-lg p-4">
                        <div className="flex flex-wrap gap-3">
                          <TechIcon name="GO" className="hover:scale-110 transition-transform" />
                          <TechIcon name="JS" className="hover:scale-110 transition-transform" />
                          <TechIcon name="TS" className="hover:scale-110 transition-transform" />
                          <TechIcon name="C++" className="hover:scale-110 transition-transform" />
                          <TechIcon name="JV" className="hover:scale-110 transition-transform" />
                          <TechIcon name="PY" className="hover:scale-110 transition-transform" />
                        </div>
                      </div>
                      
                      <div className="text-green-300 font-mono self-center text-2xl">●</div>
                      
                      <div className="bg-black border border-green-500 rounded-lg p-4 pulse-border">
                        <div className="flex flex-wrap gap-3">
                          <TechIcon name="ND" className="hover:scale-110 transition-transform" />
                          <TechIcon name="DK" className="hover:scale-110 transition-transform" />
                          <TechIcon name="FL" className="hover:scale-110 transition-transform" />
                          <TechIcon name="AWS" className="hover:scale-110 transition-transform" />
                          <TechIcon name="FB" className="hover:scale-110 transition-transform" />
                          <TechIcon name="SQL" className="hover:scale-110 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Mobile Frontend */}
              <div className="terminal-window p-6 relative overflow-hidden">
                <div className="matrix-bg absolute inset-0"></div>
                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex items-center mb-4 lg:mb-0">
                      <span className="text-green-300 font-mono text-sm mr-2">$</span>
                      <h3 className="text-xl font-bold text-green-400 font-mono">MOBILE_FRONTEND</h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-4">
                      <div className="bg-black border border-green-500 rounded-lg p-4">
                        <div className="flex flex-wrap gap-3">
                          <TechIcon name="JS" className="hover:scale-110 transition-transform" />
                          <TechIcon name="TS" className="hover:scale-110 transition-transform" />
                          <TechIcon name="RN" className="hover:scale-110 transition-transform" />
                        </div>
                      </div>
                      
                      <div className="text-green-300 font-mono self-center text-2xl">●</div>
                      
                      <div className="bg-black border border-green-500 rounded-lg p-4 pulse-border">
                        <div className="flex flex-wrap gap-3">
                          <TechIcon name="RC" className="hover:scale-110 transition-transform" />
                          <TechIcon name="EX" className="hover:scale-110 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Backend */}
              <div className="terminal-window p-6 relative overflow-hidden">
                <div className="matrix-bg absolute inset-0"></div>
                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex items-center mb-4 lg:mb-0">
                      <span className="text-green-300 font-mono text-sm mr-2">$</span>
                      <h3 className="text-xl font-bold text-green-400 font-mono">MOBILE_BACKEND</h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-4">
                      <div className="bg-black border border-green-500 rounded-lg p-4">
                        <div className="flex flex-wrap gap-3">
                          <TechIcon name="GO" className="hover:scale-110 transition-transform" />
                          <TechIcon name="JS" className="hover:scale-110 transition-transform" />
                          <TechIcon name="TS" className="hover:scale-110 transition-transform" />
                          <TechIcon name="PY" className="hover:scale-110 transition-transform" />
                        </div>
                      </div>
                      
                      <div className="text-green-300 font-mono self-center text-2xl">●</div>
                      
                      <div className="bg-black border border-green-500 rounded-lg p-4 pulse-border">
                        <div className="flex flex-wrap gap-3">
                          <TechIcon name="ND" className="hover:scale-110 transition-transform" />
                          <TechIcon name="DK" className="hover:scale-110 transition-transform" />
                          <TechIcon name="FL" className="hover:scale-110 transition-transform" />
                          <TechIcon name="AWS" className="hover:scale-110 transition-transform" />
                          <TechIcon name="FB" className="hover:scale-110 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Projects Section */}
      <div className="relative z-10 flex flex-col items-center w-full px-8 py-16 border-t border-green-500">
        <div className="terminal-window p-6 mb-8">
          <div className="flex items-center">
            <span className="text-green-300 font-mono text-sm mr-2">$</span>
            <h2 className="text-3xl font-bold text-green-400 font-mono">
              <TerminalText text="ls -la ./projects/" delay={500} />
            </h2>
          </div>
        </div>

        <div className="w-full max-w-6xl space-y-8">
          <ProjectCard
            title={selectedFullstack === "web" ? "Skin Cancer Detection Tools for Dermatologist" : "Skin Cancer Detection Mobile App"}
            name="Pocket Protect • ( Connected with Mobile App )"
            type="both"
            activeType={selectedFullstack}
            description="Skin Cancer Detection APP ♋ --> CNN model and/or Dermatologist assist with web app filled with tools. Other: Blood Work Analysis with LLM🩸-- Store skin data, and set reminders for recommended mole updates."
            tags={["Next JS", "React Native", "Typescript", "Go", "Python + Tensorflow + Flask", "ISIC Skin Cancer Dataset"]}
            level="Senior"
            status="[ACTIVE]"
          />

          <ProjectCard
            title="Video Clipper with Transcript Export for ChatGPT API and Notes App"
            name="Clippify"
            type="web"
            activeType={selectedFullstack}
            description="FULLSTACK WEB APP - For Storing Valuable Snippets from Videos with Features -> ✂️ Trimming, ✍🏻Notes Section, 🗃️Storing (Folder-Style), 📝Transcript Exporting, 👾AI-Chatbot with access to video transcript."
            tags={["React & Vite", "Node & Express", "+ Chrome Extension", "FFMPEG", "JS, HTML, CSS & Tailwind", "Stripe & OpenAI API", "Firebase"]}
            level="Intermediate"
            status="[DEPLOYED]"
          />

          <ProjectCard
            title={selectedFullstack === "web" ? "Video Social Media Platform with Serverless Backend" : "Video Social Media Mobile App with Serverless Backend"}
            name="Lupody"
            type="both"
            activeType={selectedFullstack}
            description="Social Media Platform for Podcasting --> 🧠 Recommender System, 🎞️ Clipping from Video, 🕓 Watch Later, 💬 Real Time Comment-Section, 🔎 Searchable & Visitable Users"
            tags={["React & Vite", "React Native", "JS & CSS & HTML", "Expo", "Firebase"]}
            level="Beginner"
            status="[DEVELOPMENT]"
          />
        </div>
      </div>

      {/* Floating Navigation */}
      {isScrolledPassed && (
        <div className="fixed top-20 left-8 z-50">
          <div className="terminal-window p-4">
            <div className="flex items-center space-x-4">
              <span className="text-green-300 font-mono text-sm">$</span>
              <div className="flex bg-gray-900 border border-green-500 rounded overflow-hidden">
                <button
                  className={`px-4 py-2 font-mono text-sm transition-all duration-300 ${
                    selectedFullstack === 'web' 
                      ? 'bg-green-500 text-black font-bold' 
                      : 'text-green-400 hover:bg-green-900'
                  }`}
                  onClick={() => setSelectedFullstack('web')}
                >
                  WEB
                </button>
                <div className="w-px bg-green-500"></div>
                <button
                  className={`px-4 py-2 font-mono text-sm transition-all duration-300 ${
                    selectedFullstack === 'mobile' 
                      ? 'bg-green-500 text-black font-bold' 
                      : 'text-green-400 hover:bg-green-900'
                  }`}
                  onClick={() => setSelectedFullstack('mobile')}
                >
                  MOBILE
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Project Card Component
const ProjectCard = ({ title, name, description, tags, level, type, activeType, status }) => {
  if (activeType !== type && type !== "both") return null;

  return (
    <div className="terminal-window p-6 relative overflow-hidden group hover:scale-105 transition-all duration-300">
      <div className="matrix-bg absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="flex-grow">
            <div className="flex items-center mb-2">
              <span className="text-green-300 font-mono text-sm mr-2">$</span>
              <span className="text-green-300 font-mono text-sm opacity-60">{name}</span>
              <span className="ml-4 text-xs font-mono text-green-400 bg-black px-2 py-1 rounded border border-green-500">
                {status}
              </span>
            </div>
            
            <h3 className="text-xl font-bold text-green-400 mb-3 font-mono glitch-effect">
              {title}
            </h3>
            
            <p className="text-green-300 mb-4 max-w-4xl leading-relaxed">
              {description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-black text-green-400 text-xs font-mono px-3 py-1 rounded border border-green-500 hover:bg-green-900 transition-colors"
                >
                  [{tag}]
                </span>
              ))}
            </div>
          </div>
          
          <div className="lg:ml-8 mt-6 lg:mt-0">
            <div className="flex flex-col space-y-4">
              <button className="terminal-window px-6 py-3 font-mono text-green-400 hover:bg-green-900 transition-all duration-300 glitch-effect">
                [EXECUTE]
              </button>
              <div className="text-center">
                <span className="text-xs font-mono text-green-400 bg-black px-2 py-1 rounded border border-green-500">
                  LEVEL: {level.toUpperCase()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullstackPage;