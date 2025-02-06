export default async function UsersServer() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await response.json()

    return (
        <div>
            {users.map((user) => (
                <div key={user.id}>
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                </div>
            ))}
        </div>
    )
}
