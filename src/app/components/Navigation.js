"use client"
import { SignInButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
    const pathname = usePathname()

    return (
        <nav className="primary-nav | wrapper flex">
            <ul className="flex" role="list">
                <li>
                    <Link href="/" className={pathname === "/" ? "text-accent" : ""}>Home</Link>
                </li>
                <li>
                    <Link href="/blog" className={pathname === "/blog" ? "text-accent" : ""}>Blog</Link>
                </li>
                <li>
                    <Link href="/users-client" className={pathname === "/users-client" ? "text-accent" : ""}>Users-client</Link>

                </li>
                <li>
                    <Link href="/users-server" className={pathname === "/users-server" ? "text-accent" : ""}>users-server</Link>
                </li>
                <li>
                    <Link href="/mock-users" className={pathname === "/mock-users" ? "text-accent" : ""}>Mock-users</Link>
                </li>
            </ul>
            <SignedOut>
                <SignInButton mode="modal" />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </nav>
    )
}
