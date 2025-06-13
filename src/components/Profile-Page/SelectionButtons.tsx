import useCampaignFilter from "@store/campaignFilter";
import { useEffect, useState } from "react";



type SelectionButtonsProps = {
    buttons: string[];
}
  
const SelectionButtons: React.FC<SelectionButtonsProps> = ({buttons}) => {

    const setCampaignFilter = useCampaignFilter(state => state.setCampaignFilter);

    const [activeBtn, setActiveButton] = useState(buttons[0]);

    useEffect(() => {

        if (activeBtn==='active' || activeBtn==='waitlist' || activeBtn==='past' || activeBtn==='new') {
          setCampaignFilter(activeBtn);
        }

    }, [activeBtn, setCampaignFilter]);

    return (
        <div className='space-x-4 flex border-b-1 border-[#e1dfdf80]'>
            {buttons.map((curButton) => 
            <button 
            className={`pb-1 font-medium text-xxs transition duration-250 cursor-pointer leading-none ${activeBtn===curButton ? 'text-[#007EFF] border-b-1 border-[#007EFF]' : 'text-[#33333380]'}`} 
            onClick={() => setActiveButton(curButton)}>
                {curButton.charAt(0).toUpperCase() + curButton.slice(1)}
            </button>)
            }
        </div>
    )
}

export default SelectionButtons;