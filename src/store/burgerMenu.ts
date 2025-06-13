import { create } from "zustand";

type BurgerMenu = {
    isOpen: boolean;
}

type SetBurgerMenu = () => void;

type UseBurgerMenu = {
    burgerMenu: BurgerMenu;
    setBurgerMenu: SetBurgerMenu;
}

const useBurgerMenu = create<UseBurgerMenu>((set) => ({
    burgerMenu: {
        isOpen: false
    },
    setBurgerMenu: () => {
        set(state => ({
            burgerMenu: {
                isOpen: !state.burgerMenu.isOpen,
            }
        }))
    }
}))
export default useBurgerMenu;