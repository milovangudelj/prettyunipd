import { ArrowNarrowRightIcon, ArrowSmLeftIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useEffect, useState } from "react";
import ModCategory from "../components/ModCategory";
import Annotation from "../components/Annotation";

import { location } from "../variables";

export const getStaticProps = async () => {
	const mods = await fetch(`${location}/assets/collections/mods.json`).then(
		(res) => res.json()
	);

	return {
		props: {
			mods,
		},
	};
};

const Mods = ({ mods }) => {
	const [categories, setCategories] = useState(mods);

	return (
		<>
			<header className="bg-primary-500 py-16">
				<div className="px-4">
					<Link href="/" passHref>
						<a className="bg-primary-400 text-grey-50 ring-primary-400/30 focus:ring-primary-400/30 focus:bg-primary-600 flex w-max items-center rounded py-1 px-2 outline-none transition hover:ring-4 focus:ring-4">
							<ArrowSmLeftIcon className="text-grey-300 mr-1.5 h-5 w-5" />
							<span className="text-base font-normal">Home</span>
						</a>
					</Link>
					<div className="mt-8">
						<h1 className="text-grey-50 mb-4 text-2xl font-bold">
							Modifications list
						</h1>
						<p className="text-grey-300">
							Here you can find a list of all the modifications made by
							Pretty U to university&apos;s stock website UI.
						</p>
					</div>
				</div>
			</header>
			<Annotation className="mt-8">
				<p>
					URLs may contain wildcard characters like the asterisk. For
					example, in the following url it can be replaced with any of
					unipd&apos;s subdomain names.
				</p>
				<div className="text-grey-700 dark:text-grey-300 mt-4 flex items-center space-x-4 text-sm italic">
					<span>
						https://
						<span className="text-primary-500 dark:text-primary-400">
							*
						</span>
						.unipd.it
					</span>
					<ArrowNarrowRightIcon className="text-grey-500 h-5 w-5" />
					<span>
						https://
						<span className="text-primary-500 dark:text-primary-400">
							uniweb
						</span>
						.unipd.it
					</span>
				</div>
			</Annotation>
			<main className="flex flex-col space-y-16 py-8">
				{categories.map((category, idx) => (
					<ModCategory key={idx} data={category} />
				))}
			</main>
		</>
	);
};

export default Mods;
