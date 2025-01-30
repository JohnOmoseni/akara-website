import RevealAnimate from "@/components/anims/RevealAnimate";
import { steps } from "@/constants/pages";
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
					"flex-column max-sm:items-center self-start relative gap-3.5 border border-border-100 rounded-sm shadow-sm py-5 px-6   transition"
				)}
			>
				<RevealAnimate className="max-sm:w-auto">
					<h3 className="text-xl mt-4 max-sm:text-center">{item.step}</h3>
				</RevealAnimate>
				<RevealAnimate className="max-sm:w-auto">
					<p className="pr-2 max-sm:text-center max-sm:max-w-[60ch]">
						{item.text}
					</p>
				</RevealAnimate>
			</motion.div>
		</Tilt>
	);
};

function HowItWorks() {
	return (
		<>
			<h2 className="text-center">How It Works</h2>

			<div className="flex-column md:row-flex md:!items-start mx-auto max-w-[800px] mt-8 sm:mt-[3.5rem] w-full max-sm:px-2 gap-4">
				<div className="flex-column gap-4">
					{steps.slice(0, 3).map((item, idx) => {
						return <Card key={idx} item={item} idx={idx} />;
					})}
				</div>

				<div className="flex-column gap-4 md:mt-[50px]">
					{steps.slice(3).map((item, idx) => {
						return <Card key={idx} item={item} idx={idx} />;
					})}
				</div>
			</div>
		</>
	);
}

export default HowItWorks;
