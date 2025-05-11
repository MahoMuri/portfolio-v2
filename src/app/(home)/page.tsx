"use client";

import RotatingText from "@/components/text-animations/RotatingText/RotatingText";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { FileText, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<main>
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex">
				<div className="overflow-clip pr-8">
					<motion.div
						initial={{ x: 400, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 1, delay: 1.2 }}
					>
						<motion.div
							className="overflow-clip size-96"
							initial={{ borderRadius: 0 }}
							animate={{ borderRadius: "1rem" }}
							transition={{ duration: 1, delay: 2.2 }}
						>
							<Image
								className="-translate-y-2"
								src="/profile.jpg"
								alt="profile"
								width={800}
								height={800}
							/>
						</motion.div>
					</motion.div>
				</div>
				<div className="overflow-clip">
					<motion.div
						initial={{ y: -400 }}
						animate={{ y: 0 }}
						transition={{ duration: 1 }}
						className="h-full"
					>
						<Separator
							orientation="vertical"
							className="bg-foreground/50"
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
							<h1 className="text-7xl w-max">
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
							a front-end developer based in the Philippines with
							a passion for creating visually stunning and highly
							functional web applications. I&apos;m also a
							talented musician, an avid gamer and a casual
							streamer. With over 2 years of experience in web
							development, I&apos;m confident in my ability to
							deliver high-quality results and continuously learn
							new things.
						</p>
						<div className="flex mt-4 gap-4">
							<Button>
								<Mail /> Contact Me
							</Button>
							<Link href={"/Resume-Paolo.pdf"} download>
								<Button variant={"secondary"}>
									<FileText />
									Resume
								</Button>
							</Link>
						</div>
					</motion.div>
				</div>
			</div>

			<div className="mt-24">
				<h2>Projects</h2>
				<Separator className="mt-6 mb-10" />
				<div className="grid grid-cols-3 gap-4">
					{[1, 2, 3, 4].map((_, i) => (
						<Card key={i}>
							<CardHeader>
								<CardTitle>Card Title {i + 1}</CardTitle>
								<CardDescription>
									Card Description {i + 1}
								</CardDescription>
							</CardHeader>
							<CardContent>
								<p>Card Content {i + 1}</p>
							</CardContent>
							<CardFooter>
								<CardAction>Card Action {i + 1}</CardAction>
							</CardFooter>
						</Card>
					))}
				</div>
			</div>
		</main>
	);
}
