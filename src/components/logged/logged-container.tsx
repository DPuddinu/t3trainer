import type { PropsWithChildren } from "react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "../primitives/ui/sheet";

export const LoggedContainer = ({ children }: PropsWithChildren) => {

  return (
    <Sheet>
      {children}
      <SheetContent side='left'>
        <SheetHeader>
          <SheetTitle>Are you sure absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your account
            and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
};

