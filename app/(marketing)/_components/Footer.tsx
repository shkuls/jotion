
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Ghost } from "lucide-react"

export default function Footer() {
  return (
    <div className='flex items-center w-full justify-around'>
      <div className="flex ml-5">

    <Image src="./logo.svg" 
    width={60} 
    height={30}
    alt="logo"
    className="dark:hidden"
    >

    </Image>
    <Image src="./logo-dark.svg" 
    width={60} 
    height={30}
    alt="logo"
    className=""
    >

    </Image>
    <p  className="m-auto font-extrabold text-2xl">
      Jotion
    </p>
      </div>
      <div>
        <Button variant={"ghost"}>
          Terms & Conditions
        </Button>
        <Button variant={"ghost"}>
          Privacy Policy
        </Button>
      </div>
    </div>
  )
}
