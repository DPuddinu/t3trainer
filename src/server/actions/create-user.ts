"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { zfd } from "zod-form-data";
import { getServerAuthSession } from "../auth";
import { db } from "../db";
import { users } from "../db/schema";

const schema = zfd.formData({
  email: zfd.text(z.string().email()),
  name: zfd.text(z.string().min(3)),
});
export type Message = 'success' | 'error' | 'validation error';
export type Fields = {
  name: string;
  email: string;
}
export type CreateFormState = {
  message: Message | undefined,
  errors?: Record<keyof Fields, string> | undefined,
  filedValues?: Fields
}

export const createUser = async function (prevState: CreateFormState, formData: FormData): Promise<CreateFormState> {

  const parsed = schema.safeParse(formData);

  if(!parsed.success){
    return {
      message: 'validation error',
    }
  }
  const {email, name} = parsed.data;

  if (!name || !email) {
    return {
      message: 'validation error',
      errors: {
        email: email,
        name: name,
      }
    };
  }

  const trainer = await getServerAuthSession();
  const create = await db.insert(users).values({
    name: name,
    email: email,
    trainedBy: trainer?.user.id
  })

  if (create) {
    revalidatePath('/');
    return {
      message: 'success',
      filedValues: {
        email: '',
        name: ''
      }
    };
  }

  return { message: 'error' };
};
