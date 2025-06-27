import Brandon from '@assets/Brandon.png'
import Cooper from '@assets/Cooper.png'
import Talan from '@assets/Talan.png'

const TestimonialsList = () => {

    const testimonials = [
        {
            name: "Brandon Arcand",
            role: "Tech Influencer",
            avatar: Brandon,
            testimony: '“Joining campaigns is seamless, and the brand collaborations feel authentic.”',
        },
        {
            name: "Talan Rhiel Madson",
            role: "Travel Vlogger",
            avatar: Talan,
            testimony: '“Joining campaigns is seamless, and the brand collaborations feel authentic.”',
        },
        {
            name: "Talan Vaccaro",
            role: "Fitness Coach",
            avatar: Cooper,
            testimony: '“Joining campaigns is seamless, and the brand collaborations feel authentic.”',
        },
        {
            name: "Brandon Arcand",
            role: "Tech Influencer",
            avatar: Brandon,
            testimony: '“Joining campaigns is seamless, and the brand collaborations feel authentic.”',
        },
        {
            name: "Talan Rhiel Madson",
            role: "Travel Vlogger",
            avatar: Talan,
            testimony: '“Joining campaigns is seamless, and the brand collaborations feel authentic.”',
        },
        {
            name: "Talan Vaccaro",
            role: "Fitness Coach",
            avatar: Cooper,
            testimony: '“Joining campaigns is seamless, and the brand collaborations feel authentic.”',
        },
    ]
    
    return (
        <ul className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {
                testimonials.map((curTestimony, index) => {

                    const {name, role, avatar, testimony} = curTestimony;

                    return (
                        <li key={index} className='mx-auto p-3 w-54 bg-[#FFFFFF0D] space-y-4 rounded-lg'>

                            <div className='flex items-center gap-1'>
                                <img src={avatar} alt="" className='size-9' />
                                <div>
                                    <p className='text-xs font-medium text-[#FFFFFF]'>{name}</p>
                                    <p className='text-xxs font-base text-[#FFFFFF80] italic'>{role}</p>
                                </div>
                            </div>

                            <p className='text-xxs font-base text-[#FFFFFF80]'>{testimony}</p>

                        </li>
                    )
                })
            }
        </ul>
    )
}

export default TestimonialsList