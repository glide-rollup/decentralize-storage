import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {Wrapper} from "../../assets/css/common.style";
import {Outlet} from "react-router-dom";

export default function MyFilesLayout() {

  return (
    <Wrapper>
      <Header/>

      <div className={"container h-full max-w-6xl px-8 mx-auto xl:px-0 pt-32 pb-16 mb-auto"}>
        <Outlet/>
      </div>

      <Footer/>
    </Wrapper>
  )
}
