import { useState } from "react";



type FormSelectFieldProps = {
    label: string;
    name: string;
    title: string;
    onClick: (name:string, value:string) => void;
    options: string[];
    logos?: string[];
    error?: string;
}

const FormSelectField: React.FC<FormSelectFieldProps> = ({label, name, title, onClick, options, error, logos}) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedOpt, setSelectedOpt] = useState<string|null>(null);
    

    return (

        <div className={`flex flex-col gap-1 relative`}>
            
            <label htmlFor={name} className='text-xs'>{label}</label>

            <div id={name} className="">

                <button type="button" 
                onClick={() => setIsOpen(!isOpen)} 
                className={`h-8.5 w-full px-2.5 text-xxs bg-[#F4F4F4] rounded-lg cursor-pointer flex items-center justify-between ${selectedOpt ? 'text-[#000C21]' : 'text-[#33333380]'}`}>
        
                    {selectedOpt ? selectedOpt : title}
                    <DownArrowIcon/>
                    
                </button>

                {isOpen &&

                    <ul className={`px-2.5 rounded-xl shadow-sm absolute bg-white w-full z-600`}>

                        {options.map((curOption, curIndex, optionsArray) => {

                            return (

                                <li
                                key={curIndex}
                                onClick={() => {onClick(name, curOption.toLowerCase()); setIsOpen(false); setSelectedOpt(curOption.charAt(0).toUpperCase() + curOption.slice(1))}} 
                                className={`py-1.5 text-xxs text-[#000C21] cursor-pointer hover:underline flex items-center gap-2 ${curIndex!==optionsArray.length-1 && 'border-b-1 border-[#E8E8E8]'}`}>

                                    {logos && <img src={logos[curIndex]} alt="" width="16"/>}
                                    {curOption.charAt(0).toUpperCase() + curOption.slice(1)}

                                </li>
                            )
                        })}

                    </ul>

                }
                
            </div>

            {error && <div className="text-[8.5px] text-red-500 absolute top-14">{error}</div>}

        </div>
        
    )
}

export default FormSelectField;

const DownArrowIcon = () => {

    return (
        <svg width="10" height="6" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.4198 0.951987L13.4798 2.01299L7.70277 7.79199C7.6102 7.88514 7.50012 7.95907 7.37887 8.00952C7.25762 8.05997 7.12759 8.08594 6.99627 8.08594C6.86494 8.08594 6.73491 8.05997 6.61366 8.00952C6.49241 7.95907 6.38233 7.88514 6.28977 7.79199L0.509766 2.01299L1.56977 0.952987L6.99477 6.37699L12.4198 0.951987Z" fill="#333333" fillOpacity="0.5"/>
        </svg>
    )

}