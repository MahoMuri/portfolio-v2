"use client";

import TypingText from "@/components/typing-text";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
	const [hobby, setHobby] = useState("sleep");

	return (
		<div>
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
				<h1>Hello I am Paolo</h1>
				<h2 className="flex gap-2">
					I love to:{" "}
					<TypingText
						text={` ${hobby}`}
						repeat={false}
						onComplete={() =>
							setTimeout(() => {
								setHobby("code");
							}, 3000)
						}
						grow
					/>
				</h2>
				<Button onClick={() => setHobby("learn")}>Click ME</Button>
			</div>

			<div>
				<h2>Some content</h2>
			</div>
		</div>
	);
}
