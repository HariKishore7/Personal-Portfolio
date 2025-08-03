import About from "@/components/About";
import Contact from "@/components/Contact";
import Main from "@/components/Main";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { useEffect, useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [showScrollUp, setShowScrollUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollUp(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Head>
        <title>Hari Kishore Portfolio</title>
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
      {showScrollUp && (
        <div className="fixed bottom-8 right-8 z-50 flex justify-center items-center">
          <Link href="/#home">
            <div className="flex rounded-full shadow-lg shadow-gray-500 p-4 cursor-pointer hover:scale-125 ease-in duration-300 gap-2 bg-white">
              <HiOutlineChevronDoubleUp size={30} className="text-[#5651e5]" />
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}
