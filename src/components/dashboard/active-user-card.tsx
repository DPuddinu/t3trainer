'use server'
import { Card, CardHeader, CardTitle } from "~/components/primitives/ui/card";
import { db } from "~/server/db/index";
import { users } from "~/server/db/schema";

export async function ActiveUserCard() {
  const data = await db.select().from(users);

  return <Card className="w-full sm:w-fit sm:max-w-sm" >
    <CardHeader>
      <CardTitle>
        <div className="text-xl flex gap-4 items-center">
          <span>Active Clients</span>
          <span className="text-green-500 text-2xl">{data.length}</span>
        </div>
      </CardTitle>
    </CardHeader>
  </Card>
}