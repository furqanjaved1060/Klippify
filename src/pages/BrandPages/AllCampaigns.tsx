import CampaignStats from "@components/Creator-Pages/CampaignStats";
import SelectionButtons from "@components/Creator-Pages/SelectionButtons";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const AllCampaigns = () => {

    const {username} = useParams();

    const [activeBtn, setActiveBtn] = useState("active");

    return (
        <div className="flex-grow p-3 space-y-3 bg-white rounded-lg">

            <section className='space-y-3'>

                <div className='flex items-center justify-between'>
                    <h2 className='text-lg font-semibold leading-none'>All Campaigns</h2>
                    <Link to={`/${username}/campaigns/create`} className='p-3 font-roboto text-xxs font-medium text-white bg-gradient-to-r from-[#333EFF] to-[#5BCAFF] rounded-lg leading-none'>Create Campaign</Link>
                </div>

                <SelectionButtons
                buttons={["active", "past", "new"]}
                activeBtn={activeBtn}
                setActiveBtn={setActiveBtn}/>

                <ul className='grid grid-cols-[repeat(auto-fit,minmax(214px,214px))] gap-3'>

                    <CampaignStats
                    activeBtn={activeBtn}/>

                </ul>
                
            </section>

        </div>
    )
}

export default AllCampaigns;