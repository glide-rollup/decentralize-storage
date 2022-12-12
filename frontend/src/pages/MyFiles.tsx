import Header from "../components/Header";
import Footer from "../components/Footer";
import {Wrapper} from "../assets/css/common.style";

export default function MyFiles() {

  return (
    <Wrapper>
      <Header/>

      <div className={"container h-full max-w-6xl px-8 mx-auto xl:px-0 pt-48 pb-20 mb-auto"}>
        ...
      </div>

      <Footer/>
    </Wrapper>
  )
}
