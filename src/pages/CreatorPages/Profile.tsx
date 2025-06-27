import CampaignHistoryList from '@components/Creator-Pages/CampaignHistoryList'
import ConnectedSMTable from '@components/Creator-Pages/ConnectedSMTable'
import ProfileCard from '@components/Creator-Pages/ProfileCard'
import SelectionButtons from '@components/Creator-Pages/SelectionButtons'
import { useState } from 'react'


const Profile = () => {

    const [activeBtn, setActiveBtn] = useState("active");

    return (

        <div className='flex-grow text-xxs font-medium bg-white rounded-lg'>

            <ProfileCard
            buttons={true}/>

            <div className="p-3 space-y-3 rounded-b-lg">

                <section className='space-y-3'>

                    <div className='flex flex-col gap-1.5 xxs:items-center justify-between xxs:flex-row'>
                        <h2 className='text-lg font-semibold leading-none'>Connected Social Media</h2>
                        <button className="w-25 h-6 text-[#007EFF] bg-[#007EFF1A] rounded-md cursor-pointer flex items-center justify-center gap-2"><span>+</span>Add Account</button>
                    </div>

                    <ConnectedSMTable/>

                </section>

                <section className='space-y-3'>

                    <h2 className='text-lg font-semibold leading-none'>Campaigns History</h2>

                    <SelectionButtons 
                    buttons={["active", "past"]}
                    activeBtn={activeBtn}
                    setActiveBtn={setActiveBtn}/>

                    <CampaignHistoryList/>

                </section>

            </div>

        </div>

    )
}

export default Profile;