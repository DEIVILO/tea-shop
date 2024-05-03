"use client"

import { ShoppingCartIcon } from "lucide-react"
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"
import { Separator } from "./ui/separator"
import { formatPrice } from "@/lib/utils"
import Link from "next/link"
import { buttonVariants } from "./ui/button"
import Image from "next/image"
import { useCart } from "@/hooks/use-cart"
import { ScrollArea } from "./ui/scroll-area"
import { useEffect, useState } from "react"
import CartItem from "./CartItem"




const Cart = () => {

    const itemCount = 1

    const [isMounted, setIsMounted] = useState<Boolean>(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    return (
        <Sheet>
            <SheetTrigger className="group -m-2 flex items-center p-2">
                <ShoppingCartIcon aria-hidden="true" className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"/>
                <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                {isMounted ? itemCount : 0}
                </span>
            </SheetTrigger>
            <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
                <SheetHeader className="space-y-2.5 pr-6">
                    <SheetTitle>Cart ({itemCount}) </SheetTitle>
                </SheetHeader>
                {itemCount > 0 ? (
                    <>
                    <div className="flex w-full flex-col pr-6">
                        <ScrollArea>
                        {items.map(({product}) => (
                            <CartItem product={product} key={product.id} />
                        ))}
                        </ScrollArea>
                        Cart items:                                                           {/*TODO: WHEN REMOVING AN ITEM, IT REMOVES ALL THE REST WITH THE SAME ID*/}
                    </div>                                                                     {/*TODO: ADD AMMOUNT CHANGING IN THE CAR WITH +/-*/}
                    <div className="space-y-4 pr-6">
                        <Separator />
                        <div className="space-y-1.5 pr-6 text-sm">
                            <div className="flex">
                                <span className="flex-1">Shipping</span>
                                <span className="">Calculated upon ordering</span>           {/* TODO: IMPLEMENT AUTOMATED SHIPPING PRICE CALCULATOR*/}
                            </div>
                            <div className="flex">
                                <span className="flex-1">Shipping packaging</span>
                                <span>{formatPrice(packagingCosts)}</span>
                            </div>
                            <div className="flex">
                                <span className="flex-1">Total</span>
                                <span>{formatPrice(cartTotal + packagingCosts)}</span>
                            </div>
                        </div>

                        <SheetFooter>
                            <SheetTrigger asChild>
                                <Link href="/cart" className={buttonVariants({
                                    className: "w-full"
                                })}>
                                    Continue to Checkout
                                </Link>
                            </SheetTrigger>
                        </SheetFooter>
                    </div>
                </>
            ) : (
                <div className="flex h-full flex-col items-center justify-center space-y-1">
                    <div aria-hidden="true" className="relative mb-4 h-60 w-60 text-muted-foreground">
                        <Image src="/hippo-empty-cart.png" fill alt="empty shopping cart"/>
                    </div>
                    <SheetTrigger asChild>
                        <Link href="/products" className={buttonVariants({
                            variant: "link",
                            size: "sm",
                            className: "text-sm text-muted-foreground"
                        })}>
                            Add items to Your Cart to Checkout
                        </Link>
                    </SheetTrigger>
                </div>
            )}
        </SheetContent>
    </Sheet>
    );
}

export default Cart;