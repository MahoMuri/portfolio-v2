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
						initial={{ x: 400, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 1, delay: 1.2 }}
					>
						<motion.div
							className="overflow-clip size-80"
							initial={{ borderRadius: 0 }}
							animate={{ borderRadius: "1.5rem" }}
							transition={{ duration: 1, delay: 2.2 }}
						>
							<Image
								className="-translate-y-3"
								src="/profile.jpg"
								alt="profile"
								width={400}
								height={600}
							/>
						</motion.div>
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
						className="flex flex-col"
						initial={{ x: -450, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 1, delay: 1.2 }}
					>
						<p className="text-3xl mb-2 font-thin">Hello,</p>
						<div className="text-primary">
							<h1 className="text-7xl w-max font-sans">
								I&apos;m Paolo Santos
							</h1>
							<div className="text-2xl font-mono my-0 font-medium overflow-clip">
								<RotatingText
									texts={[
										"💻 Web Developer",
										"🎸 Musician",
										"🔴 Streamer",
										"🎮 Gamer",
									]}
									initial={{ y: "-150%" }}
									animate={{ y: 0 }}
									exit={{ y: "150%" }}
									staggerDuration={0.015}
									transition={{
										type: "spring",
										damping: 30,
										stiffness: 600,
									}}
									rotationInterval={3000}
								/>
							</div>
						</div>
						<p className="text-lg font-thin">
							a front-end developer based in the
							Philippines with a passion for creating visually
							stunning and highly functional web applications.
							I&apos;m also a talented musician, an avid gamer and
							a charismatic streamer. With over 2 years of
							experience in web development, I&apos;m confident in
							my ability to deliver high-quality results and
							continuously learn new things.
						</p>
					</motion.div>
				</div>
			</div>

			<div className="">
				<h2>Projects</h2>
			</div>
		</main>
	);
}
