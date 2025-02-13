import { revalidatePath } from "next/cache"

export default async function mockUsers2() {
    const response = await fetch("https://67ada3f03f5a4e1477de6ad9.mockapi.io/users2")
    const users = await response.json()

    async function addUser2(formData) {
        "use server"
        const name = formData.get("name")
        const response = await fetch("https://67ada3f03f5a4e1477de6ad9.mockapi.io/users2", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name })
        })
        const newUser = await response.json()
        revalidatePath("/mock-users2")
        console.log(newUser)
    }

    return (
        <>
            <div className="wrapper">
                <div>
                    <form className="user-form" action={addUser2}>
                        <input name="name" />
                        <button type="submit">Add user</button>
                    </form>
                    <div>
                        {users.map(user => (
                            <p key={user.id}>{user.name}</p>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
