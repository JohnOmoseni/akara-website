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
				className="relative isolate w-full min-h-[min(700px,_105svh)]  bg-background-100"
				style={{
					backgroundImage: "url(/images/house_1.jpg)",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					backgroundAttachment: "fixed",
					backgroundPosition: "center center",
					backgroundBlendMode: "darken",
				}}
			>
				<div className="bg-black/50 absolute top-0 left-0 w-full h-full -z-10" />
				<Header />

				<Hero />
			</div>

			<section className="w-full bg-background relative">
				{/* Amber Glow Background */}
				<div
					className="absolute inset-0 z-0"
					style={{
						backgroundImage: `radial-gradient(180% 180% at 50% 50%, #ffffff 40%, #f59e0b 100%)`,
						backgroundSize: "100% 100%",
					}}
				/>

				<SectionWrapper
					id="features"
					containerStyles="pt-12 md:py-[min(5rem,_10%)]"
				>
					<Features />
				</SectionWrapper>

				<SectionWrapper>
					<WhyUs />
				</SectionWrapper>

				<SectionWrapper>
					<Team />
				</SectionWrapper>

				<SectionWrapper containerStyles="">
					<Testimonials />
				</SectionWrapper>

				<SectionWrapper id="steps" containerStyles="">
					<HowItWorks />
				</SectionWrapper>

				<SectionWrapper id="about" containerStyles=" ">
					<About />
				</SectionWrapper>

				<SectionWrapper
					id="faqs"
					containerStyles="min-h-screen w-full relative"
				>
					{/* Morning Haze */}
					{/* <div
						className="absolute inset-0 z-0"
						style={{
							backgroundImage: `
          radial-gradient(circle at 50% 100%, rgba(253, 224, 71, 0.1) 0%, transparent 60%),
          radial-gradient(circle at 50% 100%, rgba(251, 191, 36, 0.1) 0%, transparent 70%),
         radial-gradient(circle at 50% 100%, rgba(244, 114, 182, 0.1) 0%, transparent 80%)
        `,
						}}
					/> */}
					<FAQ />
				</SectionWrapper>
			</section>
		</>
	);
}
