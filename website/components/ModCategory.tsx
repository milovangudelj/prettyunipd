import ModItem from "./ModItem";

type CategoryData = any;

const ModCategory = ({ data }: CategoryData) => {
	return (
		<div className="">
			<div className="mb-8">
				<h2 className="text-primary-500 dark:text-primary-400 mb-4 text-xl font-bold lg:text-2xl">
					{data.title}
				</h2>
				<p>{data.description}</p>
			</div>
			<ul className="flex flex-col space-y-4">
				{data.mods.map((mod, idx) => (
					<ModItem key={idx} data={mod} />
				))}
			</ul>
		</div>
	);
};

export default ModCategory;
