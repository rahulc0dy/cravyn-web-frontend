"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="w-full h-screen flex justify-center flex-col items-center">
      <Image
        src="/assets/images/404-not-found-landscape.svg"
        width={500}
        height={500}
      />

      <div className="max-w-5xl px-5 text-center">
        <h1 className="text-3xl md:text-5xl font-bold py-5">
          Oops! That page must have been cooked.
        </h1>
        <p className="py-2 text-xl font-light">
          The page you requested was not found, or the url is not valid.
        </p>
      </div>
      <div className="flex space-x-4">
        {/* Container for buttons with spacing */}
        <Link
          href="/"
          className="font-bold text-primary-grey bg-accent-yellow hover:drop-shadow-lg rounded-md px-9 py-2 my-2 transition-all"
        >
          Return Home
        </Link>
        <button
          onClick={() => router.back()} // Go to the previous page when clicked
          className="font-bold text-primary-grey bg-accent-green hover:drop-shadow-lg rounded-md px-9 py-2 my-2 transition-all"
        >
          Previous Page
        </button>
      </div>
    </div>
  );
}
