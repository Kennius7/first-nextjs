import Link from "next/link";


export default function Blog ({posts}) {
    return (
        <>
            <div className="text-[35px] font-bold font-poppins">Our Blog Section</div>

            {posts.map((post, index) => {
                return (
                    <div key={index} className="w-full my-6">
                        <div className="bg-indigo-100 w-[52%]">
                            <Link href={`/blog/${post.slug}`} className="text-[22px] font-poppins font-bold">
                                {post.title}
                            </Link>
                        </div>
                        <div className="italic text-[17px] w-[50%]">
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


