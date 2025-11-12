import { create } from "zustand";
import { persist } from "zustand/middleware";


type RegUserObj = {
    role: 'creator'|'brand';
    fullName: string;
    email: string;
    password: string;
    token: string;
    bio?: string;
    locaiton?: string;
    desc?: string;
    category?: string[];
    avatar?: File | null;
}


type AddUser = (user: {role:string; fullName:string; email:string; password:string;}) => void;

type UseRegUsers = {
    regUsers: RegUserObj[];
    addUser: AddUser;
    editUser: (newData:RegUserObj, userToBeEditedEmail:string) => void;
    changePassword: (email:string, newPassword:string) => void;
}

const useRegUsers = create<UseRegUsers>()(   
    persist((set) => ({

        regUsers: [],

        addUser: ({role, fullName, email, password}) => {
            set((state) => ({
                ...state,
                regUsers: [...state.regUsers, {
                    role: role as 'creator' | 'brand',
                    fullName: fullName.trim().split(" ").filter((curElem)=>curElem!=="").join(" ").toLowerCase(),
                    email: email.trim().toLowerCase(),
                    password: password,
                    token: Math.random().toString(36).substring(2),
                }]
            }))
        },

        editUser: (newData, userToBeEditedEmail) => {
            set((state) => ({
                ...state,
                regUsers: state.regUsers.map((curUser: RegUserObj) => curUser.email===userToBeEditedEmail ? newData : curUser)
            }))
        },

        changePassword: (email, newPassword) => {
            set((state) => ({
                regUsers: state.regUsers.map((curUser: RegUserObj) => curUser.email===email ? {...curUser, password: newPassword} : curUser)
            }))
        },

    }),
    {name:'regUsers'})
)
export default useRegUsers;

// // create(persist((set) => ({}), {name: "regUsers"}));