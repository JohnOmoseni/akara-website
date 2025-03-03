import Button from "@/components/reuseables/CustomButton";
import NavLinks from "./NavLinks";
import { navLinks } from "@/constants";
import { Close } from "@/constants/icons";
import { animateFn, animateMenu } from "@/lib/animate";
import { motion } from "framer-motion";
import { useAppContext } from "@/context/AppContext";
import { Link } from "react-router-dom";

function Menu() {
	const { toggleMenu } = useAppContext();

	const onClose = () => {
		toggleMenu(false);
	};

	return (
		<motion.div
			style={{ zIndex: 999 }}
			className="fixed inset-0 block h-dvh w-full bg-black/20 backdrop-blur-sm md:hidden"
			{...animateFn(animateMenu)}
			onClick={onClose}
		>
			<div
				className="menu flex-column absolute right-0 top-0 isolate h-dvh w-[80%] max-w-[500px] overflow-hidden bg-white px-[4%] text-foreground backdrop-blur-sm"
				onClick={(e) => e.stopPropagation()}
			>
				<span
					className="icon absolute right-4 top-3 p-1 transition-colors active:scale-95"
					onClick={onClose}
					title="close-menu"
				>
					<Close size="25" className="" fill="#333" />
				</span>

				<nav className="flex-column m-auto gap-8 pt-[min(4.5rem,_20%)]">
					{navLinks.map((link, idx) => (
						<NavLinks key={idx} {...link} menu idx={idx} />
					))}
				</nav>

				<div className="mt-auto mb-8 mx-auto">
					<Link to={"https://app.akara.ng"}>
						<Button
							title="Get Started"
							size="lg"
							className=""
							onClick={onClose}
						/>
					</Link>
				</div>
			</div>
		</motion.div>
	);
}

export default Menu;
