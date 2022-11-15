import Head from "next/head";
import Carousel from "../components/carousel";
import Footer from "../components/footer";
import Nav from "../components/nav";

export default function Home() {
  return (
    <div className="bg-gray-700">
      <Head>
        <link rel="icon" type="image/ico" href="favicon.ico" />
      </Head>
      <Nav />
      <Carousel />
      <Footer />
    </div>
  );
}
