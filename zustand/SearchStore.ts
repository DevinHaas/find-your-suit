import {Item} from "@/lib/types/Item";
import {create} from "zustand";


interface SearchStoreType {
    items: Item[]
    setItems: (items: Item[] | Item) => void;
}


export const useSearchStore = create<SearchStoreType>((set) => ({
    items: [],
    setItems: (result) => set(() => ({items: result}))
}));