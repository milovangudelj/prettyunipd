import Logo from "./Logo";

const Footer = () => {
	return (
		<footer className="bg-grey-50 dark:bg-grey-900 w-full pt-8 pb-4 md:pt-24 md:pb-10">
			<div className="divide-grey-200 dark:divide-on-primary-le mx-auto flex w-full max-w-screen-xl flex-col space-y-8 divide-y px-4 md:divide-none md:px-8 xl:px-4">
				<div className="flex flex-col space-y-4">
					<Logo pretty size={"sm"} className="block md:hidden" />
					<Logo pretty className="hidden md:block" />
					<div className="flex flex-col space-y-2 md:hidden">
						<span className="text-on-surface-me dark:text-on-primary-me mr-2 text-sm text-slate-500">
							A project by
						</span>
						<Logo size="sm" />
					</div>
				</div>
				<div className="pt-4 md:flex md:justify-between md:pt-0">
					<span className="text-on-surface-le dark:text-on-primary-le text-sm">
						© 2022 Uniorari. All rights reserved.
					</span>
					<div className="hidden md:flex md:items-center md:space-x-2">
						<span className="text-on-surface-me dark:text-on-primary-me mr-2 text-sm text-slate-500">
							A project by
						</span>
						<Logo size="md" />
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
