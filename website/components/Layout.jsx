import Footer from "./Footer";

const Layout = (props) => {
	return (
		<div className="bg-grey-50 text-on-surface-he min-h-screen overflow-y-visible">
			{props.children}
			<Footer />
		</div>
	);
};

export default Layout;
