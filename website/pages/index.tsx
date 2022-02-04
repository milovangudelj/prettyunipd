import { useRef, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/solid";

import Hero from "../components/Hero";
import { location } from "../variables";
import Divide from "../components/Divide";

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
				>
					Chrome Web Store
				</a>{" "}
				or from{" "}
				<a
					href="https://addons.mozilla.org/it/firefox/addon/prettyunipd/"
					target="_blank"
					rel="noreferrer"
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
				>
					major browsers
				</a>{" "}
				except Safari. If your browser is{" "}
				<a
					href="https://en.wikipedia.org/wiki/Chromium_(web_browser)"
					target="_blank"
					rel="noreferrer"
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
				<a href="https://unipd.it" target="_blank" rel="noreferrer">
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
		q: "Something is missing",
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
		title: "Better UI",
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
		title: "Easier navigation",
		text: (
			<>
				Navigate the site easily with the new simplified navigation bar. See
				the full list of modificationas in the{" "}
				<Link href="/mods" passHref>
					<a>mods page</a>
				</Link>
				.
			</>
		),
		img: "/assets/images/comparison_2.png",
		imgAlt: "DEI navbar comparison",
	},
	{
		title: "Secure by default",
		text: (
			<>
				Pretty U only modifies the structure and look of the UI, it
				doesn&apos;t interfere with the page&apos;s data fetching and
				authentication logic.
			</>
		),
		img: "/assets/images/code_screenshot.png",
		imgAlt: "Screenshot of the scripts' code",
	},
];

export default function Home() {
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

			{/* Hero section */}
			<Hero otherHandler={toggleBrowserX} />
			<Divide />

			{/* Value prop */}
			<section className="flex flex-col space-y-16 py-16 lg:space-y-24 lg:px-16 lg:py-24">
				{sections.map((section, idx) => (
					<div
						key={idx}
						className="mx-4 flex flex-col md:mx-8 md:flex-row md:items-center lg:mx-auto lg:w-full lg:max-w-7xl"
					>
						<div
							className={`mb-8 md:mb-0 md:mr-8 ${
								idx % 2 !== 0 && "md:order-last"
							} lg:w-2/5`}
						>
							<h2 className="text-grey-900 dark:text-grey-50 mb-4 text-2xl font-bold">
								{section.title}
							</h2>
							<p className="lg:max-w-[45ch]">{section.text}</p>
						</div>
						<img
							src={section.img}
							alt={section.imgAlt}
							className="-mx-4 w-screen max-w-none md:mx-0 md:w-[calc(50%-16px)] lg:w-3/5"
						/>
					</div>
				))}
			</section>
			<Divide />

			{/* FAQs */}
			<section className="py-16 lg:px-16 lg:py-24">
				<div className="mx-4 flex flex-col space-y-8 md:mx-8 md:flex-row md:space-y-0 md:space-x-8 lg:mx-auto lg:w-full lg:max-w-7xl">
					<div className="md:w-1/2 lg:w-2/5">
						<h2 className="text-grey-900 dark:text-grey-50 mb-4 text-xl font-medium">
							FAQs
						</h2>
						<p>
							Everything you need to know about Pretty U. Can&apos;t find
							the answer you were looking for? Feel free to reach out to
							me at{" "}
							<a
								href="mailto:i.like.martians@gmail.com"
								target="_blank"
								rel="noreferrer"
							>
								i.like.martians@gmail.com
							</a>
							.
						</p>
					</div>
					<ul className="flex flex-col space-y-4 md:w-1/2 lg:w-3/5">
						{faqs.map((faq, idx) => {
							return (
								<Disclosure key={idx}>
									{({ open }) => (
										<li
											id={faq?.id}
											className={`${
												(faq.id ? browserX : open) &&
												"bg-primary-50 dark:bg-grey-800"
											} rounded-lg transition-all`}
											onClick={faq?.id && handleClick}
										>
											<Disclosure.Button
												ref={faq.id && browserXRef}
												className={`hover:bg-primary-50 dark:hover:bg-grey-800 hover:text-grey-900 dark:hover:text-grey-50 ${
													(faq.id ? browserX : open)
														? "text-grey-900 dark:text-grey-50"
														: "text-grey-500 dark:text-grey-300"
												} flex w-full items-center rounded-lg p-2 transition`}
											>
												{(faq.id ? browserX : open) ? (
													<ChevronDownIcon
														aria-hidden={true}
														className="h-[20px] w-[20px]"
													/>
												) : (
													<ChevronRightIcon
														aria-hidden={true}
														className="h-[20px] w-[20px]"
													/>
												)}
												<span className="ml-1.5 font-semibold">
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
												<Disclosure.Panel className="p-4 pt-2 pl-[34px]">
													{faq.a}
												</Disclosure.Panel>
											</Transition>
										</li>
									)}
								</Disclosure>
							);
						})}
					</ul>
				</div>
			</section>
		</>
	);
}
