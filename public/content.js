console.log("Pretty Unipd - v0.1.0");

chrome.storage.sync.get("enabled", (data) => {
	if (data.enabled) inject();
});

const inject = () => {
	const injectScript = document.createElement("script");
	injectScript.setAttribute("type", "application/javascript");
	injectScript.setAttribute("src", chrome.runtime.getURL("scripts/inject.js"));
	document.head.appendChild(injectScript);
};
