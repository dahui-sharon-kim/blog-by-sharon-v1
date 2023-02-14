import { useQuery, useMutation } from "react-query";

export type Post = [{
  username: string;
  id: string;
  title: string;
  content?: string;
}]

const DEFAULT_POSTS: Post = [{
  username: "Dahui Kim",
  id: "1",
  title: "My first post",
  content: "Hello, World!"
}]

function PostPage() {
	const postsQuery = useQuery({
		queryKey: ["posts", 1, 2], // unique identifier
		queryFn: () => wait(1000).then(() => [...DEFAULT_POSTS]) // any asynchronous code
	})

	const newPostMutation = useMutation({
    mutationFn: (title: string) => {
      return wait(1000).then(() => DEFAULT_POSTS.push({
        username: "Dahui Kim",
        id: crypto.randomUUID(),
        title
      }))
    }
  })

	if (postsQuery.isLoading) return <h1>Loading...</h1>
	if (postsQuery.isError) {
		return <pre>{JSON.stringify(postsQuery.error)}</pre>
	}
	return (
		<div>
			{postsQuery.data?.map(post => (
				<div key={post.id}>{post.title}</div>
			))}
      <button onClick={() => newPostMutation.mutate("Trial")}>
        Add New
      </button>
		</div>
	)
}

function wait(duration: number) {
	return new Promise(resolve => setTimeout(resolve, duration))
}

export default PostPage;