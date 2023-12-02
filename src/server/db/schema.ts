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
  id: bigint("id", { mode: "number" }).notNull().primaryKey(),
  name: varchar("name", { length: 255 }),
  email: varchar("email", { length: 255 }).notNull(),
  image: varchar("image", { length: 255 }),
  trainedBy: varchar("trainer_id", { length: 255 }),
  role: userRole.notNull().default('customer')
});

export const workouts = mysqlTable('workout', {
  id: bigint("id", { mode: "number" }).notNull().primaryKey().autoincrement(),
  name: varchar("name", { length: 256 }),
  trainerId: int("trainer_id"),
  createdAt: date('creation_date'),
  expireAt: date('expire_date'),
  userId: bigint("user_id", { mode: "number" })
})

export const exercises = mysqlTable('exercise', {
  id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
  name: varchar("name", { length: 256 }),
  workoutId: bigint("workoutId", { mode: "number" })
});

export const bodyParts = mysqlTable('bodyparts', {
  id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
  name: varchar("name", { length: 256 }),
  exerciseId: bigint("exerciseId", { mode: "number" })
});

export const usersRelations = relations(users, ({ many }) => ({
  workouts: many(workouts)
}));

export const workoutRelations = relations(workouts, ({ many, one }) => ({
  exercises: many(exercises),
  user: one(users, {
    fields: [workouts.userId],
    references: [users.id]
  })
}));

export const exerciseRelations = relations(exercises, ({ one, many }) => ({
  workout: one(workouts, {
    fields: [exercises.workoutId],
    references: [workouts.id]
  }),
  bodyParts: many(bodyParts),
}));

export const bodyPartsRelations = relations(bodyParts, ({ one }) => ({
  exercise: one(exercises, {
    fields: [bodyParts.exerciseId],
    references: [exercises.id]
  }),
}));