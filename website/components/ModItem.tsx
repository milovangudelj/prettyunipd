import { formatAst } from "../utils";

type ModData = any;

const ModItem = ({ data }: ModData) => {
	return (
		<li className="flex flex-col">
			<div className="flex items-center">
				<span className="bg-grey-500 dark:bg-grey-300 mx-2.5 mb-1 h-1 w-1 rounded-full"></span>
				<span className="text-grey-900 dark:text-grey-50 mb-1 font-medium">
					{data.title}
				</span>
			</div>
			<span className="text-grey-400 dark:text-grey-500 break-words pl-6 text-sm font-normal italic">
				{formatAst(data.url)}
			</span>
		</li>
	);
};

export default ModItem;
