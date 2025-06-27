import { useState } from "react";

type DataObj = {
    label: string;
    value: string;
}

type Props = {
    data: DataObj[];
    name: string;
    title: string;
    onChange: (name:string, value:string, checked?:boolean) => void;
    error?: string;
}

const FormCheckBoxField: React.FC<Props> = ({data, name, title, onChange, error}) => {
    
    return (

        <fieldset className="relative">

            <legend className="text-xs">{title}</legend>

            <div className="flex flex-wrap">

                {data.map((curOpt, index) => {

                    const {label, value} = curOpt;
                    const [isSelected, setIsSelected] = useState<boolean>(false);
                    return (
                        <div key={index} className="mr-1">

                            <label
                            onClick={() => setIsSelected(!isSelected)} 
                            htmlFor={label} 
                            className={`py-0.5 px-[11.5px] text-xxs font-normal border-1 rounded-sm cursor-pointer ${isSelected ? 'text-[#007EFF] bg-[#007EFF1A] border-[#007EFF1A]' : 'text-[#33333333] bg-white border-[#33333333]'}`}>{label}</label>

                            <input 
                            type="checkbox"
                            name={name}
                            id={label}
                            onChange={(e) => onChange(name,value,e.target.checked)}
                            className="hidden"
                            />

                        </div>
                    )     
                        
                })}
                
            </div>
                
            {error && <div className="text-[8.5px] text-red-500 absolute top-12">{error}</div>}

        </fieldset>

    )
}

export default FormCheckBoxField;
