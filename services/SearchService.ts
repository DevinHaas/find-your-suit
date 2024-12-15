import useSWRMutation from 'swr/mutation';
import axios from 'axios';
import {Item} from '@/lib/types/Item';
import {useSearchStore} from "@/zustand/SearchStore";
import {useEffect} from "react";

interface Response {
        itemSummaries: Item[];
}

export default function useSearchService() {
    const URL: string = '/api/search';
    const {  setItems } = useSearchStore();


    const MakeSearch = () => {

        const searchRequest = async (url: string, { arg }: { arg: { searchQuery: string } }) => {
            const response = await axios.get(`${URL}?query=${arg.searchQuery}`);
            return response.data;
        };

        const { data, trigger, isMutating, error } = useSWRMutation<Response>(URL, searchRequest);


        useEffect(() => {
            if (data){
                console.log(data.itemSummaries)
                setItems(data.itemSummaries)
            }
        }, [data]);

        return {
            triggerSearch: trigger,
            isSearching: isMutating,
            error,
        };
    };

    return {
        makeSearch: MakeSearch,
    };
}
