import Head from "next/head";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/solid";

import Hero from "../components/Hero";
import { useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

let faqs = [
	{
		q: "How do I install it?",
		a: (
			<>
				You can install it either from the{" "}
				<a
					href="https://chrome.google.com/webstore/detail/pretty-unipd/paliadhebikeffllmbfcpmoahogiegcf"
					target="_blank"
					rel="noreferrer"
					className="text-accent-400"
				>
					Chrome Web Store
				</a>{" "}
				or from{" "}
				<a
					href="https://addons.mozilla.org/it/firefox/addon/prettyunipd/"
					target="_blank"
					rel="noreferrer"
					className="text-accent-400"
				>
					Add-ons for Firefox
				</a>{" "}
				as you would for any other browser extension.
			</>
		),
	},
	{
		q: "What if I use browser X?",
		id: "browser-x",
		a: (
			<>
				Currently Pretty U is available on all{" "}
				<a
					href="https://gs.statcounter.com/browser-market-share/desktop/worldwide"
					target="_blank"
					rel="noreferrer"
					className="text-accent-400"
				>
					major browsers
				</a>{" "}
				except Safari. If your browser is{" "}
				<a
					href="https://en.wikipedia.org/wiki/Chromium_(web_browser)"
					target="_blank"
					rel="noreferrer"
					className="text-accent-400"
				>
					Chromium
				</a>{" "}
				based (e.g. Brave) then you can use it.
			</>
		),
	},
	{
		q: "Will you steal my data?",
		a: (
			<>
				What? Of course not. The extension was made to help myself and my
				fellow students navigate the intricate and sometimes outdated{" "}
				<a
					href="https://unipd.it"
					target="_blank"
					rel="noreferrer"
					className="text-accent-400"
				>
					unipd.it
				</a>{" "}
				UI.
			</>
		),
	},
	{
		q: "Does it work on mobile?",
		a: <>Unfortunately no. It is available only for desktop browsers.</>,
	},
	{
		q: "How can I disable it?",
		a: (
			<>
				If you click on the extension icon a popup should appear. From there
				you can enable and disable Pretty U. You will have to reload the
				page for the change to be applied.
			</>
		),
	},
	{
		q: "Something's off... What can I do?",
		a: (
			<>
				If something is missing or out of place you can disable the
				extension and reload the page. If after diong that you still see the
				issue, then it&apos;s a problem in the underlying page and not in
				Pretty U itself.
			</>
		),
	},
];

let sections = [
	{
		title: "How does it work?",
		text: (
			<>
				Pretty U injects some custom CSS and JS files in the page and uses
				them to improve the layout and design of the UI.
			</>
		),
		img: "/assets/images/comparison_1.png",
		imgAlt: "Login page comparison",
	},
	{
		title: "What changes?",
		text: (
			<>
				At the moment Pretty U will replace completely the login page and
				modify parts of the UI like the navigation bar. For a full list of
				modificationas refer to the{" "}
				<Link href="/modifications" passHref>
					<a className="text-primary-500">mods page</a>
				</Link>
				.
			</>
		),
		img: "/assets/images/comparison_2.png",
		imgAlt: "DEI navbar comparison",
	},
	{
		title: "Is it secure?",
		text: (
			<>
				Absolutely. Pretty U only modifies the structure and look of the UI,
				it doesn&apos;t interfere with the page&apos;s data fetching and
				authentication logic.
			</>
		),
		img: "/assets/images/code_screenshot.png",
		imgAlt: "Screenshot of the scripts' code",
	},
];

export default function Home() {
	const location = "https://prettyu.uniorari.it";
	const [browserX, setBrowserX] = useState(false);

	const browserXRef = useRef(null);

	const toggleBrowserX = (toggle = false) => {
		setBrowserX((currBrowserX) => (toggle === true ? !currBrowserX : true));
	};

	const handleClick = (e) => {
		if (browserXRef.current.contains(e.target)) toggleBrowserX(true);
	};

	return (
		<>
			<Head>
				<title>Pretty U — Make Unipd.it great again.</title>
				<meta
					name="title"
					content="Pretty U — Make Unipd.it great again."
				/>
				<meta
					name="description"
					content="Tired of seeing and using that old, clunky interface? Pretty U will replace it with a much more user friendly version."
				/>
				<link rel="icon" href="/favicon.ico" />
				<meta
					property="og:image"
					content={`${location}/assets/images/link_cover.png`}
				/>
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />
				<meta
					property="og:image"
					content={`${location}/assets/images/link_cover_small.png`}
				/>
				<meta property="og:image:width" content="600" />
				<meta property="og:image:height" content="315" />
			</Head>

			<Hero otherHandler={toggleBrowserX} />

			<div className="flex w-full flex-col space-y-8 py-16 md:space-y-16 lg:space-y-24 lg:py-24">
				{sections.map((section, idx) => (
					<section
						key={idx}
						className="mx-auto w-full max-w-screen-xl overflow-visible px-4 md:flex md:items-center md:px-8 xl:px-4"
					>
						<div
							className={`mb-8 flex flex-col space-y-2 md:mb-0 md:w-full ${
								idx % 2 !== 0 ? "order-last mr-0 lg:ml-24" : "lg:mr-24"
							}`}
						>
							<h2 className="text-grey-900 text-2xl font-bold sm:text-3xl md:text-4xl">
								{section.title}
							</h2>
							<p className="text-grey-500 max-w-[45ch] text-base">
								{section.text}
							</p>
						</div>
						<img
							src={section.img}
							alt={section.imgAlt}
							className="-ml-4 -mr-4 w-screen max-w-none sm:m-0 sm:w-full md:w-1/2 lg:max-w-screen-sm"
						/>
					</section>
				))}
			</div>

			<div className="bg-primary-500 w-full py-16 lg:py-24">
				<section className="mx-auto flex w-full max-w-screen-xl flex-col space-y-8 px-4 md:space-y-16 md:px-8 lg:flex-row lg:space-y-0 lg:space-x-24 xl:px-4">
					<div className="flex w-full flex-col space-y-4">
						<h2 className="text-on-primary-he text-xl font-medium sm:text-2xl md:text-3xl">
							FAQs
						</h2>
						<p className="text-on-primary-me text-base md:max-w-prose">
							Everything you need to know about Pretty U. Can&apos;t find
							the answer you were looking for? Feel free to reach out to
							me at{" "}
							<a
								href="mailto:i.like.martians@gmail.com"
								target="_blank"
								rel="noreferrer"
								className="text-accent-400"
							>
								i.like.martians@gmail.com
							</a>
							.
						</p>
					</div>
					<ul className="mx-auto flex w-full max-w-screen-xl flex-col space-y-4">
						{faqs.map((faq, idx) => {
							return (
								<Disclosure key={idx}>
									{({ open }) => (
										<li
											id={faq?.id}
											className={`${
												(faq.id ? browserX : open)
													? "bg-primary-600"
													: "bg-primary-500"
											} h-auto rounded-lg transition`}
											onClick={faq?.id && handleClick}
										>
											<Disclosure.Button
												ref={faq.id && browserXRef}
												className={`${
													(faq.id ? browserX : open)
														? "text-on-primary-he"
														: "text-on-primary-me hover:bg-primary-400"
												} hover:text-on-primary-he flex w-full items-center space-x-2 rounded-lg p-2 transition`}
											>
												{(faq.id ? browserX : open) ? (
													<ChevronDownIcon className="h-5 w-5" />
												) : (
													<ChevronRightIcon className="h-5 w-5" />
												)}
												<span className="text-lg font-medium">
													{faq.q}
												</span>
											</Disclosure.Button>

											<Transition
												show={faq.id ? browserX : open}
												enter="transition duration-200 ease-out"
												enterFrom="opacity-0"
												enterTo="opacity-100"
												leave="transition duration-100 ease-out"
												leaveFrom="opacity-100"
												leaveTo="opacity-0"
											>
												<Disclosure.Panel className="text-on-primary-me ml-7 p-2 pt-0 text-base">
													{faq.a}
												</Disclosure.Panel>
											</Transition>
										</li>
									)}
								</Disclosure>
							);
						})}
					</ul>
				</section>
			</div>
		</>
	);
}
