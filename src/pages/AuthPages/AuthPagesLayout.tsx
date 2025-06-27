import AuthHeader from '@components/Auth-Pages/AuthHeader'
import AuthSideBar from '@components/Auth-Pages/AuthSideBar'
import AuthMain from '@components/Auth-Pages/AuthMain'

const AuthPagesLayout = () => {

  return (
    <>
    <div className='bg-[#000C21]'>

      <div className="min-h-screen p-2 flex gap-[.625rem]">

        <AuthSideBar />

        <div className='p-4 bg-white font-inter text-[#000C21] flex-grow rounded-2xl flex flex-col gap-6 lg:gap-0'>

          <AuthHeader/>

          <AuthMain/>

        </div>

      </div>

    </div>
    </>
  )
}

export default AuthPagesLayout;