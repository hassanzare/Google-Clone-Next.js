import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import { MagnifyingGlassIcon, MicrophoneIcon } from "@heroicons/react/24/solid";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const searchInputReaf = useRef(null);
  const router = useRouter();
  const search = (event) => {
    event.preventDefault();
    const term = searchInputReaf.current.value;
    if (!term.trim()) {
      return;
    } else {
      router.push(`/search?term=${term.trim()}`);
    }
  };

  return (
    <div>
      <Head>
        <title>Google</title>
        <meta name="description" const="generated by create next app" />
        <link rel="icon" href="/favicon.icon" />
      </Head>
      {/* header */}
      <Header />
      {/* body */}
      <form className="flex flex-col justify-center items-center mt-40">
        <Image
          width="300"
          height="100"
          className="w-72 h-24"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1024px-Google_2015_logo.svg.png"
        />
        <div className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 hovwr:shadow-lg focus-within:shadow-lg px-5 py-3 rounded-full items-center sm:max-w-xl lg:max-w-2xl">
          <MagnifyingGlassIcon className="h-5 text-gray-500 mr-3" />
          <input
            ref={searchInputReaf}
            type="text"
            className="flex-grow focus:outline-none"
          />
          <MicrophoneIcon className="h-5 " />
        </div>
        <div className="flex flex-col sm:flex-row w-[1/2] space-y-2 mt-8 sm:space-y-0 sm:space-x-4">
          <button onClick={search} className="btn">
            Google Search
          </button>
          <button className="btn">I'm Feeling Lucky</button>
        </div>
      </form>
      {/* footer */}
      <Footer />
    </div>
  );
}
