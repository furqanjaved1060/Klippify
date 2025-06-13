import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const ThirdPartyAuth = () => {

    return (
        <div role='group' className='flex flex-col gap-2'>

            <div className='my-2.5 flex items-center'>
                <div className='w-full h-[0.65px] bg-[#33333380]'></div>
                <span className='mx-2.5 whitespace-nowrap text-center text-xxs text-[#33333380]'>or sign up with</span>
                <div className='w-full h-[0.65px] bg-[#33333380]'></div>
            </div>

            <button 
            type='button'
            className='h-8.5 font-medium text-xxs border-1 border-[#D6D6D6] rounded-lg flex items-center justify-center gap-2 cursor-pointer'>
                <FcGoogle className='size-4'/>Sign up with Google
            </button>

            <button 
            type='button' 
            className='h-8.5 font-medium text-xxs border-1 border-[#D6D6D6] rounded-lg flex items-center justify-center gap-2 cursor-pointer'>
                <FaFacebook className='size-4 text-blue-600'/>Sign up with Facebook
            </button>

        </div>
    )
}

export default ThirdPartyAuth;