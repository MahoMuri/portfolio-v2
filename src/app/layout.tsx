import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { IBM_Plex_Mono, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
	variable: "--font-poppins",
	weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
	variable: "--font-ibm-plex-mono",
	weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
	title: "MahoMuri",
	description: "Made with love.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${poppins.variable} ${ibmPlexMono.variable} antialiased`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
