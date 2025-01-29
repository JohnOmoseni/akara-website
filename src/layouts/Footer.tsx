import { footerLinks, socials } from "@/constants";
import { logo } from "@/constants/icons";
import { cn } from "@/lib/utils";
import { IconType } from "react-icons/lib";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Social = ({
	href,
	label: Icon,
	tag,
}: {
	href: string;
	label: IconType;
	tag: string;
}) => {
	return (
		<a
			href={href}
			title={tag}
			className="icon group size-8 transition hover:scale-95"
		>
			<Icon
				size={22}
				className="text-foreground transition-colors group-hover:text-secondary"
			/>
		</a>
	);
};

const Footer = () => {
	const location = useLocation();
	const pathname = location.pathname;

	return (
		<footer className="px-6 pb-5 pt-8 sm:px-[5%] sm:pt-[5%] bg-[#111] text-white">
			<div className="sm:row-flex flex flex-col !items-start justify-between gap-8 md:gap-[7rem] lg:gap-[10%]">
				<div className="flex-column w-full gap-3 max-sm:mx-auto max-sm:!items-center">
					<Link to="/" className="group relative transition w-max">
						<img src={logo} alt="akara" className="size-fit object-contain" />
					</Link>

					<div className="row-flex-btwn gap-3 w-max">
						{socials?.map((link, idx) => (
							<Social key={idx} {...link} />
						))}
					</div>
				</div>

				<div className="row-flex-btwn w-full !items-start gap-8 max-sm:mt-4 sm:gap-[20%]">
					{footerLinks.map((item, idx) => {
						return (
							<div key={idx} className="flex-1">
								<p className="mb-4 text-base font-medium capitalize max-sm:text-center">
									{item.name}
								</p>

								<ul className="flex-column gap-2">
									{item.dropdown?.map((item: any, idx) => {
										const isActiveLink =
											pathname.includes(item?.tag || "") ||
											(pathname === item.href && item?.tag === "home");

										const linkStyles = cn(
											"w-full text-xs transition-colors hover:font-medium hover:text-secondary-100 max-sm:text-center",
											isActiveLink && "text-foreground-variant font-medium"
										);

										return item.tag === "email" || item.tag === "phone_no" ? (
											<a
												key={item.tag}
												href={`${item.href}`}
												className={cn(linkStyles, "")}
											>
												{item.link}
											</a>
										) : (
											<Link
												key={idx}
												to={`${item.href}`}
												className={linkStyles}
											>
												{item.link}
											</Link>
										);
									})}
								</ul>
							</div>
						);
					})}
				</div>
			</div>

			<div className="pt-2.5 mt-8 border-t border-neutral-600">
				<p className="leading-5 text-xs max-sm:text-center"></p>
				{/* 
				<Link
					to="/policy"
					className="leading-5 transition-colors hover:text-secondary"
				>
					Privacy Policy
				</Link> */}
			</div>
		</footer>
	);
};

export default Footer;
