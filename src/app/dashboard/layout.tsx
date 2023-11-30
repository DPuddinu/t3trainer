import { AlignJustify } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/primitives/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "~/components/primitives/ui/dropdown-menu";
import { Navbar, NavbarContent, NavbarOptions } from "~/components/primitives/ui/navbar";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "~/components/primitives/ui/sheet";
import type { PropsWithChildren } from "react";
import { LogoutButton } from "~/components/logout-button";
export const metadata = {
  title: "T3Trainer",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function Layout({ children }: PropsWithChildren) {
  return (
    <Sheet>
      <div className="w-full flex flex-col gap-2">
        <Header />
        {children}
      </div>

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
  );
}

function Header() {
  return <Navbar>
    <NavbarContent>
      <SheetTrigger>
        <AlignJustify />
      </SheetTrigger>
    </NavbarContent>
    <NavbarOptions>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-2">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
          <DropdownMenuItem >
            <LogoutButton/>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </NavbarOptions>
  </Navbar>
}