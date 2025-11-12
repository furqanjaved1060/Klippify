import FormInputField from '@components/Auth-Pages/FormInputField';
import FormPlanField from '@components/Auth-Pages/FormPlanField';
import FormSubmitButton from '@components/Auth-Pages/FormSubmitButton';
import ThirdPartyAuth from '@components/Auth-Pages/ThirdPartyAuth';
import useAuthUser from '@store/authUser';
import useRegUsers from '@store/regUsers';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as z from 'zod';

type FormValues = {
  role: 'creator'|'brand';
  email: string;
  password: string;
}

type FormErrors = {
  email?: string;
  password?: string;
  authentication?: string;
}

const SignInPage = () => {

  const navigate = useNavigate();
  const regUsers = useRegUsers(state=>state.regUsers);
  const login = useAuthUser(state=>state.login);

  const [formValues, setFormValues] = useState<FormValues>({
    role: 'creator',
    email: '',
    password: '',
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const handleInputChange = (name:string, value:string) => {
    setFormValues({
        ...formValues,
        [name]:value
    })
  }

  const handleFormSubmit = (e:React.FormEvent<HTMLFormElement>) => {
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
      // Authentication
      const matchedUser = regUsers.find((curUser) => curUser.email===formValues.email.trim().toLowerCase() && curUser.password===formValues.password && curUser.role===formValues.role)
      if (!matchedUser) {
        throw {authentication: "invalid email or password"}
      }
      // SignIn Success
      login(matchedUser);

      setFormValues({
        role: 'creator',
        email: '',
        password: '',
      });

      // Redirect
      navigate(`/${matchedUser.fullName.split(' ').join('')}`);

    } catch (err) {
      setFormErrors(err as FormErrors);
    }
  }

  const validationSchema = z.default.object({
    email: z.default.string().email().nonempty("Email can not be empty!"),
    password: z.default.string().nonempty("Password can not be empty!"),
  })
  


  return (
    <>
    <h1 className='text-xl font-semibold text-center'>Get Started</h1>

    <form onSubmit={handleFormSubmit} className='space-y-4 relative'>

      <FormPlanField
      onChange={handleInputChange}
      selectedRole={formValues.role} />

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
      error={formErrors.password || formErrors.authentication}
      passBtn={true} />

      <div className='mb-5 flex justify-between items-center'>
        <div className='flex items-center gap-2'>
          <input 
          type="checkbox" 
          name='rememberMe' 
          id='rememberMe'/>
          <label htmlFor="rememberMe" className='text-xxs'>Remember me</label>
        </div>
        <Link to='/forgotpassword' className='text-[#33333380] text-xxs'>Forgot password?</Link>
      </div>

      <FormSubmitButton
      text={"Sign In"}/>  

    </form>

    <div className='w-fit m-auto my-2 text-xxs'><Link to='/forgotpassword' >Forgot password?</Link></div>

    <ThirdPartyAuth/>
    
    </>
  )
}
export default SignInPage;