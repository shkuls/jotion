"use client";
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { useConvexAuth } from "convex/react"
import { SignInButton , UserButton ,SignOutButton} from "@clerk/clerk-react"
import { Spinner } from "@/components/ui/spinner";
import Link from "next/link";

export default function Navbar() {
  const {isAuthenticated , isLoading} = useConvexAuth();
  
  return (
    
    <div className="bg-white dark:bg-black shadow-md flex flex-row justify-between sticky top-0 ">
      <span className="flex m-5">

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
className="hidden dark:block"
>

</Image>
<p  className="m-auto font-extrabold text-2xl">
  Jotion
</p>
  </span>
<div className=" flex flex-row my-auto mr-10">
  {isLoading && <p className="my-auto mx-10"><Spinner></Spinner></p>}
  {!isAuthenticated && !isLoading && 
  <div>
    <SignInButton mode="modal">
      <Button className="mr-5" variant={"ghost"}>
        Log in
      </Button>
    </SignInButton>
    <SignInButton mode="modal">
      <Button className="mr-5">
        Get Jotion Free
      </Button>
    </SignInButton>
  </div>
  }
  {isAuthenticated &&
    <div className="flex mr-3">
      <Button className="m-auto">
      <Link href="/document">
    
    Enter Jotion!
    </Link>
      </Button>
      <div className="my-auto pt-1 mx-5">
      <UserButton>

      </UserButton>
        </div>

      </div>
  }
<ModeToggle></ModeToggle>
</div>
    </div>
  )
}
