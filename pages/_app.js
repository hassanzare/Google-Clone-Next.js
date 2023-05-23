import "../styles/globals.css";
import { SessionProvide } from "next-auth/react";

function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvide session={session}>
      <Component {...pageProps} />
    </SessionProvide>
  );
}

export default App;
