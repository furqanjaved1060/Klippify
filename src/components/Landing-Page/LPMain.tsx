import { Link } from "react-router-dom"
import FeaturesList from "./FeaturesList"
import TestimonialsList from "./TestimonialsList"
import facebook from '@assets/facebook.png'
import insta from '@assets/insta.png'
import x from '@assets/x.png'
import snapchat from '@assets/snapchat.png'
import tiktok from '@assets/tiktok.png'

const LPMain = () => {
    return (
        <main>

            <nav className="w-full mt-5 grid grid-cols-[repeat(2,minmax(0,max-content))] xxs:grid-cols-[repeat(3,minmax(0,max-content))] md:grid-cols-[repeat(5,minmax(0,max-content))] justify-center gap-8 overflow-x-hidden">
                <Link to='' className="text-base font-semibold flex gap-1 items-center"><img src={facebook} alt="" className="size-7" />Facebook</Link>
                <Link to='' className="text-base font-semibold flex gap-1 items-center"><img src={snapchat} alt="" className="size-7" />Snapchat</Link>
                <Link to='' className="text-base font-semibold flex gap-1 items-center"><img src={x} alt="" className="size-7" />Twitter</Link>
                <Link to='' className="text-base font-semibold flex gap-1 items-center"><img src={insta} alt="" className="size-7" />Instagram</Link>
                <Link to='' className="text-base font-semibold flex gap-1 items-center"><img src={tiktok} alt="" className="size-7" />Tiktok</Link>
            </nav>

            <section className="my-15 space-y-8">

                <div className="text-center space-y-1">
                    <h2 className="text-2xl font-semibold">Features Overview</h2>
                    <p className="text-xs font-normal text-[#FFFFFF80]">Everything You Need to Create, Collaborate, and Convert — All in One Platform.</p>
                </div>

                <FeaturesList/>

            </section>

            <section className="my-15 space-y-8">

                <div className="text-center space-y-1">
                    <h2 className="text-2xl font-semibold">What our customers say!</h2>
                    <p className="text-xs font-normal text-[#FFFFFF80]">Don't believe us? Hear from our customers about us!</p>
                </div>

                <TestimonialsList/>

            </section>

        </main>
    )
}

export default LPMain;