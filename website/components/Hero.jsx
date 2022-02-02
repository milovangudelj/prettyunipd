import Logo from "./Logo";

const Hero = ({ otherHandler }) => {
	return (
		<div className="dark bg-grey-900 w-full py-16 lg:py-24">
			<main className="mx-auto flex w-full max-w-screen-xl flex-col space-y-8 px-4 md:px-8 lg:items-center lg:space-y-16 xl:px-4">
				<Logo pretty />
				<h1 className="text-grey-900 dark:text-on-primary-he text-3xl font-bold sm:text-4xl lg:text-5xl xl:text-6xl">
					Make{" "}
					<a
						href="https://unipd.it"
						className="decoration-uni underline underline-offset-2"
					>
						Unipd.it
					</a>{" "}
					great again.
				</h1>
				<p className="text-grey-500 dark:text-on-primary-me text-lg font-medium lg:text-center lg:text-xl">
					Tired of seeing and using that old, clunky interface?
					<br />
					Pretty U will replace it with a much more user friendly version.{" "}
				</p>
				<div className="flex flex-col space-y-4 lg:items-center">
					<span className="text-primary-500 text-xs uppercase">
						Get it on
					</span>
					<div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0 ">
						<a
							href="https://chrome.google.com/webstore/detail/pretty-unipd/paliadhebikeffllmbfcpmoahogiegcf"
							target="_blank"
							referrerPolicy="no-referrer"
							className="bg-chrome focus:ring-chrome focus:ring-offset-grey-900 focus:bg-chrome-alt flex w-full transform justify-center space-x-3 rounded-lg py-2 px-4 outline-none transition hover:-translate-y-0.5 focus:ring-2 focus:ring-offset-2 md:w-auto"
						>
							<img
								src="/assets/images/chrome-logo.svg"
								alt="Chrome Web Store Logo"
							/>
							<span className="text-on-primary-he">
								Chrome Web Store
							</span>
						</a>
						<a
							href="https://addons.mozilla.org/it/firefox/addon/prettyunipd/"
							target="_blank"
							referrerPolicy="no-referrer"
							className="bg-firefox focus:ring-firefox focus:ring-offset-grey-900 focus:bg-firefox-alt flex w-full transform justify-center space-x-3 rounded-lg py-2 px-4 outline-none transition hover:-translate-y-0.5 focus:ring-2 focus:ring-offset-2 md:w-auto"
						>
							<img
								src="/assets/images/firefox-logo.svg"
								alt="Add-ons for Firefox Logo"
							/>
							<span className="text-on-primary-he">
								Add-ons for Firefox
							</span>
						</a>
						<span>
							<a
								href="#browser-x"
								onClick={otherHandler}
								className="text-grey-500 dark:text-on-primary-me hover:text-grey-900 dark:hover:text-on-primary-he transition"
							>
								Other...
							</a>
						</span>
					</div>
				</div>
			</main>
		</div>
	);
};

export default Hero;
