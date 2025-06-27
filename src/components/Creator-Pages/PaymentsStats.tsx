
const PaymentsStats = ({}) => {
    return (
        <li className='flex justify-between'>

            <div className='flex gap-2.5'>
            
                <div className='bg-gray-200 size-11 rounded-lg'></div>
                <div className='flex flex-col justify-between'>
                    <p className='text-xxs font-semibold'>Lavender Lemonade</p>
                    <p className='text-xxs text-[#007EFF]'>CLIPPER</p>
                    <p className='text-[8px] text-[#33333380] space-x-4'><span>12.5k views</span><span>310 Clicks</span></p>
                </div>

            </div>

            <div className='flex items-center'>
                <p className='text-xs font-semibold'>$12.56</p>
            </div>

        </li>
    )
}

export default PaymentsStats;