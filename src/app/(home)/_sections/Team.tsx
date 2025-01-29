import { team } from "@/constants/pages";
import { cn } from "@/lib/utils";

const Team = () => {
	return (
		<>
			<div className="flex-column items-center">
				<h2 className="max-md:text-center max-w-[30ch] mb-2 max-sm:px-2">
					Who We Are
				</h2>

				<p className="max-w-[65ch] max-md:px-3 w-full text-center">
					We are team of young, driven, and complementarily-skilled tech
					entrepreneurs with decades of combined experience, and we deeply
					committed to the urgent mission of ending the scarcity of affordable
					rental housing, which can help unlock Nigeria’s potential.
				</p>
			</div>

			<div className="mx-auto mt-12 row-flex !flex-wrap xl:grid grid-cols-3 gap-12">
				{team.map((person) => (
					<div
						key={person.name}
						className="group relative size-96 [perspective:1000px] max-sm:mx-auto"
					>
						<div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
							{/* Front face with image */}
							<div className="absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden] overflow-hidden">
								<img
									className="object-cover cursor-pointer object-left h-full w-full rounded-xl"
									src={person.img}
									alt={person.name}
									width={320}
									height={320}
								/>

								<div
									className={cn(
										"absolute inset-0 bg-black/30 flex items-end py-4 px-4 transition-opacity duration-300 opacity-100"
									)}
								>
									<p className="text-xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
										{person.name}
									</p>
								</div>
							</div>

							{/* Back face with text */}
							<div className="absolute inset-0 size-full rounded-xl bg-black/90 px-6 text-center text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
								<div className="min-h-full flex-column gap-8 items-center justify-center">
									<p className="text-lg text-pretty text-center ">
										{person.body}
									</p>

									<h2 className="text-2xl text-white">{person.name}</h2>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default Team;
