import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { Icons } from "./Icons"
import NavItems from "./NavItems"
import { buttonVariants } from "./ui/button"
import Cart from "./Cart"
import { cookies } from "next/headers"


const NavBar = async () => {
    
    //const nextCookies = cookies()
   // const { user } = await getServerSideUser(nextCookies)

    return (
        <div className="sticky z-50 top-0 inset-x-0 h-16 bg-[#3b5b61]">
            <header className="relative bg-[#3b5b61]">
                <MaxWidthWrapper >
                    <div className="border-b border-gray-200">
                        <div className="flex h-16 items-center">

                            {/* TODO:MOBILE nav */}

                            <div className="ml-4 flex lg:ml-0">
                                <Link href="/">
                                    <Icons.logo className="h-10 w-10" />
                                </Link>
                            </div>

                            <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
                                <NavItems />
                            </div>
                            
                        </div> 
                    </div>
                </MaxWidthWrapper>
            </header>
        </div>
    );
}

export default NavBar;