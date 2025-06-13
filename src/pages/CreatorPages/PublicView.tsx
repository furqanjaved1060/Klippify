import CampaignStats from "@components/Profile-Page/CampaignStats"
import ProfileCard from "@components/Profile-Page/ProfileCard"
import SelectionButtons from "@components/Profile-Page/SelectionButtons"

const PublicView = () => {
  return (

    <div className='min-h-screen bg-white rounded-lg text-xxs font-medium'>

        <ProfileCard
        buttons={false}/>

        <div className="bg-white p-3 space-y-3 rounded-b-lg">

            <section className='space-y-3'>

                <h2 className='text-lg font-semibold leading-none'>Campaigns History</h2>

                <SelectionButtons
                buttons={["active", "past"]}/>

                <ul className='grid grid-cols-[repeat(auto-fit,minmax(214px,1fr))] gap-3'>

                    <CampaignStats/>

                </ul>
                
            </section>

        </div>

    </div>

  )
}

export default PublicView