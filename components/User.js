import { useSession, signIn, signOut } from "next-auth/react";

export default function User() {
  const { data: session } = useSession();

  if (session) {
    return <>Sign out</>;
  }
  return (
    <>
      <button onClick={signIn}>Sign in</button>
    </>
  );
}
