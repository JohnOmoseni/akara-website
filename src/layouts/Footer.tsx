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
			className="icon group transition hover:scale-95 bg-secondary rounded-full size-10"
		>
			<Icon size={22} className="text-white transition-colors" />
		</a>
	);
};

const Footer = () => {
	const location = useLocation();
	const pathname = location.pathname;

	return (
		<footer className="px-5 pb-5 pt-8 sm:px-[5%] sm:pt-[5%] bg-[#111] text-white">
			<div className="sm:row-flex flex flex-col !items-start justify-between gap-8 md:gap-[7rem] lg:gap-[10%]">
				<div className="flex-column flex-2 w-full gap-6 max-sm:mx-auto max-sm:!items-center">
					<Link to="/" className="group relative transition w-max">
						<img src={logo} alt="akara" className="size-fit object-contain" />
						{/* <LogoWhite className="size-fit object-contain" /> */}
					</Link>

					<div className="row-flex-btwn gap-5 w-max">
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

			<div className="pt-6 mt-10 border-t border-neutral-600">
				<p className="leading-6 text-light pr-2 md:pr-4">
					Akara is a company duly registered with the Corporate Affairs
					Commission (CAC), Nigeria. We are transforming how Nigerians engage
					with Real Estate by providing opportunities to co-own affordable
					housing projects. With Akara, individuals and families can now
					purchase co-ownership units in carefully selected rental properties
					designed to meet housing needs while creating long-term value.
					<br />
					<br />
					Ensuring Trust, Safety, and Accountability
					<br />
					Professional Oversight: Akara has a robust framework for overseeing
					all activities in the value-chain, on behalf of all co-owners,
					ensuring transparency and security. We are also working on introducing
					a trusteeship agreement with reputable partners for asset custody, and
					becoming a cooperative multipurpose society in Lagos state, all to
					further enhance confidence.
					<br />
					<br />
					Regulatory Compliance: To ensure full compliance with Nigerian laws,
					Akara has obtained the{" "}
					<strong>
						Special Control Unit Against Money Laundering (SCUML)
					</strong>{" "}
					license, certified by the Economic and Financial Crimes Commission
					(EFCC). This guarantees that all operations are conducted ethically
					and in line with financial and anti-money laundering regulations.
					<br />
					<br />
					Terms of Co-Ownership: By participating in Akara’s platform, you agree
					to our{" "}
					<Link className="text-secondary font-semibold" to="/terms">
						Terms of Service{" "}
					</Link>{" "}
					and{" "}
					<Link className="text-secondary font-semibold" to="/policy">
						Privacy Policy{" "}
					</Link>
					. While we are committed to transparency and accountability, it is
					important to note that all property acquisitions involve shared
					responsibilities and potential risks inherent to real estate
					ownership.
					<br />
					<br />
					Empowering Nigerians Through Co-Ownership At Akara
					<br />
					We believe that affordable housing is not just a necessity—it is a
					fundamental right. By enabling co-ownership, we lower the barriers to
					financing and accessing quality and affordable rental properties,
					allowing everyday Nigerians to secure housing while building
					collective wealth.
				</p>

				<div className="row-flex-btwn gap-5 mt-6 mb-3">
					<p>© 2024 Akara Innovations Ltd. All Rights Reserved.</p>

					<Link className="text-secondary font-semibold" to="/disclaimer">
						Disclaimer{" "}
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
