import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTheme } from "../lib/theme";
import Divide from "./Divide";
import Footer from "./Footer";

const Layout = (props) => {
	const { dark } = useTheme();
	const { pathname } = useRouter();

	return (
		<div className={`${dark && "dark"} overflow-hidden`}>
			<div className="md:scrollbar-visible scrollbar-slim scrollbar-hidden h-screen w-screen overflow-auto">
				<div className="bg-grey-50 dark:bg-grey-900 min-h-screen">
					{props.children}
					{(pathname === "/" || pathname === "/mods") && (
						<>
							<Divide />
							<Footer text={props.footerText} />
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default Layout;
