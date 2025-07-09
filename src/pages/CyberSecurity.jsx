import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CyberSecurityPage = () => {
  const [open, setOpen] = useState(false);
  const [modelInput, setModelInput] = useState("");
  const [activeSection, setActiveSection] = useState("writeups");

  const handleOpen = (certInput) => {
    setOpen(true);
    setModelInput(certInput);
  };
  const handleClose = () => setOpen(false);

  const navigate = useNavigate()

  const handleWriteUpNav = (title) => {
    if(title === "[HTB] - Artificial"){
      navigate("/cyber_security-projects/artificial-writeup")
    } else if(title === "[HTB] - Codify"){
      navigate("/cyber_security-projects/codify-writeup")
    }
  };

  const handleNavTools = (title) => {
    if(title === "🔑 Credhunter"){
       location.href = "https://github.com/orbant12/Pentest-ToolKit/tree/main/Credhunter"
    }
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

  // Glitch text effect with purple
  const GlitchText = ({ children, className = "" }) => (
    <div className={`glitch ${className}`} data-text={children}>
      {children}
    </div>
  );

  // Writeup card component
  const WriteupCard = ({ title, description, tags, difficulty, platform }) => (
    <div className="bg-black border border-purple-500 rounded-lg p-6 mb-6 shadow-lg shadow-purple-500/20 hover:shadow-purple-400/30 transition-all duration-300 hover:border-purple-400 project-card">
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <div className="text-purple-500 font-mono text-sm mb-1">[{platform}]</div>
          <h3 className="text-xl font-bold text-purple-300 mb-2 hover:text-purple-200 transition-colors">{title}</h3>
          <p className="text-gray-400 mb-4 leading-relaxed">{description}</p>
        </div>
        <div className="bg-red-900/30 border border-red-500 rounded px-3 py-1 ml-4">
          <span className="text-red-400 font-mono text-xs">{difficulty}</span>
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

      <div className="flex justify-end">
        <button 
          className="bg-purple-600 hover:bg-purple-500 text-black font-mono font-bold py-2 px-6 rounded transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50"
          onClick={() => handleWriteUpNav(title)}
        >
          READ_WRITEUP
        </button>
      </div>
    </div>
  );

  // Tool card component
  const ToolCard = ({ name, description, language, category, status }) => (
    <div className="bg-black border border-purple-500 rounded-lg p-6 mb-6 shadow-lg shadow-purple-500/20 hover:shadow-purple-400/30 transition-all duration-300 hover:border-purple-400 project-card">
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <div className="text-purple-500 font-mono text-sm mb-1">[{category}]</div>
          <h3 className="text-xl font-bold text-purple-300 mb-2">{name}</h3>
          <p className="text-gray-400 mb-4 leading-relaxed">{description}</p>
          <div className="text-purple-400 font-mono text-sm">
            <span className="text-purple-500">$</span> Language: {language}
          </div>
        </div>
        <div className={`border rounded px-3 py-1 ml-4 ${
          status === 'ACTIVE' 
            ? 'bg-purple-900/30 border-purple-500' 
            : 'bg-yellow-900/30 border-yellow-500'
        }`}>
          <span className={`font-mono text-xs ${
            status === 'ACTIVE' ? 'text-purple-400' : 'text-yellow-400'
          }`}>
            {status}
          </span>
        </div>
      </div>

      <div className="flex justify-end">
        <button 
          className="bg-purple-600 hover:bg-purple-500 text-black font-mono font-bold py-2 px-6 rounded transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50"
          onClick={() => handleNavTools(name)}
        >
          VIEW_CODE
        </button>
      </div>
    </div>
  );

  // Certification badge
  const CertBadge = ({ name, issuer, date, level, verified = true }) => (
    <div className="bg-black border border-purple-500 rounded-lg p-6 mb-6 shadow-lg shadow-purple-500/20 terminal-border">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className={`w-4 h-4 rounded-full mr-3 ${verified ? 'bg-purple-500' : 'bg-red-500'}`}></div>
          <div>
            <h3 className="text-xl font-bold text-purple-300">{name}</h3>
            <p className="text-purple-500 font-mono text-sm">{issuer}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-purple-400 font-mono text-sm">{date}</div>
          <div className={`font-mono text-xs px-2 py-1 rounded mt-1 ${
            level === 'EXPERT' 
              ? 'bg-red-900/30 border border-red-500 text-red-400'
              : level === 'INTERMEDIATE'
              ? 'bg-yellow-900/30 border border-yellow-500 text-yellow-400'
              : 'bg-purple-900/30 border border-purple-500 text-purple-400'
          }`}>
            {level}
          </div>
        </div>
      </div>
      
      <div className="flex justify-end">
        <button 
          className="bg-purple-600 hover:bg-purple-500 text-black font-mono font-bold py-1 px-4 rounded transition-all duration-300"
          onClick={() => handleOpen(`${name}_cert`)}
        >
          VERIFY
        </button>
      </div>
    </div>
  );

  // Navigation tabs
  const TabButton = ({ id, label, active, onClick }) => (
    <button
      className={`px-6 py-3 font-mono font-bold rounded-t-lg transition-all duration-300 ${
        active 
          ? 'bg-purple-600 text-black border-b-2 border-purple-400' 
          : 'bg-gray-900 text-purple-400 hover:bg-gray-800 border border-purple-700'
      }`}
      onClick={() => onClick(id)}
    >
      {label}
    </button>
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
        
        .project-card:hover {
          transform: translateY(-5px);
        }
      `}</style>

      {/* Main content */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        {/* Hero Section */}
        <div className="mb-20">
          <div className="text-purple-500 font-mono text-sm mb-2">[SYSTEM_ACCESS_GRANTED]</div>
          <div className="text-purple-400 font-mono mb-4">Main Menu > Security Operations</div>
          
          <GlitchText className="text-4xl md:text-6xl font-bold text-purple-300 mb-8">
            PENETRATION_TESTING
          </GlitchText>
          
          <div className="text-purple-500 font-mono mb-8">
            <span className="text-purple-400">root@kali:~#</span> ./start_engagement.sh
          </div>

          <div className="bg-black border border-purple-500 rounded-lg p-6 mb-6 shadow-lg shadow-purple-500/20 terminal-border">
            <div className="flex items-center mb-4">
              <div className="flex space-x-2 mr-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              </div>
              <span className="text-purple-400 font-mono text-sm">~/security/penetration_testing</span>
            </div>
            
            <div className="text-purple-400 font-mono text-sm">
              [+] Initializing penetration testing framework...<br/>
              [+] Loading custom exploits...<br/>
              [+] Establishing secure channels...<br/>
              [✓] System ready for engagement
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-8">
          <div className="flex space-x-2 mb-6">
            <TabButton 
              id="writeups" 
              label="WRITEUPS" 
              active={activeSection === "writeups"} 
              onClick={setActiveSection} 
            />
            <TabButton 
              id="tools" 
              label="MY_CUSTOM_TOOLS" 
              active={activeSection === "tools"} 
              onClick={setActiveSection} 
            />
            <TabButton 
              id="certs" 
              label="CERTIFICATIONS" 
              active={activeSection === "certs"} 
              onClick={setActiveSection} 
            />
          </div>
        </div>

        {/* Writeups Section */}
        {activeSection === "writeups" && (
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="text-purple-500 font-mono mb-2">[EXPLOITATION_DATABASE]</div>
              <h2 className="text-3xl font-bold text-purple-300">MACHINE_WRITEUPS</h2>
            </div>

            <WriteupCard
              title="[HTB] - Artificial"
              platform="HACKTHEBOX"
              difficulty="MEDIUM"
              description="AI-themed machine featuring TensorFlow web application vulnerable to malicious .h5 model uploads. Exploited keras.models.load_model for RCE, escalated via SQLite enumeration, hash cracking, and Backrest backup service exploitation."
              tags={[".h5 file upload", "keras RCE", "sqlite enumeration", "hash cracking", "backrest WebUI RCE", "port forwarding"]}
            />

              <WriteupCard
              title="[HTB] - Codify"
              platform="HACKTHEBOX"
              difficulty="EASY"
              description="Fascinating challenge that demonstrates the dangers of code sandboxes and privilege escalation through misconfigured scripts."
              tags={["vm2 js sandbox escape", "CVE-2023-30547", "sqlite enumeration", "hash cracking", "sudo privileges", "bash script exploitation", "terminal spoofing"]}
            />
          </div>
        )}

        {/* Custom Tools Section */}
        {activeSection === "tools" && (
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="text-purple-500 font-mono mb-2">[CUSTOM_ARSENAL]</div>
              <h2 className="text-3xl font-bold text-purple-300">MY_PENTESTING_TOOLS</h2>
            </div>

            <ToolCard
              name="🔑 Credhunter"
              category="POST_EXPLOITATION"
              description="A powerful bash script designed to hunt for credentials, API keys, passwords, and sensitive files across directory structures. Perfect for OSCP exam preparation and ethical penetration testing."
              language="Bash"
              status="ACTIVE"
            />
          </div>
        )}

        {/* Certifications Section */}
        {activeSection === "certs" && (
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="text-purple-500 font-mono mb-2">[CREDENTIAL_VERIFICATION]</div>
              <h2 className="text-3xl font-bold text-purple-300">SECURITY_CERTIFICATIONS</h2>
            </div>

            <CertBadge
              name="CompTIA Security+"
              issuer="CompTIA"
              date="2025"
              level="INTERMEDIATE"
              verified={true}
            />

            <CertBadge
              name="OSCP - Offensive Security Certified Professional (In Progress)"
              issuer="Offensive Security"
              date="2025"
              level="EXPERT"
              verified={false}
            />
          </div>
        )}

        {/* Learning Journey Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="text-purple-500 font-mono mb-2">[KNOWLEDGE_BASE]</div>
            <h2 className="text-3xl font-bold text-purple-300">SECURITY_TRAINING</h2>
          </div>

          <div className="bg-black border border-purple-500 rounded-lg p-8 shadow-lg shadow-purple-500/20 terminal-border">
            <div className="text-purple-400 font-mono mb-6">
              <span className="text-purple-500">root@training:~#</span> cat security_education.log
            </div>

            <div className="space-y-6">
              <div className="bg-gray-900 border border-purple-700 rounded p-4">
                <div className="text-purple-300 font-mono font-bold mb-2">📚 VU Cyber Security Association</div>
                <div className="text-purple-400 font-mono text-sm mb-2">Advanced Penetration Testing Methodologies</div>
                <div className="text-gray-400 font-mono text-xs">Network Security, Web Application Security, Binary Exploitation</div>
              </div>

              <div className="bg-gray-900 border border-purple-700 rounded p-4">
                <div className="text-purple-300 font-mono font-bold mb-2">🔒 OSCP Certification Track</div>
                <div className="text-purple-400 font-mono text-sm mb-2">Penetration Testing with Kali Linux (PWK)</div>
                <div className="text-gray-400 font-mono text-xs">Buffer Overflows, Privilege Escalation, Active Directory</div>
              </div>

              <div className="bg-gray-900 border border-purple-700 rounded p-4">
                <div className="text-purple-300 font-mono font-bold mb-2">🛡️ Security+ Foundation</div>
                <div className="text-purple-400 font-mono text-sm mb-2">CompTIA Security+ Certification</div>
                <div className="text-gray-400 font-mono text-xs">Risk Management, Cryptography, Network Security</div>
              </div>
            </div>

            <div className="mt-8 bg-gray-900 border border-purple-700 rounded p-4">
              <div className="text-purple-300 font-mono text-sm mb-3"># Core Security Skills:</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-purple-400 font-mono text-sm">
                <div>• Advanced Penetration Testing</div>
                <div>• Web Application Security</div>
                <div>• Network Security Assessment</div>
                <div>• Binary Exploitation & Reverse Engineering</div>
                <div>• Active Directory Exploitation</div>
                <div>• Social Engineering & OSINT</div>
                <div>• Malware Analysis & Development</div>
                <div>• Incident Response & Forensics</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50" onClick={handleClose}>
          <div className="bg-black border border-purple-500 rounded-lg p-6 max-w-4xl max-h-full overflow-auto">
            <div className="text-purple-300 font-mono mb-4">[CERTIFICATE_VERIFICATION]</div>
            <div className="text-center">
              <div className="text-purple-400 font-mono mb-4">Certificate: {modelInput}</div>
              <div className="text-purple-500 font-mono mb-4">[✓] VERIFICATION_SUCCESSFUL</div>
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
          <span className="text-purple-500">root@system:~#</span> End of transmission
        </div>
      </div>
    </div>
  );
};

export default CyberSecurityPage;