"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
    const pathname = usePathname()

    return (
        <nav className="primary-nav | wrapper">
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
                    <Link href="/posts-client" className={pathname === "/posts-client" ? "text-accent" : ""}>Posts-client</Link>

                </li>
                <li>
                    <Link href="/users-server" className={pathname === "/users-server" ? "text-accent" : ""}>users-server</Link>
                </li>
                <li>
                    <Link href="/users-server2" className={pathname === "/users-server2" ? "text-accent" : ""}>users-server2</Link>
                </li>
                <li>
                    <Link href="/posts-server" className={pathname === "/posts-server" ? "text-accent" : ""}>posts-server</Link>
                </li>
            </ul>
        </nav>
    )
}
