import Logo from "./Logo";
import ThemeSwitch from "./ThemeSwitch";

const Footer = ({ text }) => {
	return (
		<footer className="py-8 lg:px-16 ">
			<div className="mx-4 flex items-center justify-between md:mx-8 lg:mx-auto lg:w-full lg:max-w-7xl">
				<div className="flex items-center space-x-2">
					<span className="text-grey-500 text-sm">{text?.projectBy}</span>
					<Logo size="sm" og />
				</div>
				<ThemeSwitch text={text.themeSwitch} />
			</div>
		</footer>
	);
};

export default Footer;
