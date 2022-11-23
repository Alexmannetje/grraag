import Cards from "../components/cards";
import Carousel from "../components/carousel";
import Footer from "../components/footer";
import Nav from "../components/nav";
import Cta from "../components/cta";

export default function Home() {
  return (
    <div className="bg-gray-700">
      <Nav />
      <Cta />
      <Cards />
      <Carousel />

      <Footer />
    </div>
  );
}
