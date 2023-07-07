import Link from "next/link";

export default function About({repoCount, name, createdAtDate, createdAtTime}) {
  return (
    <>
      <div className="bgImg2 flex flex-col justify-center items-center w-full">

        <div className="text-[40px] text-start font-poppins font-bold text-white mt-[50px]">
          A page about us!
        </div>

        <div className="text-[30px] text-center text-blue-800 font-semibold">
          Welcome to our About Us Page
        </div>

        <div className="w-[50%] italic text-gray-200 text-[20px] font-semibold mt-[120px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, aspernatur
          asperiores fugit voluptatibus quisquam dolorum voluptates, quas, voluptate
        </div>

        <p className="w-[98%] italic text-white text-center text-[25px] font-semibold mt-[30px]">
          I have &nbsp;
            <span className="text-blue-800">
              {repoCount}
            </span> 
            &nbsp; public repos on my GitHub account, owned by {name}, 
            <br/>and created on this date&nbsp; 
            <span className="text-blue-800">
              {createdAtDate}
            </span> at <span className="text-blue-800">{createdAtTime}</span> GMT.
        </p>

        <div className="w-full flex justify-end mt-[50px] mr-10">
          <Link href="/">Visit the Home Page</Link>
        </div>
        
      </div>
    </>
  )
}

export async function getStaticProps() {
  const response = await fetch("https://api.github.com/users/Kennius7")
  const data = await response.json()

  // const createdDate = new Date(data.created_at).toLocaleDateString("en-US");
  const createdDate = new Date(new Date(data.created_at).getTime()).toUTCString().slice(-24, -12);
  const createdTime = new Date(new Date(data.created_at).getTime()).toUTCString().slice(-11, -4);

  return {
    props: {
      repoCount: data.public_repos,
      name: data.name,
      createdAtTime: createdTime,
      createdAtDate: createdDate,
    },
    revalidate: 10
  }
}


