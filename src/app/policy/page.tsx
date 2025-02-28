import { disclaimer, privacyPolicy, terms } from "@/constants/pages";
import { logo } from "@/constants/icons";
import { Link } from "react-router-dom";
import Button from "@/components/reuseables/CustomButton";

function PrivacyPolicy({
	type = "privacy",
}: {
	type: "privacy" | "disclaimer" | "terms";
}) {
	let list;
	let title;

	switch (type) {
		case "privacy":
			list = privacyPolicy;
			title = "Privacy Policy";
			break;
		case "disclaimer":
			list = disclaimer;
			title = "Disclaimer";
			break;
		case "terms":
			list = terms;
			title = "Terms & Conditions";
			break;
	}
	return (
		<>
			<PolicyHeader />

			<main className="w-full py-8 max-[380px]:px-3.5 px-4 sm:pt-12 sm:px-[5%] sm:pb-[4rem]">
				<div className="flex-column gap-6">
					<h1 className="text-left leading-[1.1]">{title}</h1>

					{list[0]?.introduction &&
					typeof list[0]?.introduction === "string" ? (
						list[0]?.introduction?.split("\n").map((line, index) =>
							line.trim() !== "" ? (
								<p key={index} className="leading-6 text-base font-light pr-1">
									{line}
								</p>
							) : (
								<br key={index} />
							)
						)
					) : (
						<p className="leading-6 text-base font-light pr-1">
							{list[0]?.introduction}
						</p>
					)}

					<div className="flex-column gap-6 mt-4">
						{list.slice(1).map((paragraph, idx) => {
							return (
								<div key={idx} className="flex-column gap-5">
									<h3 className="font-bold">{paragraph?.label}</h3>

									<div className="pr-2 leading-6 text-base font-light">
										{paragraph?.body}
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</main>
		</>
	);
}

export default PrivacyPolicy;

export const PolicyHeader = () => {
	return (
		<header className="mx-auto w-full sticky px-4 sm:px-6 py-1.5 md:py-2 bg-background top-0 left-0 right-0 z-[999] drop-shadow-[0_2px_100px_rgb(0_0_0_/_0.04)]">
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
					<Link to={"https://app.akara.ng"} className="hidden sm:block">
						<Button title="Get Started" className="rounded-full" />
					</Link>{" "}
				</div>
			</div>
		</header>
	);
};
