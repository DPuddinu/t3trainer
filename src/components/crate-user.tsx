'use client'
import { useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";
import { createUser } from "~/server/actions/create-user";
import { Button } from "./primitives/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./primitives/ui/dialog";
import { Input } from "./primitives/ui/input";
import { SubmitButton } from "./submit-button";

export const CreateUser = () => {

  const [open, setOpen] = useState(false)
  const [formState, formAction] = useFormState(createUser, {
    message: undefined
  });

  const ref = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (formState.message === 'success') {
      setOpen(false);
    }

  }, [formState.message]);

  return (
    <Dialog open={open} >
      <DialogTrigger asChild onClick={() => setOpen(true)} >
        <Button variant='destructive'>Add client</Button>
      </DialogTrigger>
      <DialogContent onClose={() => setOpen(false)} onKeyDown={(e) => {
        if (e.code === 'Escape') {
          setOpen(false);
        }
      }}>
        <DialogHeader>
          <DialogTitle>Create Client</DialogTitle>
        </DialogHeader>
        <form ref={ref} action={formAction} className="flex flex-col gap-2">
          <Input type="name" name="name" placeholder="name" />
          <Input type="email" name='email' placeholder="Email" />
          <SubmitButton>Create</SubmitButton>
        </form>
        <p aria-live="polite" className="">
          {formState.message}
        </p>
      </DialogContent>
    </Dialog>
  )
};

