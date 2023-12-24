import GalleryDetails from "./GalleryDetails";

interface ParamsProps {
  galleryId: string;
}

const GalleryPage = ({ params }: { params: ParamsProps }) => {
  return (
    <div>
      <GalleryDetails galleryId={params} />
    </div>
  );
};

export default GalleryPage;
