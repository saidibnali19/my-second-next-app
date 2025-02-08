export const users = [
    { id: 0, name: "John Doe" },
    { id: 1, name: "Jane Doe" },
    { id: 2, name: "Sally Kelly" },
]

export async function GET() {
    return Response.json(users)
}
export async function POST(request) {
    const user = await request.json()
    const newUser = {
        id: users.length + 1,
        name: user.name
    }

    users.push(newUser)
    return new Response(JSON.stringify(newUser), {
        headers: {
            "Content-Type": "application/json"
        },
        status: 201
    })
}