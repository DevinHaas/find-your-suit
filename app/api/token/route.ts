import axios from "axios";
import {NextResponse} from "next/server";

export async function POST() {

    const params = new URLSearchParams();
    params.append('grant_type', 'client_credentials')
    params.append('scope', 'https://api.ebay.com/oauth/api_scope')


    try {
        const request = await axios.post(
            `${process.env.EBAY_API}/identity/v1/oauth2/token`,
            params,
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': `Basic ${process.env.CLIENT_SECRET}`,
                },
            }
        );
        const {access_token, expires_in} = request.data


        const response = NextResponse.json({success: true})
        response.cookies.set('ebay_token', access_token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: expires_in
        })
        return response;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            return new Response(
                JSON.stringify({ error: error.response?.data || error.message }),
                { status: error.response?.status || 500 });
        } else {
            console.error("Unexpected error:", error);
        }
    }
}