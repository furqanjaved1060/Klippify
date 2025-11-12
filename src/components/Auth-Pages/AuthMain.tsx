import { Outlet } from 'react-router-dom'

const AuthMain = () => {

  return (
    <main className='w-65 xxs:w-75 sm:w-85 mx-auto lg:flex-grow flex flex-col justify-center'>
        <div>
            <Outlet/>
        </div>
    </main>
  )
}

export default AuthMain;