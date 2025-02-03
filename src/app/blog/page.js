import Link from "next/link";

export default function Page() {
    return (
        <>
            <article>
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
