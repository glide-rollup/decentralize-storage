import Header from "../components/Header";
import Footer from "../components/Footer";
import {Link} from "react-router-dom";

export default function Error404() {

  return (
    <div>
      <Header/>

      <div className={"container h-full max-w-6xl px-8 mx-auto xl:px-0 pt-32 pb-64 text-center"}>
        <h1 className={"text-3xl mb-4 font-semibold"}>Error 404</h1>
        <p>Page not found!</p>
        <Link to={"/"} className={"text-indigo-500"}>Open Homepage</Link>
      </div>

      <Footer/>
    </div>
  )
}
