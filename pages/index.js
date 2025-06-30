import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import NavBar from "@/components/NavBar";
import Main from "@/components/Main";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Hari Kishore Portfolio</title>
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <div className="fixed top-[80%] left-[93%] flex justify-center pt-12">
        <Link href="/#home">
          <div className="flex rounded-full shadow-lg shadow-gray-500 p-4 cursor-pointer hover:scale-125 ease-in duration-300 gap-2">
            <HiOutlineChevronDoubleUp size={30} className="text-[#5651e5]" />
          </div>
        </Link>
      </div>
    </div>
  );
}
