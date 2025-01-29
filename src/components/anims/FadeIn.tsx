import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export type FadeInProps = {
	children: ReactNode;
	className?: string;
};

function FadeIn({ children, className }: FadeInProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ margin: "0px 0px -215px 0px" }}
			transition={{ duration: 0.8 }}
			className={cn("", className)}
		>
			{children}
		</motion.div>
	);
}

export default FadeIn;
