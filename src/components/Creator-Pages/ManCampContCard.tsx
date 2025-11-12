import antCamp from '@assets/AntCamp.png'
import useCampaigns from '@store/campaigns';

const ManCampContCard = () => {

    const detailedCampaign = useCampaigns(state => state.detailedCampaign);

    const {campaignName} = detailedCampaign

    return (
        <div className="w-full xs:w-fit h-fit bg-[#F9F9F9] p-3 space-y-2 rounded-lg">

            <h3 className="text-[13px] font-medium">Manage Campaign Content</h3>
            <div className="flex gap-2 items-center">
                <img src={antCamp} alt="" className="size-7"/>
                <p className="w-34 whitespace-nowrap overflow-hidden text-ellipsis text-xxs font-medium text-center">{campaignName}</p>
                <button className="w-22 py-1.5 bg-[#33333380] text-white text-[8px] font-medium rounded-md cursor-pointer">Upload Content</button>
            </div>
            <p className="text-xxs font-medium">Get accepted to upload content - join<br />the waitlist now</p>

        </div>
    )
}

export default ManCampContCard;