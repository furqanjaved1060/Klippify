import totalCreators from '@assets/totalCreators.png'
import totalSpendings from '@assets/totalSpendings.png'
import CampaignStats from '@components/Creator-Pages/CampaignStats';
import CreatorDashboardItem from '@components/Creator-Pages/CreatorDashboardItem';
import BrandDashboardCard from '@components/Brand-Pages/BrandDashboardCard';
import { Link, useParams } from 'react-router-dom';

const BrandDashboard = () => {

    const {username} = useParams();

  return (
    <>
        <div className='p-3 space-y-3 bg-white rounded-lg'>

            <h2 className='text-lg font-semibold leading-none text-center md:text-start'>Brand Dashboard</h2>

            <div className='w-68 mx-auto md:w-full flex flex-col md:flex-row gap-3'>

                <BrandDashboardCard/>

                <ul className='flex-grow grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-3'>
                <CreatorDashboardItem 
                title={"Total Creators"}
                value={"$150"}
                img={totalCreators}
                clr={"#007EFF"}
                bgClr={"#007EFF1A"}/>

                <CreatorDashboardItem
                title={"Total Spendings"}
                value={"$50,000"}
                img={totalSpendings}
                clr={"##C800F5"}
                bgClr={"#C800F51A"}/>
                </ul>

            </div>
        
        </div>

        <div className='h-[260 p-3 space-y-3 bg-white rounded-lg flex-grow'>

            <div className='flex items-center justify-between'>
                <h2 className='text-lg font-semibold leading-none'>Active Campaigns</h2>
                <Link to={`/${username}/campaigns/create`} className='p-3 font-roboto text-xxs font-medium text-white bg-gradient-to-r from-[#333EFF] to-[#5BCAFF] rounded-lg leading-none'>Create Campaign</Link>
            </div>

            <div className='h-[140px] overflow-hidden'>

                <ul className='grid grid-cols-[repeat(auto-fit,214px)] grid-rows-2 overflow-y-hidden gap-3'>
                    <CampaignStats
                    activeBtn={"active"}/>
                </ul>
            
            </div>

        </div>

    </>

  )
}

export default BrandDashboard;