import Button from "@/components/reuseables/CustomButton";
import { house_1, house_3 } from "@/constants/images";
import { features } from "@/constants/pages";

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

					<Button title="Get Started" className="max-sm:mx-auto" />
				</ul>

				<div className=" flex-1 relative w-full min-h-[420px] sm:max-w-[580px] md:min-w-[380px] xl:min-w-[780px] max-md:max-w-[min(95%,_500px)] max-lg:max-h-[580px] mx-auto rounded-2xl overflow-hidden">
					<img src={house_3} alt="hero" className="!object-cover h-full" />
				</div>
				{/* <div className="flex-1 min-h-max relative w-full grid sm:max-md:grid-cols-3 grid-cols-[repeat(auto-fit,_minmax(120px,_1fr))] grid-rows-[repeat(auto-fit,_minmax(150px,_160px))] gap-4 mx-auto rounded-md overflow-hidden">
					{Array.from({ length: 6 }).map((_item, idx) => {
						return (
							<img
								key={idx}
								src={house_1}
								alt="hero"
								className="object-cover size-full"
							/>
						);
					})}
				</div> */}
			</div>
		</>
	);
}
export default WhyUs;
