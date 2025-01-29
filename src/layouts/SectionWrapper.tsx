import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
	children: ReactNode;
	containerStyles?: string;
	id?: string;
};

const SectionWrapper = ({ children, id, containerStyles }: Props) => {
	return (
		<section
			id={id}
			className={cn(
				"px-3.5 relative py-8 sm:pt-12 sm:px-6 md:px-[6%] md:py-[min(4rem,_10%)] overflow-hidden",
				containerStyles
			)}
		>
			<div className="max-w-[1300px] w-full mx-auto">{children}</div>
		</section>
	);
};

export default SectionWrapper;
