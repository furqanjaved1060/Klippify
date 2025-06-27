import FormInputField from '@components/Auth-Pages/FormInputField';
import useForgotPassUser from '@store/forgotPassUser';
import useRegUsers from '@store/regUsers';
import * as z from 'zod';
import { useState } from 'react'
import FormSubmitButton from '@components/Auth-Pages/FormSubmitButton';
import { useNavigate } from 'react-router-dom';


type FormValues = {
    password: string;
    confirmPassword: string;
}

type FormErrors = {
    password?: string;
    confirmPassword?: string;
}


const ResetPassword = () => {

    const navigate = useNavigate();

    const forgotPassUser = useForgotPassUser(state => state.forgotPassUser);

    const changePassword = useRegUsers(state=>state.changePassword);

    const [formValues, setFormValues] = useState<FormValues>({
        password: '',
        confirmPassword: '',
    })

    const [formErrors, setFormErrors] = useState<FormErrors>({});

    const handleInputChange = (name:string, value:string) => {
        setFormValues({
            ...formValues,
            [name]:value
        })
    }

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormErrors({});

        try {
            // Validation
            const result = validationSchema.safeParse(formValues);
            if (!result.success) {
                const validationErrors: FormErrors = {};
                result.error.errors.forEach((err) => {
                    validationErrors[err.path[0] as keyof FormErrors]=err.message;
                });
                throw validationErrors;
            }
            // Change Password
            changePassword(forgotPassUser.email, formValues.password);

            setFormValues({
                password: '',
                confirmPassword: '',
            });

            navigate('/signin');

        } catch (err) {
            setFormErrors(err as FormErrors);
        }
    }

    const validationSchema = z.default.object({
        password: z.default.string().nonempty().min(8, "Password must contain atleast 8 characters!").max(24, "Password can not contain more than 24 characters!"),
        confirmPassword: z.default.string().nonempty("Confirm password can not be empty!"),
    }).refine((data) => data.confirmPassword===data.password, {message: "Passwords don't match", path: ['confirmPassword']});

    return (
    <>
    <h1 className='text-xl font-semibold text-center'>Create New Password</h1>
    <p className='text-center text-xxs text-[#33333380]'>Secure your account with a new password</p>

    <form onSubmit={handleFormSubmit} className='mt-4 space-y-4'>

        <FormInputField
        label={"Password"}
        type={"password"}
        name={"password"}
        placeholder={"Enter your password"}
        value={formValues.password}
        onChange={handleInputChange}
        error={formErrors.password} />

        <FormInputField
        label={"Confirm Password"}
        type={"password"}
        name={"confirmPassword"}
        placeholder={"Enter your password again"}
        value={formValues.confirmPassword}
        onChange={handleInputChange}
        error={formErrors.confirmPassword} />

        <FormSubmitButton
        text={"Reset Password"}/>

    </form>
    </>
    )
}

export default ResetPassword;