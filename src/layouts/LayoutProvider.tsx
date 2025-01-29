import { Suspense, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";
import { useAppContext } from "@/context/AppContext";
import { AnimatePresence } from "framer-motion";
import FallbackLoader from "@/components/fallback/FallbackLoader";
import Footer from "./Footer";
import Menu from "./Menu";

function LayoutProvider() {
	const { openMenu, handleNetwork, handleResize } = useAppContext();

	useEffect(() => {
		const updateNetwork = () => {
			handleNetwork(navigator.onLine);
		};
		const getScreenSize = () => {
			handleResize(window?.innerWidth);
		};

		getScreenSize();
		updateNetwork();

		window.addEventListener("resize", getScreenSize);
		window.addEventListener("online", updateNetwork);
		window.addEventListener("offline", updateNetwork);

		return () => {
			window.removeEventListener("resize", getScreenSize);
			window.removeEventListener("online", updateNetwork);
			window.removeEventListener("offline", updateNetwork);
		};
	}, []);

	return (
		<>
			<AnimatePresence mode="wait">{openMenu && <Menu />}</AnimatePresence>

			<div className="wrapper font-inter">
				<Suspense fallback={<FallbackLoader />}>
					<Outlet />
				</Suspense>
				<Footer />
			</div>

			<Toaster
				richColors
				toastOptions={{
					style: { padding: "1.1rem" },
					className: "my-toast",
				}}
			/>
		</>
	);
}
export default LayoutProvider;
