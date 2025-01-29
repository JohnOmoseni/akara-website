import Button from "@/components/reuseables/CustomButton";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/constants/pages";

const FAQ = () => {
	return (
		<div className="relative w-full">
			<h2 className="text-center text-3xl mb-2">FAQs</h2>

			<p className="max-sm:px-2 max-w-[50ch] mx-auto text-base text-center">
				Everything you need to know about my Akara
			</p>

			<div className="faq mx-auto mt-8 w-[90%] max-w-[700px] self-center rounded-xl shadow-sm px-3">
				{faqs.map((item, idx) => (
					<Accordion
						type="single"
						collapsible
						className="w-full py-4"
						key={idx}
					>
						<AccordionItem value={`item-${idx}`} className="border-border-100">
							<AccordionTrigger className="font-medium text-base break-words text-left sm:w-full">
								{item?.trigger}
							</AccordionTrigger>
							<AccordionContent>
								<p className="max-w-[120ch] pr-2">{item.body1}</p>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				))}
			</div>

			<div id="contact" className="h-2" />

			<div className="flex-column mt-8 sm:mt-12 bg-background-100 relative w-full items-center justify-center gap-2 py-10 px-2 md:pt-[min(2rem,_4%)] rounded-2xl overflow-hidden">
				<h3 className="text-center text-xl">Still have Questions?</h3>

				<p className="max-sm:px-2 max-w-[60ch] text-center">
					Can’t find the answer you’re looking for? Please chat to our friendly
					team.
				</p>

				<a href={`mailto:hello@akara.ng`} className="">
					<Button
						title="Get in touch"
						className="mt-6 sm:mt-8 rounded-lg w-full min-w-[200px]"
					/>
				</a>
			</div>
		</div>
	);
};

export default FAQ;
