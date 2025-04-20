import { HTMLAttributes } from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../utils/cn";

type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
};

const Button = ({ className, size, variant, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={cn(buttonVariants({ variant, size }), className)}
    />
  );
};

const buttonVariants = cva("rounded-md font-semibold hover:opacity-50", {
  variants: {
    variant: {
      primary: "bg-gradient-to-r from-green-500 to-green-700 text-black",
      secondary: "bg-blue-300 text-black",
    },
    size: {
      sm: "px-2 py-1 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export default Button;
