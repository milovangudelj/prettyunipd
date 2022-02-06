import { ExternalLinkIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Button from "./Button";
import { ChromeLogo, FirefoxLogo } from "./Icon";
import Logo from "./Logo";
import messages from "../_locales/messages.json";

const Hero = ({ otherHandler }) => {
	const router = useRouter();
	const [text, setText] = useState(messages[router.locale][router.pathname]);

	return (
		<main className="py-16 lg:py-24 lg:px-16">
			<div className="mx-4 md:mx-8 lg:mx-auto lg:flex lg:w-full lg:max-w-7xl lg:flex-col lg:items-center">
				<Logo />
				<h1 className="text-grey-900 dark:text-grey-50 mt-16 mb-8 max-w-[13ch] text-3xl font-bold leading-tight lg:max-w-none lg:text-center lg:text-5xl">
					Make{" "}
					<a
						href="https://unipd.it"
						target="_blank"
						rel="noreferrer"
						className="decoration-uni text-grey-900 dark:text-grey-50 underline underline-offset-2"
					>
						Unipd.it
					</a>{" "}
					great again.
				</h1>
				<p className="mb-16 max-w-[45ch] text-base font-semibold lg:text-center lg:text-lg">
					{text.heroParagraph}
				</p>
				<div className="lg:flex lg:flex-col lg:items-center">
					<span className="text-primary-500 dark:text-primary-400 text-sm font-medium uppercase leading-tight">
						{text.getItOn}
					</span>
					<div className="mt-4 flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
						<Button
							onClick={() => {
								window.open(
									"https://chrome.google.com/webstore/detail/pretty-unipd/paliadhebikeffllmbfcpmoahogiegcf",
									"_blank",
									"noreferrer"
								);
							}}
							iconLeft={<ChromeLogo aria-hidden={true} />}
							iconRight={
								<ExternalLinkIcon
									aria-hidden={true}
									className="h-[20px] w-[20px] text-white/70"
								/>
							}
							variant="chrome"
						>
							{text.chromeWebStore}
						</Button>
						<Button
							onClick={() => {
								window.open(
									"https://addons.mozilla.org/it/firefox/addon/prettyunipd/",
									"_blank",
									"noreferrer"
								);
							}}
							iconLeft={<FirefoxLogo aria-hidden={true} />}
							iconRight={
								<ExternalLinkIcon
									aria-hidden={true}
									className="h-[20px] w-[20px] text-white/70"
								/>
							}
							variant="firefox"
						>
							{text.addonsForFirefox}
						</Button>
						<Button
							onClick={(e) => {
								otherHandler(e);
								router.push("#browser-x");
							}}
							variant="grey"
						>
							{text.otherBrowser}
						</Button>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Hero;
