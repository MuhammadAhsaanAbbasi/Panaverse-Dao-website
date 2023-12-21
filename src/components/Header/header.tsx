import logo from "/public/assests/navbar logo.png"
import Image from "next/image"
import Link from "next/link"
import Wrapper from "@/components/shared/Wrapper/wrapper"
import { ChevronDown } from "lucide-react"
import { CoursesData } from "@/components/shared/Data/data"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Navhead = () => {
  const program = CoursesData.map((item)=>(item))
  return (
    <>
      <header className="bg-gradient-to-r from-secondary via-ordinary to-extraordinary w-full h-2">
        </header>
    <nav className="bg-[#ffffff9d] backdrop-blur-xl sticky top-0 z-10">
    <Wrapper>
        <div className="flex justify-between py-4 px-3 items-center">
    <div>
      <Link href={"/"}>
        <Image src={logo} alt="" height={110} width={110}/>
      </Link>
    </div>
    <ul
    className="flex gap-x-8 font-medium px-6">
        <Link href={"/"}><li>Home</li></Link>
        <li><DropdownMenu>
  <DropdownMenuTrigger className="flex items-center">Courses<ChevronDown/></DropdownMenuTrigger>
  <DropdownMenuContent className="bg-white">
    {
    program.map((item,i)=>(
      <DropdownMenuItem key={i} className='font-bold text-black hover:bg-transparent'>
        <Link href={`/Courses/${item.id}`}>{item.name}</Link>
      </DropdownMenuItem>
      ))
    }
  </DropdownMenuContent>
</DropdownMenu></li>
    </ul>
    </div>
      </Wrapper>
</nav>
    </>
  )
}

export default Navhead