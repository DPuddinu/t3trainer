'use client'

import type { PropsWithChildren } from "react";
import { Button } from "./primitives/ui/button";
import { useFormStatus } from "react-dom";
import { cn } from "~/utils";

export const SubmitButton = ({children}: PropsWithChildren) => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} className={cn(pending && 'bg-opacity-50')}>
      {pending? 'Submitting...': children}
    </Button>
  )
};

