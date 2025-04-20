import {
	Sidebar,
	SidebarContent,
	SidebarHeader,
} from "@/components/ui/sidebar";

export function AppSidebar() {
	return (
		<Sidebar>
			<SidebarHeader>
				<div className="flex justify-between">
					<h3>Welcome</h3>
					{/* <ThemeToggle /> */}
				</div>
			</SidebarHeader>
			<SidebarContent></SidebarContent>
		</Sidebar>
	);
}
