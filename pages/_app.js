import NavBar from "@/components/NavBar";
import "@/styles/globals.css";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div >
      <NavBar />
      <Component {...pageProps}/>
    </div>
  );
}
