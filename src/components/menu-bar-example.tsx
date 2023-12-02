'use client'
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from "~/components/primitives/ui/menubar";

export const MenuBarExample = () => {

  return (
    <Menubar className="flex justify-between max-w-sm">
      <MenubarMenu >
        <MenubarTrigger className='grow justify-center '>Exercises</MenubarTrigger>
        <MenubarContent>

          <MenubarItem>New Window</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Share</MenubarItem>

        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu >
        <MenubarTrigger className='grow justify-center'>Workout Plans</MenubarTrigger>
        <MenubarContent>

          <MenubarItem>New Window</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Share</MenubarItem>

        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu >
        <MenubarTrigger className='grow justify-center'>Stats</MenubarTrigger>
        <MenubarContent>

          <MenubarItem>New Window</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Share</MenubarItem>

        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu >
        <MenubarTrigger className='grow justify-center'>Bills</MenubarTrigger>
        <MenubarContent>

          <MenubarItem>New Window</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Share</MenubarItem>

        </MenubarContent>
      </MenubarMenu>

    </Menubar>

  )
};

