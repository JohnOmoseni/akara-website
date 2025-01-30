import RevealAnimate from "@/components/anims/RevealAnimate";
import Button from "@/components/reuseables/CustomButton";
import { ArrowRight } from "@/constants/icons";
import { services } from "@/constants/pages";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

const defaultOptions = {
	reverse: false, // reverse the tilt direction
	max: 20, // max tilt rotation (degrees)
	perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
	scale: 1.01, // 2 = 200%, 1.5 = 150%, etc..
	speed: 1000, // Speed of the enter/exit transition
	transition: true, // Set a transition on enter/exit.
	axis: null, // What axis should be disabled. Can be X or Y.
	reset: true, // If the tilt effect has to be reset on exit.
	easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

// @ts-ignore
const Card = ({ item, idx }: any) => {
	return (
		<Tilt options={defaultOptions}>
			<motion.div
				initial="hidden"
				whileInView="animate"
				viewport={{ once: true, amount: 0.2 }}
				custom={idx}
				className={cn(
					"flex-column max-sm:items-center self-start relative gap-3.5 border border-border-100 rounded-sm shadow-sm py-5 px-6 md:py-8 md:px-7 transition"
				)}
			>
				<RevealAnimate delay={0.8} className="max-sm:w-auto">
					<div className="size-16 relative">
						<img src={item.icon} alt="" className="object-contain" />
						<div
							className={cn(
								`absolute [background:radial-gradient(circle_at_center,_rgba(234,_88,_12,_0.8)_0,_rgba(234,_88,_12,_0)_50%)_no-repeat]`,
								`left-1/2 top-[-50%] h-[200%] w-[200%] [mix-blend-mode:hard-light]`,
								`opacity-20`,
								`[transform:translateX(-50%)]`
							)}
						/>
					</div>
				</RevealAnimate>

				{/* Radial gradient for the container to give a faded look */}
				{/* <div className="absolute pointer-events-none inset-0 row-flex bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_60%,black)]" /> */}

				<RevealAnimate className="max-sm:w-auto">
					<h3 className="text-xl mt-4 max-sm:text-center">{item.title}</h3>
				</RevealAnimate>
				<RevealAnimate className="max-sm:w-auto">
					<p className="pr-2 max-sm:text-center max-sm:max-w-[60ch]">
						{item.body}
					</p>
				</RevealAnimate>

				<RevealAnimate className="max-sm:w-auto">
					<Button
						title={"Get Started"}
						variant={idx === 0 ? "default" : "outline"}
						className="mt-4"
						icon={ArrowRight}
						iconStyles={cn("", idx === 0 ? "" : "!text-secondary")}
					/>
				</RevealAnimate>
			</motion.div>
		</Tilt>
	);
};

function Features() {
	return (
		<>
			<h2 className="text-center">
				A new era of Affordable Housing For <br className="hidden md:block" />{" "}
				The People and By The People
			</h2>

			<div className="flex-column md:row-flex mx-auto max-w-[800px] mt-10 sm:mt-[3.5rem] w-full max-sm:px-1.5 gap-4">
				{services.map((item, idx) => {
					return <Card key={idx} item={item} idx={idx} />;
				})}
			</div>
		</>
	);
}

export default Features;
