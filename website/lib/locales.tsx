import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useState } from "react";

const messagesContext = createContext(undefined);

export function MessagesProvider({ children }) {
	const messages = useProvideMessages();
	return (
		<messagesContext.Provider value={messages}>
			{children}
		</messagesContext.Provider>
	);
}

export const useMessages = () => {
	return useContext(messagesContext);
};

const useProvideMessages = () => {
	const [messages, setMessages] = useState(null);
	const { locale, locales, defaultLocale, pathname } = useRouter();
	const [page, setPage] = useState(null);

	useEffect(() => {
		const fetchMessages = async () => {
			const data = await import(`../_locales/${locale}/messages.json`);
			setMessages(data[pathname]);
		};

		fetchMessages();
		setPage(pathname);
	}, [locale, pathname]);

	return {
		messages,
		locale,
		page,
	};
};

export default useMessages;
