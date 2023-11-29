import { AlignJustify } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../primitives/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../primitives/ui/dropdown-menu";
import { Navbar, NavbarContent, NavbarOptions } from "../primitives/ui/navbar";
import { SheetTrigger } from "../primitives/ui/sheet";

export const LoggedContent = () => {

  return (
    <div className="w-full flex flex-col gap-2">
      <Header />
      <Content />
    </div>
  )
};

function Content() {
  return <div className="p-2 grow">
    <h1 className="text-3xl font-mono">Dashboard</h1>
    <section className="flex gap-2">
      
    </section>
  </div>
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
        </DropdownMenuContent>
      </DropdownMenu>
    </NavbarOptions>
  </Navbar>
}