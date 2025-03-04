'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();

  return (
    <>
        <h1 className="flex justify-center font-bold text-2xl mt-10">TODO APPLICATION</h1>
        <div className="flex justify-around mt-5">
        {/* Method 1 to link in nextjs */}
        <Link href="/sign-up">
        <Button className="cursor-pointer">sign-up</Button>
        </Link>

        {/* Method 2 to link in nextjs---- bad way to route in nextJs */}
        <Button onClick={() => {
          router.push('/sign-in')
        }} className="cursor-pointer">sign-in</Button>
        </div>
    </>
  );
}
