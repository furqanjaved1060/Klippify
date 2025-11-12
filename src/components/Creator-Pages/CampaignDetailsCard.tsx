import star from "@assets/star.png"
import antCamp from '@assets/AntCamp.png'
import insta from '@assets/insta.png'
import facebook from '@assets/facebook.png'
import useCampaigns from "@store/campaigns"

const CampaignDetailsCard = () => {

    const detailedCampaign = useCampaigns(state => state.detailedCampaign);

    const {campaignName, clicks, reward} = detailedCampaign;

    return (

        <div className="w-full mb-3 bg-[#F9F9F9] p-3 grid xxs:grid-cols-[repeat(2,minmax(0,max-content))] gap-5 sm:grid-cols-[repeat(auto-fit,minmax(0,max-content))] justify-center xxs:justify-between items-center rounded-lg">

            <div className='flex gap-2.5'>
                <img src={antCamp} className='bg-gray-200 size-14 rounded-lg cursor-pointer' alt=""></img>
                <div className='text-xxs flex flex-col justify-between'>
                    <p className='text-[13px] font-medium'>{campaignName}</p>
                    <p className="text-xxs text-[#33333380]">Brand Name</p>
                    <div className="flex items-center gap-1">
                        <img src={star} alt="" className="size-4" /><span className="text-xs">4.5</span>
                    </div>
                </div>
            </div>

            <div className="justify-self-center text-center xxs:justify-self-start xxs:text-start">
                <p className="text-[13px] font-medium">{clicks}</p>
                <p className="text-xxs text-[#33333380]">Clicks/Views</p>
            </div>


            <div className="justify-self-center text-center xxs:justify-self-start xxs:text-start">
                <p className="text-[13px] font-medium">{reward} of 1k Views</p>
                <p className="text-xxs text-[#33333380]">Reward on clicks/views</p>
            </div>

            <div className="justify-self-center text-center xxs:justify-self-start xxs:text-start">
                <div className="mb-1 flex gap-4"><img src={facebook} alt="" className='size-4' /><img src={insta} alt="" className='size-4' /></div>
                <p className="text-xxs text-[#33333380]">Target Platforms</p>
            </div>

        </div>
        
    )
}

export default CampaignDetailsCard;