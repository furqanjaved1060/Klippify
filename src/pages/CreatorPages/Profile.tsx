import CampaignHistoryList from '@components/Profile-Page/CampaignHistoryList'
import ConnectedSMTable from '@components/Profile-Page/ConnectedSMTable'
import ProfileCard from '@components/Profile-Page/ProfileCard'
import SelectionButtons from '@components/Profile-Page/SelectionButtons'


const Profile = () => {

    return (

        <div className='text-xxs font-medium'>

            <ProfileCard
            buttons={true}/>

            <div className="bg-white p-3 space-y-3 rounded-b-lg">

                <section className='space-y-3'>

                    <div className='flex items-center justify-between'>
                        <h2 className='text-lg font-semibold leading-none'>Connected Social Media</h2>
                        <button className="w-25 h-6 text-[#007EFF] bg-[#007EFF1A] rounded-md cursor-pointer flex items-center justify-center gap-2"><span>+</span>Add Account</button>
                    </div>

                    <ConnectedSMTable/>

                </section>

                <section className='space-y-3'>

                    <h2 className='text-lg font-semibold leading-none'>Campaigns History</h2>

                    <SelectionButtons 
                    buttons={["active", "past"]}/>

                    <CampaignHistoryList/>

                </section>

            </div>

        </div>

    )
}

export default Profile;