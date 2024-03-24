
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import ExtensionIcon from '@mui/icons-material/Extension';
import FastForwardIcon from '@mui/icons-material/FastForward';
import ConstructionIcon from '@mui/icons-material/Construction';
import ShopIcon from '@mui/icons-material/Shop';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import BoltIcon from '@mui/icons-material/Bolt';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';

const ServiceBoxAi = () => {

return (
<div className="service-box">
    <div className="service-box-row">
        <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>

            <div className='service-one-box'>
                <div className='service-icon'>
                    <AutoFixHighIcon />
                </div>
                <h3>Build and Train <span className='highlight-span'>AI Model</span> with the requested <span className='highlight-span'>FUNCTIONALITY</span></h3>
            </div>

            <div className='service-one-box'>
                <div className='service-icon'>
                        <BoltIcon />
                    </div>
                <h3>Create an <span className='highlight-span' >AI Powered</span> Web or Mobile App for <span className='highlight-span'>you</span> or your <span className='highlight-span' >business</span></h3>
            </div>
            
        </div>
    </div>
    <hr style={{height:100,marginTop:50,borderStyle:"groove",boxShadow:"0 0 10px rgba(0, 0, 0, 0.5)",opacity:0.5,marginLeft:10,marginRight:10}} />
    <div className="service-box-row">
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
        <div className='service-one-box'>
            <div className='service-icon'>
                <FitnessCenterIcon />
            </div>
            <h3>Models I've Trained Before <br /> • <span className='highlight-span2'>Speech to Text</span><br /> • <span className='highlight-span2' >Text to Speech</span><br />• <span className='highlight-span2'>Text to Image</span> </h3>
        </div>
        <div className='service-one-box'>
            <div className='service-icon'>
                    <SupportAgentIcon />
                </div>
            <h3>Automate <span className='highlight-span'>Customer Service</span> and help your customers get answers much <span className='highlight-span'>quicker</span> & <span className='highlight-span'>easier</span> </h3>
        </div>
        
    </div>
    </div>
</div>
)}

export default ServiceBoxAi;