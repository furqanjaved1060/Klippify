import useAuthUser from '@store/authUser'
import useRegUsers from '@store/regUsers'
import { useEffect } from 'react';

const useAuthFromCookie = () => {

    const authFromCookie = useAuthUser(state=>state.authFromCookie);
    const regUsers = useRegUsers(state=>state.regUsers);

    useEffect(() => {
        authFromCookie(regUsers);
    },[])
}

export default useAuthFromCookie;