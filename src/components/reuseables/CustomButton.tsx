import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { FC } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const buttonVariants = cva(
	"row-flex w-max  sm:whitespace-nowrap leading-4 rounded-md font-semibold capitalize tracking-wide subpixel-antialiased shadow-sm filter transition-sm duration-150 active:translate-y-0.5 active:brightness-90 disabled:border-none disabled:pointer-events-none disabled:opacity-60 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
	{
		variants: {
			variant: {
				default: "bg-secondary text-white hover:brightness-75",
				outline: "border border-secondary text-secondary",
				white:
					"bg-white text-foreground disabled:bg-grey-100 hover:brightness-90",
			},
			size: {
				default: "max-h-10 py-3 px-6",
				sm: "px-3 py-3",
				lg: "py-4 px-8 min-w-[200px] text-base",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	}
);

type ButtonVariantsProps = VariantProps<typeof buttonVariants>;

interface ButtonProps extends ButtonVariantsProps {
	title: string;
	className?: string;
	type?: "button" | "submit" | "reset";
	icon?: any;
	isLoading?: boolean;
	dir?: "left" | "right";
	disabled?: boolean;
	onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<ButtonProps> = ({
	title,
	className,
	type = "button",
	dir = "left",
	icon: Icon,
	onClick,
	isLoading = false,
	disabled = false,
	variant,
	size,
}) => {
	return (
		<button
			type={type}
			disabled={disabled || isLoading}
			onClick={onClick}
			className={cn(
				buttonVariants({ variant, size }),
				className,
				Icon && "gap-2"
			)}
		>
			{isLoading ? (
				<ClipLoader
					size={20}
					aria-label="Loading"
					data-testid="loader"
					className="row-flex mr-1.5 text-white"
				/>
			) : (
				<>
					{Icon && dir === "left" && <Icon className="size-5 text-white" />}
					{title}
					{Icon && dir === "right" && <Icon className="size-5 text-white" />}
				</>
			)}
		</button>
	);
};

export default Button;
