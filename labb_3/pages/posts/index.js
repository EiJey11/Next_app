function AllPosts({ posts }) {
    return (
        <div className="flex flex-col justify-center items-center w-full min-h-screen">
            <h1 className="text-3xl font-extrabold mb-8">Posts</h1>
            <div className="flex flex-wrap justify-center mx-32 my-16">
                {posts.slice(0, 6).map((post) => {
                    return (
                        <div
                            className="flex flex-col items-start justify-center max-w-[400px] min-h-[240px] m-4 rounded-md shadow-lg py-4 px-8 bg-[#f7fee7]"
                            key={post.id}
                        >
                            <div className="flex">
                                <h2 className="font-semibold pr-2">Title:</h2>
                                <h3>{post.title}</h3>
                            </div>
                            <div className="flex">
                                <h2 className="font-semibold pr-2">
                                    Reaction:
                                </h2>
                                <h2 className="font-bold text-[#082f49] ">
                                    {post.reactions}
                                </h2>
                            </div>
                            <div className="flex flex-col mt-6">
                                <h2 className="font-semibold pr-2">
                                    Description:
                                </h2>
                                <h2>{post.body.slice(0, 80)} ...</h2>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default AllPosts

// Start json server with command - serve db.json. Then add link to fetch.
export async function getServerSideProps() {
    const response = await fetch('http://localhost:55994')
    const data = await response.json()

    return {
        props: {
            posts: data
        }
    }
}
