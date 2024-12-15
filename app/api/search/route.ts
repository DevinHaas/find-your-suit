import axios from "axios";
import {NextRequest} from "next/server";

export async function GET(request: NextRequest) {

    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get('query')
    const searchURL = `${process.env.NEXT_PUBLIC_EBAY_SEARCH_API}/search?q=${query}&limit=3`;


    const token = request.cookies.get('ebay_token')
    console.log(token)

    try {
        const response = await axios.get(
            searchURL,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'X-EBAY-C-MARKETPLACE-ID': "EBAY_US",
                    'Authorization': `Bearer ${token}`
                },
            });
        console.log(response)
        return new Response(JSON.stringify(response.data), {status: 200})
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            return new Response(
                JSON.stringify({error: error.response?.data || error.message}),
                {status: error.response?.status || 500}
            );
        } else {
            console.error("Unexpected error:", error);
        }
    }
}