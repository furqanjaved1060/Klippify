import { useState } from "react";



type CampaignFilterProps = {
  title: string;
  options: string[];
}

const CampaignFilter: React.FC<CampaignFilterProps> = ({title, options}) => {

    const [openedFilter, setOpenedFilter] = useState<boolean>(false);
    const [selectedOpt, setSelectedOpt] = useState<string|null>(null);

    return (
        <div className="relative">

            <button className="w-22.5 py-1 px-2 text-xxs font-semibold border-1 border-[#3333331A] rounded-md mb-1 flex items-center justify-between cursor-pointer" 
            onClick={()=>setOpenedFilter(!openedFilter)}>
             <span className="whitespace-nowrap overflow-hidden text-ellipsis">{selectedOpt ? selectedOpt : title}</span>
              <DownArrowIcon/>
            </button>

            {openedFilter &&
            <div className="w-22.5 text-xxs font-medium rounded-md absolute z-1000 bg-white" style={{boxShadow:'0px 2px 15px 0px rgba(0, 0, 0, 0.1)'}}>
              {options.map((curOption, index, array) => {
                return (
                  <p
                  key={index}
                  onClick={() => {setOpenedFilter(false); setSelectedOpt(curOption)}}
                  className={`py-2 px-1.5 transition-colors border-b-1 border-[#E8E8E8] cursor-pointer hover:bg-[#E8E8E8] ${index===0 && 'rounded-t-md'} ${index===array.length-1 && 'rounded-b-md border-none'}`}>
                    {curOption}
                  </p>
                )
              })}
            </div>  
            }

        </div>
    )
}

export default CampaignFilter;

const DownArrowIcon = () => {

  return (
      <svg width="10" height="6" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.4198 0.951987L13.4798 2.01299L7.70277 7.79199C7.6102 7.88514 7.50012 7.95907 7.37887 8.00952C7.25762 8.05997 7.12759 8.08594 6.99627 8.08594C6.86494 8.08594 6.73491 8.05997 6.61366 8.00952C6.49241 7.95907 6.38233 7.88514 6.28977 7.79199L0.509766 2.01299L1.56977 0.952987L6.99477 6.37699L12.4198 0.951987Z" fill="#333333" fillOpacity="0.5"/>
      </svg>
  )

}