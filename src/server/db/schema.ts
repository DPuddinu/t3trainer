import { relations } from "drizzle-orm";
import {
  bigint,
  date,
  int,
  mysqlEnum,
  mysqlTableCreator,
  varchar
} from "drizzle-orm/mysql-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const mysqlTable = mysqlTableCreator((name) => `t3trainer_${name}`);

export const exerciseType = mysqlEnum('exercise_type', ['sets x reps', 'stripping', 'drop set', 'giant set'])
export const userRole = mysqlEnum('user_role', ['trainer', 'customer'])


export const users = mysqlTable("users", {
  id: varchar("id", { length: 255 }).notNull().primaryKey(),
  name: varchar("name", { length: 255 }),
  email: varchar("email", { length: 255 }).notNull(),
  image: varchar("image", { length: 255 }),
  trainedBy: varchar("trainer_id", { length: 255 }),
  role: userRole.notNull().default('customer')
});

export const workout = mysqlTable('workout', {
  id: bigint("id", { mode: "number" }).notNull().primaryKey().autoincrement(),
  name: varchar("name", { length: 256 }),
  trainerId: int("trainer_id"),
  createdAt: date('creation_date'),
  expireAt: date('expire_date'),
})

export const exercise = mysqlTable('exercise', {
  id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
  name: varchar("name", { length: 256 }),
  type: exerciseType,
});

export const usersRelations = relations(users, ({ many }) => ({
  workouts: many(workout)
}));

export const workoutRelations = relations(workout, ({ many, one }) => ({
  exercises: many(exercise),
  user: one(users, {
    fields: [workout.id],
    references: [users.id]
  }),
  trainer: one(users, {
    fields: [workout.trainerId],
    references: [users.id]
  }),
}));

export const exerciseRelations = relations(exercise, ({ one }) => ({
  workout: one(workout, {
    fields: [exercise.id],
    references: [workout.id]
  })
}));

// export const usersToWorkoutRelations = relations(usersToWorkouts, ({ one }) => ({
//   workout: one(workout, {
//     fields: [usersToWorkouts.workoutId],
//     references: [workout.id],
//   }),
//   user: one(user, {
//     fields: [usersToWorkouts.userId],
//     references: [user.id],
//   }),
// }));

