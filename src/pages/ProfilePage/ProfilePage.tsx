import ProfileHeader from '@components/Creator-Pages/ProfileHeader'
import ProfileSideBar from '@components/Creator-Pages/ProfileSideBar';
import { Outlet } from 'react-router-dom';


const ProfilePage = () => {

  return (
    <>

    <div className="min-h-screen font-inter text-[#000C21]">

      <ProfileSideBar/>

      <div className='lg:ml-42 bg-white font-inter text-[#000C21] flex flex-col min-h-screen'>

        <ProfileHeader/>

        <main className='p-3 space-y-3 bg-gray-200 flex-grow flex flex-col'>
          <Outlet/>
        </main>

      </div>

    </div>

    </>
  )
}

export default ProfilePage;