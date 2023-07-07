import Link from "next/link";


export default function Blog ({posts}) {
    return (
        <>
            <div>Our Blog Section</div>

            {posts.map((post, index) => {
                return (
                    <div key={index}>
                        <div>
                            <Link href={`/blog/${post.slug}`}>
                                {post.title}
                            </Link>
                        </div>
                        <div>
                            {post.content}
                        </div>
                        <hr />
                    </div>
                )
            })}
        </>
    )
}

export async function getStaticProps() {
    const response = await fetch("https://learnwebcode.github.io/json-example/posts.json");
    const data = await response.json();

    return{props: {posts: data.posts}}
}


