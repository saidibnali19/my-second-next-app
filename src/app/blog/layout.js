import Link from "next/link";

export default function BlogLayout({ children }) {
  return (
    <>
      <Link href="/">Home </Link>
      <Link href="/">Blog</Link>
      {children}
    </>
  );
}
