import * as React from "react";
import { Command as CommandPrimitive } from "cmdk";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive ref={ref} className={cn("px-command", className)} {...props} />
));
Command.displayName = CommandPrimitive.displayName;
const CommandDialog = ({
  children,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Dialog>) => (
  <CommandPrimitive.Dialog {...props}>{children}</CommandPrimitive.Dialog>
);
const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div className="px-command-input-wrap">
    <Search />
    <CommandPrimitive.Input ref={ref} className={cn("px-command-input", className)} {...props} />
  </div>
));
CommandInput.displayName = CommandPrimitive.Input.displayName;
const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List ref={ref} className={cn("px-command-list", className)} {...props} />
));
CommandList.displayName = CommandPrimitive.List.displayName;
const CommandEmpty = CommandPrimitive.Empty;
const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group ref={ref} className={cn("px-command-group", className)} {...props} />
));
CommandGroup.displayName = CommandPrimitive.Group.displayName;
const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item ref={ref} className={cn("px-command-item", className)} {...props} />
));
CommandItem.displayName = CommandPrimitive.Item.displayName;
const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator ref={ref} className={cn("px-menu-separator", className)} {...props} />
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;
const CommandShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => (
  <span className={cn("px-dropdown-shortcut", className)} {...props} />
);
export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
  CommandShortcut,
};
