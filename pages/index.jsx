import Head from "next/head";
import Nav from "../components/nav";
import Nav2 from "../components/nav2";

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="icon" type="image/ico" href="favicon.ico" />
      </Head>
      <Nav />
      <Nav2 />
      <p className="text-red-500">hi bo frans</p>
    </div>
  );
}
