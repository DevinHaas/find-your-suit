
export default function useRequestService () {
    const fetcher = (url: string, requestOptions: any) => fetch(url, requestOptions).then(res => res.json());


    const getRequestOptions = async (method: string, body: any = null) => {



        const headers = {
            'Authorization' : `Bearer ${"token"}`,
            'Content-Type': 'application/json',
            "X-EBAY-C-MARKETPLACE-ID": "EBAY_US",
            "X-EBAY-C-ENDUSERCTX": 'affiliateCampaignId=<ePNCampaignId>,affiliateReferenceId=<referenceId>'

        };
        const requestOptions: any = {
            method,
            headers,
            credentials: 'include',
        };
        if (body) requestOptions.body = JSON.stringify(body);
        return requestOptions;
    };


    return {
        fetcher,
        getRequestOptions,
    }
}


