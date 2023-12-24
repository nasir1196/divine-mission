import Banner from "../components/banner/Banner";
import Gallery from "../components/gallery/Gallery";

export default function Home() {
  return (
    <div className="p-8">
      <div>
        <Banner />
      </div>
      <div>
        <Gallery />
      </div>
    </div>
  );
}
