import Link from "next/link";

export default function Page() {
    return (
        <>
            <article>
                <h1>Welcome to the blog page</h1>
                <p>Here is a list of our blog posts</p>
                <ul>
                    <li>
                        <Link href="/blog/article1">Article 1</Link>
                    </li>
                    <li>
                        <Link href="/blog/article2">Article 2</Link>
                    </li>
                </ul>
            </article>
        </>
    );
}
