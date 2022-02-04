import { MouseEventHandler, useState } from "react";

type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = Pick<
	T,
	Exclude<keyof T, Keys>
> &
	{
		[K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>;
	}[Keys];

type ButtonType = "contained" | "outlined" | "text";
type ButtonVariant = "primary" | "accent" | "grey" | "chrome" | "firefox";

interface Button {
	children?: string | JSX.Element | React.ReactElement;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	className?: string;
	iconLeft?: JSX.Element;
	iconRight?: JSX.Element;
	type?: ButtonType;
	variant?: ButtonVariant;
}

type ButtonProps = RequireAtLeastOne<
	Button,
	"children" | "iconLeft" | "iconRight"
>;

const Button = ({
	children,
	onClick,
	className,
	iconLeft,
	iconRight,
	type = "contained",
	variant = "primary",
}: ButtonProps) => {
	const [looks, setLooks] = useState({
		primary: {
			contained: "btn--primary",
			outlined: "",
			text: "",
		},
		accent: {
			contained: "btn--accent",
			outlined: "",
			text: "",
		},
		grey: {
			contained: "btn--grey",
			outlined: "",
			text: "",
		},
		chrome: {
			contained: "btn--chrome",
			outlined: "",
			text: "",
		},
		firefox: {
			contained: "btn--firefox",
			outlined: "",
			text: "",
		},
	});

	return (
		<button
			onClick={onClick}
			className={looks[variant][type] + " " + className}
		>
			{iconLeft && <span className="mr-3">{iconLeft}</span>}
			{children}
			{iconRight && <span className="ml-3">{iconRight}</span>}
		</button>
	);
};

export default Button;
