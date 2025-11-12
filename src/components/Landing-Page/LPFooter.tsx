import { Link } from "react-router-dom";
import FAQList from "./FAQList";
import rightPointingArrow from '@assets/rightPointingArrow.png'


const LPFooter = () => {
    return (
        <footer className="px-4 py-9 bg-white rounded-2xl">
                        
            <section className="space-y-5 md:flex gap-4">

                <div className="text-center md:text-start md:w-[50%]">
                    <h2 className="mb-3 text-[28.5px] font-semibold text-[#000C21] leading-9">Frequently<br />Asked Questions</h2>
                    <p className="mb-5 text-[11px] font-normal text-[#33333380]">Get answers to commonly asked questions real quick or if you have any questions then don't hesitate to contact us.</p>
                    <Link to='' className="mx-auto md:mx-0 h-9 w-27 text-xxs font-medium bg-gradient-to-r from-[#333EFF] to-[#5BCAFF] flex items-center justify-center gap-1 rounded-lg">Contact Us<img src={rightPointingArrow} alt="" className="size-4" /></Link>
                </div>

                <FAQList/>
                
            </section>

        </footer>
    )
}

export default LPFooter;