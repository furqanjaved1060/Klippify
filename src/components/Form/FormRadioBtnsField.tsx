import { useState } from "react";

type DataObj = {
    label: string|React.ReactNode;
    id: string;
    value: string;
}

type FormRadioBtnsFieldProps = {
    data: DataObj[];
    name: string;
    title: string;
    onChange: (name:string, value:string) => void;
    error?: string;
    legendClassName?: string;
    ulClassName?: string;
    liClassName?: string;
    inputClassName?: string;
    defaultSelected?: string
}

const FormRadioBtnsField: React.FC<FormRadioBtnsFieldProps> = ({data, name, title, onChange, error, legendClassName, ulClassName, liClassName, inputClassName, defaultSelected}) => {

    const[selected, setSelected] = useState<string>(defaultSelected!);

    return (
        <fieldset className="space-y-1 relative">

            <legend className={`${legendClassName ? legendClassName : 'text-xs'}`}>{title}</legend>

            <ul className={`${ulClassName ? ulClassName : 'space-y-1'}`}>

                {data.map((curRadioInput, curIndex) => {

                    const {label, id, value} = curRadioInput;

                    return (
                        <li key={curIndex} className={`${liClassName ? liClassName : "flex items-center gap-1"}`}>

                            <input
                            type='radio'
                            name={name}
                            id={id}
                            value={value}
                            defaultChecked={curIndex===0}
                            className={`${inputClassName ? inputClassName : 'cursor-pointer'}`}
                            />

                            {typeof label==="string" && <label htmlFor={id} className='w-fit text-xxs'>{label}</label>}
                            {typeof label !== "string" && <label 
                            htmlFor={id} 
                            onClick={() => {
                                setSelected(value)
                                onChange(name, value);
                            }} className={`h-7 px-2 flex items-center cursor-pointer border-1 ${value===selected  ? "border-[#33333333]" : "border-white"} rounded-md`}>{label}</label>}
                        
                        </li>
                    )
                })}

            </ul>

            {error && <div className="text-[8.5px] text-red-500 absolute top-9">{error}</div>}

        </fieldset>
    )
}

export default FormRadioBtnsField;