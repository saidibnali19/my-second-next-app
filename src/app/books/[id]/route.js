import { books } from "../route";

export async function GET(_request, { params }) {
    const { id } = await params
    const book = books.find(book => book.id === parseInt(id))

    return Response.json(book)
}