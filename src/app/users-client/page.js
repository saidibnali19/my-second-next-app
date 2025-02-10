"use client"

import { useState, useEffect } from "react"

export default function UsersClient() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users")
                if (!response.ok) throw new Error("Failed to fetch users")

                const data = await response.json()
                setUsers(data)
            } catch (err) {
                setError("Failed to fetch users")
                if (err instanceof Error) {
                    setError(`${err.message}`)
                }
            } finally {
                setLoading(false)
            }
        }
        fetchUsers()
    }, [])

    if (loading) return <div>Loading...</div>
    if (error) return <div>{error}</div>

    return (
        <div>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name} {user.email}</li>
                ))}
            </ul>
        </div>
    )
}
