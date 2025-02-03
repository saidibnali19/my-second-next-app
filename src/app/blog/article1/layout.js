import Link from "next/link";

export default function BlogLayout({ children }) {
  return (
    <article>
      <Link href="/">Home </Link>
      <Link href="/">Blog</Link>
      {children}
    </article>
  );
}
