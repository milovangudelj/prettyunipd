import { useState } from "react";

type AnnotationType = "note" | "warning" | "error";

interface Annotation {
	children: JSX.Element | React.ReactChildren;
	className?: string;
	type?: AnnotationType;
}

const Annotation = ({ children, className, type = "note" }: Annotation) => {
	const [title, setTitle] = useState(
		type[0].toUpperCase() + type.substring(1)
	);

	return (
		<div className={`w-full ${className}`}>
			<div className="bg-primary-50 dark:bg-grey-800 border-l-primary-500 dark:border-l-primary-400 text-primary-900 dark:text-grey-50 border-l-4 p-4 pl-3">
				<span className="mb-4 block font-bold">{title}</span>
				<div>{children}</div>
			</div>
		</div>
	);
};

export default Annotation;
