import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button"
import { Vegan, TreePine } from "lucide-react";
import { Permanent_Marker } from "next/font/google";
import ProductShowcase from "@/components/ProductShowcase";


const gains = [
  {
    name: "Ethically Farmed",
    Icon: Vegan,
    description: "We source our Tea Only from ethically farmed herbs."
  },
  {
    name: "Our Pledge",
    Icon: TreePine,
    description: "We pledge to donate 3% of profits towards the restoration of natural environments."
  },
  {
    name: "Delivery",
    Icon: Vegan,
    description: "We offer same-day handling for all in-stock products. We use only eco-friendly packaging."
  },
]



export default function Home() {
  return (
    <>
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
          The one stop shop<br/> for{" "}
        <span className="text-green-300">Tea Lovers</span>
        .
        </h1>
        <p className="mt-6 text-lg max-w-prose text-green-100">Indulge the flavour of Highest quality Tea.</p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link href="/products" className={buttonVariants()} >Browse Trending</Link>
          <Button variant='ghost'>Explore &rarr;</Button>
        </div>
      </div>

      <ProductShowcase />
    </MaxWidthWrapper>

    <section className="border-t border-gray-200 bg-green-50">
      <MaxWidthWrapper className="py-20">
        <div className="grid grid-cols gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
          {gains.map((gain) => (
            <div key={gain.name} className="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
              <div className="md:flex-shrink-0 flex justify-center">
                <div className="h-16 w-16 flex items-center justify-center rounded-full bg-green-100 text-green-900">
                  {<gain.Icon className="w-1/2 h-1/2" />}
                </div>
              </div>

              <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
              <h3 className="text-base font-medium text-gray-900">{gain.name}</h3>
              <p className="mt-3 font-medium text-sm text-muted-foreground">{gain.description}</p>
            </div>

            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
    </>
  );
}
