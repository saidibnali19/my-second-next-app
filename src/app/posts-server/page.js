export default async function postsServer() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts = await response.json()

    return (
        <ul>
            {posts.slice(0, 10).map(post => (
                <li key={posts.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </li>
            ))}
        </ul>
    )
}
