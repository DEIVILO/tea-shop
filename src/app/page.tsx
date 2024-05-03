import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button"


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
    </MaxWidthWrapper>
    </>
  );
}
