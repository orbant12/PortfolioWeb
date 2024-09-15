import hockeyImage from "../assets/abtME/hock.jpg"
import classImage from "../assets/abtME/class.jpeg"
import vuBImage from "../assets/abtME/vu_b.jpg"
import webImage from "../assets/abtME/c5.png"
import kaliImage from "../assets/abtME/kali.png"
import internImage from "../assets/abtME/intern.jpeg"
import mlImage from "../assets/abtME/andrew.png"
import vusecImage from "../assets/abtME/vusec.jpg"
import mobileImage from "../assets/abtME/mobile.png"

//<div className="absolute top-0 left-0 p-4 border-[1px] w-[300px] bg-gray" style={{borderBottomRightRadius:10}}><h3 className="text-white text-xs"><span className="font-bold">Inspiration: </span>Wanted to build a webb app to store podcast snippets with notes</h3></div>
const AboutMePage = () => {

    return (
        <div className="flex flex-col items-center w-[100%]">
            <h1 className="text-[60px] mt-[90px]">About Me</h1>
            <div className="flex flex-col items-center w-[90%] xl:w-[80%]" style={{borderRightWidth:5, borderRadius:0}}>
                <div className="flex flex-col items-center border w-[100%] mt-[100px] xl:flex-row " style={{borderTopLeftRadius:10,borderBottomLeftRadius:10}}>
                    <img src={hockeyImage} className="w-[600px] border h-[350px] relative" style={{borderTopLeftRadius:10,borderBottomLeftRadius:10}} />
                    <div className="flex flex-col text-left ml-0 p-10">
                        <h1 className="text-[20px] text-white">2009-2020 - Ice Hockey</h1>
                        <h3 className="text-white opacity-50 mt-3">mfdskmd kosmpkod mpksmd pksmdk mskdm lksmd klmslkd msklmd lksmd lkmslkd mksmd klsmlk dmslkm dklm kl</h3>
                        <div className="flex flex-wrap mt-3">
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded m-2">
                                Team Work
                            </span>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded m-2">
                                Disciplin
                            </span>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded m-2">
                                Learning from failure
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center border w-[100%] mt-[100px] xl:flex-row-reverse" style={{borderTopLeftRadius:10,borderBottomLeftRadius:10}}>
                <img src={classImage} className="w-[600px] border h-[350px] relative" style={{borderRadius:0}} />
                    <div className="flex flex-col text-left ml-0 p-10">
                        <h1 className="text-[20px] text-white">2018-2023 - Informatics & Mathematics Highschool</h1>
                        <h3 className="text-white opacity-50 mt-3">mfdskmd kosmpkod mpksmd pksmdk mskdm lksmd klmslkd msklmd lksmd lkmslkd mksmd klsmlk dmslkm dklm kl</h3>
                        <div className="flex flex-wrap mt-3">
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded m-2">
                                Team Work
                            </span>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded m-2">
                                Disciplin
                            </span>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded m-2">
                                Learning from failure
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex relative flex-col items-center border w-[100%] mt-[100px] xl:flex-row" style={{borderTopLeftRadius:10,borderBottomLeftRadius:10}}>
                    <img src={webImage} className="w-[600px] border h-[350px] relative" style={{borderTopLeftRadius:10,borderBottomLeftRadius:10}} />
                    <div className="flex flex-col text-left ml-0 p-10">
                        <h1 className="text-[20px] text-white">2021 - Web Development</h1>
                        <h3 className="text-white opacity-50 mt-3">mfdskmd kosmpkod mpksmd pksmdk mskdm lksmd klmslkd msklmd lksmd lkmslkd mksmd klsmlk dmslkm dklm kl</h3>
                        <div className="flex flex-wrap mt-3">
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded m-2">
                                JS, HTML, CSS
                            </span>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded m-2">
                                GO
                            </span>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded m-2">
                                Typescript
                            </span>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded m-2">
                                React
                            </span>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded m-2">
                                Next JS
                            </span>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded m-2">
                                AWS EC2
                            </span>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded m-2">
                                Dokcer
                            </span>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded m-2">
                                Firebase
                            </span>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded m-2">
                                Node
                            </span>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded m-2">
                                SQL
                            </span>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded m-2">
                                Web Servers
                            </span>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded m-2">
                                REST API's
                            </span>
                        </div>
                    </div>
                    <div className="absolute top-0 right-0 p-4 border-[1px] w-[300px] bg-gray" style={{borderBottomLeftRadius:10}}><h3 className="text-white text-xs"><span className="font-bold">Inspiration: </span>Wanted to build a web app to store podcast snippets with notes</h3></div>
                </div>

                <div className="flex relative flex-col items-center border w-[100%] mt-[100px] xl:flex-row-reverse " style={{borderTopLeftRadius:10,borderBottomLeftRadius:10}}>
                    <img src={kaliImage} className="w-[600px] border h-[350px] relative" style={{borderRadius:0}} />
                    <div className="flex flex-col text-left ml-0 p-10">
                        <h1 className="text-[20px] text-white">2022 - Offensive Cyber Security</h1>
                        <h3 className="text-white opacity-50 mt-3">mfdskmd kosmpkod mpksmd pksmdk mskdm lksmd klmslkd msklmd lksmd lkmslkd mksmd klsmlk dmslkm dklm kl</h3>
                        <div className="flex flex-wrap mt-3">
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded m-2">
                                Pentesting
                            </span>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded m-2">
                                Netwoking
                            </span>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded m-2">
                                OSI Model
                            </span>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded m-2">
                                Enumeration
                            </span>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded m-2">
                                CTF's HTB, THM, Pico
                            </span>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded m-2">
                                Kali Linux
                            </span>
                        </div>
                    </div>
                    <div className="absolute top-0 left-0 p-4 border-[1px] w-[300px] bg-gray" style={{borderBottomRightRadius:10}}><h3 className="text-white text-xs"><span className="font-bold">Inspiration: </span>Wanted know the vulnerabilities of my web app's and got hooked in the process</h3></div>
                </div>

                <div className="flex flex-col items-center border w-[100%] mt-[100px] xl:flex-row" style={{borderTopLeftRadius:10,borderBottomLeftRadius:10}}>
                    <img src={internImage} className="w-[600px] border h-[350px] relative" style={{borderRadius:0}} />
                    <div className="flex flex-col text-left ml-0 p-10">
                        <h1 className="text-[20px] text-white">6 months in 2023 - First Internship ( Getcon - Network Security Company )</h1>
                        <h3 className="text-white opacity-50 mt-3">mfdskmd kosmpkod mpksmd pksmdk mskdm lksmd klmslkd msklmd lksmd lkmslkd mksmd klsmlk dmslkm dklm kl</h3>
                        <div className="flex flex-wrap mt-3">
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded m-2">
                                skldmslm
                            </span>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded m-2">
                                Netwoking
                            </span>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded m-2">
                                OSI Model
                            </span>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded m-2">
                                Enumeration
                            </span>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded m-2">
                                CTF's HTB, THM, Pico
                            </span>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded m-2">
                                Kali Linux
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex relative flex-col items-center border w-[100%] mt-[100px] xl:flex-row-reverse" style={{borderTopLeftRadius:10,borderBottomLeftRadius:10}}>
                    <img src={mlImage} className="w-[600px] border h-[350px] relative" style={{borderRadius:0}} />
                    <div className="flex flex-col text-left ml-0 p-10">
                        <h1 className="text-[20px] text-white">2023-2024 - Machine Learning & Deep Learning</h1>
                        <h3 className="text-white opacity-50 mt-3">mfdskmd kosmpkod mpksmd pksmdk mskdm lksmd klmslkd msklmd lksmd lkmslkd mksmd klsmlk dmslkm dklm kl</h3>
                        <div className="flex flex-wrap mt-3">
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded m-2">
                                Python
                            </span>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded m-2">
                                Flask
                            </span>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded m-2">
                                Tensorflow
                            </span>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded m-2">
                                Panda's
                            </span>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded m-2">
                                SQL
                            </span>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded m-2">
                                Numpy
                            </span>
                        </div>
                    </div>
                    <div className="absolute top-0 left-0 p-4 border-[1px] w-[300px] bg-gray" style={{borderBottomRightRadius:10}}><h3 className="text-white text-xs"><span className="font-bold">Inspiration: </span>Courisoty and the still remaining facinations about it's processes</h3></div>
                </div>

                <div className="flex relative flex-col items-center border w-[100%] mt-[100px] xl:flex-row" style={{borderTopLeftRadius:10,borderBottomLeftRadius:10}}>
                <img src={mobileImage} className="w-[600px] border h-[350px] relative" style={{borderRadius:0}} />
                    <div className="flex flex-col text-left ml-0 p-10">
                        <h1 className="text-[20px] text-white">2024 - Mobile Development</h1>
                        <h3 className="text-white opacity-50 mt-3">mfdskmd kosmpkod mpksmd pksmdk mskdm lksmd klmslkd msklmd lksmd lkmslkd mksmd klsmlk dmslkm dklm kl</h3>
                        <div className="flex flex-wrap mt-3">
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded m-2">
                                React Native
                            </span>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded m-2">
                                Typescript
                            </span>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded m-2">
                                Go
                            </span>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded m-2">
                                Expo
                            </span>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded m-2">
                                Swift UI
                            </span>
                        </div>
                    </div>
                    <div className="absolute top-0 right-0 p-4 border-[1px] w-[300px] bg-gray" style={{borderBottomLeftRadius:10}}><h3 className="text-white text-xs"><span className="font-bold">Inspiration: </span>Wanted to learn Typescript, GO, React Native and put my freshly learned ML knowlege into use</h3></div>
                </div>

                <div className="flex flex-col items-center border w-[100%] mt-[100px] xl:flex-row-reverse" style={{borderTopLeftRadius:10,borderBottomLeftRadius:10}}>
                <img src={vuBImage} className="w-[600px] border h-[350px] relative" style={{borderRadius:0}} />
                    <div className="flex flex-col text-left ml-0 p-10">
                        <h1 className="text-[20px] text-white">2024-2027 - Vrije University Amsterdam </h1>
                        <h3 className="text-white opacity-50 mt-3">mfdskmd kosmpkod mpksmd pksmdk mskdm lksmd klmslkd msklmd lksmd lkmslkd mksmd klsmlk dmslkm dklm kl</h3>
                    </div>
                </div>

                <div className="flex flex-col items-center border w-[100%] mt-[100px] xl:flex-row" style={{borderTopLeftRadius:10,borderBottomLeftRadius:10}}>
                <img src={vusecImage} className="w-[600px] border h-[350px] relative" style={{borderRadius:0}} />
                    <div className="flex flex-col text-left ml-0 p-10">
                        <h1 className="text-[20px] text-white">2024 - [VU Sec] Cyber Security Student Association</h1>
                        <h3 className="text-white opacity-50 mt-3">mfdskmd kosmpkod mpksmd pksmdk mskdm lksmd klmslkd msklmd lksmd lkmslkd mksmd klsmlk dmslkm dklm kl</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMePage;