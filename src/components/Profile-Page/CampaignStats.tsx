import bar from '@assets/bars.png'
import insta from '@assets/insta.png'
import tiktok from '@assets/tiktok.png'
import useCampaignFilter from '@store/campaignFilter'
import useCampaigns from '@store/campaigns'
import { NavLink, useParams } from 'react-router-dom'

const CampaignStats = () => {

    const {username} = useParams();
    const campaigns = useCampaigns(state => state.campaigns);
    const campaignFilter = useCampaignFilter(state => state.campaignFilter);
    const filteredCampaigns = campaigns.filter((curCampaign) => curCampaign.status===campaignFilter);
    const setDetailedCampaign = useCampaigns(state => state.setDetailedCampaign);

    return (
        <>
        {filteredCampaigns.map((curCampaign) => {

            const {campaignName, views, budgetSpent} = curCampaign;

            const budgetSpentNumber = Number(budgetSpent.slice(1));

            const budgetSpentPercentage = String((budgetSpentNumber/10000)*100);

            const width = `${budgetSpentPercentage}%`

            const handleDetailedCampaign = () => {
                setDetailedCampaign(curCampaign);
            }

            return (
                <li className='flex gap-2.5'>
                    <NavLink className='bg-gray-200 size-16 rounded-lg cursor-pointer' to={`/${username}/campaigns/details`} onClick={handleDetailedCampaign}></NavLink>
                    <div className='w-[142.5px] text-xxs space-y-0.75'>
                        <div className='flex items-center justify-between gap-4'><p className='whitespace-nowrap overflow-hidden text-ellipsis font-semibold'>{campaignName}</p><div className='flex items-center gap-2'><img src={insta} alt="" className='size-2.5' /><img src={tiktok} alt="" className='size-2.5' /></div></div>
                        <div className='flex items-center gap-1'><img src={bar} alt="" className='size-4' /><span className='font-bold'>{views}</span> Total Views</div>
                        <div>
                            <p><span className='text-[#007EFF] text-xs font-semibold'>{budgetSpent}</span> of $10,000</p>
                            <div className='h-2 mt-0.25 bg-[#3333331A] rounded-lg'><div className='h-full bg-gradient-to-r from-[#333EFF] to-[#5BCAFF] rounded-lg' style={{width: width}}></div></div>
                        </div>
                    </div>
                </li>
            )
        })}
        </>
    )
}

export default CampaignStats;