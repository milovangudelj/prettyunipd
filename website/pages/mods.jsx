import { ArrowSmLeftIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useEffect, useState } from "react";
import ModCategory from "../components/ModCategory";

import mods from "../assets/mods.json";

import { location } from "../variables";

// export const getStaticProps = async () => {
// 	const mods = await fetch(`${location}/assets/collections/mods.json`).then(
// 		(res) => res.json()
// 	);

// 	return {
// 		props: {
// 			mods,
// 		},
// 	};
// };

const Mods = () => {
	const [categories, setCategories] = useState(mods);

	return (
		<>
			<section className="bg-primary-500 py-16">
				<div className="px-4">
					<Link href="/" passHref>
						<a className="bg-on-primary-le text-on-primary-me hover:text-on-primary-he flex w-max items-center rounded py-1 px-2 transition">
							<ArrowSmLeftIcon className=" mr-1.5 h-5 w-5" />
							<span className="text-base font-normal">Home</span>
						</a>
					</Link>
					<div className="mt-8">
						<h1 className="text-on-primary-he mb-4 text-3xl font-bold">
							Modifications list
						</h1>
						<p className="text-on-primary-me text-base font-normal">
							Here you can find a list of all the modifications made by
							Pretty U to university&apos;s stock website UI.
						</p>
					</div>
				</div>
			</section>
			<section className="flex flex-col space-y-16 py-16">
				{categories.map((category, idx) => (
					<ModCategory key={idx} data={category} />
				))}
			</section>
		</>
	);
};

export default Mods;
