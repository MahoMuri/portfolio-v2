"use client";

import RotatingText from "@/components/text-animations/RotatingText/RotatingText";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
	return (
		<main>
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center">
				<div className="overflow-clip pr-8">
					<motion.div
						className="rounded-3xl bg-contain size-80 overflow-clip"
						initial={{ x: 400, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 1, delay: 1.2 }}
					>
						<Image
							className="-translate-y-3"
							src="/profile.jpg"
							alt="profile"
							width={400}
							height={600}
						/>
					</motion.div>
				</div>
				<div className="overflow-clip">
					<motion.div
						initial={{ y: -400 }}
						animate={{ y: 0 }}
						transition={{ duration: 1 }}
					>
						<Separator
							orientation="vertical"
							className="py-40 bg-foreground/50"
						/>
					</motion.div>
				</div>
				<div className="overflow-clip pl-8">
					<motion.div
						className="flex flex-col gap-4"
						initial={{ x: -450, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 1, delay: 1.2 }}
					>
						<h1>Hello, I am Paolo.</h1>
						<h1 className="flex gap-2 items-center">
							<p className="pb-0.5 sm:pb-1 md:pb-1">I love to</p>
							<RotatingText
								texts={[
									"build",
									"design",
									"develop",
									"code",
									"learn",
									"play",
								]}
								mainClassName="px-4 pt-2 pb-4 bg-linear-to-r from-blue-500 via-cyan-500 to-green-500 overflow-clip rounded-lg"
								initial={{ y: "-150%" }}
								animate={{ y: 0 }}
								exit={{ y: "150%" }}
								staggerDuration={0.05}
								transition={{
									type: "spring",
									damping: 30,
									stiffness: 400,
								}}
								rotationInterval={2000}
							/>
						</h1>
					</motion.div>
				</div>
			</div>

			<div className="">
				<h2>Projects</h2>
			</div>
		</main>
	);
}
