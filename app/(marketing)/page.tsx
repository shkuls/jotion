"use client"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import Heading from "./_components/Heading"
import Footer from "./_components/Footer"
import { useConvexAuth } from "convex/react"
import { Spinner } from "@/components/ui/spinner"
import { SignInButton } from "@clerk/clerk-react"
import Link from "next/link"

export default function MarketingPage() {
  const {isAuthenticated , isLoading} = useConvexAuth();

  return (

    <div className="min-h-full flex flex-col">
      <div className="flex flex-col justify-center items-center md:justify-start text-center flex-1 p-10 font-bold text-xl md:text-2xl">
        <Heading>

        </Heading>
        {
        !isAuthenticated &&
            <SignInButton mode="modal">
              
                    <Button className="my-5" >
                        Enter Jotion!
                    </Button>
            </SignInButton>

        }
        {isLoading &&
<div className="m-10">
  <Spinner></Spinner>
  </div>

        }
        {isAuthenticated && !isLoading &&
<div className="m-10">
  <Button asChild>
    <Link href="/document">
    
    Enter Jotion!
    </Link>
  </Button>
  </div>

        }


        <div>

        <Image
        src="/documents.png"
            height={300}
            width={400}
            alt="hero"
            className="my-5 dark:hidden"
           >
        </Image>
        <Image
        src="/documents-dark.png"
            height={300}
            width={400}
            alt="hero"
            className="my-5 "
           >
        </Image>
        </div>

      </div>
        <Footer></Footer>
    </div>
  )
}
