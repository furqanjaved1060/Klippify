import flavicon from '@assets/flavicon.svg'

const AuthSideBar = () => {

  return (

    <aside className='relative overflow-hidden w-90 xl:w-107 px-7 py-7 font-roboto bg-[#000C21] text-[#F2F9FF] text-center rounded-2xl hidden lg:flex flex-col justify-end'>
       
       <div className="absolute size-75 bg-[#0080ff85] left-60 bottom-110 blur-[200px] rounded-[50%]"></div>
       
        <div className='flex flex-col items-center gap-4'>
            <div className='size-12 bg-gradient-to-b from-[#1A1E1F] to-[#2B353E] rounded-xl flex items-center justify-center'><img src={flavicon} alt="" className='size-9'/></div>
            <h2 className='text-lg xl:text-xl font-semibold leading-7 bg-gradient-to-r from-[#333EFF] to-[#5BCAFF] bg-clip-text text-transparent'>Transform Your Product Strategy With Data-Driven Decisions And Streamlined Analysis</h2>
            <p className='mx-13 text-xxs'>Transform Your Product Strategy With Data-Driven Decisions And Streamlined Analysis</p>
        </div>
    </aside>

  )
}

export default AuthSideBar;