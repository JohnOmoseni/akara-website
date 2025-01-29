import { useEffect } from "react";
import { usePathname } from "next/navigation";

function ScrollToTop({ scrollRef }: { scrollRef: any }) {
 const pathname = usePathname();
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
