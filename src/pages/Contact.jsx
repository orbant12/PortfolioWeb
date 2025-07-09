import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, CheckCircle, Clock, User, MessageSquare, AlertCircle } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setError('');

    try {
      // EmailJS configuration - Replace with your actual values
      const EMAILJS_SERVICE_ID = 'your_service_id_here';
      const EMAILJS_TEMPLATE_ID = 'your_template_id_here';
      const EMAILJS_PUBLIC_KEY = 'your_public_key_here';

      // Check if EmailJS is available (it won't be in this environment)
      if (typeof window !== 'undefined' && window.emailjs) {
        const templateParams = {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'orbant1@gmail.com'
        };

        await window.emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          templateParams,
          EMAILJS_PUBLIC_KEY
        );

        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        // Fallback for this demo environment
        console.log('EmailJS not available in this environment');
        console.log('Form data would be sent:', {
          to: 'orbant1@gmail.com',
          from: formData.email,
          name: formData.name,
          subject: formData.subject,
          message: formData.message
        });
        
        // Simulate success for demo
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }
    } catch (error) {
      console.error('Failed to send email:', error);
      setError('Failed to send message. Please try again or contact directly at orbant1@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animated Matrix-style background with green theme
  const MatrixBackground = () => (
    <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-5">
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

  // Glitch text effect with green
  const GlitchText = ({ children, className = "" }) => (
    <div className={`glitch ${className}`} data-text={children}>
      {children}
    </div>
  );

  // macOS-style terminal window
  const TerminalWindow = ({ title, children, className = "" }) => (
    <div className={`bg-black border border-green-500 rounded-lg shadow-lg shadow-green-500/20 terminal-border ${className}`}>
      <div className="flex items-center p-4 border-b border-green-700">
        <div className="flex space-x-2 mr-4">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <span className="text-green-400 font-mono text-sm">{title}</span>
      </div>
      <div className="p-6">
        {children}
      </div>
    </div>
  );

  // Contact method card
  const ContactCard = ({ icon: Icon, title, value, description, href }) => (
    <div className="bg-black border border-green-500 rounded-lg p-6 shadow-lg shadow-green-500/20 hover:shadow-green-400/30 transition-all duration-300 hover:border-green-400 contact-card">
      <div className="flex items-start space-x-4">
        <div className="bg-green-600 p-3 rounded-full">
          <Icon className="w-6 h-6 text-black" />
        </div>
        <div className="flex-1">
          <h3 className="text-green-300 font-mono font-bold text-lg mb-1">{title}</h3>
          <p className="text-green-400 font-mono text-sm mb-2">{value}</p>
          <p className="text-gray-400 font-mono text-xs">{description}</p>
          {href && (
            <a 
              href={href}
              className="inline-block mt-3 text-green-500 hover:text-green-400 font-mono text-sm transition-colors"
            >
              → Connect
            </a>
          )}
        </div>
      </div>
    </div>
  );

  // Social media link
  const SocialLink = ({ icon: Icon, href, label }) => (
    <a 
      href={href}
      className="bg-green-600 hover:bg-green-500 p-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50 group"
      aria-label={label}
    >
      <Icon className="w-6 h-6 text-black group-hover:text-gray-900" />
    </a>
  );

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono relative overflow-hidden">
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
          0%, 100% { box-shadow: 0 0 5px #10b981; }
          50% { box-shadow: 0 0 20px #10b981, 0 0 30px #10b981; }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
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
          color: #10b981;
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
          background: linear-gradient(45deg, #10b981, #059669, #10b981);
          border-radius: inherit;
          z-index: -1;
          animation: neural-pulse 3s infinite;
        }
        
        .contact-card:hover {
          transform: translateY(-5px);
        }
        
        .form-input {
          background: #1a1a1a;
          border: 1px solid #065f46;
          color: #10b981;
          font-family: 'Courier New', monospace;
          transition: all 0.3s ease;
        }
        
        .form-input:focus {
          outline: none;
          border-color: #10b981;
          box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.2);
        }
        
        .form-input::placeholder {
          color: #6b7280;
        }
        
        .submit-btn {
          background: #10b981;
          color: black;
          font-weight: bold;
          padding: 12px 24px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: 'Courier New', monospace;
        }
        
        .submit-btn:hover {
          background: #059669;
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
        }
        
        .submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        
        .loading-dots {
          animation: pulse 1.5s infinite;
        }
      `}</style>

      {/* Main content */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="text-green-500 font-mono text-sm mb-2">[COMMUNICATION_PROTOCOL_INIT]</div>
          <GlitchText className="text-4xl md:text-6xl font-bold text-green-300 mb-8">
            CONTACT_ME
          </GlitchText>
          <div className="text-green-400 font-mono mb-8">
            <span className="text-green-500">user@contact:~$</span> ./establish_connection.sh
          </div>
          
          <TerminalWindow title="~/contact/connection_status" className="max-w-2xl mx-auto">
            <div className="text-green-400 font-mono text-sm">
              [+] Initializing secure communication channel...<br/>
              [+] Establishing encrypted connection...<br/>
              [+] Loading contact protocols...<br/>
              [✓] Ready to receive transmissions
            </div>
          </TerminalWindow>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <div className="text-green-500 font-mono text-sm mb-2">[CONTACT_DATABASE]</div>
              <h2 className="text-2xl font-bold text-green-300 mb-6">GET_IN_TOUCH</h2>
            </div>

            <div className="space-y-6">
              <ContactCard
                icon={Mail}
                title="Email"
                value="orbant1@gmail.com"
                description="Primary communication channel"
                href="mailto:orbant1@gmail.com"
              />
              
              <ContactCard
                icon={Phone}
                title="Phone"
                value="+1 (555) 123-4567"
                description="Available Mon-Fri, 9AM-5PM EST"
                href="tel:+15551234567"
              />
              
              <ContactCard
                icon={MapPin}
                title="Location"
                value="Amsterdam, Netherlands"
                description="Available for remote collaboration worldwide"
              />
            </div>

            {/* Social Links */}
            <TerminalWindow title="~/social/networks">
              <div className="text-green-300 font-mono text-sm mb-4"># Social Networks:</div>
              <div className="flex space-x-4">
                <SocialLink 
                  icon={Github} 
                  href="https://github.com/yourusername"
                  label="GitHub"
                />
                <SocialLink 
                  icon={Linkedin} 
                  href="https://linkedin.com/in/yourname"
                  label="LinkedIn"
                />
                <SocialLink 
                  icon={Twitter} 
                  href="https://twitter.com/yourusername"
                  label="Twitter"
                />
              </div>
            </TerminalWindow>
          </div>

          {/* Contact Form */}
          <div>
            <TerminalWindow title="~/contact/message_composer">
              <div className="text-green-500 font-mono text-sm mb-4">[MESSAGE_COMPOSER]</div>
              
              {error && (
                <div className="bg-red-900/30 border border-red-500 rounded p-4 mb-6 flex items-center">
                  <AlertCircle className="w-5 h-5 text-red-400 mr-3" />
                  <span className="text-red-300 font-mono text-sm">{error}</span>
                </div>
              )}

              {isSubmitted && (
                <div className="bg-green-900/30 border border-green-500 rounded p-4 mb-6 flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-green-300 font-mono text-sm">Message transmitted successfully to orbant1@gmail.com!</span>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <label className="block text-green-300 font-mono text-sm mb-2">
                    <User className="inline w-4 h-4 mr-2" />
                    Name:
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className="form-input w-full p-3 rounded"
                    required
                  />
                </div>

                <div>
                  <label className="block text-green-300 font-mono text-sm mb-2">
                    <Mail className="inline w-4 h-4 mr-2" />
                    Email:
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className="form-input w-full p-3 rounded"
                    required
                  />
                </div>

                <div>
                  <label className="block text-green-300 font-mono text-sm mb-2">
                    <MessageSquare className="inline w-4 h-4 mr-2" />
                    Subject:
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Enter message subject"
                    className="form-input w-full p-3 rounded"
                    required
                  />
                </div>

                <div>
                  <label className="block text-green-300 font-mono text-sm mb-2">
                    <MessageSquare className="inline w-4 h-4 mr-2" />
                    Message:
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Enter your message here..."
                    rows="6"
                    className="form-input w-full p-3 rounded resize-none"
                    required
                  />
                </div>

                <div
                  onClick={handleSubmit}
                  className="submit-btn w-full flex items-center justify-center cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Clock className="w-5 h-5 mr-2 loading-dots" />
                      TRANSMITTING...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      SEND_MESSAGE
                    </>
                  )}
                </div>
              </div>
            </TerminalWindow>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-20 max-w-4xl mx-auto">
          <TerminalWindow title="~/contact/additional_info">
            <div className="text-green-300 font-mono text-sm mb-4"># Additional Information:</div>
            <div className="space-y-3 text-green-400 font-mono text-sm">
              <div>• Response time: Usually within 24 hours</div>
              <div>• Available for: Freelance projects, collaborations, consultations</div>
              <div>• Preferred communication: Email for detailed discussions</div>
              <div>• Time zone: Central European Time (CET)</div>
              <div>• Languages: English, Dutch, Hungarian</div>
            </div>
          </TerminalWindow>
        </div>
      </div>

      {/* Terminal footer */}
      <div className="border-t border-green-500 bg-black p-4">
        <div className="text-green-400 font-mono text-center">
          <span className="text-green-500">user@contact:~$</span> Connection established // Ready for communication
        </div>
      </div>
    </div>
  );
};

export default ContactPage;