import Button from "@/components/reuseables/CustomButton";
import { house_3 } from "@/constants/images";
import { features } from "@/constants/pages";
import { Link } from "react-router-dom";

function WhyUs() {
	return (
		<>
			<div className="flex-column items-center">
				<h2 className=" text-center max-w-[30ch] mb-2 max-sm:px-2">
					Why Choose Akara
				</h2>

				<p className="max-w-[85ch] max-md:px-3 w-full text-center">
					Key Features of Akara and reasons to Join Us Today
				</p>
			</div>

			<div className="mx-auto mt-[3.5rem] w-full grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-8 max-md:px-2">
				<ul className="flex-column gap-8">
					{features.map((item, idx) => (
						<li key={idx} className="flex-column gap-2 mt-0.5">
							<h3 className="text-base">{item.title}</h3>

							<p className="max-sm:pr-2 sm:max-w-[68ch]">{item.text}</p>
						</li>
					))}

					<Link to={"https://app.akara.ng"}>
						<Button title="Get Started" className="max-sm:mx-auto" />
					</Link>
				</ul>

				<div className=" flex-1 relative w-full min-h-[420px] sm:max-w-[580px] md:min-w-[380px] xl:min-w-[780px] max-md:max-w-[min(95%,_500px)] max-lg:max-h-[580px] mx-auto rounded-2xl overflow-hidden">
					<img src={house_3} alt="hero" className="!object-cover h-full" />
				</div>
			</div>
		</>
	);
}
export default WhyUs;
