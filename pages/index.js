import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Google</title>
        <meta name="description" const="generated by create next app" />
        <link rel="icon" href="/favicon.icon" />
      </Head>
      <h1>Heello world</h1>
    </div>
  );
}