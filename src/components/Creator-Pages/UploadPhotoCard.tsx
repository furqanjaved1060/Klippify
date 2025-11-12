import creatorAvatar from '@assets/profile.png'
import brandAvatar from '@assets/brandLogo.jpg'
import useAuthUser from '@store/authUser';
import FormFileUploadField from '@components/Form/FormFileUploadField';


type Props = {

    formErrors: {
        firstName?: string;
        lastName?: string;
        email?: string;
        bio?: string;
        location?: string;
        avatar?: string;
        fullName?: string;
        desc?: string;
        category?: string;
        password?: string;
        confirmPassword?: string;
    };

    handleInputChange: (name:string, value:string|File) => void;
}

const UploadPhotoCard: React.FC<Props> = ({formErrors, handleInputChange}) => {

    const role = useAuthUser(state => state.authUser.userData.role);

    const removeBtnClass:string = role==="creator" ? 'h-8.5 px-3 text-xxs font-medium border-1 border-[#D6D6D6] rounded-md leading-none cursor-pointer' : 'h-8.5 px-3 text-xxs font-medium bg-[#3333331A] rounded-md leading-none cursor-pointer'

    return (
        <div className='w-fit flex items-center gap-2'>
            <img src={role==="creator" ? creatorAvatar : brandAvatar} alt="" className='size-16 border-1 border-[#B5B4B480] rounded-[50%]'/>
            <div className='space-y-2'>
                <div className='flex items-center gap-2'>

                    <FormFileUploadField
                    name={"avatar"}
                    title={"Upload Photo"}
                    btnStyle={role==="creator" ? "2":"3"}
                    onChange={handleInputChange}
                    error={formErrors.avatar}/>

                    <button type='button' className={removeBtnClass}>Remove Photo</button>

                </div>
                <p className='w-8/12 text-[8px] font-normal text-[#33333380] leading-2.5'>At least 800 x 800 px recommended. JPG or PNG is allowed.</p>
            </div>
        </div>
    )
}

export default UploadPhotoCard;