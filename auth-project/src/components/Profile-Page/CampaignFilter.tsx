import { useState } from "react";

type FilterOpen = {
    sort: boolean;
    category: boolean;
    language: boolean;
}

type CampaignFilterProps = {
    value: 'sort'|'category'|'language';
    title: string;
    options: string[];
}

const CampaignFilter: React.FC<CampaignFilterProps> = ({value, title, options}) => {

    const [filterOpen, setFilterOpen] = useState<FilterOpen>({
        sort: false,
        category: false,
        language: false,
      });
    
      const handleFilterOpen = (e: React.MouseEvent<HTMLButtonElement>):void => {
        const value  = e.currentTarget.value;
        setFilterOpen(prev => ({
          ...prev,
          [value]: !prev[value as keyof FilterOpen],
        }))
      }

    return (
        <div className="relative">

            <button className="w-22.5 py-1 px-2 text-xxs font-semibold border-1 border-[#3333331A] rounded-md mb-1 after:content-['▼'] flex justify-between cursor-pointer" 
            value={value}
            onClick={handleFilterOpen}>
            {title}
            </button>

            {filterOpen[value as keyof FilterOpen] &&
            <div className="w-22.5 px-1.5 text-xxs font-medium rounded-md absolute z-1000 bg-white" style={{boxShadow:'0px 2px 15px 0px rgba(0, 0, 0, 0.1)'}}>
            <p className="py-2 border-b-1 border-[#E8E8E8]">{options[0]}</p>
            <p className="py-2 border-b-1 border-[#E8E8E8]">{options[1]}</p>
            <p className="py-2 border-b-1 border-[#E8E8E8]">{options[2]}</p>
            <p className="py-2">{options[3]}</p>
            </div>  
            }

        </div>
    )
}

export default CampaignFilter