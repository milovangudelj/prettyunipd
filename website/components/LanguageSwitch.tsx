import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "../lib/theme";
import Flag from "./Flag";

const LanguageSwitch = ({ dark }: { dark?: boolean }) => {
	const { dark: pageDark } = useTheme();
	const [switchDark, setSwitchDark] = useState(
		dark !== null && dark !== undefined ? dark : pageDark
	);

	const router = useRouter();
	const enRef = useRef(null);
	const itRef = useRef(null);

	useEffect(() => {
		if (dark !== null && dark !== undefined) return;
		setSwitchDark(pageDark);
	}, [pageDark]);

	const handleSwitch = (e) => {
		let flag = enRef.current.contains(e.target) ? "en" : "it";

		router.push(
			{ pathname: router.pathname, query: router.query },
			router.asPath,
			{ locale: flag }
		);
	};

	return (
		<div className="flex space-x-1.5">
			<button
				onClick={handleSwitch}
				ref={enRef}
				className={`rounded py-1 px-1.5 transition ${
					router.locale === "en"
						? switchDark
							? "bg-grey-50/10"
							: "bg-primary-100"
						: (switchDark
								? "hover:ring-grey-50/10"
								: "hover:ring-primary-100") + " hover:ring-1"
				}`}
			>
				<Flag country="en" className="h-[15px] lg:h-[12px]" />
			</button>
			<button
				onClick={handleSwitch}
				ref={itRef}
				className={`rounded py-1 px-1.5 transition ${
					router.locale === "it"
						? switchDark
							? "bg-grey-50/10"
							: "bg-primary-100"
						: (switchDark
								? "hover:ring-grey-50/10"
								: "hover:ring-primary-100") + " hover:ring-1"
				}`}
			>
				<Flag country="it" className="h-[15px] lg:h-[12px]" />
			</button>
		</div>
	);
};

export default LanguageSwitch;
