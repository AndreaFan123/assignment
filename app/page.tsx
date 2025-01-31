import Link from "next/link";

export default function Home() {
  return (
    <div className="flex gap-4">
      <Link
        className="text-white bg-black shadow-md px-3 py-2 rounded-md hover:bg-gray-700 transition-all ease-in-out duration-300"
        href="/level-1"
      >
        Level 1
      </Link>
      <Link
        className="text-white bg-black shadow-md px-3 py-2 rounded-md hover:bg-gray-700 transition-all ease-in-out duration-300"
        href="/level-2"
      >
        Level 2
      </Link>
    </div>
  );
}
