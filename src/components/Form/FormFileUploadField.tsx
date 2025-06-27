
type FormFileUploadFieldProps = {
    label?: string;
    name: string;
    title: string;
    onChange: (name:string, value:File) => void;
    btnStyle?: string;
    error?: string;
}

const FormFileUploadField: React.FC<FormFileUploadFieldProps> = ({label, name, title, onChange, btnStyle, error}) => {

    const btnStyle1: string = 'w-fit p-2 text-xxs font-normal text-[#33333380] border-1 border-[#33333333] cursor-pointer rounded-md';

    const btnStyle2: string = 'h-8.5 px-3 text-xxs font-medium text-white bg-gradient-to-r from-[#333EFF] to-[#5BCAFF] rounded-md leading-none cursor-pointer flex items-center';

    const btnStyle3: string = 'h-8.5 px-3 text-xxs font-medium rounded-md border-1 border-[#D6D6D6] leading-none cursor-pointer flex items-center';

    const btnClassName: string  = btnStyle==="1" ? btnStyle1 : btnStyle==="2" ? btnStyle2 : btnStyle==="3" ? btnStyle3 : '';

    return (
        <div className="flex flex-col gap-1 relative">

            {label && <label htmlFor={name} className="w-fit text-xs">{label}</label>}

            <label htmlFor={name} className={btnClassName}>{title}</label>

            <input 
            type="file"
            name={name}
            id={name}
            accept="image/*"
            onChange={(e) => onChange(e.target.name, e.target.files![0])}
            className="w-fit hidden" />

            {error && <div className="w-fit text-[8.5px] text-red-500 absolute top-14">{error}</div>}

        </div>
    )
}

export default FormFileUploadField;