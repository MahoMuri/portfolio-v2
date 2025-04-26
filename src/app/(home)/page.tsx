"use client";

import RotatingText from "@/components/text-animations/RotatingText/RotatingText";
import SplitText from "@/components/text-animations/SplitText/SplitText";

export default function Home() {
	return (
		<div>
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4">
				<h1>
					<SplitText
						text="Hello, I am Paolo!"
						threshold={0.2}
						rootMargin="-50px"
					/>
				</h1>
				<h2 className="flex gap-2 items-center">
					<p className="pb-0.5 sm:pb-1 md:pb-1">I love to:</p>
					<RotatingText
						texts={[
							"build",
							"design",
							"develop",
							"code",
							"learn",
							"play",
						]}
						mainClassName="px-2 sm:px-2 md:px-3 bg-linear-to-r from-blue-500 via-cyan-500 to-green-500 overflow-hidden text-black py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
						initial={{ y: "-100%" }}
						animate={{ y: 0 }}
						exit={{ y: "150%" }}
						staggerDuration={0.05}
						splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
						transition={{
							type: "spring",
							damping: 30,
							stiffness: 400,
						}}
						rotationInterval={2000}
					/>
				</h2>
			</div>

			<div>
				<h2>Some content</h2>
			</div>
		</div>
	);
}
