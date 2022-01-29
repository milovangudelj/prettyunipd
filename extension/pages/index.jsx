import Head from "next/head";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import { ExternalLinkIcon } from "@heroicons/react/solid";

export default function Home() {
	const [extensionName, setExtName] = useState("");
	const [introParagraph, setIntroPara] = useState("");
	const [moreLink, setMoreLink] = useState("");
	const [reloadBtn, setReloadBtn] = useState("");
	const [toggleBtn, setToggleBtn] = useState("");
	const [logoSrc, setLogoSrc] = useState("");
	const [enabled, setEnabled] = useState(true);

	useEffect(() => {
		setExtName(chrome.i18n.getMessage("extensionName"));
		setIntroPara(chrome.i18n.getMessage("introParagraph"));
		setMoreLink(chrome.i18n.getMessage("moreLink"));
		setReloadBtn(chrome.i18n.getMessage("reloadBtn"));
		setLogoSrc(chrome.runtime.getURL("images/logo.svg"));

		chrome.storage.sync.get("enabled", (data) => {
			setEnabled(data.enabled);
			setToggleBtn(
				chrome.i18n.getMessage(
					data.enabled ? "toggleBtn_enabled" : "toggleBtn_disabled"
				)
			);
		});
	}, []);

	useEffect(() => {
		setToggleBtn(
			chrome.i18n.getMessage(
				enabled ? "toggleBtn_enabled" : "toggleBtn_disabled"
			)
		);
	}, [enabled]);

	const reload = () => {
		chrome.tabs.reload();
	};

	const toggleEnabled = () => {
		setEnabled((currentEnabled) => {
			chrome.storage.sync.set({ enabled: !currentEnabled });
			return !currentEnabled;
		});
	};

	return (
		<div className="">
			<Head>
				<title>Pretty Unipd</title>
				<meta
					name="description"
					content="Make Unipd.it great again. Was it ever great tho?"
				/>
				<link rel="icon" href="/icons/favicon48.png" />
			</Head>

			<main className="">
				<div className="flex items-center mb-4">
					<span className="mr-2 h-min">
						<img src={logoSrc} alt="Logo di UniOrari" className="w-6" />
					</span>
					<h1 className="text-xl font-bold">{extensionName}</h1>
				</div>
				<p className="my-4">{introParagraph}</p>
				<span className="flex items-center my-4">
					<a
						onClick={() => {
							chrome.tabs.create({
								url: "https://upo.milovangudelj.com",
							});
						}}
						className="cursor-pointer hover:underline"
					>
						{moreLink}
					</a>
					<ExternalLinkIcon className="block h-5 w-5 ml-1 text-on-surface-me dark:text-on-primary-me" />
				</span>

				<div className="flex items-center">
					<Button size="small" onClick={reload} className="mr-2">
						{reloadBtn}
					</Button>
					<Button size="small" outlined onClick={toggleEnabled}>
						{toggleBtn}
					</Button>
				</div>
			</main>
		</div>
	);
}
