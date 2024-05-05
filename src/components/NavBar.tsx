import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { Icons } from "./Icons"
import NavItems from "./NavItems"
import { buttonVariants } from "./ui/button"
import Cart from "./Cart"
import { cookies } from "next/headers"


const NavBar = async () => {
    
    //const nextCookies = cookies()
    const { user } = { id:1 , username: "peteris", email: "efa@sa.ld"} //await getServerSideUser(nextCookies)

    return (
        <div className="sticky z-50 top-0 inset-x-0 h-16 bg-[#3b5b61]">
            <header className="relative bg-[#3b5b61] border-b border-green-100">
                <MaxWidthWrapper >
                    <div className="">
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
                            

                            <div className="ml-auto flex items-center">
                                <div className="hidden lg:flex lg-flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                    {user ? null : ( 
                                    <Link href='/sign-in' className={buttonVariants({
                                        variant: 'ghost',
                                    })}>Sign in</Link>
                                )}

                                {user ? null: (<span className="h-6 w-px bg-gray-200" area-hidden="true" />)}

                                {user ? ( true ) : ( <Link href="/sign-up" className={buttonVariants({variant: "ghost",})}>       {/*TODO: CURRENTLY THERE IS A BOOLEAN VALUE, BUT THIS NEEDS TO BE TAKEN FROM USERACCOUNTNAV TO SEE IF THE USER IS OR ISNT LOGGED IN*/}
                                        Create account
                                    </Link>
                                )}

                                    {user ? (<span className="h-6 w-px bg-gray-200" area-hidden="true" />) : null}

                                    {user ? null : (<div className="flex lg:ml-6 ">
                                    <span className="h-6 w-px bg-gray-200" area-hidden="true" />
                                        </div>
                                    )}

                                    <div className="ml-4 flow-root lg:ml-6">
                                        <Cart />
                                    </div>
                                </div>
                           </div>
                        </div> 
                    </div>
                </MaxWidthWrapper>
            </header>
        </div>
    );
}

export default NavBar;