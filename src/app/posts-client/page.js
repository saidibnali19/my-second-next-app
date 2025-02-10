"use client"

import React, { useEffect, useState } from 'react'

export default function PostsClient() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/posts123")
                if (!response.ok) throw new Error("Error fetching posts")

                const data = await response.json()
                console.log(data)
                setPosts(data.slice(0, 10))
            } catch (err) {
                setError("Error fetching posts")
                if (err instanceof Error) setError(`${err.message}`)
            } finally {
                setLoading(false)
            }
        }
        fetchPosts()
    }, [])

    if (loading) return <div>Loading...</div>
    if (error) return <div>{error}</div>

    return (
        <>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </>
    )
}
