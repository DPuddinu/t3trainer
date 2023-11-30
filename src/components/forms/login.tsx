'use client'

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { Button } from "../primitives/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../primitives/ui/card";

export const LoginForm = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  return (
    <div className="flex justify-center items-center w-full">
      <Card>
        <CardHeader>
          <CardTitle className="text-center">Login</CardTitle>
        </CardHeader>
        <CardContent>

        </CardContent>
        <CardFooter className="flex flex-col gap-2">
          <Button className="w-full" onClick={async () => await signIn('google', {
            callbackUrl: callbackUrl ?? "/dashboard"
          })}>Login with Google</Button>
          <Button disabled>Login with Discord</Button>
        </CardFooter>
      </Card>
    </div>
  )
};

