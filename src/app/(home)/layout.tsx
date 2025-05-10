"use client";

import Particles from "@/components/backgrounds/Particles/Particles";

export default function HomeLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<div className="relative h-svh border border-white/0 border-b-white/20">
			<Particles
				particleColors={["#2b7fff", "#00b8db", "#00c951"]}
				particleCount={500}
				particleSpread={10}
				speed={1}
				particleBaseSize={100}
				moveParticlesOnHover={false}
				disableRotation={true}
			/>
			<div className="mx-12 md:mx-40 lg:mx-56">{children}</div>
		</div>
	);
}
