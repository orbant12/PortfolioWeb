
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import ExtensionIcon from '@mui/icons-material/Extension';
import FastForwardIcon from '@mui/icons-material/FastForward';
import ConstructionIcon from '@mui/icons-material/Construction';

const ServiceBox = () => {

return (
<div className="service-box">
    <div className="service-box-row">
        <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>

            <div className='service-one-box'>
                <div className='service-icon'>
                    <ExtensionIcon />
                </div>
                <h3>Inplement Any <span className='highlight-span'>Requested Features</span> with a Focus to <span className='highlight-span'>Scale Your Business</span></h3>
            </div>

            <div className='service-one-box'>
                <div className='service-icon'>
                        <AddBusinessIcon />
                    </div>
                <h3>Create a web-app for <span className='highlight-span'>you</span> or your <span className='highlight-span' >business</span> <br /> (online shop, restaurant... extc)</h3>
            </div>
            
        </div>
    </div>
    <hr style={{height:100,marginTop:50,borderStyle:"groove",boxShadow:"0 0 10px rgba(0, 0, 0, 0.5)",opacity:0.5,marginLeft:10,marginRight:10}} />
    <div className="service-box-row">
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
        <div className='service-one-box'>
            <div className='service-icon'>
                <ConstructionIcon />
            </div>
            <h3>Build your website from scratch <br /> • <span className='highlight-span2'>MORE and UNIQ FEATURES</span><br /> • <span className='highlight-span2' >FULL CUSTOMABILITY</span><br />• <span className='highlight-span2'> No Monthly Payment</span> </h3>
        </div>
  
        <div className='service-one-box'>
            <div className='service-icon'>
                    <FastForwardIcon />
                </div>
            <h3>Stand out with a <span className='highlight-span'>MODERN</span> and <span className='highlight-span'>PROFESSIONAL</span> website</h3>
        </div>
        
    </div>
    </div>
</div>
)}

export default ServiceBox;