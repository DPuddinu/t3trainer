import { forwardRef, type HTMLAttributes} from "react";
import { cn } from "~/utils";

const Navbar = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("w-full bg-secondary h-16 border shadow flex justify-between items-center p-2", className)}
    {...props}
  />
))
Navbar.displayName = "NavbarContent"

const NavbarContent = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex gap-2", className)}
    {...props}
  />
))
NavbarContent.displayName = "NavbarContent"

const NavbarOptions = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col gap-2 ", className)}
    {...props}
  />
))
NavbarOptions.displayName = "NavbarOptions"

export { Navbar, NavbarContent, NavbarOptions}