'use client'

import { useMutation } from "@tanstack/react-query";
import { signIn } from "next-auth/react";
import { Button } from "./primitives/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./primitives/ui/card";
import { Spinner } from "./primitives/ui/spinner";

export const Login = () => {

  const { mutate, isPending } = useMutation({
    mutationFn: () => signIn('google'),
  });

  return (
    <div className="flex justify-center items-center w-full">
      <Card>
        <CardHeader>
          <CardTitle className="text-center">Login</CardTitle>
        </CardHeader>
        <CardContent>

        </CardContent>
        <CardFooter className="flex flex-col gap-2">
          <Button className="w-full" onClick={() => mutate()}>{isPending ? <Spinner /> : 'Login with Google'}</Button>
          <Button disabled>Login with Discord</Button>
        </CardFooter>
      </Card>
    </div>
  )
};

