import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import TextGenerateEffect from "@/components/anims/TextGenerateEffect";
import Button from "@/components/reuseables/CustomButton";
import { Link } from "react-router-dom";

function Hero() {
	const heroRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: heroRef,
		offset: ["start start", "end start"],
	});

	// @ts-ignore
	const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.2, 1]);

	return (
		<div className="flex-column h-full pt-[120px] md:grid grid-cols-[2fr_1fr] pb-[3.5rem] relative w-full max-md:!items-center gap-8 px-3 md:pt-[max(150px,_12%)] md:pl-[max(2em,_6%)] md:pr-[max(2em,_4%)]">
			<motion.div
				variants={{
					hidden: { opacity: 0.3 },
					visible: { opacity: 1 },
				}}
				whileInView="visible"
				exit="hidden"
				animate="hidden"
				viewport={{ amount: 0.5 }}
				className="flex-1 relative flex-column max-md:!items-center gap-6"
			>
				<div className="flex-column gap-3 md:gap-2">
					<h1 className="relative text-4xl text-white md:text-5xl leading-[1.1] md:leading-[1.2] max-md:text-center">
						Start Making Money While Helping End{" "}
						<br className="block md:hidden" /> Nigeria's Affordable Housing
						Deficit
					</h1>
				</div>

				<TextGenerateEffect
					className="max-w-[50ch] text-[1.1rem] lg:text-xl max-md:px-2 max-md:text-center"
					words="Yes, you deserve to live in a decent apartment at an affordable rent! Discover the full potential of fractional real estate ownership. Together we can end the affordable housing scarcity for one another and make some money doing it."
				/>

				<div className="flex-column md:row-flex-start gap-y-3 gap-x-5 mt-6 lg:mt-8">
					<Link to="https://app.akara.ng">
						<Button
							title="Get Started"
							variant="white"
							className="rounded-full"
							size="lg"
						/>
					</Link>

					<Button
						title="Learn More"
						className="rounded-full"
						size="lg"
						onClick={() => {
							const element = document.getElementById("steps");
							element?.scrollIntoView({ behavior: "smooth" });
						}}
					/>
				</div>
			</motion.div>
		</div>
	);
}

export default Hero;
