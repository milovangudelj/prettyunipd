import { useState } from "react";

const Button = ({
	children,
	variant = "primary",
	size,
	outlined = false,
	className = "",
	type,
	onClick,
	loading = false,
}) => {
	const [variants, setVariants] = useState({
		primary: "btn-primary",
		accent: "btn-accent",
		success: "btn-success",
		error: "btn-error",
	});
	const [sizes, setSizes] = useState({
		small: "btn-s",
		large: "btn-l",
	});

	return (
		<button
			disabled={loading}
			type={type}
			onClick={onClick}
			className={`btn ${variants[variant]} ${size && sizes[size]} ${
				outlined && "btn-outlined"
			} ${loading && "bg-opacity-50 border-opacity-50"} ${className}`}
		>
			{children}
		</button>
	);
};

export default Button;
