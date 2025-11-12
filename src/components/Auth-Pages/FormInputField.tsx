import { useState } from "react";

type FormInputFieldProps = {
    label: string;
    type: "text" | "email" | "password" | "date";
    name: string;
    placeholder: string;
    value: string;
    onChange: (name:string, value:string) => void;
    inputClassName?: string;
    error?: string;
    numbersOnly?: boolean;
    passBtn?: boolean;
}

const FormInputField: React.FC<FormInputFieldProps> = ({label, type, name, placeholder, value, onChange, inputClassName, error, numbersOnly, passBtn}) => {

    const [numberError, setNumberError] = useState<string>("");

    const [Type, setType] = useState<"text" | "email" | "password" | "date">(type);

    return (
        <div className="flex flex-col gap-1 relative">

            <label htmlFor={name} className='w-fit text-xs'>{label}</label>

            <input
            type={Type}
            name={name}
            id={name}
            placeholder={placeholder}
            autoComplete='off'
            value={value}
            onChange={(e) => onChange(e.target.name, e.target.value)}
            className= {`h-8.5 px-2.5 outline-none text-xxs placeholder-[#33333380] border-1 border-[#33333380] rounded-lg ${inputClassName}`}
            onKeyDown={(e) => {
                if (numbersOnly) {
                    setNumberError("")
                    const allowedKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'];
                    const isDigit = /^[0-9]$/.test(e.key);
                    if (!isDigit && !allowedKeys.includes(e.key)) {
                      e.preventDefault(); // block all non-digits
                      setNumberError("Only numbers(0-9) are allowed");
                      setTimeout(() => {setNumberError("")}, 3000);
                    }
                }
            }}/>

            {passBtn &&<button type="button" onMouseDown={() => setType("text")} onMouseUp={() => setType("password")} className="absolute top-[31px] right-2.5 cursor-pointer"><EyeIcon/></button>}

            {error && numberError==="" && <div className="text-[8.5px] text-red-500 absolute top-14">{error}</div>}

            {numberError && <div className="text-[8.5px] text-red-500 absolute top-14">{numberError}</div>}

        </div>
    )
}
export default FormInputField;


const EyeIcon = () => {
    return (
        <svg width="20" height="12" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12.5001 16C16.9184 16 21.2274 13.8182 24.1365 8C21.2274 2.18182 16.9184 0 12.5001 0C8.08185 0 3.77286 2.18182 0.86377 8C3.77286 13.8182 8.08185 16 12.5001 16ZM12.5001 13.0909C15.3118 13.0909 17.591 10.8116 17.591 8C17.591 5.18837 15.3118 2.90909 12.5001 2.90909C9.6885 2.90909 7.40922 5.18837 7.40922 8C7.40922 10.8116 9.6885 13.0909 12.5001 13.0909Z" fill="#A4A4A4"/>
            <path d="M14.682 8C14.682 9.20499 13.7051 10.1818 12.5001 10.1818C11.2951 10.1818 10.3183 9.20499 10.3183 8C10.3183 6.79502 11.2951 5.81818 12.5001 5.81818C13.7051 5.81818 14.682 6.79502 14.682 8Z" fill="#A4A4A4"/>
        </svg>
    )
}

