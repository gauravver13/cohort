import { atom, selector } from "recoil";

// RECOIL ATOM 
export const counterAtom = atom({
    key: "counter",
    default: 0,
}) 

// RECOIL SELECTOR:
export const evenSelector = selector({
    key: "isEvenSelector",
    get: function({ get }) {
        const currentCount = get(counterAtom);
        const isEven = currentCount%2 == 0;

        return isEven;
    }
}) 