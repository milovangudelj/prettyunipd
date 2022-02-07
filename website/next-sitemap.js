const siteUrl = "https://prettyu.uniorari.it";

module.exports = {
	siteUrl,
	generateRobotsTxt: true,
	alternateRefs: [
		{
			href: `${siteUrl}/en`,
			hreflang: "en",
		},
	],
	exclude: ["/en", "/en/*"],
};
