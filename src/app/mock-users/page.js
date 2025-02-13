import { revalidatePath } from "next/cache"

export default async function mockUsers() {
    const response = await fetch("https://67ada3f03f5a4e1477de6ad9.mockapi.io/users")
    const users = await response.json()

    async function addUser(formData) {
        "use server"
        const name = formData.get("name")
        const response = await fetch("https://67ada3f03f5a4e1477de6ad9.mockapi.io/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name }),
        })

        const newUser = await response.json()
        revalidatePath("/mock-users")
        console.log(newUser)
    }

    return (
        <>
            <div className="wrapper">
                <form className="user-form" action={addUser}>
                    <input type="text" name="name" required />
                    <button type="submit">Add user</button>
                </form>
                <div>
                    {users.map(user => (
                        <p key={user.id}>{user.name}</p>
                    ))}
                </div>
            </div>
        </>
    )
}
