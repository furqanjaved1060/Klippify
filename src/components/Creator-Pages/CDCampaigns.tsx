import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import SelectionButtons from "./SelectionButtons";
import CampaignStats from "./CampaignStats";



const CDCampaigns = () => {

    const {username} = useParams();

    const [activeBtn, setActiveBtn] = useState<string>("active");

    return (
        <div className='h-[260 p-3 space-y-3 bg-white rounded-lg flex-grow'>

            <h2 className='text-lg font-semibold leading-none'>Campaigns</h2>

            <SelectionButtons
            buttons={["active", "past", "waitlist"]}
            activeBtn={activeBtn}
            setActiveBtn={setActiveBtn}/>
            
            <div className='h-[140px] overflow-hidden'>

            <ul className='grid grid-cols-[repeat(auto-fit,215px)] grid-rows-2 overflow-y-hidden gap-3'>
                <CampaignStats 
                activeBtn={activeBtn}/>
            </ul>
            
            </div>
            
            <div className='flex justify-center'>
            <Link to={`/${username}/campaigns`} className='p-1.25 text-[9px] font-semibold text-[#007EFF] bg-[#007EFF1A] rounded-lg cursor-pointer' >View All</Link>
            </div>

        </div>
    )
}

export default CDCampaigns