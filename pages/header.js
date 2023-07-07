import Link from "next/link";
import { useRouter } from "next/router";
import logo from "../public/img/Discount.svg";
import Image from "next/image";



function Header() {
const router = useRouter();

  return (
    <>
        <nav className="flex flex-row justify-start items-center bg-indigo-200 w-full py-3">
            <Image src={logo} alt="logo" className="w-[45px] h-[45px] bg-cover" />
            <div className="text-[26px] text-start text-gray-700 font-poppins w-[15%] pl-4">
                Shosan's Hub
            </div>
            <ul className="flex justify-start items-center w-[60%]">
                <li>
                    <Link href="/" 
                        className={router.pathname === "/" ? "text-blue-800" : ""}>Home</Link>
                </li>
                <li>
                    <Link href="/about" 
                        className={router.pathname === "/about" ? "text-blue-800" : ""}>About Us</Link>
                </li>
                <li>
                    <Link href="/blog" 
                        className={router.pathname === "/blog" ? "text-blue-800" : ""}>Blog</Link>
                </li>
                <li>
                    <Link href="/forecast" 
                        className={router.pathname === "/forecast" ? "text-blue-800" : ""}>Forecast</Link>
                </li>
            </ul>
        </nav>
    </>
  )
}

export default Header