import bar from '@assets/bars.png'
import insta from '@assets/insta.png'
import tiktok from '@assets/tiktok.png'
import useAuthUser from '@store/authUser'
import useBrandCampaigns from '@store/brandCampaigns'
import useCampaigns from '@store/campaigns'
import { NavLink, useParams } from 'react-router-dom'

type Props = {
    activeBtn: string;
    searchTerm?: string;
}

const CampaignStats: React.FC<Props> = ({activeBtn, searchTerm}) => {

    const {username} = useParams();
    const role = useAuthUser(state => state.authUser.userData.role);

    const campaigns = role==="creator" ? useCampaigns(state => state.campaigns) : useBrandCampaigns(state => state.campaigns);

    const filteredCampaigns = campaigns.filter((curCampaign) => curCampaign.status===activeBtn && curCampaign.campaignName.toLowerCase().includes(searchTerm ? searchTerm.toLowerCase() : ''));

    console.log(filteredCampaigns)

    const setDetailedCampaign = useCampaigns(state => state.setDetailedCampaign);

    return (
        <>
        {filteredCampaigns.map((curCampaign, index) => {

            const {campaignName, views, budgetSpent} = curCampaign;

            const budgetSpentNumber = Number(budgetSpent.slice(1));

            const budgetSpentPercentage = String((budgetSpentNumber/10000)*100);

            const width = `${budgetSpentPercentage}%`

            const handleDetailedCampaign = () => {
                setDetailedCampaign(curCampaign);
            }

            return (
                <li key={index} className='flex gap-2.5'>
                    <NavLink className='bg-gray-200 size-16 rounded-lg cursor-pointer' to={role==="creator" ? `/${username}/campaigns/details` : ''} onClick={handleDetailedCampaign}></NavLink>
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