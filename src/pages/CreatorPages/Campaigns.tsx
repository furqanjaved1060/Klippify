import CampaignFilter from "@components/Creator-Pages/CampaignFilter";
import CampaignStats from "@components/Creator-Pages/CampaignStats";
import SelectionButtons from "@components/Creator-Pages/SelectionButtons";
import { useState } from "react";

const Campaigns = () => {

  const [activeBtn, setActiveBtn] = useState<string>("active");
  const [searchTerm, setSearcTerm] = useState<string>("");

  return (

    <div className='flex-grow p-3 space-y-3 bg-white rounded-lg'>

      <div className="lg:flex items-center justify-between">

        <h2 className='text-lg font-semibold mb-3 lg:mb-0 leading-none'>Campaigns</h2>

        <div className="flex flex-col gap-3 sm:flex-row sm:gap-6 justify-between">

          <input
            type="search"
            name="search"
            placeholder="Search..."
            autoComplete="off"
            value={searchTerm}
            onChange={(e) => setSearcTerm(e.target.value)}
            className='p-2 h-fit w-full xs:w-68.5 lg:w-85 text-xs bg-[#F4F4F4] rounded-lg outline-none' 
          />
                            
          <div className="flex gap-0.5 sm:gap-2">
            <CampaignFilter
            title={"Sort by"}
            options={['All', 'Most recent', 'Most paid', 'Unspent budget']}/>

            <CampaignFilter
            title={"Category"}
            options={['All', 'Podcast', 'E-commerce', 'Music']}/>

            <CampaignFilter
            title={"English"}
            options={['English', 'Arabic', 'French', 'German']}/>
          </div>

        </div>

      </div>

      <SelectionButtons 
      buttons={["active", "past", "waitlist", "new"]}
      activeBtn={activeBtn}
      setActiveBtn={setActiveBtn}/>

      <ul className='grid grid-cols-[repeat(auto-fit,215px)] gap-3'>
        <CampaignStats 
        activeBtn={activeBtn}
        searchTerm={searchTerm}/>
      </ul>

    </div>
  )
}

export default Campaigns;