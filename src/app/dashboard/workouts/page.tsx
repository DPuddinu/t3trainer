import { Suspense } from "react";
import { db } from "~/server/db";
import { workouts } from "~/server/db/schema";

export default async function HomePage() {
  const data = await db.select().from(workouts);

  return (
    <Suspense fallback={<div>loading workouts...</div>}>
      <div className="w-full flex flex-col p-2 grow">
        workouts:
        {data.map(d => <div key={d.id}>{d.name}</div>)}
      </div>
    </Suspense>
  );
}
