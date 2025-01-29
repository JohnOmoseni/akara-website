import { ReviewStar } from "@/constants/icons";
import { testimonials } from "@/constants/pages";
import { cn } from "@/lib/utils";
import Marquee from "../../../components/anims/Marquee";

function Testimonials() {
	return (
		<>
			<h2 className="text-center">
				Reviews from Excited <br className="hidden md:block" /> Akara Fractional
				Co-owners
			</h2>

			<Marquee
				list={testimonials}
				containerStyles="mt-[3.5rem]"
				renderItem={(item, index) => {
					return (
						<>
							<li
								key={index}
								className="flex-column w-[300px] bg-background relative gap-4 rounded p-6 sm:p-8"
							>
								<p className="px-1">{item.text}</p>

								<div className="grid grid-cols-[max-content,_1fr] items-center mt-auto gap-3">
									<div className="blend-image rounded-full overflow-hidden">
										<img
											src={item.avatar}
											alt=""
											className="size-12 object-cover drop-shadow-[0_1px_8px_rgb(0_0_0_/_0.1)]"
										/>
									</div>

									<div className="flex-column gap-0.5">
										<h3 className="text-base">{`${item.name}.`}</h3>
										<p className="text-sm text-grey">{item.subtitle}</p>

										<div className="row-flex-start gap-2.5 mt-1 w-full">
											{Array.from({ length: 5 }).map((_, idx) => (
												<ReviewStar
													key={idx}
													className={cn(
														"size-4 text-gray-100",
														item.ratings > idx && "fill-yellow-300"
													)}
												/>
											))}
										</div>
									</div>
								</div>
							</li>
						</>
					);
				}}
			/>
		</>
	);
}
export default Testimonials;
