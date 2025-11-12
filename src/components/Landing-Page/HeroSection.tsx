import { Link } from "react-router-dom"
import LPImage from '@assets/LPImage.png'
import rightPointingArrow from '@assets/rightPointingArrow.png'

const HeroSection = () => {
    return (
        <section className="flex-grow flex flex-col lg:justify-between gap-5 lg:gap-2.5">

            <div className="w-72 md:w-110 mx-auto text-center space-y-2">
                <h1 className="text-[28px] font-semibold text-[#000C21] leading-9">Where creators and brands thrive on performance.</h1>
                <p className="text-xs font-base text-[#33333380] leading-5">Join a performance-driven platform where creators earn based on real engagement—clicks, views, and conversions—not just follower counts. Brands scale smarter, and creators get paid fairly.</p>
            </div>

            <Link to='signup' className="h-9 w-27 mx-auto text-xxs font-medium bg-gradient-to-r from-[#333EFF] to-[#5BCAFF] flex items-center justify-center gap-1 rounded-lg">Get Started<img src={rightPointingArrow} alt="" className="size-4" /></Link>

            <div className="relative overflow-hidden">
                <img src={LPImage} alt="" className="w-170 mx-auto relative z-20"/>
                <div className="size-70 bg-black absolute bottom-[-150px] left-[-100px] rounded-full bg-gradient-to-r from-[#333EFF] to-[#5BCAFF] blur-[100px] z-10"></div>
                <div className="size-70 bg-black absolute bottom-[-150px] right-[-100px] rounded-full bg-gradient-to-r from-pink-500 to-pink-200 blur-[100px] z-10"></div>
            </div>
            

        </section>
    )
}

export default HeroSection; 
