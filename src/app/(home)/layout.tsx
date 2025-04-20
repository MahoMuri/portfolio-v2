"use client";

import Particles from "@/components/backgrounds/Particles/Particles";

export default function HomeLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<div className="relative h-svh">
			<Particles
				className="border border-b-white/10"
				particleColors={["#afefb3", "#56f060"]}
				particleCount={800}
				particleSpread={10}
				speed={0.5}
				particleBaseSize={100}
				moveParticlesOnHover={true}
				alphaParticles={false}
				disableRotation={true}
			/>
			{children}
		</div>
	);
}

