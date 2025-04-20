"use client";

import { TypeAnimation } from "react-type-animation";

export default function Home() {
	return (
		<div>
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
				<h1>Hello I am Paolo</h1>
				<h2 className="flex gap-2">
					I love to:{" "}
					<TypeAnimation
						className="text-blue-400"
						sequence={["code", 3000, "learn", 3000, "play", 3000]}
						wrapper="span"
						repeat={Infinity}
					/>
				</h2>
			</div>

			<div>
				<h2>Some content</h2>
			</div>
		</div>
	);
}
