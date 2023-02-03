import Header from "../components/Header";
import Footer from "../components/Footer";
import { Wrapper } from "../assets/css/common.style";

export default function Privacy() {

  return (
    <Wrapper>
      <Header />

      <div className={"container h-full max-w-6xl px-8 mx-auto xl:px-0 pt-32 mb-[300px]"}>
        <h1 className={"text-4xl mb-4 font-semibold text-center"}>Privacy Policy</h1>

        <div className={"max-w-3xl mx-auto"}>
          <h3 className={"font-semibold text-2xl"}>Introduction</h3>
          <p className={"mb-4"}>
            This privacy policy (the "Policy") applies to our decentralised blockchain storage service (the "Service") that uses the
            Filecoin service for store your data. By accessing or using the Service, you agree to the terms of this Policy.
          </p>

          <h3 className={"font-semibold text-2xl"}>Data Collection</h3>
          <p className={"mb-4"}>
            We collect information about you when you use the Service. This includes information about the data you store on the Filecoin
            network, as well as information about your use of the Service. This information may include your IP address, device information,
            and information about your interactions with the Service.
          </p>

          <h3 className={"font-semibold text-2xl"}>Use of Data</h3>
          <p className={"mb-4"}>
            We use the data we collect to provide, maintain, and improve the Service. This includes using the data to:
            <ul>
              <li>Monitor the Service for illegal or infringing content</li>
              <li>Analyze usage of the Service to improve the user experience</li>
              <li>Help us understand who is using the Service and how it is being used</li>
            </ul>
          </p>

          <h3 className={"font-semibold text-2xl"}>Sharing of Data</h3>
          <p className={"mb-4"}>
            We may share your data with third parties in the following circumstances:
            <ul>
              <li>With third-party service providers who perform services on our behalf, such as hosting and payment processing</li>
              <li>As required by law, such as in response to a subpoena or court order</li>
              <li>In the event of a merger, acquisition, or bankruptcy</li>
            </ul>
          </p>

          <h3 className={"font-semibold text-2xl"}>Data Retention</h3>
          <p className={"mb-4"}>
            We will retain your data for as long as necessary to provide the Service and comply with our legal obligations.
          </p>

          <h3 className={"font-semibold text-2xl"}>Data Security</h3>
          <p className={"mb-4"}>
            We use commercially reasonable measures to protect your data from unauthorized access, use, or disclosure. However, please note
            that the Service uses the Filecoin network, which is a public blockchain. This means that your data is stored on a decentralized
            network, and it is not possible for us to guarantee the security of your data.
          </p>

          <h3 className={"font-semibold text-2xl"}>Your Rights</h3>
          <p className={"mb-4"}>
            You have the right to access, correct, and delete your data based on our availability (because some data can't be removed from
            blockchain). You also have the right to object to the processing of your data, and to request that your data be transferred to
            another service provider.
          </p>

          <h3 className={"font-semibold text-2xl"}>Changes to Policy</h3>
          <p className={"mb-4"}>
            We reserve the right to make changes to this Policy at any time. Your continued use of the Service after any changes to this
            Policy indicates your acceptance of the new policy.
          </p>
        </div>
      </div>

      <Footer />
    </Wrapper>
  )
}
