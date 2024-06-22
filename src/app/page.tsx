import Image from "next/image";
import NavBar from "../ui-components/navbar";
import HeroSection from "../ui-components/heroSection";
import Section1 from "../ui-components/section1";
import Section2 from "../ui-components/section2";
import Section3 from "../ui-components/section3";
import FAQS from "../ui-components/faqs";
import Footer from "../ui-components/footer";

export default function Home() {
  return (
    <>
      <div className="  contain-content  px-0     overscroll-x-none">

        {/* <h1 className=" text-blue-600 text-2xl">Home Page</h1> */}
        <NavBar />
        <HeroSection />
        <Section1 />
        <Section2 />
        <Section3/>
        <FAQS/>
        <Footer/>
      </div>
    </>
  );
}
