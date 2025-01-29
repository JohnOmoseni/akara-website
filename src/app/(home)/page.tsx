import Hero from "./_sections/Hero";
import Testimonials from "./_sections/Testimonials";
import WhyUs from "./_sections/Why";
import Team from "./_sections/Team";
import HowItWorks from "./_sections/HowItWorks";
import About from "./_sections/About";
import Features from "./_sections/Features";
import SectionWrapper from "../../layouts/SectionWrapper";
import FAQ from "./_sections/FAQ";
import Header from "@/layouts/Header";

export default function Home() {
	return (
		<>
			<div
				className="relative isolate w-full sm:min-h-[130svh] bg-background-100"
				style={{
					backgroundImage: "url(/images/house_1.jpg)",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					// backgroundAttachment: "fixed",
					backgroundPosition: "center center",
					backgroundBlendMode: "darken",
				}}
			>
				<div className="bg-black/70 absolute top-0 left-0 w-full h-full -z-10" />
				<Header />

				<Hero />
			</div>

			<section>
				<SectionWrapper containerStyles="pt-12 md:py-[min(5rem,_10%)]">
					<Features />
				</SectionWrapper>

				<SectionWrapper>
					<WhyUs />
				</SectionWrapper>

				<SectionWrapper>
					<Team />
				</SectionWrapper>

				<SectionWrapper containerStyles="bg-background-100 ">
					<Testimonials />
				</SectionWrapper>

				<SectionWrapper containerStyles="bg-background-100 ">
					<HowItWorks />
				</SectionWrapper>

				<SectionWrapper containerStyles="bg-background-100 ">
					<About />
				</SectionWrapper>

				<SectionWrapper containerStyles="bg-background-100 ">
					<FAQ />
				</SectionWrapper>
			</section>
		</>
	);
}
