import Link from "next/link";

function About() {
  return (
    <>
      <div className="bgImg2 flex flex-col justify-center items-center w-full">
        <div className="text-[30px] text-start font-poppins font-bold text-white mt-[50px]">A page about us!</div>
        <div className="text-[22px] text-center text-blue-800 font-semibold">Welcome to our About Us Page</div>
        <div className="w-[400px] italic text-white mt-[50px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, aspernatur
          asperiores fugit voluptatibus quisquam dolorum voluptates, quas, voluptate</div>
        <div className="w-full flex justify-end mt-[100px] mr-10">
          <Link href="/">Visit the Home Page</Link>
        </div>
      </div>
    </>
  )
}

export default About