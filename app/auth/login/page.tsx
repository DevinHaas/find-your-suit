"use client"

import Link from "next/link"


import React from "react";
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardHeader, CardTitle,} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {useRouter} from "next/navigation";
import useTokenService from "@/services/TokenService";

export default function Login() {

    const router = useRouter();

    const {fetchToken, errorFetchingToken} = useTokenService().useFetchToken()

    async function handleFetchingToken() {
        const res = await fetchToken()
        console.log(res)
        if (errorFetchingToken === 200) {
            router.push("/dashboard");
        }
    }

    return (
        <div className={"flex items-center h-screen"}>
            <Card className="mx-auto max-w-sm">
                <CardHeader>
                    <CardTitle className="text-2xl">Login</CardTitle>
                    <CardDescription>
                        Enter your email below to login to your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password">Password</Label>
                                <Link href="#" className="ml-auto inline-block text-sm underline">
                                    Forgot your password?
                                </Link>
                            </div>
                            <Input id="password" type="password" required/>
                        </div>
                        <Button type="button" className="w-full" onClick={() =>
                            handleFetchingToken()}>
                            Login
                        </Button>
                        <Button variant="outline" className="w-full">
                            Login with Google
                        </Button>
                    </div>
                    <div className="mt-4 text-center text-sm">
                        Don&apos;t have an account?{" "}
                        <Link href="#" className="underline hover:cursor-pointer">
                            Sign up
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>

    )
}
