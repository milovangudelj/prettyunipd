import Logo from "./Logo";

const Footer = () => {
	return (
		<footer className="py-8">
			<div className="flex items-center space-x-2 px-4">
				<span className="text-grey-500 text-sm">A project by</span>
				<Logo size="sm" og />
			</div>
		</footer>
	);
};

export default Footer;
