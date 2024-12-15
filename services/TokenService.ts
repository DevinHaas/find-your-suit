"use client"

import {toast} from "@/components/ui/use-toast";
import useSWRMutation from "swr/mutation";
import axios from "axios";


interface Response {
    data: {
        access_token: string
    }
}

export default function useTokenService() {

    const URL = "/api/token"

    const useFetchToken = () => {

        const fetchTokenRequest = async (url: string) => {
            return await axios.post(url);
        }

        const { trigger, isMutating, error} = useSWRMutation<Response>(URL, fetchTokenRequest)

        const fetchToken = async () => {
            try {
                const data = await trigger();
                if (data){
                    console.log(data.data.access_token)
                }
                return data;
            } catch (error){
                toast({
                    title: "😬Authorization failed",
                    description: "Application Token could not be fetched",
                })
                console.error("Failed to fetch token", error)
                throw error
            }
        }



        return {
            fetchToken,
            isFetchingToken: isMutating,
            errorFetchingToken: error
        }
    }

    return {
        useFetchToken
    }


}