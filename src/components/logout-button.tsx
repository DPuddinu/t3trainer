'use client'
import { signOut } from "next-auth/react";
import { Button } from "./primitives/ui/button";

export const LogoutButton = () => {

  return (
    <Button onClick={async () => await signOut()} className="w-full">
      Logout
    </Button>
  )
};

