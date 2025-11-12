import BrandProfileCreatorRatingsSection from "@components/Brand-Pages/BrandProfileCreatorRatingsSection";
import BrandProfilePastCampaignsSection from "@components/Brand-Pages/BrandProfilePastCampaignsSection";
import useAuthUser from "@store/authUser";
import brandLogo from '@assets/brandLogo.jpg'
import { Link } from "react-router-dom";
import edit from "@assets/edit.png"



const BrandProfilePage = () => {

    const fullName = useAuthUser(state => state.authUser.userData.fullName)!;
    
    const capitalizeFullName = (fullName:string) => {
        let capitalizedFullName: string[] | string = fullName.split(" ").map((curName) => curName.charAt(0).toUpperCase() + curName.slice(1));
        capitalizedFullName = capitalizedFullName.join(" ");
        return capitalizedFullName;
    }

  return (

    <div className="bg-white leading-none rounded-lg">

        <div className="p-3 bg-[#007EFF0D] flex flex-col xs:flex-row gap-2 items-center justify-between rounded-t-lg">

            <div className="flex items-center gap-3">
                <div className="size-17 relative">
                    <img src={brandLogo} alt="" className='w-full border-1 border-[#B5B4B480] rounded-[50%]'/>
                    <Link to='edit' className='cursor-pointer'><img src={edit} alt="" className='absolute size-5 bottom-0 right-0' /></Link>
                </div>
            
                <div className="space-y-1 w-48 xxs:w-60">
                    <p className="text-sm font-medium">{capitalizeFullName(fullName)}</p>
                    <p className="text-xxs font-normal text-[#33333380] tracking-tight leading-3.5">Sustainable fashion for everyday living — reimagining basics with purpose and style.</p>
                </div>
            </div>

            <div>
                <p className="text-xl font-semibold">$250,000</p>
                <p className="text-xxs font-medium text-[#33333380] tracking-tight">Spending Overview</p>
            </div>

        </div>


    
        <div className='p-3 space-y-3 rounded-b-lg'>

            <BrandProfilePastCampaignsSection/>

            <BrandProfileCreatorRatingsSection/>

        </div>

    </div>
  )
}

export default BrandProfilePage;