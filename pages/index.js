import Link from "next/link";


function Index() {
  return (
    <>
      <div className="bgImg1 flex flex-col justify-center items-center w-full">
        <div className="text-[30px] text-start font-poppins text-white font-bold mt-[50px]">Hello world!</div>
        <div className="text-[22px] text-center text-blue-800 font-semibold">Welcome to our Home Page</div>
        <div className="w-[400px] italic text-white mt-[50px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, aspernatur 
        asperiores fugit voluptatibus quisquam dolorum voluptates, quas, voluptate</div>
        <div className="w-full flex justify-end mt-[100px] mr-10">
          <Link href="/about">Visit the About Page</Link>
        </div>
      </div>
    </>
  )
}

export default Index