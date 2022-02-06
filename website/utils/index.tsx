import Link from "next/link";

/**
 * Returns a fragment with all MD links converted to either 'a' or 'Link' tags
 */
export const parseURLs = (input: string) => {
	const titleRegex = /\[((?:[^\[\]\\]|\\.)+)\]/i;
	const hrefRegex =
		/\(((?:(?:https?:\/)?\/(?:[-A-Z0-9+&@#\/%=~_|\[\]](?= *\))|[-A-Z0-9+&@#\/%?=~_|\[\]!:,.;](?! *\))|\([-A-Z0-9+&@#\/%?=~_|\[\]!:,.;(]*\))+) *)\)/i;

	const splitted = input.split(
		/(\[(?:(?:[^\[\]\\]|\\.)+)\]\((?:(?:https?:\/)?\/(?:[-A-Z0-9+&@#\/%=~_|\[\]](?= *\))|[-A-Z0-9+&@#\/%?=~_|\[\]!:,.;](?! *\))|\([-A-Z0-9+&@#\/%?=~_|\[\]!:,.;(]*\))+) *\))/gim
	);

	return (
		<>
			{splitted.map((chunk, idx) => {
				if (!chunk.includes("](")) return chunk;

				const title = chunk.match(titleRegex)[1];
				const href = chunk.match(hrefRegex)[1];

				return href.includes("http") ? (
					<a key={idx} href={href} rel="noreferrer" target="_blank">
						{title}
					</a>
				) : (
					<Link key={idx} href={href}>
						{title}
					</Link>
				);
			})}
		</>
	);
};

/**
 * Returns a fragment with all asterisks wrapped by a span element
 */
export const formatAst = (url: string) => {
	let splitted = url.split(/(\*)/g);

	return (
		<>
			{splitted.map((s, idx) => {
				return s === "*" ? (
					<span
						key={idx}
						className="text-primary-500 dark:text-primary-400"
					>
						{s}
					</span>
				) : (
					s
				);
			})}
		</>
	);
};
