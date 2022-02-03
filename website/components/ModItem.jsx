const ModItem = ({ data }) => {
	return (
		<li className="flex flex-col">
			<div className="flex items-center">
				<span className="bg-grey-500 mx-2.5 mb-1 h-1 w-1 rounded-full"></span>
				<span className="text-grey-900 mb-1 text-base font-medium	">
					{data.title}
				</span>
			</div>
			<span className="text-on-surface-le break-words pl-6 text-xs font-normal">
				{data.url}
			</span>
		</li>
	);
};

export default ModItem;
