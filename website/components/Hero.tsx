import { useRouter } from "next/router";
import Button from "./Button";
import { ChromeLogo, FirefoxLogo } from "./Icon";
import Logo from "./Logo";

const Hero = ({ otherHandler }) => {
	const router = useRouter();

	return (
		<main className="py-16">
			<div className="px-4">
				<Logo />
				<h1 className="text-grey-900 dark:text-grey-50 mt-16 mb-8 max-w-[13ch] text-3xl font-bold leading-tight">
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
				<p className="leading-body mb-16 text-base font-semibold">
					Tired of seeing and using that old, clunky interface? Pretty U
					will replace it with a much more user friendly version.
				</p>
				<div>
					<span className="text-primary-500 dark:text-primary-400 text-sm font-medium uppercase leading-tight">
						Get it on
					</span>
					<div className="mt-4 flex flex-col space-y-4">
						<Button
							onClick={() => {
								router.push(
									"https://chrome.google.com/webstore/detail/pretty-unipd/paliadhebikeffllmbfcpmoahogiegcf"
								);
							}}
							iconLeft={<ChromeLogo aria-hidden={true} />}
							variant="chrome"
						>
							Chrome Web Store
						</Button>
						<Button
							onClick={() => {
								router.push(
									"https://addons.mozilla.org/it/firefox/addon/prettyunipd/"
								);
							}}
							iconLeft={<FirefoxLogo aria-hidden={true} />}
							variant="firefox"
						>
							Add-ons for Firefox
						</Button>
						<Button
							onClick={(e) => {
								otherHandler(e);
								router.push("#browser-x");
							}}
							variant="grey"
						>
							Other...
						</Button>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Hero;
