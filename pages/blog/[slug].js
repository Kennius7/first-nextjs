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

    console.log(data.posts.slug);

    const thePaths = data.posts.map((pet) => { return { params: { slug: pet.slug } } })
    console.log(thePaths);
    return { path: [...thePaths], fallback: false };
}

export async function getStaticProps(context) {
    const response = await fetch("https://learnwebcode.github.io/json-example/posts.json");
    const data = await response.json();
    const thePosts = data.posts.filter((post) => post.slug === context.params.slug)[0]

    return{ props: { posts: thePosts, title: thePosts.title } };
}

