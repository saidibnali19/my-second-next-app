"use client"

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()

  return (
    <>
      <h1>Article 1 heading</h1>
      <button onClick={() => router.push("/")}>Go to homepage</button>
    </>
  );
}
