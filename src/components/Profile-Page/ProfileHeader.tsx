import useAuthUser from '@store/authUser';
import useBurgerMenu from '@store/burgerMenu';
import { RxHamburgerMenu } from 'react-icons/rx';

const ProfileHeader = () => {

    const fullName = useAuthUser(state=>state.authUser.userData.fullName);
    const firstName:string = fullName?.split(' ')[0] || '';
    const setBurgerMenu = useBurgerMenu(state => state.setBurgerMenu);

    return (
    <header className='px-4 py-2 flex items-center justify-between'>
        <RxHamburgerMenu className='lg:hidden' onClick={setBurgerMenu}/>
        <p className='text-sm font-semibold'>Welcome {firstName?.charAt(0).toUpperCase() + firstName?.slice(1)}!</p>
    </header>
    )
}

export default ProfileHeader;