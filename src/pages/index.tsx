import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import SignInImage from "../../public/signin.png";
import { SignIn } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <Head>
        <title>Code 4 Oral Cancer</title>
        <meta name="description" content="Visualise Data in 3D" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col justify-between space-y-5 p-10 font-mono lg:flex-row lg:p-20">
        <section className="w-full lg:w-1/2">
          <Image src={SignInImage} alt="Sign in image" />
        </section>
        <section className="flex w-full flex-col items-center justify-center space-y-2 lg:w-1/2 lg:space-y-4">
          <h1 className="text-2xl lg:text-4xl">Code 4 Oral Cancer</h1>
          <Link href="/dashboard">Dashboard</Link>
          <SignIn />
        </section>
      </main>
    </>
  );
}
