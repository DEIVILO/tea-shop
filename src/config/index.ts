export const PRODUCT_CATEGORIES = [
    {
        label: "Products",
        value: "products" as const,
        featured: [
            {
                name: "Our favourites",
                href: "#",
                imageSrc: "/images/ofteas.jpg"
            },
            {
                name: "New arrivals",
                href: "#",
                imageSrc: "/images/ofteas.jpg"
            },
            {
                name: "Bestsellers",
                href: "#",
                imageSrc: "/images/ofteas.jpg"
            },
        ],
    },
    {
        label: "Tea Supplies",
        value: "tea_supplies" as const,
        featured: [
            {
                name: "Our favourites",
                href: "#",
                imageSrc: "/images/sup.jpg"
            },
            {
                name: "New arrivals",
                href: "#",
                imageSrc: "/images/sup.jpg"
            },
            {
                name: "Bestsellers",
                href: "#",
                imageSrc: "/images/sup.jpg"
            },
        ],
    },
]