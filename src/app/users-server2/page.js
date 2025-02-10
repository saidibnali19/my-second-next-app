export default async function UsersServer2() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await response.json()

    return (
        <div>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name} {user.email}</li>
                ))}
            </ul>
        </div>
    )
}
