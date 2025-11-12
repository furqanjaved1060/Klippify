

type Props = {
    curCreatorRating: {
        avatar: string;
        creatorName: string;
        creatorPosition: string;
        campaignName: string;
        campaignLogo: string;
        campaignRating: string;
    }
}

const BrPrPgCreatorRatingsListItem: React.FC<Props> =({curCreatorRating}) => {

    const {avatar, creatorName, creatorPosition, campaignName, campaignLogo, campaignRating} = curCreatorRating;

    return (

        <li className="w-full xs:w-60 p-3 border-1 border-[#D9D9D9] bg-[#007EFF0D] rounded-lg space-y-2">

            <div className="flex items-center gap-2">
                <img src={avatar} alt="" className="size-8.5"/>
                <div className="space-y-1">
                    <h3 className="text-xxs font-medium">{creatorName}</h3>
                    <p className="text-[9px] font-normal text-[#33333380]">{creatorPosition}</p>
                </div>
            </div>

            <div className="flex justify-between">

                <div className="space-y-1.5">
                    <h4 className="text-xxs font-normal">Campaign:</h4>

                    <div className="flex items-center gap-2">
                        <img src={campaignLogo} alt="" className="size-6"/>
                        <p className="text-xxs font-medium">{campaignName}</p>
                    </div>
                </div>

                <div className="space-y-2.5">
                    <h4 className="text-xxs font-normal">Rating:</h4>

                    <div className="flex items-center gap-1">
                        <Star/>
                        <span className="text-xs font-medium">{campaignRating}</span>
                    </div>
                </div>

            </div>

        </li>
    
    )
}

export default BrPrPgCreatorRatingsListItem;

const Star = () => {
    return(
        <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.6 8.2334C17.5651 8.12268 17.4997 8.02405 17.4113 7.94887C17.3228 7.87368 17.2149 7.825 17.1 7.8084L12.5834 7.15007L10.5584 3.0584C10.5007 2.96171 10.419 2.88164 10.3211 2.82604C10.2232 2.77044 10.1126 2.74121 10 2.74121C9.88747 2.74121 9.77683 2.77044 9.67896 2.82604C9.58109 2.88164 9.49933 2.96171 9.4417 3.0584L7.4167 7.15007L2.90003 7.8084C2.78514 7.825 2.67726 7.87368 2.58881 7.94887C2.50035 8.02405 2.43492 8.12268 2.40003 8.2334C2.36278 8.34371 2.35709 8.46223 2.3836 8.57561C2.4101 8.68898 2.46774 8.7927 2.55003 8.87507L5.83336 12.0584L5.05836 16.5584C5.03872 16.6743 5.0517 16.7933 5.09585 16.9022C5.14 17.0111 5.21358 17.1056 5.30836 17.1751C5.4033 17.2427 5.51525 17.2825 5.63159 17.2898C5.74792 17.2972 5.864 17.2719 5.9667 17.2167L10 15.0917L14.0417 17.2167C14.1311 17.2658 14.2314 17.2916 14.3334 17.2917C14.4644 17.2897 14.5919 17.2491 14.7 17.1751C14.7948 17.1056 14.8684 17.0111 14.9125 16.9022C14.9567 16.7933 14.9697 16.6743 14.95 16.5584L14.1667 12.0584L17.4417 8.87507C17.5254 8.79359 17.5846 8.69029 17.6126 8.57687C17.6406 8.46346 17.6362 8.34446 17.6 8.2334Z" fill="#007EFF"/>
        </svg>

    )
}