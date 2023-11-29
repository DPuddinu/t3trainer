import { signOut } from "next-auth/react";
import { Button } from "./primitives/ui/button";

export const Logged = () => {

  return (
    <div className="w-full">
      <Button onClick={async () => signOut()}>Logout</Button>
    </div>
  )
};

