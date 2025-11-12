import { create } from "zustand";
import Cookies from 'js-cookie';



type RegUserObj = {
    role: 'creator'|'brand';
    fullName: string;
    email: string;
    password: string;
    token: string;
    bio?: string;
    locaiton?: string;
    des?: string;
    caetgory?: string;
    avatar?: File | null;
}

type UseAuthUser = {
    authUser: {
        isAuthenticated: boolean;
        userData: RegUserObj;
        tokenChecked: boolean;
    };
    login: (authUserData:RegUserObj) => void;
    logout: () => void;
    authFromCookie: (regUsers: RegUserObj[]) => void;
}



const useAuthUser = create<UseAuthUser>((set) => ({

    authUser: {
        isAuthenticated: false,
        userData: {
            role: 'creator',
            fullName: "",
            email: "",
            password: "",
            token: "",
            bio: "",
            locaiton: "",
            des: "",
            caetgory: "",
            avatar: null,
        },
        tokenChecked: false,
    },

    login: (authUserData) => {
        Cookies.set('authToken', authUserData.token, {expires: 1 / 24})
        set(state => ({
            ...state,
            authUser: {
                ...state.authUser,
                isAuthenticated: true,
                userData: authUserData,
                tokenChecked: true,
            }
        }))
    },

    logout: () => {
        Cookies.remove('authToken')
        set(state => ({
            ...state,
            authUser: {
                isAuthenticated: false,
                userData:{
                    role: 'creator',
                    fullName: "",
                    email: "",
                    password: "",
                    token: "",
                    bio: "",
                    locaiton: "",
                    des: "",
                    caetgory: "",
                    avatar: null,
                },
                tokenChecked: true,
            }
        }))
    },

    authFromCookie: (regUsers) => {
        const token = Cookies.get('authToken');
        if (token) {
            const matchedUser= regUsers.find(curUser => curUser.token===token) as RegUserObj;
            set(state => ({
                ...state,
                authUser: {
                    ...state.authUser,
                    isAuthenticated: true,
                    userData: matchedUser,
                    tokenChecked: true,
                }
            }))
        }
        else {
            set(state => ({
                authUser: {
                    ...state.authUser,
                    tokenChecked: true,
                }
            }))
        }
    }
}))
export default useAuthUser;