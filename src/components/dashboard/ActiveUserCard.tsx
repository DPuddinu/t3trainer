'use server'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/primitives/ui/card";
import { db } from "~/server/db/index";
import { users } from "~/server/db/schema";

export async function ActiveUserCard() {
  // const data = await db.select().from(users);

  // console.log('users', data)
  return <Card className="w-full sm:max-w-sm" >
    <CardHeader>
      <CardTitle>Active Clients</CardTitle>
      <CardDescription>Lorem, ipsum dolor. </CardDescription>
    </CardHeader>
    <CardContent>

    </CardContent>
  </Card>
}