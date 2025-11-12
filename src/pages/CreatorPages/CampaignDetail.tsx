import CampaignDetailsCard from '@components/Creator-Pages/CampaignDetailsCard'
import DesReq from '@components/Creator-Pages/DesReq'
import ManCampContCard from '@components/Creator-Pages/ManCampContCard'
import ManCampContTable from '@components/Creator-Pages/ManCampContTable'

const CampaignDetail = () => {

  return (

  <div className='flex-grow p-3 space-y-3 bg-white rounded-lg'>

    <section className="space-y-3">

      <div className="flex flex-col gap-3 xs:flex-row xs:items-center xs:justify-between">
        <h2 className='text-lg font-semibold leading-none text-center xs:text-start'>Campaign Details</h2>
        <div className="flex flex-col gap-3 items-center xs:flex-row xs:justify-between">
          <p className="text-xxs">Joined: 115 creators</p>
          <button className="h-8.5 w-27 text-xxs text-white font-medium rounded-lg bg-gradient-to-r from-[#333EFF] to-[#5BCAFF] cursor-pointer">Request to Join</button>
        </div>
      </div>

      <CampaignDetailsCard/>

      <div className="flex flex-col sm:flex-row gap-3 justify-between">

        <DesReq/>

        <ManCampContCard/>

      </div>

    </section>

    <section className="space-y-3">

      <div className="flex flex-col gap-3 xs:flex-row xs:items-center xs:justify-between">
        <h2 className='text-lg font-semibold leading-none text-center xs:text-start'>Manage Campaign Content</h2>
        <button className="h-8.5 w-27 m-auto xs:m-0 text-xxs text-white font-medium rounded-lg bg-gradient-to-r from-[#333EFF] to-[#5BCAFF] cursor-pointer">Upload Content</button>
      </div>

      <ManCampContTable/>

    </section>

  </div>

  )
}

export default CampaignDetail;