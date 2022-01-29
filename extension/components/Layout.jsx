const Layout = (props) => {
	return (
		<div className="w-[375px] p-4 text-base bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
			{props.children}
		</div>
	);
};

export default Layout;
