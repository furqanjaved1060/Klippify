import LPHeader from "@components/Landing-Page/LPHeader";
import HeroSection from "@components/Landing-Page/HeroSection";
import LPMain from "@components/Landing-Page/LPMain";
import LPFooter from "@components/Landing-Page/LPFooter";


const LandingPage = () => {

    return (

        <div className=" pb-15 font-inter text-white bg-[#000C21]">

            <div className="bg-white rounded-b-2xl overflow-hidden">

                <div className="max-w-110 px-4 md:px-0 lg:h-screen md:max-w-220 mx-auto flex flex-col gap-8">

                    <LPHeader/>

                    <HeroSection/>

                </div>

            </div>

            <div className="max-w-110 px-4 md:px-0 md:max-w-170 mx-auto">

               <LPMain/>

               <LPFooter/>

            </div>

        </div>

    )
}

export default LandingPage;