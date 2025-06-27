import { Link, useLocation } from 'react-router-dom'
import flavicon from '@assets/flavicon.svg'

const AuthHeader = () => {

    const location = useLocation();

    return (
    <header>
        <nav className='flex flex-row items-center gap-8 justify-between'>
            <Link to='/' className='text-sm font-medium flex items-center gap-1'><img src={flavicon} alt="" className='size-4' />Klippify</Link>

            {location.pathname === '/signin' &&
            <div>
                <span className='text-xxs text-[#33333380]'>Don't have an account?</span>
                <Link to='/signup' className='ml-2 text-xxs text-[#007EFF] font-semibold underline'>Sign Up</Link>
            </div>
            }
            
            {location.pathname === '/signup' &&
            <div>
                <span className='text-xxs text-[#33333380]'>Already have an account?</span>
                <Link to='/signin' className='ml-2 text-xxs text-[#007EFF] font-semibold underline'>Sign In</Link>
            </div>
            }
        </nav>
    </header>
    )
}

export default AuthHeader;