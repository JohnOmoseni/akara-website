import NavLinks from "./NavLinks";
import Button from "@/components/reuseables/CustomButton";
import { navLinks } from "@/constants";
import { logo, Menu } from "@/constants/icons";
import { useAppContext } from "@/context/AppContext";
import { Link } from "react-router-dom";

const Header = () => {
	const { toggleMenu } = useAppContext();

	return (
		<header className="mx-auto w-[90%] absolute px-4 sm:px-6 py-1.5 md:py-2 bg-background top-4 md:top-6 left-0 right-0 z-[999] drop-shadow-[0_2px_100px_rgb(0_0_0_/_0.1)] rounded-lg sm:rounded-full">
			<div className="row-flex-btwn gap-4">
				<Link
					to="/"
					className="group relative transition-sm hover:scale-95 -ml-4"
				>
					<img
						src={logo}
						alt="akara"
						className="w-[6rem] sm:size-fit object-contain"
					/>
				</Link>

				<div className="row-flex gap-12 ml-auto">
					<div className="md:row-flex hidden gap-8">
						{navLinks?.map((link, idx) => (
							<NavLinks key={idx} {...link} />
						))}
					</div>

					<div className="icon sm:!hidden" onClick={() => toggleMenu()}>
						<Menu size={22} className="" color="#333" />
					</div>

					<Link to="" className="hidden sm:block">
						<Button title="Get Started" className="rounded-full" />
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Header;
