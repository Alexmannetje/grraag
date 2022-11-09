import Head from "next/head";
import Nav from "../components/nav";
import Nav2 from "../components/nav2";

export default function Home() {
  return (
    <div className="bg-gray-700">
      <Head>
        <link rel="icon" type="image/ico" href="favicon.ico" />
      </Head>
      <Nav2 />
      <Nav />
    </div>
  );
}
