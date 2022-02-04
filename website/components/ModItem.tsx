type ModData = any;

const ModItem = ({ data }: ModData) => {
	/**
	 * Returns a fragment with all asterisks wrapped by a span element
	 */
	const format = (url: string) => {
		let splitted = url.split(/(\*)/g);

		return (
			<>
				{splitted.map((s) => {
					return s === "*" ? (
						<span className="text-primary-500 dark:text-primary-400">
							{s}
						</span>
					) : (
						s
					);
				})}
			</>
		);
	};

	return (
		<li className="flex flex-col">
			<div className="flex items-center">
				<span className="bg-grey-500 dark:bg-grey-300 mx-2.5 mb-1 h-1 w-1 rounded-full"></span>
				<span className="text-grey-900 dark:text-grey-50 mb-1 font-medium">
					{data.title}
				</span>
			</div>
			<span className="text-grey-400 dark:text-grey-500 break-words pl-6 text-sm font-normal italic">
				{format(data.url)}
			</span>
		</li>
	);
};

export default ModItem;
