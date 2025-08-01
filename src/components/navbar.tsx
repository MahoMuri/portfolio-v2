import Link from "next/link";

export function Navbar() {
	return (
		<nav
			id="navbar"
			className="bg-background fixed -top-full z-10 flex w-full flex-col items-center p-6 transition-all delay-0 duration-700 ease-in-out"
		>
			<div className="flex gap-8">
				<Link href="/">Home</Link>
				<Link href="/#career">Career</Link>
				<Link href="/#skills">Skills</Link>
				<Link href="/#projects">Projects</Link>
				<Link href="/#contact">Contact Me</Link>
			</div>
			{/* <SidebarTrigger /> */}
		</nav>
	);
}
