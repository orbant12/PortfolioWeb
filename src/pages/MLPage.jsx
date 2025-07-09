import React, { useState, useEffect } from 'react';


const MLPage = () => {
  const [open, setOpen] = useState(false);
  const [modelInput, setModelInput] = useState("");

  const handleOpen = (certInput) => {
    setOpen(true);
    setModelInput(certInput);
  };
  const handleClose = () => setOpen(false);

  const handleVisitClick = (type) => {
    alert(`Opening ${type} notes...`);
  };

  

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

  const hadnleNav = (title) => {
    if(title == "Skin Cancer Detection"){
      location.href = "https://github.com/orbant12/Skin_Cancer-Classification--Open-Source-.git"
    } else if (title == "Speech To Text"){
      location.href = "https://github.com/orbant12/Automatic_Speech_Recognition---Tensorflow.git"
    } else if (title == "Object Detection"){
      location.href = "https://github.com/orbant12/Object-Detection---Tensorflow.git"
    }
  }

  // Glitch text effect with purple
  const GlitchText = ({ children, className = "" }) => (
    <div className={`glitch ${className}`} data-text={children}>
      {children}
    </div>
  );

  // Terminal-style tech stack display
  const TechStack = ({ title, techs, frameworks }) => (
    <div className="bg-black border border-purple-500 rounded-lg p-6 mb-6 shadow-lg shadow-purple-500/20 terminal-border">
      <div className="flex items-center mb-4">
        <div className="flex space-x-2 mr-4">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
        </div>
        <span className="text-purple-400 font-mono text-sm">~/ml/{title.toLowerCase()}</span>
      </div>
      
      <div className="text-purple-400 font-mono mb-3">
        <span className="text-purple-500">$</span> cat {title.toLowerCase()}_tools.py
      </div>
      
      <div className="bg-gray-900 border border-purple-700 rounded p-4 mb-4">
        <div className="text-purple-300 font-mono text-sm mb-2"># Core Languages</div>
        <div className="flex flex-wrap gap-2">
          {techs.map((tech, i) => (
            <span key={i} className="px-3 py-1 bg-purple-900/30 border border-purple-600 rounded text-purple-300 font-mono text-xs tech-badge">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {frameworks && (
        <div className="bg-gray-900 border border-purple-700 rounded p-4">
          <div className="text-purple-300 font-mono text-sm mb-2"># ML Libraries & Frameworks</div>
          <div className="flex flex-wrap gap-2">
            {frameworks.map((framework, i) => (
              <span key={i} className="px-3 py-1 bg-purple-800/20 border border-purple-500 rounded text-purple-400 font-mono text-xs framework-badge">
                {framework}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  // Project card component
  const ProjectCard = ({ title, description, tags, level }) => (
    <div className="bg-black border border-purple-500 rounded-lg p-6 mb-6 shadow-lg shadow-purple-500/20 hover:shadow-purple-400/30 transition-all duration-300 hover:border-purple-400 project-card">
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <div className="text-purple-500 font-mono text-sm mb-1">[ML_PROJECT]</div>
          <h3 className="text-xl font-bold text-purple-300 mb-2 hover:text-purple-200 transition-colors">
            {title}
          </h3>
          {description && <p className="text-gray-400 mb-4 leading-relaxed">{description}</p>}
        </div>
        <div className="bg-purple-900/30 border border-purple-600 rounded px-3 py-1 ml-4">
          <span className="text-purple-400 font-mono text-xs">LVL: {level}</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-gray-900 border border-purple-700 rounded text-purple-300 font-mono text-xs hover:border-purple-500 transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>

      {title != "Kaggle Competitions" &&
          <div className="flex justify-end">
          <button 
            className="bg-purple-600 hover:bg-purple-500 text-black font-mono font-bold py-2 px-6 rounded transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50"
            onClick={() => hadnleNav(title)}
          >
            EXECUTE
          </button>
        </div>
      }
    </div>
  );

  // Timeline item for learning journey
  const TimelineItem = ({ icon, title, instructor, date, isLast = false, onCertClick, hasAction = false }) => (
    <div className="flex mb-6">
      <div className="flex flex-col items-center mr-6">
        <div 
          className={`w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center border-2 border-purple-400 ${hasAction ? 'cursor-pointer hover:bg-purple-500 transition-colors' : ''}`}
          onClick={onCertClick}
        >
          <span className="text-black font-mono font-bold text-xs">{icon}</span>
        </div>
        {!isLast && <div className="w-px h-16 bg-purple-600 mt-2"></div>}
      </div>
      <div className="flex-1">
        <h4 className="text-purple-300 font-mono font-bold mb-1">{title}</h4>
        {instructor && (
          <p className="text-purple-500 font-mono text-sm mb-1">Instructor: {instructor}</p>
        )}
        {date && (
          <p className="text-gray-500 font-mono text-xs">{date}</p>
        )}
      </div>
    </div>
  );

  // Learning summary component
  const LearningSummary = ({ skills, rating, onNotesClick }) => (
    <div className="bg-gray-900 border border-purple-700 rounded-lg p-6 mt-4">
      <div className="text-purple-300 font-mono text-sm mb-4"># Skills Acquired:</div>
      <div className="space-y-2 text-purple-400 font-mono text-sm mb-4">
        {skills.map((skill, i) => (
          <div key={i}>• {skill}</div>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <div className="text-yellow-400 font-mono">{rating}</div>
        <button 
          className="bg-purple-600 hover:bg-purple-500 text-black font-mono font-bold py-1 px-3 rounded transition-all duration-300"
          onClick={onNotesClick}
        >
          VIEW_NOTES
        </button>
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
        
        .tech-badge:hover {
          background: rgba(139, 92, 246, 0.2);
          transform: scale(1.05);
          transition: all 0.3s ease;
        }
        
        .framework-badge:hover {
          background: rgba(139, 92, 246, 0.3);
          transform: scale(1.05);
          transition: all 0.3s ease;
        }
        
        .project-card:hover {
          transform: translateY(-5px);
        }
        
        .neural-network {
          background: linear-gradient(45deg, rgba(139, 92, 246, 0.1), rgba(99, 102, 241, 0.1));
        }
      `}</style>

      {/* Main content */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        {/* Hero Section */}
        <div className="mb-20">
          <div className="text-purple-500 font-mono text-sm mb-2">[NEURAL_NETWORK_INIT]</div>
          <div className="text-purple-400 font-mono mb-4">Main Menu</div>
          
          <GlitchText className="text-4xl md:text-6xl font-bold text-purple-300 mb-8">
            MACHINE_LEARNING
          </GlitchText>
          
          <div className="text-purple-500 font-mono mb-8">
            <span className="text-purple-400">$</span> python3 ml_stack.py --initialize
          </div>

          {/* Tech Stack */}
          <TechStack
            title="Tools"
            techs={["JavaScript", "Python", "C++"]}
            frameworks={["TensorFlow", "NumPy", "Pandas", "OpenCV"]}
          />
        </div>

        {/* Projects Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="text-purple-500 font-mono mb-2">[ML_PROJECTS_DATABASE]</div>
            <h2 className="text-3xl font-bold text-purple-300">NEURAL_NETWORKS_ACTIVE</h2>
          </div>

          <ProjectCard
            title="Skin Cancer Detection"
            description="Advanced CNN-based skin cancer detection system using ISIC dataset"
            tags={["CNN", "ISIC Skin Cancer Dataset"]}
            level="SENIOR"
          />

          <ProjectCard
            title="Speech To Text"
            description="RNN-based speech recognition system with LJSpeech dataset"
            tags={["RNN", "LJSpeech Dataset"]}
            level="INTERMEDIATE"
          />

          <ProjectCard
            title="Object Detection"
            description="Real-time object detection using SSD architecture"
            tags={["SSD"]}
            level="BEGINNER"
          />

          <ProjectCard
            title="Kaggle Competitions"
            description="Participating in machine learning competitions and challenges"
            tags={["Competition", "Data Science", "Model Optimization"]}
            level="BEGINNER"
          />
        </div>

        {/* Learning Journey */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="text-purple-500 font-mono mb-2">[LEARNING_NEURAL_NETWORK]</div>
            <h2 className="text-3xl font-bold text-purple-300">KNOWLEDGE_ACQUISITION_LOG</h2>
          </div>

          {/* Coursera ML Specialization */}
          <div className="bg-black border border-purple-500 rounded-lg p-8 shadow-lg shadow-purple-500/20 mb-8">
            <div className="text-purple-400 font-mono mb-6">
              <span className="text-purple-500">$</span> cat coursera_ml_specialization.log
            </div>

            <div className="text-purple-300 font-mono font-bold mb-6 text-lg">
              🧠 MACHINE LEARNING SPECIALIZATION 🧠
            </div>

            <TimelineItem
              icon="📜"
              title="Supervised Machine Learning: Regression and Classification"
              instructor="Andrew Ng"
              date="Dec 21, 2023"
              hasAction={true}
              onCertClick={() => handleOpen("supervised_cert")}
            />

            <TimelineItem
              icon="📜"
              title="Advanced Learning Algorithms"
              instructor="Andrew Ng"
              date="Dec 24, 2023"
              hasAction={true}
              onCertClick={() => handleOpen("advanced_cert")}
              isLast={true}
            />

            <LearningSummary 
              skills={[
                "Supervised Learning (Linear & Logistic Regression)",
                "Gradient Descent Optimization",
                "Decision Trees & Random Forests",
                "Neural Networks & Deep Learning",
                "CNN Architecture & Implementation",
                "Model Evaluation & Regularization",
                "TensorFlow & Scikit-learn"
              ]}
              rating="⭐⭐⭐⭐⭐"
              onNotesClick={() => handleVisitClick("CourseraNotes")}
            />
          </div>

          {/* Kaggle Courses */}
          <div className="bg-black border border-purple-500 rounded-lg p-8 shadow-lg shadow-purple-500/20">
            <div className="text-purple-400 font-mono mb-6">
              <span className="text-purple-500">$</span> cat kaggle_courses.log
            </div>

            <div className="text-purple-300 font-mono font-bold mb-6 text-lg">
              🤖 KAGGLE MICRO-COURSES 🤖
            </div>

            <TimelineItem
              icon="📜"
              title="Intro to Machine Learning"
              date="Jan 14, 2024"
              hasAction={true}
              onCertClick={() => handleOpen("ml_intro_cert")}
            />

            <TimelineItem
              icon="📜"
              title="Pandas Data Manipulation"
              date="Jan 15, 2024"
              hasAction={true}
              onCertClick={() => handleOpen("pandas_cert")}
            />

            <TimelineItem
              icon="📜"
              title="Intermediate Machine Learning"
              date="Jan 14, 2024"
              hasAction={true}
              onCertClick={() => handleOpen("ml_intermediate_cert")}
            />

            <TimelineItem
              icon="📜"
              title="Intro to Deep Learning"
              date="Jan 16, 2024"
              hasAction={true}
              onCertClick={() => handleOpen("dl_intro_cert")}
              isLast={true}
            />

            <LearningSummary 
              skills={[
                "Data Preprocessing & Feature Engineering",
                "Cross-Validation & Model Selection",
                "Ensemble Methods & Boosting",
                "Deep Learning Fundamentals",
                "Pandas Data Analysis",
                "Kaggle Competition Strategies"
              ]}
              rating="⭐⭐⭐⭐"
              onNotesClick={() => handleVisitClick("KaggleNotes")}
            />
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={handleClose}>
          <div className="bg-black border border-purple-500 rounded-lg p-6 max-w-4xl max-h-full overflow-auto">
            <div className="text-purple-300 font-mono mb-4">[CERTIFICATE_VIEWER]</div>
            <div className="text-center">
              <div className="text-purple-400 font-mono mb-4">Certificate loaded: {modelInput}</div>
              <button 
                className="bg-purple-600 hover:bg-purple-500 text-black font-mono font-bold py-2 px-4 rounded"
                onClick={handleClose}
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Terminal footer */}
      <div className="border-t border-purple-500 bg-black p-4">
        <div className="text-purple-400 font-mono text-center">
          <span className="text-purple-500">$</span> Neural network training complete // End of transmission
        </div>
      </div>
    </div>
  );
};

export default MLPage;