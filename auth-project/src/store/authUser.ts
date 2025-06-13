import { create } from "zustand";
import Cookies from 'js-cookie';


type AuthUser = {
    isAuthenticated: boolean,
    userData: {
        role: 'creator'|'brand'|null,
        fullName: string|null,
        email: string|null,
    },
    tokenChecked: boolean,
}

type Login = (user: {role:'creator'|'brand'; fullName:string; email:string; token:string;}) => void;

type Logout = () => void;

type RegUserObj = {
    role: 'creator'|'brand';
    fullName: string;
    email: string;
    password: string;
    token: string;
}

type AuthFromCookie = (regUsers: RegUserObj[]) => void;

type UseAuthUser = {
    authUser: AuthUser;
    login: Login;
    logout: Logout;
    authFromCookie: AuthFromCookie;
}



const useAuthUser = create<UseAuthUser>((set) => ({
    authUser: {
        isAuthenticated: false,
        userData: {
            role: null,
            fullName: null,
            email: null,
        },
        tokenChecked: false,
    },
    login: ({role, fullName, email, token}) => {
        Cookies.set('authToken', token, {expires: 1 / 144})
        set(state => ({
            authUser: {
                ...state.authUser,
                isAuthenticated: true,
                userData: {
                    role: role,
                    fullName: fullName,
                    email: email,
                },
            },
        }))
    },
    logout: () => {
        Cookies.remove('authToken')
        set(state => ({
            authUser: {
                ...state.authUser,
                isAuthenticated: false,
                userData: {
                    role: null,
                    fullName: null,
                    email: null,
                }
            }
        }))
    },
    authFromCookie: (regUsers) => {
        const token = Cookies.get('authToken');
        if (token) {
            const matchedUser= regUsers.find(curUser => curUser.token===token) as RegUserObj;
            set(state => ({
                authUser: {
                    ...state.authUser,
                    isAuthenticated: true,
                    userData: {
                        role: matchedUser.role,
                        fullName: matchedUser.fullName,
                        email: matchedUser.email,
                    },
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