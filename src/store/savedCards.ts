import { create } from "zustand";

type Card = {
    type: 'visa'|'mastercard'|'paypal';
    number: string;
    expiry: string;
    holderName: string;
}

type UseSavedCards = {
    savedCards: Card[];
    addCard: (card:Card) => void;
    delCard: (card:Card) => void;
}

const useSavedCards = create<UseSavedCards>((set) => ({
    savedCards: [
        {
            type: 'visa',
            number: 'XXXX-XXXX-XXXX-1234',
            expiry: '22/06/26',
            holderName: 'Chance Mango',
        },
        {
            type: 'mastercard',
            number: 'XXXX-XXXX-XXXX-1235',
            expiry: '22/06/26',
            holderName: 'Alena Korsgaard',
        },
        {
            type: 'paypal',
            number: 'XXXX-XXXX-XXXX-1236',
            expiry: '22/06/26',
            holderName: 'Cristofer Rhiel Madsen',
        },
    ],
    addCard: (card) => {
        set((state) => ({
            ...state,
            savedCards: [...state.savedCards, card]
        }))
    },
    delCard: (card) => {
        set((state) => ({
            ...state,
            savedCards: state.savedCards.filter((curCard) => curCard.number!==card.number)
        }))
    }

}))
export default useSavedCards;