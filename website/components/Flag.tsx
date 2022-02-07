type FlagProps = {
	country: "it" | "en";
};

const Flag = ({ country }: FlagProps) => {
	let flag;

	switch (country) {
		case "it":
			flag = (
				<svg
					width="18"
					height="12"
					viewBox="0 0 18 12"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<mask
						id="mask0_273_5072"
						style={{ maskType: "alpha" }}
						maskUnits="userSpaceOnUse"
						x="0"
						y="0"
						width="18"
						height="12"
					>
						<path
							d="M16 0H2.40005C1.51639 0 0.800049 0.716344 0.800049 1.6V10.4C0.800049 11.2837 1.51639 12 2.40005 12H16C16.8837 12 17.6 11.2837 17.6 10.4V1.6C17.6 0.716344 16.8837 0 16 0Z"
							fill="white"
						/>
					</mask>
					<g mask="url(#mask0_273_5072)">
						<path
							d="M16 0H2.40005C1.51639 0 0.800049 0.716344 0.800049 1.6V10.4C0.800049 11.2837 1.51639 12 2.40005 12H16C16.8837 12 17.6 11.2837 17.6 10.4V1.6C17.6 0.716344 16.8837 0 16 0Z"
							fill="white"
						/>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M0.800049 0H6.40005V12H0.800049V0Z"
							fill="#009342"
						/>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M12 0H17.6V12H12V0Z"
							fill="#D02832"
						/>
						<path
							d="M16.0001 0.400024H2.40007C1.73733 0.400024 1.20007 0.937283 1.20007 1.60002V10.4C1.20007 11.0628 1.73733 11.6 2.40007 11.6H16.0001C16.6628 11.6 17.2001 11.0628 17.2001 10.4V1.60002C17.2001 0.937283 16.6628 0.400024 16.0001 0.400024Z"
							stroke="black"
							strokeOpacity="0.1"
						/>
					</g>
				</svg>
			);
			break;
		case "en":
			flag = (
				<svg
					width="17"
					height="12"
					viewBox="0 0 17 12"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<mask
						id="mask0_273_5070"
						style={{ maskType: "alpha" }}
						maskUnits="userSpaceOnUse"
						x="0"
						y="0"
						width="17"
						height="12"
					>
						<path
							d="M15.2 0H1.6C0.716344 0 0 0.716344 0 1.6V10.4C0 11.2837 0.716344 12 1.6 12H15.2C16.0837 12 16.8 11.2837 16.8 10.4V1.6C16.8 0.716344 16.0837 0 15.2 0Z"
							fill="white"
						/>
					</mask>
					<g mask="url(#mask0_273_5070)">
						<path
							d="M15.2 0H1.6C0.716344 0 0 0.716344 0 1.6V10.4C0 11.2837 0.716344 12 1.6 12H15.2C16.0837 12 16.8 11.2837 16.8 10.4V1.6C16.8 0.716344 16.0837 0 15.2 0Z"
							fill="#22438B"
						/>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M2.39997 0.800049L0.779175 0.820849L0.799975 2.40005L14.3856 11.2224L16.0152 11.1928L15.9848 9.62325L2.39997 0.800049Z"
							fill="white"
						/>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M1.60005 0.800049L0.800049 1.60005L15.2 11.2L16 10.4L1.60005 0.800049Z"
							fill="#C7152A"
						/>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M14.4 0.800049H16V2.40005C16 2.40005 6.60002 8.31685 2.41442 11.2224C2.36402 11.2576 0.816017 11.2248 0.816017 11.2248L0.692017 9.70405L14.4 0.800049Z"
							fill="white"
						/>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M15.2344 0.777588L16 1.59999L1.60005 11.2L0.800049 10.4L15.2344 0.777588Z"
							fill="#C7152A"
						/>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M6.40005 0.800049H10.4V4.00005H16V8.00005H10.4V11.2H6.40005V8.00005H0.800049V4.00005H6.40005V0.800049Z"
							fill="white"
						/>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M7.20005 0.800049H9.60005V4.80005H16V7.20005H9.60005V11.2H7.20005V7.20005H0.800049V4.80005H7.20005V0.800049Z"
							fill="#C7152A"
						/>
						<path
							d="M15.2 0.400024H1.60002C0.937283 0.400024 0.400024 0.937283 0.400024 1.60002V10.4C0.400024 11.0628 0.937283 11.6 1.60002 11.6H15.2C15.8628 11.6 16.4 11.0628 16.4 10.4V1.60002C16.4 0.937283 15.8628 0.400024 15.2 0.400024Z"
							stroke="black"
							strokeOpacity="0.1"
						/>
					</g>
				</svg>
			);
			break;

		default:
			flag = (
				<svg
					width="18"
					height="12"
					viewBox="0 0 18 12"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<mask
						id="mask0_273_5072"
						style={{ maskType: "alpha" }}
						maskUnits="userSpaceOnUse"
						x="0"
						y="0"
						width="18"
						height="12"
					>
						<path
							d="M16 0H2.40005C1.51639 0 0.800049 0.716344 0.800049 1.6V10.4C0.800049 11.2837 1.51639 12 2.40005 12H16C16.8837 12 17.6 11.2837 17.6 10.4V1.6C17.6 0.716344 16.8837 0 16 0Z"
							fill="white"
						/>
					</mask>
					<g mask="url(#mask0_273_5072)">
						<path
							d="M16 0H2.40005C1.51639 0 0.800049 0.716344 0.800049 1.6V10.4C0.800049 11.2837 1.51639 12 2.40005 12H16C16.8837 12 17.6 11.2837 17.6 10.4V1.6C17.6 0.716344 16.8837 0 16 0Z"
							fill="white"
						/>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M0.800049 0H6.40005V12H0.800049V0Z"
							fill="#009342"
						/>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M12 0H17.6V12H12V0Z"
							fill="#D02832"
						/>
						<path
							d="M16.0001 0.400024H2.40007C1.73733 0.400024 1.20007 0.937283 1.20007 1.60002V10.4C1.20007 11.0628 1.73733 11.6 2.40007 11.6H16.0001C16.6628 11.6 17.2001 11.0628 17.2001 10.4V1.60002C17.2001 0.937283 16.6628 0.400024 16.0001 0.400024Z"
							stroke="black"
							strokeOpacity="0.1"
						/>
					</g>
				</svg>
			);
			break;
	}

	return <span>{flag}</span>;
};

export default Flag;
