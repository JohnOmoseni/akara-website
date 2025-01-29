import FadeIn from "@/components/anims/FadeIn";
import { wavy } from "@/constants/icons";

function About() {
	return (
		<div className="flex-column gap-14 max-w-4xl mx-auto sm:max-md:px-4">
			<FadeIn>
				<div className="relative grid grid-cols-1 sm:grid-cols-[1fr_1fr] gap-4 sm:gap-8">
					<div className="absolute w-[80px] h-fit -top-6 left-[50%] max-sm:-translate-x-1/2 sm:w-[100px] sm:-top-7 sm:-left-[max(1em,_3%)]">
						<img src={wavy} alt="wavy" className="object-contain" />
					</div>
					<h2 className="max-sm:text-center">About Akara</h2>

					<p className="max-w-[80ch] sm:max-w-[50ch] max-sm:px-3 sm:pr-2 mx-auto max-sm:text-center ">
						Nigeria faces a staggering 28-million-unit housing deficit. While
						the government struggles, Akara steps in with a mission to bridge
						this gap over the next 25 years or more through the power of
						technology and community. By enabling participation with as little
						as N1,000, we're making it possible for everyone to co-own thousands
						of crowd-financed Affordable Rental Housing projects across the
						country.
					</p>
				</div>
			</FadeIn>

			<FadeIn>
				<div className="relative grid grid-cols-1 sm:grid-cols-[1fr_1fr] gap-4 sm:gap-8">
					<div className="absolute w-[80px] h-fit -top-6 left-[50%] max-sm:-translate-x-1/2 sm:w-[100px] sm:-top-7 sm:-left-[max(1em,_3%)]">
						<img src={wavy} alt="wavy" className="object-contain" />
					</div>

					<h2 className="max-sm:text-center">The Akara Vision</h2>

					<p className="max-w-[80ch] sm:max-w-[50ch] max-sm:px-3 sm:pr-2 mx-auto max-sm:text-center ">
						The vision is to build a Nigeria where hardworking citizens can
						afford the kind of accommodation and like they deserve.
					</p>
				</div>
			</FadeIn>
		</div>
	);
}
export default About;
