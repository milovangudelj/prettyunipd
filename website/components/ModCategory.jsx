import ModItem from "./ModItem";

const ModCategory = ({ data }) => {
	return (
		<div className="px-4">
			<div className="mb-8">
				<h2 className="text-grey-900 mb-4 text-2xl font-bold">
					{data.title}
				</h2>
				<p className="text-grey-500 text-base font-normal">
					{data.description}
				</p>
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
