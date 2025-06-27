import { useState } from "react";
import SelectionButtons from "./SelectionButtons";
import PaymentsStats from "./PaymentsStats";


const CDPayments = () => {

    const [activeBtn, setActiveBtn] = useState("monthly");

    return (
        <div className='p-3 space-y-3 bg-white rounded-lg w-full sm:w-[24.75%] min-w-60'>

            <h2 className='text-lg font-semibold leading-none'>Payments</h2>

            <SelectionButtons 
            buttons={["monthly", "weekly", "today"]}
            activeBtn={activeBtn}
            setActiveBtn={setActiveBtn}/>

            <div className='h-[140px] overflow-y-hidden'>

            <ul className='space-y-3'>

                <PaymentsStats/>
                <PaymentsStats/>
                <PaymentsStats/>
                <PaymentsStats/>

            </ul>

            </div>

            <div className='flex justify-center'>
            <button className='p-1.25 text-[9px] font-semibold text-[#007EFF] bg-[#007EFF1A] rounded-lg cursor-pointer'>View All</button>
            </div>

        </div>
    )
}

export default CDPayments