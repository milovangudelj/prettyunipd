const dev = process.env.NODE_ENV !== "production";

export const location = dev
	? "http://localhost:3000"
	: "https://prettyu.uniorari.it";
