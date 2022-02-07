import { Listbox, Transition } from "@headlessui/react";
import {
	CheckIcon,
	ChevronDownIcon,
	DesktopComputerIcon,
	MoonIcon,
	SelectorIcon,
	SunIcon,
} from "@heroicons/react/solid";
import { Fragment, useEffect, useRef, useState } from "react";
import { useTheme } from "../lib/theme";

const themes = [
	{
		id: 1,
		name: "System",
		value: "system",
		unavailable: false,
		icon: (
			<DesktopComputerIcon
				className="h-icon w-icon text-gray-400"
				aria-hidden="true"
			/>
		),
	},
	{
		id: 2,
		name: "Dark",
		value: "dark",
		unavailable: false,
		icon: (
			<MoonIcon className="h-icon w-icon text-gray-400" aria-hidden="true" />
		),
	},
	{
		id: 3,
		name: "Light",
		value: "light",
		unavailable: false,
		icon: (
			<SunIcon className="h-icon w-icon text-gray-400" aria-hidden="true" />
		),
	},
];

const ThemeSwitch = (props) => {
	const { theme, setTheme } = useTheme();
	const [selectedTheme, setSelectedTheme] = useState(
		themes.find((el) => el.value === theme)
	);

	const handleThemeChange = (selected) => {
		setSelectedTheme(selected);
		setTheme(selected.value || "system");
	};

	return (
		<Listbox value={selectedTheme} onChange={handleThemeChange}>
			{({ open }) => (
				<div className="relative">
					<Listbox.Button className="bg-grey-100 dark:bg-grey-800 ring-grey-200 dark:ring-grey-700 flex w-32 justify-between rounded px-2 py-1 outline-none transition hover:ring-2 focus:ring-2">
						<div className="flex w-max items-center space-x-1.5">
							<span className="dark:text-grey-500 text-grey-400 pointer-events-none">
								{selectedTheme.icon}
							</span>
							<span className="text-grey-900 dark:text-grey-50 block truncate text-sm font-normal">
								{selectedTheme.name}
							</span>
						</div>
						<span className="dark:text-grey-500 text-grey-400 pointer-events-none">
							<SelectorIcon
								className="h-icon w-icon text-gray-400"
								aria-hidden="true"
							/>
						</span>
					</Listbox.Button>
					<Transition
						show={open}
						leave="transition ease-in duration-100"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<Listbox.Options
							static
							className="bg-grey-100 dark:bg-grey-800 absolute bottom-full mb-1 max-h-60 w-full overflow-auto rounded py-1 text-sm shadow-lg focus:outline-none"
						>
							{themes.map((t) => (
								<Listbox.Option
									key={t.id}
									className={({ active }) =>
										`${
											active
												? "bg-amber-100 text-amber-900"
												: "text-gray-900"
										}
											  relative cursor-default select-none`
									}
									value={t}
									disabled={t.unavailable}
								>
									{({ active, selected }) => (
										<li
											className={`flex space-x-1.5 py-1 px-2 ${
												active
													? "bg-grey-200 dark:bg-grey-700 text-grey-900 dark:text-grey-50"
													: "text-grey-900 dark:text-grey-50"
											}`}
										>
											<span className="dark:text-grey-500 text-grey-400 pointer-events-none">
												{t.icon}
											</span>
											<span>{t.name}</span>
										</li>
									)}
								</Listbox.Option>
							))}
						</Listbox.Options>
					</Transition>
				</div>
			)}
		</Listbox>
	);
};

export default ThemeSwitch;
