'use server'

import Link from "next/link";

export const MenuBar = () => {

  return (
    <div className="flex border rounded justify-between gap-2 max-w-sm p-1">
      <Link href='/dashboard/workouts' className="rounded p-2 hover:bg-primary-foreground cursor-pointer">Workout Plans</Link>
      <Link href='/workouts' className="rounded p-2 hover:bg-primary-foreground cursor-pointer">Exercises</Link>
      <Link href='/workouts' className="rounded p-2 hover:bg-primary-foreground cursor-pointer">Stats</Link>
      <Link href='/workouts' className="rounded p-2 hover:bg-primary-foreground cursor-pointer">Bills</Link>
    </div>

  )
};

