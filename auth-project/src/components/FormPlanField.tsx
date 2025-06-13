
type FormPlanFieldProps = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    selectedRole: string;
}

const FormPlanField: React.FC<FormPlanFieldProps> = ({onChange, selectedRole}) => {

    return (
        <>
        <fieldset className='w-fit mx-auto my-0'>

            <legend className='text-xxs text-[#33333380] text-center'>How are you planning to use Kipplify?</legend>

            <div className='h-9 mx-auto my-4 p-0.75 bg-gradient-to-r from-[#333EFF] to-[#5BCAFF] flex items-center rounded-4xl'>

                <div 
                className={`w-1/2 h-full text-white rounded-4xl flex items-center justify-center cursor-pointer ${selectedRole==='creator' && 'bg-white'} transition-all`}
                onClick={() => document.getElementById('creator')?.click()}>

                    <label htmlFor="creator" className={`text-xxs font-medium cursor-pointer ${selectedRole==='creator' && 'text-[#007EFF]'} transition-all`}>Creator</label>
                    <input 
                    type="radio"
                    name="role"
                    value="creator"
                    id="creator"
                    onChange={onChange}
                    className='appearance-none'
                    defaultChecked/>

                </div>

                <div 
                className={`w-1/2 h-full text-white rounded-4xl flex items-center justify-center cursor-pointer ${selectedRole==='brand' && 'bg-white'} transition-all`}
                onClick={() => document.getElementById('brand')?.click()}>

                    <label htmlFor="brand" className={`text-xxs font-medium cursor-pointer ${selectedRole==='brand' && 'text-[#007EFF]'} transition-all`}>Brand</label>
                    <input 
                    type="radio" 
                    name="role" 
                    value="brand" 
                    id="brand" 
                    onChange={onChange} 
                    className='appearance-none'/>

                </div>

            </div>

        </fieldset>
        </>
    )
}

export default FormPlanField;
