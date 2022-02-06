import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/solid";

import Hero from "../components/Hero";
import { location } from "../variables";
import Divide from "../components/Divide";
import messages from "../_locales/messages.json";
import { parseURLs } from "../utils";

export default function Home() {
	const [browserX, setBrowserX] = useState(false);
	const router = useRouter();
	const [text, setText] = useState(messages[router.locale][router.pathname]);

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
				<meta name="description" content={text.heroParagraph} />
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
				<link
					rel="alternate"
					href={`${location}/en${router.pathname}`}
					hrefLang="en"
				/>
			</Head>

			{/* Hero section */}
			<Hero otherHandler={toggleBrowserX} />
			<Divide />

			{/* Value prop */}
			<section className="flex flex-col space-y-16 py-16 lg:space-y-24 lg:px-16 lg:py-24">
				{text.sections.map((section, idx) => (
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
							<p className="lg:max-w-[45ch]">
								{parseURLs(section.text)}
							</p>
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
							{text.FAQs}
						</h2>
						<p>
							{text.FAQsParagraph}
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
						{text.faqs.map((faq, idx) => {
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
													{parseURLs(faq.q)}
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
													{parseURLs(faq.a)}
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
