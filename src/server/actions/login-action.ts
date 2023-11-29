"use server"; // don't forget to add this!

import { signIn } from "next-auth/react";
import { z } from "zod";
import { action } from "~/lib/safe-action";

// This schema is used to validate input from client.
const schema = z.object({}).nullish();

export const loginUser = action(schema, async () => {
  const user = await signIn('google')
  if (user) {
    return {
      success: "Successfully logged in",
    };
  }

  return { failure: "Incorrect credentials" };
});