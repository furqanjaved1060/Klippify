import earnings from '@assets/earnings.png'
import money from '@assets/money.png'
import tick from '@assets/tick.png'
import rating from '@assets/rating.png'
import CDCampaigns from '@components/Creator-Pages/CDCampaigns';
import CDPayments from '@components/Creator-Pages/CDPayments';
import CreatorDashboardItem from '@components/Creator-Pages/CreatorDashboardItem';

const CreatorDashboard = () => {

  return (
    <>
      <div className='p-3 space-y-3 bg-white rounded-lg'>

        <h2 className='text-lg font-semibold leading-none'>Creator Dashboard</h2>

        <ul className='grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-3'>

          <CreatorDashboardItem
          title={"Total Earnings"}
          value={"$7530"}
          img={earnings}
          clr={"#F56100"}
          bgClr={"#F561001A"}/>

          <CreatorDashboardItem
          title={"Pending Earnings"}
          value={"$1200"}
          img={money}
          clr={"#C800F5"}
          bgClr={"#C800F51A"}/>

          <CreatorDashboardItem
          title={"Active Campaigns"}
          value={"03"}
          img={tick}
          clr={"#007EFF"}
          bgClr={"#007EFF1A"}/>

          <CreatorDashboardItem
          title={"Rating"}
          value={"4.8"}
          img={rating}
          clr={"#F5C000"}
          bgClr={"#F5C0001A"}/>

        </ul>
        
      </div>

      <div className='flex flex-col sm:flex-row gap-3'>

        <CDCampaigns/>

        <CDPayments/>

      </div>
    </>

  )
}

export default CreatorDashboard;

