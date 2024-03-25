
import { getPortalUrl } from './checkOutUrl';
import { app} from "../../../firebase";

const StripePanel = () => {

const manageSubscription = async() =>{
    const portalUrl = await getPortalUrl(app);
    alert("Loading... It may take a few seconds")
    window.location.href = portalUrl
    console.log("Manage Subscription");
}
    
return (
<div className="experience-show">
    <div className='stripe-container'>
        <div onClick={manageSubscription} className='stripe-btn'>
            <h2>Open Test Checkout Panel</h2>
        </div>
    </div>
</div>
)
};

export default StripePanel