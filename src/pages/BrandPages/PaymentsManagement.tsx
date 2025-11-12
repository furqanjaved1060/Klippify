import { Link } from "react-router-dom";


const PaymentsManagement = () => {
    return (

        <section className='p-3 space-y-3 bg-white rounded-lg flex-grow flex flex-col gap-10 xs:gap-0'>

            <h2 className='text-lg font-semibold leading-none'>Payment Management</h2>

            <div className="flex-grow flex flex-col items-center xs:justify-center gap-2">
                <p className="text-xxs font-medium text-[#33333380]">There are no cards here yet</p>
                <Link
                to='details'
                className="h-8.5 px-5 text-xxs font-medium text-white bg-gradient-to-r from-[#333EFF] to-[#5BCAFF] rounded-md leading-none before:content-['+'] flex items-center gap-2 cursor-pointer">
                    Add a card
                </Link>
            </div>

        </section>

    )
}

export default PaymentsManagement;