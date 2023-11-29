'use client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { Logged } from "~/components/logged/logged";
import { Login } from "~/components/login";

const queryClient = new QueryClient()

export default function HomePage() {

  const session = useSession();
  return (
    <QueryClientProvider client={queryClient}>

      <main className="flex h-screen">
        {session?.data?.user ? <Logged /> : <Login />}
      </main>

    </QueryClientProvider>

  );
}
