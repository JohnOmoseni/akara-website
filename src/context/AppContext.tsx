import { createContext, PropsWithChildren, useContext, useState } from "react";

type AppContextType = {
	openMenu: boolean;
	screenSize?: number;
	isNetwork: boolean;
	toggleMenu: (payload?: boolean) => void;
	handleResize: (payload: any) => void;
	handleNetwork: (payload: any) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export default function AppContextProvider({
	children,
	...props
}: PropsWithChildren) {
	const [openMenu, setOpenMenu] = useState(false);
	const [isNetwork, setIsNetwork] = useState(false);
	const [screenSize, setScreenSize] = useState<number | undefined>(undefined);

	const handleResize = (payload: any) => {
		setScreenSize(payload);
	};

	const handleNetwork = (payload: any) => {
		setIsNetwork(payload);
	};

	const toggleMenu = (payload?: boolean) => {
		if (payload) {
			setOpenMenu(payload);
		} else {
			setOpenMenu(!openMenu);
		}
	};

	return (
		<AppContext.Provider
			value={{
				openMenu,
				screenSize,
				isNetwork,
				handleResize,
				handleNetwork,
				toggleMenu,
			}}
			{...props}
		>
			{children}
		</AppContext.Provider>
	);
}

export function useAppContext() {
	const context = useContext(AppContext);

	if (!context) {
		throw new Error("useAppContext must be used within an AppContextProvider");
	}

	return context;
}
