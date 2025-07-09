import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const FullstackPage = () => {
  const [selectedFullstack, setSelectedFullstack] = useState("web");
  const [isScrolledPassed, setIsScrolledPassed] = useState(false);
  const scroll = React.useRef();

  const handleNav = (title) => {
    if(title == "Pocket Protect"){
      navigate("/fullstack-projects/pocket-protect")
    } else if (title == "Clippify"){
      navigate("/fullstack-projects/clippify")
    }
  }

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (scroll.current.getBoundingClientRect().top < -60) {
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

  // Animated Matrix-style background
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
              <span key={j} className="text-green-400 text-xs font-mono">
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

  // Terminal-style tech stack display
  const TechStack = ({ title, techs, frameworks }) => (
    <div className="bg-black border border-green-500 rounded-lg p-6 mb-6 shadow-lg shadow-green-500/20 terminal-border">
      <div className="flex items-center mb-4">
        <div className="flex space-x-2 mr-4">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <span className="text-green-400 font-mono text-sm">~/dev/{title.toLowerCase()}</span>
      </div>
      
      <div className="text-green-400 font-mono mb-3">
        <span className="text-green-500">$</span> cat {title.toLowerCase()}_stack.txt
      </div>
      
      <div className="bg-gray-900 border border-green-700 rounded p-4 mb-4">
        <div className="text-green-300 font-mono text-sm mb-2"># Core Technologies</div>
        <div className="flex flex-wrap gap-2">
          {techs.map((tech, i) => (
            <span key={i} className="px-3 py-1 bg-green-900/30 border border-green-600 rounded text-green-300 font-mono text-xs tech-badge">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {frameworks && (
        <div className="bg-gray-900 border border-green-700 rounded p-4">
          <div className="text-green-300 font-mono text-sm mb-2"># Frameworks & Tools</div>
          <div className="flex flex-wrap gap-2">
            {frameworks.map((framework, i) => (
              <span key={i} className="px-3 py-1 bg-green-800/20 border border-green-500 rounded text-green-400 font-mono text-xs framework-badge">
                {framework}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  // Project card component
  const ProjectCard = ({ title, name, description, tags, level, type, activeType }) => {
    if (activeType !== type && type !== "both") return null;

    return (
      <div className="bg-black border border-green-500 rounded-lg p-6 mb-6 shadow-lg shadow-green-500/20 hover:shadow-green-400/30 transition-all duration-300 hover:border-green-400 project-card">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <div className="text-green-500 font-mono text-sm mb-1">[PROJECT] {name}</div>
            <h3 className="text-xl font-bold text-green-300 mb-2 hover:text-green-200 transition-colors">
              {title}
            </h3>
            <p className="text-gray-400 mb-4 leading-relaxed">{description}</p>
          </div>
          <div className="bg-green-900/30 border border-green-600 rounded px-3 py-1 ml-4">
            <span className="text-green-400 font-mono text-xs">LVL: {level}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-900 border border-green-700 rounded text-green-300 font-mono text-xs hover:border-green-500 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex justify-end">
          <div onClick={() => handleNav(name)} className="bg-green-600 hover:bg-green-500 text-black font-mono font-bold py-2 px-6 rounded transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50">
            EXECUTE
          </div>
        </div>
      </div>
    );
  };

  // Timeline item for learning journey
  const TimelineItem = ({ icon, title, instructor, date, isLast = false }) => (
    <div className="flex mb-6">
      <div className="flex flex-col items-center mr-6">
        <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center border-2 border-green-400">
          <span className="text-black font-mono font-bold">{icon}</span>
        </div>
        {!isLast && <div className="w-px h-16 bg-green-600 mt-2"></div>}
      </div>
      <div className="flex-1">
        <h4 className="text-green-300 font-mono font-bold mb-1">{title}</h4>
        {instructor && (
          <p className="text-green-500 font-mono text-sm mb-1">Instructor: {instructor}</p>
        )}
        {date && (
          <p className="text-gray-500 font-mono text-xs">{date}</p>
        )}
      </div>
    </div>
  );

  return (
    <div ref={scroll} className="min-h-screen bg-black text-green-400 font-mono relative overflow-hidden">
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
          color: #ff0000;
          z-index: -1;
        }
        
        .glitch:after {
          animation: glitch 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both infinite;
          color: #00ff00;
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
          background: linear-gradient(45deg, #00ff00, #008000, #00ff00);
          border-radius: inherit;
          z-index: -1;
          animation: flicker 3s infinite;
        }
        
        .tech-badge:hover {
          background: rgba(0, 255, 0, 0.2);
          transform: scale(1.05);
          transition: all 0.3s ease;
        }
        
        .framework-badge:hover {
          background: rgba(0, 255, 0, 0.3);
          transform: scale(1.05);
          transition: all 0.3s ease;
        }
        
        .project-card:hover {
          transform: translateY(-5px);
        }
        
        .scanline {
          position: relative;
          overflow: hidden;
        }
        
        .scanline:after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(0, 255, 0, 0.3), transparent);
          animation: scan 3s infinite;
        }
        
        @keyframes scan {
          0% { left: -100%; }
          100% { left: 100%; }
        }
      `}</style>

      {/* Fixed navigation */}
      {isScrolledPassed && (
        <div className="fixed top-20 left-10 z-50">
          <div className="bg-black border border-green-500 rounded-lg p-3 shadow-lg shadow-green-500/20">
            <div className="flex items-center space-x-4">
              <div
                className={`px-4 py-2 font-mono font-bold rounded transition-all ${
                  selectedFullstack === 'web'
                    ? 'bg-green-600 text-black'
                    : 'text-green-400 hover:text-green-300'
                }`}
                onClick={() => setSelectedFullstack('web')}
              >
                WEB
              </div>
              <span className="text-green-500">|</span>
              <div
                className={`px-4 py-2 font-mono font-bold rounded transition-all ${
                  selectedFullstack === 'mobile'
                    ? 'bg-green-600 text-black'
                    : 'text-green-400 hover:text-green-300'
                }`}
                onClick={() => setSelectedFullstack('mobile')}
              >
                MOBILE
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main content */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        {/* Hero Section */}
        <div className="mb-20">
          <div className="bg-black border border-green-500 rounded-lg p-6 mb-8 shadow-lg shadow-green-500/20">
            <div className="flex items-center space-x-4 mb-6">
              <div className="text-green-500 font-mono text-sm">[MODE_SELECT]</div>
              <div
                className={`px-4 py-2 font-mono font-bold rounded transition-all ${
                  selectedFullstack === 'web'
                    ? 'bg-green-600 text-black'
                    : 'text-green-400 hover:text-green-300 border border-green-700'
                }`}
                onClick={() => setSelectedFullstack('web')}
              >
                WEB
              </div>
              <span className="text-green-500">|</span>
              <div
                className={`px-4 py-2 font-mono font-bold rounded transition-all ${
                  selectedFullstack === 'mobile'
                    ? 'bg-green-600 text-black'
                    : 'text-green-400 hover:text-green-300 border border-green-700'
                }`}
                onClick={() => setSelectedFullstack('mobile')}
              >
                MOBILE
              </div>
            </div>
          </div>

          <GlitchText className="text-4xl md:text-6xl font-bold text-green-300 mb-4">
            FULLSTACK_DEVELOPMENT
          </GlitchText>
          
          <div className="text-green-500 font-mono mb-8">
            <span className="text-green-400">$</span> ./initialize_stack.sh --mode={selectedFullstack}
          </div>

          {/* Tech Stacks */}
          {selectedFullstack === 'web' ? (
            <>
              <TechStack
                title="Frontend"
                techs={["JavaScript", "TypeScript", "HTML5", "CSS3"]}
                frameworks={["React", "Vite", "Next.js", "Tailwind CSS"]}
              />
              <TechStack
                title="Backend"
                techs={["Go", "JavaScript", "TypeScript", "C++", "Java", "Python"]}
                frameworks={["Node.js", "Docker", "Flask", "AWS", "Firebase", "SQLite"]}
              />
            </>
          ) : (
            <>
              <TechStack
                title="Frontend"
                techs={["JavaScript", "TypeScript"]}
                frameworks={["React Native", "Expo"]}
              />
              <TechStack
                title="Backend"
                techs={["Go", "JavaScript", "TypeScript", "Python"]}
                frameworks={["Node.js", "Docker", "Flask", "AWS", "Firebase"]}
              />
            </>
          )}
        </div>

        {/* Projects Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="text-green-500 font-mono mb-2">[PROJECTS_DATABASE]</div>
            <h2 className="text-3xl font-bold text-green-300">ACTIVE_PROJECTS</h2>
          </div>

          <ProjectCard
            title={selectedFullstack === "web" ? "Skin Cancer Detection Tools for Dermatologist" : "Skin Cancer Detection Mobile App"}
            name="Pocket Protect"
            type="both"
            activeType={selectedFullstack}
            description="Advanced skin cancer detection system using CNN models and dermatologist assistance. Features blood work analysis with LLM, data storage, and reminder systems. Backend connects both web and mobile applications."
            tags={["Next.js", "React Native", "TypeScript", "Go", "Python + TensorFlow + Flask", "ISIC Dataset"]}
            level="SENIOR"
          />

          <ProjectCard
            title="Video Clipper with Transcript Export"
            name="Clippify"
            type="web"
            activeType={selectedFullstack}
            description="Full-stack web application for storing video snippets with advanced features: trimming, notes section, folder-style storage, transcript exporting, and AI chatbot with video transcript access."
            tags={["React & Vite", "Node & Express", "Chrome Extension", "FFMPEG", "Stripe & OpenAI API", "Firebase"]}
            level="INTERMEDIATE"
          />

        </div>

        {/* Learning Journey */}
        {selectedFullstack === "web" && (
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="text-green-500 font-mono mb-2">[LEARNING_MATRIX]</div>
              <h2 className="text-3xl font-bold text-green-300">SKILL_ACQUISITION_LOG</h2>
            </div>

            <div className="bg-black border border-green-500 rounded-lg p-8 shadow-lg shadow-green-500/20">
              <div className="text-green-400 font-mono mb-6">
                <span className="text-green-500">$</span> cat learning_journey.log
              </div>

              <TimelineItem
                icon="📚"
                title="Complete Web Development Bootcamp"
                instructor="Dr. Angela Yu"
                date="Dec 11, 2023"
              />

              <TimelineItem
                icon="🎨"
                title="Frontend Development Mastery"
                instructor="Dr. Angela Yu"
                date="Dec 11, 2023"
              />

              <TimelineItem
                icon="⚙️"
                title="Backend Development & APIs"
                instructor="Dr. Angela Yu"
                date="Dec 11, 2023"
              />

              <TimelineItem
                icon="🔒"
                title="Authentication & Security Systems"
                instructor="Dr. Angela Yu"
                date="Dec 11, 2023"
              />

              <TimelineItem
                icon="🗄️"
                title="Database Management & Integration"
                instructor="Dr. Angela Yu"
                date="Dec 11, 2023"
                isLast={true}
              />

              <div className="mt-8 bg-gray-900 border border-green-700 rounded p-4">
                <div className="text-green-300 font-mono text-sm mb-3"># Key Skills Acquired:</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-green-400 font-mono text-sm">
                  <div>• Full-stack web development</div>
                  <div>• Responsive design patterns</div>
                  <div>• Server-side architecture</div>
                  <div>• Database design & optimization</div>
                  <div>• Authentication systems</div>
                  <div>• API development & integration</div>
                  <div>• Version control (Git/GitHub)</div>
                  <div>• Cloud deployment strategies</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {selectedFullstack === "mobile" && (
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="text-green-500 font-mono mb-2">[MOBILE_LEARNING_MATRIX]</div>
              <h2 className="text-3xl font-bold text-green-300">MOBILE_SKILL_LOG</h2>
            </div>

            <div className="bg-black border border-green-500 rounded-lg p-8 shadow-lg shadow-green-500/20">
              <div className="text-green-400 font-mono mb-6">
                <span className="text-green-500">$</span> cat mobile_learning.log
              </div>

              <TimelineItem
                icon="📱"
                title="React Native Tutorial for Beginners"
                instructor="Programming with Mosh"
                date="Dec 11, 2023"
              />

              <TimelineItem
                icon="⚛️"
                title="React Native Fundamentals"
                instructor="Programming with Mosh"
                date="Dec 11, 2023"
              />

              <TimelineItem
                icon="🛠️"
                title="Expo & Development Environment"
                instructor="Programming with Mosh"
                date="Dec 11, 2023"
                isLast={true}
              />

              <div className="mt-8 bg-gray-900 border border-green-700 rounded p-4">
                <div className="text-green-300 font-mono text-sm mb-3"># Mobile Skills Acquired:</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-green-400 font-mono text-sm">
                  <div>• Cross-platform development</div>
                  <div>• React Native components</div>
                  <div>• Mobile UI/UX patterns</div>
                  <div>• Expo framework mastery</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Terminal footer */}
      <div className="border-t border-green-500 bg-black p-4">
        <div className="text-green-400 font-mono text-center">
          <span className="text-green-500">$</span> System.exit(0) // End of transmission
        </div>
      </div>
    </div>
  );
};

export default FullstackPage;