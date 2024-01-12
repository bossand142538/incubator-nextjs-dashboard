import SideNav from "../ui/dashboard/sidenav";

export default function Layout({ children }: {children: React.ReactNode}) {
    return (
        <div className="w-full md:flex h-screen mx-auto">
            <div>
                <SideNav/>
            </div>
            <div className="w-full">{children}</div>
        </div>
    );
}