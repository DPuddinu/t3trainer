"use client";

import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type PropsWithChildren } from "react";

interface ProviderProps extends PropsWithChildren {
  session: Session | null;
}
const UserSessionProvider = ({ session, children }: ProviderProps) => {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  )
};

export default UserSessionProvider
