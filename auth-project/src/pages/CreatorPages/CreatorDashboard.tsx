import earnings from '@assets/earnings.png'
import money from '@assets/money.png'
import tick from '@assets/tick.png'
import rating from '@assets/rating.png'
import CampaignStats from '@components/Profile-Page/CampaignStats';
import CreatorDashboardItem from '@components/Profile-Page/CreatorDashboardItem';
import PaymentsStats from '@components/Profile-Page/PaymentsStats';
import SelectionButtons from '@components/Profile-Page/SelectionButtons';
import { Link, useParams } from 'react-router-dom';

const CreatorDashboard = () => {

  const {username} = useParams();

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

        <div className='h-[260px] p-3 space-y-3 bg-white rounded-lg flex-grow'>

          <h2 className='text-lg font-semibold leading-none'>Campaigns</h2>

          <SelectionButtons 
          buttons={["active", "past", "waitlist"]}/>

          <div className='h-[140px] overflow-hidden'>

            <ul className='grid grid-cols-[repeat(auto-fit,215px)] grid-rows-2 overflow-y-hidden gap-3'>
              <CampaignStats/>
            </ul>
            
          </div>
          
          <div className='flex justify-center'>
            <Link to={`/${username}/campaigns`} className='p-1.25 text-[9px] font-semibold text-[#007EFF] bg-[#007EFF1A] rounded-lg cursor-pointer' >View All</Link>
          </div>

        </div>

        <div className='p-3 space-y-3 bg-white rounded-lg w-full sm:w-[24.75%] min-w-60'>

          <h2 className='text-lg font-semibold leading-none'>Payments</h2>

          <SelectionButtons 
          buttons={["monthly", "weekly", "today"]}/>

          <div className='h-[140px] overflow-y-hidden'>

            <ul className='space-y-3'>

              <PaymentsStats/>
              <PaymentsStats/>
              <PaymentsStats/>
              <PaymentsStats/>

            </ul>

          </div>

          <div className='flex justify-center'>
            <button className='p-1.25 text-[9px] font-semibold text-[#007EFF] bg-[#007EFF1A] rounded-lg cursor-pointer'>View All</button>
          </div>

        </div>

      </div>
    </>

  )
}

export default CreatorDashboard;

