import { AlignJustify } from "lucide-react";
import type { PropsWithChildren } from "react";
import { LogoutButton } from "~/components/logout-button";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/primitives/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "~/components/primitives/ui/dropdown-menu";
import { Navbar, NavbarContent, NavbarOptions } from "~/components/primitives/ui/navbar";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "~/components/primitives/ui/sheet";
import { getServerAuthSession } from "~/server/auth";

export const metadata = {
  title: "Dashboard",
  description: "dashboard page",
};

export default async function Layout({ children }: PropsWithChildren) {
  return (
    <Sheet>
      <div className="w-full flex flex-col">
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

async function Header() {
  const session = await getServerAuthSession();

  return <Navbar className="bg-destructive">
    <NavbarContent>
      <SheetTrigger>
        <AlignJustify />
      </SheetTrigger>
    </NavbarContent>
    <NavbarOptions>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="flex gap-2 items-center">
            <span className="text-lg text-foreground font-medium">{session?.user.name}</span>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-2">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem >
            <LogoutButton />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </NavbarOptions>
  </Navbar>
}