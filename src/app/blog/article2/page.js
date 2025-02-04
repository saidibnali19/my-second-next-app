"use client"

import { useRouter } from "next/navigation"

export default function Article2Page() {
    const router = useRouter()

    return (
        <>
            <h1>Article2 heading</h1>
            <button onClick={() => router.push("/")}>Go to homepage</button>
        </>
    )
}
