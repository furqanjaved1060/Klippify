import FormInputField from "@components/Auth-Pages/FormInputField";
import UploadPhotoCard from "@components/Creator-Pages/UploadPhotoCard";
import FormCheckBoxField from "@components/Form/FormCheckBoxField";
import useAuthUser from "@store/authUser";
import useRegUsers from "@store/regUsers";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as z from 'zod'



type FormValues = {
    avatar: File|null;
    fullName: string;
    email: string;
    desc: string;
    category: string[];
    password: string;
    confirmPassword: string;
}

type FormErrors = {
    avatar?: string;
    fullName?: string;
    email?: string;
    desc?: string;
    category?: string;
    password?: string;
    confirmPassword?: string;
}



const EditBrandProfileForm = () => {

    const regUsers = useRegUsers(state => state.regUsers);
    const editUser = useRegUsers(state => state.editUser);
    const authUser = useAuthUser(state => state.authUser);

    const navigate = useNavigate();

    const [formValues, setFormValues] = useState<FormValues>({
        avatar: null,
        fullName: "",
        email: "",
        desc: "",
        category: [],
        password: "",
        confirmPassword: "",
    });

    console.log(formValues)

    const [formErrors, setFormErrors] = useState<FormErrors>({});

    const handleInputChange = (name: string, value:string|File, checked?:boolean):void => {

        if (name==="category" && typeof value==="string") {

            if (checked) {
                setFormValues({
                    ...formValues,
                    category: [...formValues.category, value]
                })
            }
            
            if(!checked) {
                setFormValues({
                    ...formValues,
                    category: formValues.category.filter((curCategory) => curCategory!==value)
                })
            }

        }else{
            setFormValues({
                ...formValues,
                [name]:value
            })
        }
    }

    console.log(formValues)

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
                avatar: formValues.avatar ? formValues.avatar : null,
                fullName: formValues.fullName,
                email: formValues.email,
                desc: formValues.desc,
                category: formValues.category,
                password: formValues.password,

            }, userToBeEdited.email)

            resetForm();

            navigate('/signin');

        } catch (err) {
            setFormErrors(err as FormErrors);
        }
    }

    const resetForm = ():void => {
        setFormValues({
            avatar: null,
            fullName: "",
            email: "",
            desc: "",
            category: [],
            password: "",
            confirmPassword: "",          
        })
        setFormErrors({});
    }

    const validationSchema = z.default.object({
        fullName: z.default.string().nonempty("Full Name can not be empty!").min(3, "Name must contain atleast 3 characters!").max(24, "Name can not contain more than 24 characters!"),
        email: z.default.string().email().nonempty("Email can not be empty!"),
        desc: z.default.string().nonempty("Please provide a brand description!"),
        category: z.default.array(z.default.string()).min(1, "Please choose atleast 1 category"),
        password: z.default.string().nonempty("Password can not be empty!").min(8, "Password must contain atleast 8 characters!").max(24, "Password can not contain more than 24 characters!"),
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
                label={"Brand Name"}
                type={"text"}
                name={"fullName"}
                placeholder={"Enter brand name"}
                value={formValues.fullName}
                onChange={handleInputChange}
                error={formErrors.fullName}
                inputClassName={"bg-[#F4F4F4] border-none"} />

                <FormInputField
                label={"Email Address"}
                type={"email"}
                name={"email"}
                placeholder={"username@gmail.com"}
                value={formValues.email}
                onChange={handleInputChange}
                error={formErrors.email}
                inputClassName={"bg-[#F4F4F4] border-none"} />

                <FormInputField
                label={"Brand Description"}
                type={"text"}
                name={"desc"}
                placeholder={"Enter brand description"}
                value={formValues.desc}
                onChange={handleInputChange}
                error={formErrors.desc}
                inputClassName={"bg-[#F4F4F4] border-none"} />

                <FormCheckBoxField
                data={[
                    {
                        label: "Health & Fitness",
                        value: "health & fitness",
                    },
                    {
                        label: "Tech & Gadgets",
                        value: "tech & gadgets",
                    },
                    {
                        label: "Beauty & Personal Care",
                        value: "beauty & personal care",
                    },
                    {
                        label: "Gaming",
                        value: "gaming",
                    },
                    {
                        label: "Travel & Lifestyle",
                        value: "travel & lifestyle",
                    },
                    {
                        label: "E-commerce & Retail",
                        value: "e-commerce & retail",
                    },
                ]}
                name={"category"}
                title={"Brand Category"}
                onChange={handleInputChange}
                error={formErrors.category}/>

                <FormInputField
                label={"Password"}
                type={"password"}
                name={"password"}
                placeholder={"*********"}
                value={formValues.password}
                onChange={handleInputChange}
                error={formErrors.password}
                inputClassName={"bg-[#F4F4F4] border-none"} />

                <FormInputField
                label={"Confirm Password"}
                type={"password"}
                name={"confirmPassword"}
                placeholder={"*********"}
                value={formValues.confirmPassword}
                onChange={handleInputChange}
                error={formErrors.confirmPassword}
                inputClassName={"bg-[#F4F4F4] border-none"} />

            </div>

            <div className="space-x-2">
                <button type='submit' className='h-8.5 w-15 text-xxs font-medium text-white bg-gradient-to-r from-[#333EFF] to-[#5BCAFF] rounded-md leading-none' style={{cursor: 'pointer'}}>Save</button>
                <button type='button' onClick={resetForm} className='h-8.5 w-15 text-xxs font-medium rounded-md border-1 border-[#D6D6D6] leading-none' style={{cursor: 'pointer'}}>Cancel</button>
            </div>

        </form>
        
    )
}

export default EditBrandProfileForm;