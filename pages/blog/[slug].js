import Link from "next/link";
import { useRouter } from "next/router";


export default function Post ({post}) {
    const router = useRouter();

    return (
        <>
            <div>
                <Link href="/blog">
                    <small>
                        &laquo;Back to Blog Section
                    </small>
                </Link>
            </div>
            <div>{post.title}</div>
            <div>{post.content}</div>
            <button className="" onClick={() => router.push("/blog")}>
                Click to Programmatically navigate or redirect
            </button>
        </>
    )
}


export async function getStaticPaths() {
    const response = await fetch("https://learnwebcode.github.io/json-example/posts.json");
    const data = await response.json();

    const thePaths = data.posts.map(pet => { return { params: { slug: pet.slug } } });

    return { path: thePaths, fallback: false };
}

export async function getStaticProps(context) {
    const response = await fetch("https://learnwebcode.github.io/json-example/posts.json");
    const data = await response.json();
    const thePosts = data.posts.filter((post) => { post.slug === context.params })

    return{ props: { posts: thePosts, title: thePosts.title } };
}

