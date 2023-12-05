'use server'
import { Suspense, type PropsWithChildren } from "react";
import { CreateUser } from "~/components/crate-user";
import { ActiveUserCard } from "~/components/dashboard/active-user-card";
import { MenuBar } from "~/components/dashboard/menu-bar";

export default async function DashboardPage() {
  return (
    <Suspense fallback={<div>loading dashboard...</div>}>
      <Content />
    </Suspense>
  );
}

function Content() {

  return (
    <div className="w-full flex flex-col p-4 grow">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-mono">Dashboard</h1>
        <section className="flex flex-col gap-2">
          <div className="flex justify-between gap-2">
            <MenuBar />
            <CreateUser />
          </div>
          <CardContainer>
            <ActiveUserCard />
          </CardContainer>
        </section>
      </div>
    </div>
  )
}

function CardContainer({ children }: PropsWithChildren) {
  return <div className="grid-cols-1 md:grid-cols-4 gap-2 sm:flex-wrap grid sm:grid-cols-2">
    {children}
  </div>
}

