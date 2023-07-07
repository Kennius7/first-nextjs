import Link from "next/link";
import { useRouter } from "next/router";


export default function Post ({post}) {
    const router = useRouter();

    return (
        <>
            <div>
                <Link href="/blog">
                    <small className="font-bold">
                        &laquo;Back to Blog Section
                    </small>
                </Link>
            </div>
            <div className="text-[22px] font-poppins font-bold">{post.title}</div>
            <div className="italic text-[17px] w-[50%]">{post.content}</div>
            <button className="mt-10 mb-6" onClick={() => router.push("/blog")}>
                Click to redirect back to Blog Section
            </button>
        </>
    )
}


export async function getStaticPaths() {
    const response = await fetch("https://learnwebcode.github.io/json-example/posts.json");
    const data = await response.json();

    const thePaths = data.posts.map((pet) => { return { params: { slug: pet.slug } } });

    return { paths: thePaths, fallback: false };
}

export async function getStaticProps(context) {
    const response = await fetch("https://learnwebcode.github.io/json-example/posts.json");
    const data = await response.json();
    const thePosts = data.posts.filter((post) => post.slug === context.params.slug)[0]

    return{ props: { post: thePosts, title: thePosts.title } };
}

