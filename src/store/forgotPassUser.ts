import { create } from "zustand";

type ForgotPassUser = {
    email: string;
}

type SetForgotPassUser = (email: string) => void;

type UseForgotPassUser = {
    forgotPassUser: ForgotPassUser;
    setForgotPassUser: SetForgotPassUser;
}

const useForgotPassUser = create<UseForgotPassUser>((set) => ({
    forgotPassUser: {
        email: ''
    },
    setForgotPassUser: (email) => {
        set(state => ({
            ...state,
            forgotPassUser: {
                email: email.trim().toLowerCase(),
            }
        }))
    }
}))
export default useForgotPassUser;