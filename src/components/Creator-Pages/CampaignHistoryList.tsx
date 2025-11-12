import antCamp from '@assets/AntCamp.png'
import { GoDotFill } from 'react-icons/go'
import insta from '@assets/insta.png'
import star from '@assets/star.png'
import tiktok from '@assets/tiktok.png'

const CampaignHistoryList = () => {

    const campaigns = [
        {
            campaignName: 'Influencer Takeover',
            rating: '4.5',
            brandName: 'Brand name',
            clicks: '1200',
            totalViews: '8900',
            earnings: '$2350'
        },
        {
            campaignName: 'Influencer Takeover',
            rating: '4.5',
            brandName: 'Brand name',
            clicks: '1200',
            totalViews: '8900',
            earnings: '$2350'
        },
        {
            campaignName: 'Influencer Takeover',
            rating: '4.5',
            brandName: 'Brand name',
            clicks: '1200',
            totalViews: '8900',
            earnings: '$2350'
        },
    ]

    return (
        <ul className='space-y-3'>
            {campaigns.map((curCampaign, index) => {

                const {campaignName, rating, brandName, clicks, totalViews, earnings} = curCampaign;
                return (
                    <li key={index} className='p-2 border-1 border-[#D9D9D9] rounded-lg space-y-3'>

                        <div className='flex flex-col xxs:flex-row items-center xxs:items-start gap-4 xxs:gap-5 justify-between'>
                            <div className='w-60 flex items-center gap-3'>
                                <img src={antCamp} alt="" className='size-10'/>
                                <div>
                                    <div className='flex items-center gap-1 text-xs'><span className='max-w-38 whitespace-nowrap overflow-hidden text-ellipsis'>{campaignName}</span><img src={star} alt="" className="size-3" /><span>{rating}</span></div>
                                    <p className='text-[#33333380] font-normal'>{brandName}</p>
                                </div>
                            </div>
                            <button className='py-1 px-3 text-[#2E865F] bg-[#2E865F1A] flex items-center gap-2 rounded-xl'><GoDotFill />Active</button>
                        </div>
        
                        <div className='flex flex-col sm:flex-row items-center justify-between gap-4'>
                            <div className='flex items-center gap-3'>
                                <img src={insta} alt="" className='size-5 sm:size-3.5'/>
                                <img src={tiktok} alt="" className='size-5 sm:size-3.5'/>
                            </div>
                            <div className='w-full sm:w-fit flex items-center justify-between xxs:gap-8 xs:gap-10 md:gap-20 lg:gap-25'>
                                <p className='flex items-center gap-1 xxs:gap-2'><span className='text-xs xxs:text-sm font-semibold leading-none'>{clicks}</span><span className='text-xxs font-normal font-roboto leading-none xxs:mt-[1px]'>Clicks</span></p>
                                <p className='flex items-center gap-1 xxs:gap-2'><span className='text-xs xxs:text-sm font-semibold leading-none'>{totalViews}</span><span className='text-xxs font-normal font-roboto leading-none xxs:mt-[1px]'>Total Views</span></p>
                                <p className='flex items-center gap-1 xxs:gap-2'><span className='text-xs xxs:text-sm font-semibold leading-none'>{earnings}</span><span className='text-xxs font-normal font-roboto leading-none xxs:mt-[1px]'>Earnings</span></p>
                            </div>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}

export default CampaignHistoryList;