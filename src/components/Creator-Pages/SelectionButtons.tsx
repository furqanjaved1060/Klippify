// import useCampaignFilter from "@store/campaignFilter";
// import { useEffect, useState } from "react";



type SelectionButtonsProps = {
    buttons: string[];
    activeBtn: string;
    setActiveBtn: React.Dispatch<React.SetStateAction<string>>;
}
  
const SelectionButtons: React.FC<SelectionButtonsProps> = ({buttons, activeBtn, setActiveBtn}) => {

    return (
        <div className='space-x-4 flex border-b-1 border-[#e1dfdf80]'>
            {buttons.map((curButton, index) => 
            <button
            type="button"
            key={index} 
            className={`pb-1 font-medium text-xxs transition duration-250 cursor-pointer leading-none ${activeBtn.toLowerCase()===curButton.toLowerCase() ? 'text-[#007EFF] border-b-1 border-[#007EFF]' : 'text-[#33333380]'}`} 
            onClick={() => setActiveBtn(curButton.toLowerCase())}>
                {curButton.charAt(0).toUpperCase() + curButton.slice(1)}
            </button>)
            }
        </div>
    )
}

export default SelectionButtons;    