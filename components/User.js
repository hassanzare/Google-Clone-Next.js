import { useSession, signIn, signOut } from "next-auth/react";

export default function User({ className }) {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <img
          onClick={signOut}
          src={session.user.image}
          alt="googleusercontent"
          className={`hover:bg-gray-200 h-10 w-10 rounded-full cursor-pointer p-1 ${className}`}
        />
      </>
    );
  } else
    return (
      <>
        <button
          className={`bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105  hover:shadow-md ${className}`}
          onClick={signIn}
        >
          Sign in
        </button>
      </>
    );
}
