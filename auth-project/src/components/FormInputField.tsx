
type FormInputFieldProps = {
    label: string;
    type: string;
    name: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
}

const FormInputField: React.FC<FormInputFieldProps> = ({label, type, name, placeholder, value, onChange, error}) => {

    return (
        <div className="flex flex-col gap-1 relative">
            <label htmlFor={name} className='text-xs'>{label}</label>

            <input 
            type={type}
            name={name}
            id={name}
            placeholder={placeholder}
            autoComplete='off'
            value={value}
            onChange={onChange}
            className= "h-8.5 px-2.5 outline-none border-1 text-xxs border-[#33333380] rounded-lg"/>

            {error && <div className="text-[8.5px] text-red-500 absolute top-14">{error}</div>}

        </div>
    )
}
export default FormInputField;