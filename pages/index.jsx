import Head from "next/head";
import Carousel from "../components/carousel";
import Nav from "../components/nav";
import Nav2 from "../components/nav2";

export default function Home() {
  return (
    <div className=" bg-gray-700 ">
      <Head>
        <link rel="icon" type="image/ico" href="favicon.ico" />
      </Head>
      <Nav2 />
      <Carousel />
    </div>
  );
}
