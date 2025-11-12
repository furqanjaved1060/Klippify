import FormInputField from "@components/Auth-Pages/FormInputField";
import useAuthUser from "@store/authUser";
import useRegUsers from "@store/regUsers";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as z from 'zod'
import UploadPhotoCard from "./UploadPhotoCard";



type FormValues = {
    firstName: string;
    lastName: string;
    email: string;
    bio: string;
    location: string;
    password: string;
    confirmPassword: string;
    avatar?: File|null;
}

type FormErrors = {
    firstName?: string;
    lastName?: string;
    email?: string;
    bio?: string;
    location?: string;
    password?: string;
    confirmPassword?: string;
    avatar?: string;
}



const EditProfileForm = () => {

    const regUsers = useRegUsers(state => state.regUsers);
    const editUser = useRegUsers(state => state.editUser);
    const authUser = useAuthUser(state => state.authUser);

    const navigate = useNavigate();

    const [formValues, setFormValues] = useState<FormValues>({
        firstName: '',
        lastName: '',
        email: '',
        bio: '',
        location: '',
        password: '',
        confirmPassword: '',
        avatar: null,
    });

    const [formErrors, setFormErrors] = useState<FormErrors>({});

    const handleInputChange = (name:string, value:string|File):void => {
        setFormValues({
            ...formValues,
            [name]:value
        })
    }

    const resetForm = ():void => {
        setFormValues({
            firstName: '',
            lastName: '',
            email: '',
            bio: '',
            location: '',
            password: '',
            confirmPassword: '',              
        })
        setFormErrors({});
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

            // Update User Data in RegUsers Array
            const userToBeEdited = regUsers.find((curUser) => curUser.email===authUser.userData.email)!;

            editUser({
                ...userToBeEdited,
                fullName: (formValues.firstName + " " + formValues.lastName).trim().split(" ").filter((curElem)=>curElem!=="").join(" ").toLowerCase(),
                email: formValues.email.trim().toLowerCase(),
                bio: formValues.bio,
                locaiton: formValues.location,
                avatar: formValues.avatar,
                password: formValues.password,

            }, userToBeEdited.email)

            resetForm();

            navigate('/signin');

        } catch (err) {
            setFormErrors(err as FormErrors);
        }
    }

    const validationSchema = z.default.object({
        firstName: z.default.string().min(3, "First Name must contain atleast 3 characters!").max(24, "First Name can not contain more than 24 characters!"),
        lastName: z.default.string().min(3, "Last Name must contain atleast 3 characters!").max(24, "Last Name can not contain more than 24 characters!"),
        email: z.default.string().email().nonempty("Email can not be empty!"),
        bio: z.default.string().nonempty("Bio can not be empty!").max(48, "Bio can not contain more than 48 characters"),
        location: z.default.string().nonempty("Please provide a location!").max(18, "Bio can not contain more than 18 characters"),
        password: z.default.string().min(8, "Password must contain atleast 8 characters!").max(24, "Password can not contain more than 24 characters!"),
        confirmPassword: z.default.string().nonempty("Confirm password can not be empty!"),
    }).refine((data) => data.confirmPassword===data.password, {message: "Passwords don't match", path: ['confirmPassword']});



    return (

        <form onSubmit={handleFormSubmit} className='space-y-4'>

            <h2 className='text-lg font-semibold leading-none'>Edit Profile</h2>

            <UploadPhotoCard 
            formErrors={formErrors}
            handleInputChange={handleInputChange}/>

            <hr className="border-0 border-b-1 border-[#D6D6D6]"/>

            <div className="grid grid-cols-1 xs:grid-cols-[repeat(2,minmax(0,350px))] gap-4">
                        
                <FormInputField
                label={"First Name"}
                type={"text"}
                name={"firstName"}
                placeholder={"Enter first name"}
                value={formValues.firstName}
                onChange={handleInputChange}
                error={formErrors.firstName} />

                <FormInputField
                label={"Last Name"}
                type={"text"}
                name={"lastName"}
                placeholder={"Enter last name"}
                value={formValues.lastName}
                onChange={handleInputChange}
                error={formErrors.lastName} />

                <FormInputField
                label={"Email Address"}
                type={"email"}
                name={"email"}
                placeholder={"username@gmail.com"}
                value={formValues.email}
                onChange={handleInputChange}
                error={formErrors.email} />

                <FormInputField
                label={"Creator Bio"}
                type={"text"}
                name={"bio"}
                placeholder={"Enter your bio"}
                value={formValues.bio}
                onChange={handleInputChange}
                error={formErrors.bio} />

                <FormInputField
                label={"Location"}
                type={"text"}
                name={"location"}
                placeholder={"Enter your location"}
                value={formValues.location}
                onChange={handleInputChange}
                error={formErrors.location} />

                <FormInputField
                label={"Password"}
                type={"password"}
                name={"password"}
                placeholder={"*********"}
                value={formValues.password}
                onChange={handleInputChange}
                error={formErrors.password} />

                <FormInputField
                label={"Confirm Password"}
                type={"password"}
                name={"confirmPassword"}
                placeholder={"*********"}
                value={formValues.confirmPassword}
                onChange={handleInputChange}
                error={formErrors.confirmPassword} />

            </div>

            <div className="space-x-2">
                <button 
                type='submit' 
                className='h-8.5 w-15 text-xxs font-medium text-white bg-gradient-to-r from-[#333EFF] to-[#5BCAFF] rounded-md leading-none cursor-pointer'>Save</button>
                <button 
                type='button'
                onClick={resetForm} 
                className='h-8.5 w-15 text-xxs font-medium rounded-md border-1 border-[#D6D6D6] leading-none cursor-pointer'>Cancel</button>
            </div>

        </form>

    )
}

export default EditProfileForm;