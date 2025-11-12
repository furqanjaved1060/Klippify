import Table from "@components/Brand-Pages/Table";
import useSavedCards from "@store/savedCards";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";


const SavedCards = () => {

    const {username} = useParams();
    const {savedCards, delCard} = useSavedCards();
    const [toggle, setToggle] = useState({
        toggle: true,
        index: 0
    }); 

    return (

        <section className='p-3 space-y-3 bg-white rounded-lg flex-grow'>

            <div className='flex items-center justify-between'>
                <h2 className='text-lg font-semibold leading-none'>Saved Cards</h2>
                <Link to={`/${username}/payments/details`} className='py-2.5 px-5 font-roboto text-xxs font-medium text-white bg-gradient-to-r from-[#333EFF] to-[#5BCAFF] rounded-lg flex items-center gap-2'><PlusIcon/>Add a Card</Link>
            </div>

            <div className="w-full overflow-x-scroll">

                <Table
                scroll={true}
                headings={['Card Type', 'Card Number', 'Expiration Date', 'Card Holder Name', 'Set Default', 'Action']}
                rows={
                    savedCards.map((curCard, curIndex) => {
                        const {type, number, expiry, holderName} = curCard;
                                    
                        return (
                            <>
                            <td className="px-3">{type.charAt(0).toUpperCase() + type.slice(1)}</td>
                            <td className="px-3">{number}</td>
                            <td className="px-3 text-center">{expiry}</td>
                            <td className="px-3 text-center">{holderName}</td>
                            <td className="px-3">
                                <div className="">
                                    <input
                                        type="checkbox"
                                        id="setDefaultCard"
                                        className="hidden"
                                        defaultChecked={curIndex===0}
                                        onChange={(e) => console.log(e.target.checked)}
                                    />
                                    <label htmlFor="setDefaultCard" onClick={() => setToggle({toggle: !toggle.toggle, index: curIndex})} className={`h-4 w-8 mx-auto rounded-full cursor-pointer flex items-center ${toggle.toggle && curIndex===toggle.index ? 'bg-[#007EFF]' : 'bg-[#D1D1D6]'}`}>
                                        <span className={`h-3 w-3 bg-white rounded-full mx-[2.5px] transition duration-300 ${toggle.toggle && curIndex===toggle.index && 'translate-x-[16px]'}`}></span>
                                    </label>
                                </div>
                            </td>
                            <td className="px-3 text-center"><button className="cursor-pointer" onClick={() => delCard(curCard)}><BinIcon/></button></td>
                            </>
                        )
                    })
                } />

            </div>

        </section>

    )
}

export default SavedCards;

const PlusIcon = () => {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 12.998H13V17.998C13 18.2633 12.8946 18.5176 12.7071 18.7052C12.5196 18.8927 12.2652 18.998 12 18.998C11.7348 18.998 11.4804 18.8927 11.2929 18.7052C11.1054 18.5176 11 18.2633 11 17.998V12.998H6C5.73478 12.998 5.48043 12.8927 5.29289 12.7052C5.10536 12.5176 5 12.2633 5 11.998C5 11.7328 5.10536 11.4785 5.29289 11.2909C5.48043 11.1034 5.73478 10.998 6 10.998H11V5.99805C11 5.73283 11.1054 5.47848 11.2929 5.29094C11.4804 5.1034 11.7348 4.99805 12 4.99805C12.2652 4.99805 12.5196 5.1034 12.7071 5.29094C12.8946 5.47848 13 5.73283 13 5.99805V10.998H18C18.2652 10.998 18.5196 11.1034 18.7071 11.2909C18.8946 11.4785 19 11.7328 19 11.998C19 12.2633 18.8946 12.5176 18.7071 12.7052C18.5196 12.8927 18.2652 12.998 18 12.998Z" fill="white"/>
        </svg>
    )
}

const BinIcon = () => {
    return (
        <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.6673 6.25V15.4167H3.33398V6.25H10.6673ZM9.29232 0.75H4.70898L3.79232 1.66667H0.583984V3.5H13.4173V1.66667H10.209L9.29232 0.75ZM12.5007 4.41667H1.50065V15.4167C1.50065 16.425 2.32565 17.25 3.33398 17.25H10.6673C11.6757 17.25 12.5007 16.425 12.5007 15.4167V4.41667Z" fill="#DA3E33"/>
        </svg>
    )
}



