export const books = [
    { id: 0, name: "48 Laws of Power" },
    { id: 1, name: "Winning Through Intimidation" }
]

export async function GET() {
    return Response.json(books)
}

export async function POST(request) {
    const book = await request.json()

    const newBook = {
        id: books.length + 1,
        name: book.name
    }

    books.push(newBook)

    return new Response(JSON.stringify(books), {
        headers: {
            "Content-Type": "application/json"
        },
        status: 201
    })
}