import FormSubmitButton from '@components/Auth-Pages/FormSubmitButton';
import FormInputField from '@components/Auth-Pages/FormInputField';
import FormPlanField from '@components/Auth-Pages/FormPlanField';
import useRegUsers from '@store/regUsers';
import ThirdPartyAuth from '@components/Auth-Pages/ThirdPartyAuth';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as z from 'zod'

type FormValues = {
    role: 'creator'|'brand';
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

type FormErrors = {
    fullName?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
}

const SignUpPage = () => {

    const navigate = useNavigate();
    const regUsers = useRegUsers((state) => state.regUsers);
    const addUser = useRegUsers((state) => state.addUser);

    const [formValues, setFormValues] = useState<FormValues>({
        role: 'creator',
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [formErrors, setFormErrors] = useState<FormErrors>({});

    const handleInputChange = (name:string, value:string):void => {
        setFormValues({
            ...formValues,
            [name]:value
        })
    }

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>):void => {
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

            // Email already Registered
            const matchedUser = regUsers.find((curUser) => formValues.email.trim().toLowerCase()===curUser.email)
            if (matchedUser) {
                throw {email: "Email already registered!"}
            }

            // SignUp Success
            addUser({
                role: formValues.role,
                fullName: formValues.fullName,
                email: formValues.email,
                password: formValues.password,
            })
            setFormValues({
                role: 'creator',
                fullName: '',
                email: '',
                password: '',
                confirmPassword: '',              
            })
            navigate('/signin');

        } catch (err) {
            setFormErrors(err as FormErrors);
        }
    }

    const validationSchema = z.default.object({
        fullName: z.default.string().nonempty().min(3, "Name must contain atleast 3 characters!").max(24, "Name can not contain more than 24 characters!"),
        email: z.default.string().email().nonempty("Email can not be empty!"),
        password: z.default.string().nonempty().min(8, "Password must contain atleast 8 characters!").max(24, "Password can not contain more than 24 characters!"),
        confirmPassword: z.default.string().nonempty("Confirm password can not be empty!"),
    }).refine((data) => data.confirmPassword===data.password, {message: "Passwords don't match", path: ['confirmPassword']});



    return (
    <>
    <h1 className='text-xl font-semibold text-center'>Get Started</h1>
    
    <form onSubmit={handleFormSubmit} className='space-y-4'>

        <FormPlanField
        onChange={handleInputChange}
        selectedRole={formValues.role} />

        <FormInputField
        label={"Full Name"}
        type={"text"}
        name={"fullName"}
        placeholder={"Enter your full name"}
        value={formValues.fullName}
        onChange={handleInputChange}
        error={formErrors.fullName} />

        <FormInputField
        label={"Email"}
        type={"email"}
        name={"email"}
        placeholder={"Enter your email"}
        value={formValues.email}
        onChange={handleInputChange}
        error={formErrors.email} />

        <FormInputField
        label={"Password"}
        type={"password"}
        name={"password"}
        placeholder={"Enter your password"}
        value={formValues.password}
        onChange={handleInputChange}
        error={formErrors.password}
        passBtn={true} />

        <FormInputField
        label={"Confirm Password"}
        type={"password"}
        name={"confirmPassword"}
        placeholder={"Enter your password again"}
        value={formValues.confirmPassword}
        onChange={handleInputChange}
        error={formErrors.confirmPassword}
        passBtn={true} />

        <FormSubmitButton text={"Create Account"}/>

    </form>

    <ThirdPartyAuth/>
    </>
    )
}

export default SignUpPage;