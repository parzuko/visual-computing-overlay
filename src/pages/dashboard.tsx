import Link from "next/link";
import BaseImage from "../../public/base-thingy.png";
import contours from "../../public/countours.json";
import Image from "next/image";

export default function Dashboard() {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center space-y-4 bg-[#0E1D28]">
      <h1 className="text-3xl font-bold text-zinc-200">Dashboard</h1>
      <div className="relative">
        <Image src={BaseImage} alt="Base image" />
        <svg className="absolute inset-0">
          {contours.map((contour, index) => (
            <path
              key={index}
              d={contour.svgPath}
              fill="none"
              stroke="black"
              strokeWidth="2"
            />
          ))}
        </svg>
      </div>

      <Link href="/">
        <span className="font-medium text-zinc-700 hover:text-sky-700">
          Home
        </span>
      </Link>
    </main>
  );
}
