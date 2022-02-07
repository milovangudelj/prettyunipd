import { useRouter } from "next/router";
import Layout from "../components/Layout";
import { ThemeProvider } from "../lib/theme";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	const router = useRouter();

	return (
		<ThemeProvider>
			<Layout footerText={pageProps.text}>
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
	);
}

export default MyApp;
