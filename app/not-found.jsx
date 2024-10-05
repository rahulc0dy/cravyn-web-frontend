import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-screen h-screen flex justify-center flex-col items-center">
      <h2 className=" font-semibold text-7xl m-2">Not Found</h2>
      <p>Could not find requested resource</p>
      <Image
        src="/assets/images/why-are-you-gay-gay.gif"
        width={500}
        height={500}
      />
      <Link href="/">Return Home</Link>
    </div>
  );
}
