import { useEffect, useRef } from "react";

export function useObserver() {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const navbar = document.getElementById("navbar");

		const observer = new IntersectionObserver(
			([entry]) => {
				if (navbar) {
					if (!entry.isIntersecting) {
						navbar.classList.replace("-top-full", "top-0");
					} else {
						navbar.classList.replace("top-0", "-top-full");
					}
				}
			},
			{ threshold: 1 }
		);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => {
			observer.disconnect();
		};
	}, []);

	return [ref];
}
