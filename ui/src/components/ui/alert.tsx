import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
const alertVariants = cva("px-alert", {
  variants: { variant: { default: "px-alert-default", destructive: "px-alert-destructive" } },
  defaultVariants: { variant: "default" },
});
const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div ref={ref} role="alert" className={cn(alertVariants({ variant }), className)} {...props} />
));
Alert.displayName = "Alert";
const AlertTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h5 ref={ref} className={cn("px-alert-title", className)} {...props} />
  ),
);
AlertTitle.displayName = "AlertTitle";
const AlertDescription = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("px-alert-description", className)} {...props} />
  ),
);
AlertDescription.displayName = "AlertDescription";
export { Alert, AlertTitle, AlertDescription, alertVariants };
