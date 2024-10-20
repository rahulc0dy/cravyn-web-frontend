import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full h-screen flex justify-center flex-col items-center">
      <Image
        src="/assets/images/404-not-found-landscape.svg"
        width={500}
        height={500}
      />

      <h1 className="text-2xl">Could not find requested page</h1>
      <Link
        href="/"
        className="font-bold text-primary-grey  bg-accent-yellow hover:drop-shadow-lg rounded-md px-9 py-2 my-2 transition-all"
      >
        Return Home
      </Link>
    </div>
  );
}
