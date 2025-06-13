import FormInputField from '@components/FormInputField'
import FormSubmitButton from '@components/FormSubmitButton';
import useRegUsers from '@store/regUsers';
import { useState } from 'react'
import * as z from 'zod';
import { useNavigate } from 'react-router-dom';
import useForgotPassUser from '@store/forgotPassUser';



const ForgotPassword = () => {

    const navigate = useNavigate();
    const setForgotPassUser = useForgotPassUser(state => state.setForgotPassUser);

    const regUsers = useRegUsers(state=>state.regUsers);

    const [email, setEmail] = useState<string>('');
    const [emailError, setEmailError] = useState<string>('');

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        setEmailError('');

        try {
            // Validation
            const result = validationSchema.safeParse({email: email});
            if (!result.success) {
                throw {emailError: result.error.errors[0].message};
            }

            // Email Exists?
            const matchedUser = regUsers.find((curUser) => curUser.email===email.trim().toLowerCase());
            if (!matchedUser) {
                throw {emailError: "Email not found!"}
            }
            
            setForgotPassUser(email);
            setEmail('');
            navigate('/resetpassword');

        } catch (err) {
            setEmailError((err as {emailError: string}).emailError);
        }
    }

    const validationSchema = z.default.object({
        email: z.default.string().email().nonempty(),
    })

    return (
        <>
        <h1 className='text-xl font-semibold text-center'>Forgot Password?</h1>
        <p className='text-center text-xxs text-[#33333380]'>Dont't worry, we've got you covered</p>

        <form onSubmit={(e) => handleFormSubmit(e)} className='mt-4 space-y-4'>

            <FormInputField
            label={"Email"}
            type={"email"}
            name={"email"}
            placeholder={"Enter your email"}
            value={email}
            onChange={(e:React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            error={emailError} />

            <FormSubmitButton
            text={"Continue"}/>

        </form>
        </>
    )
}

export default ForgotPassword;