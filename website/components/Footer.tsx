import Logo from "./Logo";

const Footer = () => {
	return (
		<footer className="py-8 lg:px-16">
			<div className="mx-4 flex items-center space-x-2 md:mx-8 lg:mx-auto lg:w-full lg:max-w-7xl">
				<span className="text-grey-500 text-sm">A project by</span>
				<Logo size="sm" og />
			</div>
		</footer>
	);
};

export default Footer;
