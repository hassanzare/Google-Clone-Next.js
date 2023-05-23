import Header from "@/components/Header";
import { getProviders } from "next-auth/react";

export default function signIn({ providers }) {
  return (
    <>
      <Header />
      <div className="">
        {Object.values(providers).map((provider) => (
          <div key={provider.name} className="">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1024px-Google_2015_logo.svg.png"
              alt="Google"
            />
            <p className="text-rose-700 font-bold italic">
              This website is created for learning purposes
            </p>
            <button>Sign in with {provider.name}</button>
          </div>
        ))}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
