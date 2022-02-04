const dev: boolean = process.env.NODE_ENV !== "production";

export const location: string = dev
	? "http://localhost:3000"
	: "https://prettyu.uniorari.it";
