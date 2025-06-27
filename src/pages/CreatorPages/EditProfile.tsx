import EditBrandProfileForm from "@components/Brand-Pages/EditBrandProfileForm";
import EditProfileForm from "@components/Creator-Pages/EditProfileForm";
import useAuthUser from "@store/authUser";



const EditProfile = () => {

    const role = useAuthUser(state => state.authUser.userData.role);

    return (
        <section className='p-3 space-y-3 bg-white rounded-lg flex-grow'>

            {role==='creator' && 
                <EditProfileForm/>
            }

            {role==='brand' && 
                <EditBrandProfileForm/>
            }
        
        </section>
    )
}

export default EditProfile;