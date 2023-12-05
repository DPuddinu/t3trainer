'use server'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/primitives/ui/card";
import { db } from "~/server/db/index";
import { users } from "~/server/db/schema";

export async function ActiveUserCard() {
  const data = await db.select().from(users);

  return <Card className="w-full sm:max-w-sm" >
    <CardHeader>
      <CardTitle>Active Clients</CardTitle>
      <CardDescription>{data.length}</CardDescription>
    </CardHeader>
    <CardContent>

    </CardContent>
  </Card>
}