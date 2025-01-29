import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop({ scrollRef }: { scrollRef: any }) {
	const location = useLocation();
	const pathname = location.pathname;

	useEffect(() => {
		if (scrollRef?.current) {
			scrollRef.current.scrollTo({
				top: 0,
				behavior: "smooth",
			});
		}
	}, [pathname]);

	return null;
}

export default ScrollToTop;
