import { useEffect, useState } from "react";
import { useTheme } from "../lib/theme";
import Divide from "./Divide";
import Footer from "./Footer";

const Layout = (props) => {
	const { dark } = useTheme();

	return (
		<div className={dark ? "dark" : undefined}>
			<div className="bg-grey-50 dark:bg-grey-900 min-h-screen">
				{props.children}
				<Divide />
				<Footer text={props.footerText} />
			</div>
		</div>
	);
};

export default Layout;
