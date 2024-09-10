import ctfPage from "../../assets/cyber/PDFy.png"
import hdb from "../../assets/cyber/hdb.png"

const PdfY = () => {

    return(
        <div className="w-[100%] bg p-10 flex flex-col justify-center items-center">
            <div className="w-[80% relative bg border-[3px] p-10 flex flex-col items-center rounded bg-[rgba(255,255,255,0.1)] ">
                <div className="absolute border right-0 top-0" style={{borderBottomLeftRadius:10}}>
                    <h3 className="text-white p-2 text-[5px] md:text-[12px] md:p-3">Created at: <span className="opacity-80">11/09/2024</span></h3>
                </div>
                <h2 className="text-white text-[30px] md:text-[50px]" >PDFy</h2>
                <h2 className="text-white text-[10px] opacity-80 font-thin text-center md:text-[20px]" >Welcome to PDFy, the exciting challenge where you turn your favorite web pages into portable PDF documents! It's your chance to capture, share, and preserve the best of the internet with precision and creativity. Join us and transform the way we save and cherish web content! NOTE: Leak /etc/passwd to get the flag!</h2>
            </div>
             <div className="w-[80%] bg  p-10 flex flex-col items-center rounded ">
                <img className="relative w-[80%]  border-[2px]" src={ctfPage} alt="pdf landing page" />
                <img className="relative w-[80%] border-[2px]" src={hdb} alt="pdf landing page" />
             </div>

             <div className="d-cont-right mt-[150px] w-[130px] h-[300px]" style={{marginRight:40}}>
                <a href="#Problems">Journey for solution</a>
                <a href="#Techstack">What I've Learned</a>
                <a href="#Lexical Rich Text Editor">Alternative Solutions</a>
                <a href="#RNN & Open AI">Takeaway</a>
            </div>

            <div className="h-1 border w-[100%] bg-white rounded opacity-90 mt-10" />

            <div className="w-[100%] flex flex-col items-center mt-10">
                <h1 className="text-white text-[20px] font-medium md:text-[30px]">Journey for a solution</h1>
            </div>
        
        </div>
    )
}

export default PdfY;