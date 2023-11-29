import { MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from "@radix-ui/react-menubar";
import { signOut } from "next-auth/react";
import { Button } from "./primitives/ui/button";
import { Menubar } from "./primitives/ui/menubar";
import { Navbar, NavbarContent, NavbarOptions } from "./primitives/ui/navbar";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./primitives/ui/sheet";
import { ThemeSwitch } from "./primitives/ui/switch-theme";

export const Logged = () => {

  return (
    <Sheet>
      <Navbar>
        <NavbarContent>
          <Button>
            <SheetTrigger>Open</SheetTrigger>
          </Button>
          <Button>asdf</Button>
        </NavbarContent>
        <NavbarOptions>
          <Menubar className="px-2 bg-primary text-secondary">
            <MenubarMenu>
              <MenubarTrigger>File</MenubarTrigger>
              <MenubarContent>

                <MenubarItem>
                  <ThemeSwitch />
                </MenubarItem>
                <MenubarItem>
                  <Button onClick={async () => signOut()}>Logout</Button>
                </MenubarItem>
                
              </MenubarContent>
            </MenubarMenu>
            
          </Menubar>

         
        </NavbarOptions>
      </Navbar>

      <SheetContent>
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

