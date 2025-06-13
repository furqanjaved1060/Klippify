import ProfileHeader from '@components/Profile-Page/ProfileHeader'
import ProfileSideBar from '@components/Profile-Page/ProfileSideBar';
import { Outlet } from 'react-router-dom';


const ProfilePage = () => {

  return (
    <>

    <div className="max-w-[1440px] min-h-screen font-inter text-[#000C21]">

      <ProfileSideBar/>

      <div className='lg:ml-42 bg-white font-inter text-[#000C21]'>

        <ProfileHeader/>

        <main className='p-3 space-y-3 bg-gray-200'>
          <Outlet/>
        </main>

      </div>

    </div>

    </>
  )
}

export default ProfilePage;