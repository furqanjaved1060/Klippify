
type FormSubmitButtonProps = {
  text: string;
}

const FormSubmitButton: React.FC<FormSubmitButtonProps> = ({text}) => {

  return (
    <button type="submit" className='h-8.5 w-full bg-gradient-to-r from-[#333EFF] to-[#5BCAFF] text-xxs text-white font-medium rounded-lg cursor-pointer'>{text}</button>
  )
}

export default FormSubmitButton;