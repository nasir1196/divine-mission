"use client";
import Container from "@/app/components/Container";
import axios from "axios";
import Image from "next/image";
import { useEffect } from "react";
import { useState } from "react";

interface GalleryDetailsProps {
  galleryId: any;
}

const GalleryDetails: React.FC<GalleryDetailsProps> = ({ galleryId }) => {
  const initialData: any = [];
  const [gallery, setGallery] = useState(initialData);
  const gDetails = gallery.filter(
    (item: any) => item._id === galleryId.galleryId
  );

  useEffect(() => {
    axios
      .get("/api/admin/getGallery")
      .then((res: any) => {
        setGallery(res.data.data.galleryData);
      })
      .catch((err: any) => console.log(err.message));
  }, []);
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex items-center justify-center">
          <div className="aspect-video overflow-hidden relative w-full">
            <Image
              src={gDetails[0]?.picture}
              alt={gDetails[0]?.title}
              fill
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1 text-slate-500 text-sm">
          <div className="text-center p-2 my-3">
            <h1 className="text-2xl text-slate-800 font-bold my-3">
              {gDetails[0]?.title}
            </h1>
            <p className="text-slate-700 my-1">{gDetails[0]?.descriptionone}</p>
          </div>
          <div className="text-center p-2 my-3">
            <h1 className="text-2xl text-slate-800 font-bold my-3">
              {gDetails[0]?.subTitleone}
            </h1>
            <p className="text-slate-700 my-1">{gDetails[0]?.descriptiontwo}</p>
          </div>
          <div className="text-center p-2 my-3">
            <h1 className="text-2xl text-slate-800 font-bold my-3">
              {gDetails[0]?.subTitletwo}
            </h1>
            <p className="text-slate-700 my-1">{gDetails[0]?.descriptionthree}</p>
          </div>
          <div className="text-center p-2 my-3">
            <h1 className="text-2xl text-slate-800 font-bold my-3">
              {gDetails[0]?.subTitlethree}
            </h1>
            <p className="text-slate-700 my-1">{gDetails[0]?.descriptionfour}</p>
          </div>
          <div className="text-center p-2 my-3">
            <h1 className="text-2xl text-slate-800 font-bold my-3">
              {gDetails[0]?.subTitlefour}
            </h1>
            <p className="text-slate-700 my-1">{gDetails[0]?.descriptionfive}</p>
          </div>
          <div className="text-center p-2 my-3">
            <h1 className="text-2xl text-slate-800 font-bold my-3">
              {gDetails[0]?.subTitlefive}
            </h1>
            <p className="text-slate-700 my-1">{gDetails[0]?.descriptionsix}</p>
          </div>
          <div className="text-center p-2 my-3">
            <h1 className="text-2xl text-slate-800 font-bold my-3">
              {gDetails[0]?.subTitlesix}
            </h1>
            <p className="text-slate-700 my-1">{gDetails[0]?.descriptionseven}</p>
          </div>
          <div className="text-center p-2 my-3">
            <h1 className="text-2xl text-slate-800 font-bold my-3">
              {gDetails[0]?.subTitleseven}
            </h1>
            <p className="text-slate-700 my-1">{gDetails[0]?.descriptionseven}</p>
          </div>
          <div className="text-center p-2 my-3">
            <h1 className="text-2xl text-slate-800 font-bold my-3">
              {gDetails[0]?.subTitleeight}
            </h1>
            <p className="text-slate-700 my-1">{gDetails[0]?.descriptionnine}</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default GalleryDetails;
