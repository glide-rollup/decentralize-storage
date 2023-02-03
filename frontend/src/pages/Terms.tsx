import Header from "../components/Header";
import Footer from "../components/Footer";
import { Wrapper } from "../assets/css/common.style";

export default function Terms() {

  return (
    <Wrapper>
      <Header />

      <div className={"container h-full max-w-6xl px-8 mx-auto xl:px-0 pt-32 mb-[300px]"}>
        <h1 className={"text-4xl mb-4 font-semibold text-center"}>Terms & Conditions</h1>

        <div className={"max-w-3xl mx-auto"}>
          < h3 className={"font-semibold text-2xl"}>Introduction</h3>
          <p className={"mb-4"}>
            Welcome to our decentralised blockchain storage service (the "Service") that uses the Filecoin to store all your data. By
            accessing or using the Service, you agree to be bound by these terms and conditions (the "Terms"). If you do not agree to these
            Terms, you may not access or use the Service.
          </p>

          <h3 className={"font-semibold text-2xl"}>Use of Service</h3>
          <p className={"mb-4"}>
            The Service allows you to store and retrieve data on the Filecoin network. You are responsible for any data that you store on
            the Service and for complying with any laws or regulations that apply to such data.
          </p>

          <h3 className={"font-semibold text-2xl"}>Prohibited Uses</h3>
          <p className={"mb-4"}>
            You may not use the Service to store or distribute any illegal or infringing content or other content that is not allowed by
            Filecoin. We reserve the right to remove any content that we believe to violate these terms or applicable laws.
          </p>

          <h3 className={"font-semibold text-2xl"}>Disclaimer of Warranties</h3>
          <p className={"mb-4"}>
            The Service is provided "as is" and we make no representations or warranties of any kind, express or implied, as to the
            operation of the Service or the information, content, materials, or products included on the Service.
          </p>

          <h3 className={"font-semibold text-2xl"}>Limitation of Liability</h3>
          <p className={"mb-4"}>
            In no event shall we be liable for any damages of any kind arising from the use of the Service, including but not limited to
            direct, indirect, incidental, punitive, and consequential damages.
          </p>

          <h3 className={"font-semibold text-2xl"}>Changes to Terms</h3>
          <p className={"mb-4"}>
            We reserve the right to make changes to these Terms at any time. Your continued use of the Service after any changes to these
            Terms indicates your acceptance of the new terms.
          </p>

          <h3 className={"font-semibold text-2xl"}>Cookies Policy</h3>
          <p className={"mb-2"}>
            Our Service uses cookies to improve your experience and to personalize the content and advertisements we show you. Cookies are
            small text files that are stored on your device when you visit our Service.
          </p>
          <p className={"mb-2"}>
            We use both session cookies and persistent cookies. Session cookies expire when you close your browser, while persistent cookies
            remain on your device until they expire or you delete them.
          </p>
          <p className={"mb-2"}>
            You can control the use of cookies on our Service through your browser settings. However, please note that disabling cookies may
            limit your ability to use certain features of the Service.
          </p>
          <p className={"mb-4"}>
            By using our Service, you consent to our use of cookies in accordance with this policy.
          </p>
        </div>
      </div>

      <Footer />
    </Wrapper>
  )
}
