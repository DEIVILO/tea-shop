"use client"

import { ShoppingCartIcon } from "lucide-react"
import { Sheet, SheetTrigger } from "./ui/sheet";
import { useState } from "react";


const Cart = () => {


    const itemCount = 1
    
    const [isMounted, setIsMounted] = useState<Boolean>(false)


    return (
        <Sheet>
            <SheetTrigger className="group -m-2 flex items-center p-2">
                <ShoppingCartIcon aria-hidden="true" className="h-6 w-6 flex-shrink-0 text-foreground group-hover:text-foreground/85"/>
                    <span className="ml-2 text-sm font-medium text-foreground group-hover:text-foreground/85">
                        {isMounted ? itemCount : 0}
                    </span>
            </SheetTrigger>
        </Sheet>
    );
}

export default Cart;