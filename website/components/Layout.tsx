import Divide from "./Divide";
import Footer from "./Footer";

const Layout = (props) => {
	return (
		<div className="bg-grey-50 dark:bg-grey-900 min-h-screen">
			{props.children}
			<Divide />
			<Footer />
		</div>
	);
};

export default Layout;
