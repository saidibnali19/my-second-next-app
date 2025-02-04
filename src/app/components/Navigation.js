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
                    <Link href="/blog/article1" className={pathname.startsWith("/blog/article1") ? "text-accent" : ""}>Article1</Link>
                </li>
            </ul>
        </nav>
    )
}
