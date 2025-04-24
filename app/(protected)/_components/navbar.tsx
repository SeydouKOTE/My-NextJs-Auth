"use client"

import {usePathname} from "next/navigation";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {UserButton} from "@/app/components/auth/user-button";

export const Navbar = () => {
    const pathname = usePathname();

    return (
        <nav className="flex flex-col sm:flex-row sm:justify-between items-center bg-secondary p-4 rounded-xl w-full max-w-[500px] mx-auto shadow-sm gap-4 sm:gap-0">
    <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
        <Button asChild variant={pathname === "/server" ? "default" : "outline"}>
            <Link href="/server">Server</Link>
        </Button>
        <Button asChild variant={pathname === "/client" ? "default" : "outline"}>
            <Link href="/client">Client</Link>
        </Button>
        <Button asChild variant={pathname === "/admin" ? "default" : "outline"}>
            <Link href="/admin">Admin</Link>
        </Button>
        <Button asChild variant={pathname === "/settings" ? "default" : "outline"}>
            <Link href="/settings">Settings</Link>
        </Button>
    </div>
    <UserButton />
</nav>

    );
}