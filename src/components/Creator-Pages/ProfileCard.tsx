import avatar from '@assets/profile.png'
import star from '@assets/star.png'
import edit from '@assets/edit.png'
import tiktok from '@assets/tiktok.png'
import facebook from '@assets/facebook.png'
import x from '@assets/x.png'
import snapchat from '@assets/snapchat.png'
import { Link, useParams } from 'react-router-dom'
import useAuthUser from '@store/authUser'


type Props = {
    buttons: boolean;
}
const ProfileCard: React.FC<Props> = ({buttons}) => {

    const {username} = useParams();

    const userData = useAuthUser(state => state.authUser.userData);

    let name:string[]|string = userData.fullName?.split(" ").map((curName) => curName.charAt(0).toUpperCase() + curName.slice(1));
    name = name?.join(" ");
       
    return (
    <div className="bg-[rgba(0,126,255,0.05)] p-3 space-y-3 rounded-t-lg">

        <div className="flex justify-end">
            {buttons && <button className="w-25 h-6 text-[#007EFF] border-1 rounded-md border-[#007EFF] cursor-pointer">Stripe Connect</button>}
        </div>

        <div className='flex flex-col md:flex-row items-center justify-between gap-5 md:gap-10'>

            <div className='xxs:min-w-85 flex flex-col xxs:flex-row items-center justify-between gap-5'>
                
                <div className='flex items-center gap-3'>

                    <div className='relative size-17'>
                        <img src={avatar} alt="" className='w-full' />
                        {buttons && <Link to='edit' className='cursor-pointer'><img src={edit} alt="" className='absolute size-5 bottom-0 right-0' /></Link>}
                    </div>
                    
                    <div className='space-y-1'>

                        <div className='flex items-center gap-1'><span className='text-sm'>{name}</span><img src={star} alt="" /></div>

                        <div className='space-x-2'>
                            {buttons && <button className='p-1 px-2 bg-[#3333331A] rounded-md cursor-pointer'>Verify Now</button>}
                            {buttons && <Link to={`/${username}/public`} className='p-1 px-2 text-white bg-gradient-to-r from-[#333EFF] to-[#5BCAFF] rounded-md cursor-pointer'>Public View</Link>}
                        </div>

                    </div>
                    
                </div>

                <div>
                    <p className='text-xl font-semibold leading-none'>531.2k</p>
                    <p className='text-[#33333380]'>Connections</p>
                </div>

            </div>

            <div className=''>
                <ul className='grid xxs:grid-cols-2 gap-4'>

                    <li className='flex items-center gap-5 justify-between'>
                        <div className='flex items-center gap-2'>
                            <img src={tiktok} alt="" className='size-7'/>
                            <span className='text-[#33333380] max-w-24 overflow-hidden text-ellipsis'>12345678912345678912345678932dsasaddddddddddddddddddddddd3</span>
                        </div>
                        <p className='font-semibold'>352.9k</p>
                    </li>

                    <li className='flex items-center gap-5 justify-between'>
                        <div className='flex items-center gap-2'>
                            <img src={facebook} alt="" className='size-7'/>
                            <span className='text-[#33333380] max-w-24 overflow-hidden text-ellipsis'>@creatafdsafdasfn,dsa</span>
                        </div>
                        <p className='font-semibold'>352.9k</p>
                    </li>

                    <li className='flex items-center gap-5 justify-between'>
                        <div className='flex items-center gap-2'>
                            <img src={snapchat} alt="" className='size-7'/>
                            <span className='text-[#33333380] max-w-24 overflow-hidden text-ellipsis'>@creator123</span>
                        </div>
                        <p className='font-semibold'>352.9k</p>
                    </li>

                    <li className='flex items-center gap-5 justify-between'>
                        <div className='flex items-center gap-2'>
                            <img src={x} alt="" className='size-7'/>
                            <span className='text-[#33333380] max-w-24 overflow-hidden text-ellipsis'>@creator123</span>
                        </div>
                        <p className='font-semibold'>352.9k</p>
                    </li>
                </ul>
            </div>

        </div>

    </div>
    )
}

export default ProfileCard