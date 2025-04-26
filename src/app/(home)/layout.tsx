"use client";

import Particles from "@/components/backgrounds/Particles/Particles";

export default function HomeLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<div className="relative h-svh">
			<Particles
				className="border border-b-white/10"
				particleColors={["#2b7fff", "#00b8db", "#00c951"]}
				particleCount={500}
				particleSpread={10}
				speed={1}
				particleBaseSize={100}
				moveParticlesOnHover={true}
				disableRotation={true}
			/>
			{children}
		</div>
	);
}

