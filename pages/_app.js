import "../globals.css";
import Footer from "./footer";
import Header from "./header";


export default function App({Component, pageProps}) {
  return (
    <>
      <Header/>
        <Component {...pageProps} />
      <Footer/>
    </>
  )
}



