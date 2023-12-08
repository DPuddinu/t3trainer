import { db, redis } from ".";
import { exercises, workouts } from "./schema";


async function main() {
  // await insertExercises();
  const chest_exercises = [
    "Barbell Bench Press",
    "Dumbbell Flyes",
    "Incline Bench Press",
    "Decline Bench Press",
    "Push-Ups"
  ]
  const op = await redis.lpush('exercises', ...chest_exercises)
  console.log(op)

}

async function insertExercises() {

  const now = new Date();


  const transaction = await db.transaction(async tx => {
    const wo = await db.insert(workouts).values({
      createdAt: now,
      expireAt: new Date(now.getTime() + 30 * 24 * 60 * 60),
      name: 'Chest',
      userId: 1,
      trainerId: 0
    });
    const ex = await db.insert(exercises).values(chest_exercises.map(ce => {
      return {
        name: ce,
        description: 'light weight',
        workoutId: wo[0].insertId
      }
    }))
  })
  console.log(transaction);

}
await main()
