import CampaignStats from "@components/Creator-Pages/CampaignStats"
import ProfileCard from "@components/Creator-Pages/ProfileCard"
import SelectionButtons from "@components/Creator-Pages/SelectionButtons"
import { useState } from "react";

const PublicView = () => {

  const [activeBtn, setActiveBtn] = useState("active");

  return (

    <div className='flex-grow text-xxs font-medium bg-white rounded-lg'>

        <ProfileCard
        buttons={false}/>

        <div className="bg-white p-3 space-y-3 rounded-b-lg">

            <section className='space-y-3'>

                <h2 className='text-lg font-semibold leading-none'>Campaigns History</h2>

                <SelectionButtons
                buttons={["active", "past"]}
                activeBtn={activeBtn}
                setActiveBtn={setActiveBtn}/>

                <ul className='grid grid-cols-[repeat(auto-fit,minmax(214px,214px))] gap-3'>

                  <CampaignStats
                  activeBtn={activeBtn}/>

                </ul>
                
            </section>

        </div>

    </div>

  )
}

export default PublicView