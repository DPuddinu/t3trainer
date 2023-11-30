import { type PropsWithChildren } from "react";
import { MenuBarExample } from "~/components/menu-bar-example";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/primitives/ui/card";

export default async function HomePage() {

  return (
    <div className="w-full flex flex-col p-2 grow">
      <Content />
    </div>
  );
}

function Content() {
  
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-mono">Dashboard</h1>
      <div className="w-full h-[1px] bg-secondary" />
      <section className="flex flex-col gap-2">
        <MenuBarExample/>

        <CardContainer>
          <CardInfo />
          <CardInfo />
          <CardInfo />
          <CardInfo />
        </CardContainer>
      </section>
    </div>
  )
}
function CardContainer({ children }: PropsWithChildren) {
  return <div className="grid-cols-1 md:grid-cols-4 gap-2 sm:flex-wrap grid sm:grid-cols-2">
    {children}
  </div>
}
function CardInfo() {

  return <Card className="w-full sm:max-w-sm">
    <CardHeader>
      <CardTitle>Active Users</CardTitle>
      <CardDescription>Lorem ipsum dolor sit amet.</CardDescription>
    </CardHeader>
    <CardContent>Lorem ipsum dolor sit amet consectetur adipisicing.</CardContent>
  </Card>
}