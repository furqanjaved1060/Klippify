import useAuthUser from "@store/authUser";
import brandLogo from '@assets/brandLogo.jpg'

const BrandDashboardCard = () => {

    const fullName = useAuthUser(state => state.authUser.userData.fullName)!;

    const capitalizeFullName = (fullName:string) => {
        let capitalizedFullName: string[] | string = fullName.split(" ").map((curName) => curName.charAt(0).toUpperCase() + curName.slice(1));
        capitalizedFullName = capitalizedFullName.join(" ");
        return capitalizedFullName;
    }

    return (
        <div className="w-68 md:w-80 p-2 mx-auto flex items-center gap-2 border-1 border-[#B5B4B480] rounded-lg">
            <img src={brandLogo} alt="" className='size-12 border-1 border-[#B5B4B480] rounded-[50%]' />
            <div>
                <p className="text-xs font-medium">{capitalizeFullName(fullName)}</p>
                <p className="text-xxs font-normal text-[#33333380] tracking-tight">Sustainable fashion for everyday living — reimagining basics with purpose and style.</p>
            </div>
        </div>
    )
}

export default BrandDashboardCard;