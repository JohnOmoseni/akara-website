import { useAppContext } from "@/context/AppContext";
import { animateFn, linksAni } from "@/lib/animate";
import { cn } from "@/lib/utils";
import { NavLinkProps } from "@/types";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

function NavLinks({ label, href, tag, menu, idx }: NavLinkProps) {
	const { toggleMenu, openMenu } = useAppContext();
	const navlink = "relative p-1 tracking-snug whitespace-nowrap";
	const menulink = "text-xl";

	const location = useLocation();
	const pathname = location.pathname;
	const isActiveLink =
		pathname.includes(tag) || (pathname === href && tag === "home");

	const onClick = () => {
		const element = document.getElementById(tag);
		element?.scrollIntoView({ behavior: "smooth" });
		openMenu && toggleMenu(false);
	};

	return (
		<motion.p {...(menu && animateFn(linksAni, idx))} onClick={onClick}>
			<motion.span
				className={cn(
					"cursor-pointer transition-colors transition-sm hover:font-medium hover:text-secondary",
					menu ? menulink : navlink,
					isActiveLink && "text-foreground-variant font-medium"
				)}
			>
				{label}
			</motion.span>
		</motion.p>
	);
}

export default NavLinks;
