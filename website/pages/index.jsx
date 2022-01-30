import Head from "next/head";

import Logo from "../components/Logo";

export default function Home() {
	return (
		<div className="bg-grey-100 text-on-surface-he min-h-screen">
			<Head>
				<title>Pretty Unipd</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="p-4">
				<h1 className="mb-4 text-5xl font-bold">Pretty Unipd</h1>
				<p>
					A neat little extension that modifies the look of parts of
					Unipd.it and it&apos;s pages.
				</p>
			</main>
			<div className="absolute bottom-2 right-2 flex items-baseline">
				<span className="mr-2 text-slate-500">A project by </span>
				<Logo />
			</div>
		</div>
	);
}
