"use client";
import React, { useState } from "react";
import axios from "axios";
import Dashboard from "../Dashboard/Dashboard";

const GalleryPostDetails = () => {
  const [upImage, setUpImage] = useState("");
  const [gallery, setGallery] = useState({
    title: "",
    subTitleone: "",
    subTitletwo: "",
    subTitlethree: "",
    subTitlefour: "",
    subTitlefive: "",
    subTitlesix: "",
    subTitleseven: "",
    subTitleeight: "",
    descriptionone: "",
    descriptiontwo: "",
    descriptionthree: "",
    descriptionfour: "",
    descriptionfive: "",
    descriptionsix: "",
    descriptionseven: "",
    descriptioneight: "",
    descriptionnine: "",
  });

  const handleChangeUpload = (e: any) => {
    const imageData = new FormData();
    imageData.set("key", "aa16d3bb878cdf3d6161c153e20dba0c");
    imageData.append("image", e.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setUpImage(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleGallery = async (e: any) => {
    e.preventDefault();
    const galleryData = {
      title: gallery.title,
      subTitleone: gallery.subTitleone,
      subTitletwo: gallery.subTitletwo,
      subTitlethree: gallery.subTitlethree,
      subTitlefour: gallery.subTitlefour,
      subTitlefive: gallery.subTitlefive,
      subTitlesix: gallery.subTitlesix,
      subTitleseven: gallery.subTitleseven,
      subTitleeight: gallery.subTitleeight,
      descriptionone: gallery.descriptionone,
      descriptiontwo: gallery.descriptiontwo,
      descriptionthree: gallery.descriptionthree,
      descriptionfour: gallery.descriptionfour,
      descriptionfive: gallery.descriptionfive,
      descriptionsix: gallery.descriptionsix,
      descriptionseven: gallery.descriptionseven,
      descriptioneight: gallery.descriptioneight,
      descriptionnine: gallery.descriptionnine,
      picture: upImage,
    };
    try {
      if (gallery.title !== "" && upImage !== "") {
        await axios
          .post("/api/admin/gallery", galleryData)
          .then((res) => {
            if (res.data) {
              alert("Gallery Update");
              setUpImage("");
              setGallery({
                title: "",
                subTitleone: "",
                subTitletwo: "",
                subTitlethree: "",
                subTitlefour: "",
                subTitlefive: "",
                subTitlesix: "",
                subTitleseven: "",
                subTitleeight: "",
                descriptionone: "",
                descriptiontwo: "",
                descriptionthree: "",
                descriptionfour: "",
                descriptionfive: "",
                descriptionsix: "",
                descriptionseven: "",
                descriptioneight: "",
                descriptionnine: "",
              });
            }
          })
          .catch((err: any) => {
            alert("Something went wrong!");
          });
      } else {
        alert("All fields are required!");
      }
    } catch (err: any) {
      console.log("Gallery Upload Failed", err.message);
    }
  };
  return (
    <div className="flex flex-row">
      <div>
        <Dashboard />
      </div>
      <div className="flex items-center justify-center mx-12">
        <div>
          <div className="text-center text-slate-900">
            <h1 className="text-3xl font-bold my-10">
              Add Your Gallery Moments.
            </h1>
          </div>
          <div className="bg-slate-300 aligns-center p-10">
            <div className="flex flex-col items-center justify-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <div className="my-3">
                    <label htmlFor="title">Title</label>
                    <br />
                    <input
                      type="text"
                      className="py-5 px-9 rounded-lg"
                      id="title"
                      placeholder="Title"
                      value={gallery.title}
                      onChange={(e) =>
                        setGallery({ ...gallery, title: e.target.value })
                      }
                    />
                  </div>
                  <div className="my-3">
                    <label htmlFor="descriptionone">Description-1</label>
                    <br />
                    <textarea
                      placeholder="descriptionone"
                      id="descriptionone"
                      className="rounded-lg py-3 px-2"
                      cols={30}
                      rows={10}
                      value={gallery.descriptionone}
                      onChange={(e) =>
                        setGallery({ ...gallery, descriptionone: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div>
                  <div className="my-3">
                    <label htmlFor="title1">Sub-Title-1</label>
                    <br />
                    <input
                      type="text"
                      className="py-5 px-9 rounded-lg"
                      id="title1"
                      placeholder="Sub Title"
                      value={gallery.subTitleone}
                      onChange={(e) =>
                        setGallery({ ...gallery, subTitleone: e.target.value })
                      }
                    />
                  </div>
                  <div className="my-3">
                    <label htmlFor="descriptiontwo">Description-2</label>
                    <br />
                    <textarea
                      placeholder="Description-2"
                      id="descriptiontwo"
                      className="rounded-lg py-3 px-2"
                      cols={30}
                      rows={10}
                      value={gallery.descriptiontwo}
                      onChange={(e) =>
                        setGallery({ ...gallery, descriptiontwo: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div>
                  <div className="my-3">
                    <label htmlFor="title3">Sub Title-3</label>
                    <br />
                    <input
                      type="text"
                      className="py-5 px-9 rounded-lg"
                      id="title3"
                      placeholder="Title"
                      value={gallery.subTitletwo}
                      onChange={(e) =>
                        setGallery({ ...gallery, subTitletwo: e.target.value })
                      }
                    />
                  </div>
                  <div className="my-3">
                    <label htmlFor="descriptionthree">Description-3</label>
                    <br />
                    <textarea
                      placeholder="Description"
                      id="descriptionthree"
                      className="rounded-lg py-3 px-2"
                      cols={30}
                      rows={10}
                      value={gallery.descriptionthree}
                      onChange={(e) =>
                        setGallery({ ...gallery, descriptionthree: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div>
                  <div className="my-3">
                    <label htmlFor="title4">Sub Title-4</label>
                    <br />
                    <input
                      type="text"
                      className="py-5 px-9 rounded-lg"
                      id="title4"
                      placeholder="Title"
                      value={gallery.subTitlethree}
                      onChange={(e) =>
                        setGallery({ ...gallery, subTitlethree: e.target.value })
                      }
                    />
                  </div>
                  <div className="my-3">
                    <label htmlFor="descriptionfour">Description-4</label>
                    <br />
                    <textarea
                      placeholder="Description"
                      id="descriptionfour"
                      className="rounded-lg py-3 px-2"
                      cols={30}
                      rows={10}
                      value={gallery.descriptionfour}
                      onChange={(e) =>
                        setGallery({ ...gallery, descriptionfour: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div>
                  <div className="my-3">
                    <label htmlFor="title5">Sub Title-5</label>
                    <br />
                    <input
                      type="text"
                      className="py-5 px-9 rounded-lg"
                      id="title5"
                      placeholder="Title"
                      value={gallery.subTitlefour}
                      onChange={(e) =>
                        setGallery({ ...gallery, subTitlefour: e.target.value })
                      }
                    />
                  </div>
                  <div className="my-3">
                    <label htmlFor="descriptionfive">Description-5</label>
                    <br />
                    <textarea
                      placeholder="Description"
                      id="descriptionfive"
                      className="rounded-lg py-3 px-2"
                      cols={30}
                      rows={10}
                      value={gallery.descriptionfive}
                      onChange={(e) =>
                        setGallery({ ...gallery, descriptionfive: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div>
                  <div className="my-3">
                    <label htmlFor="title6">Sub Title-6</label>
                    <br />
                    <input
                      type="text"
                      className="py-5 px-9 rounded-lg"
                      id="title6"
                      placeholder="Title"
                      value={gallery.subTitlefive}
                      onChange={(e) =>
                        setGallery({ ...gallery, subTitlefive: e.target.value })
                      }
                    />
                  </div>
                  <div className="my-3">
                    <label htmlFor="descriptionsix">Description-6</label>
                    <br />
                    <textarea
                      placeholder="Description"
                      id="descriptionsix"
                      className="rounded-lg py-3 px-2"
                      cols={30}
                      rows={10}
                      value={gallery.descriptionsix}
                      onChange={(e) =>
                        setGallery({ ...gallery, descriptionsix: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div>
                  <div className="my-3">
                    <label htmlFor="title7">Sub Title-7</label>
                    <br />
                    <input
                      type="text"
                      className="py-5 px-9 rounded-lg"
                      id="title7"
                      placeholder="Title"
                      value={gallery.subTitlesix}
                      onChange={(e) =>
                        setGallery({ ...gallery, subTitlesix: e.target.value })
                      }
                    />
                  </div>
                  <div className="my-3">
                    <label htmlFor="descriptionseven">Description-1</label>
                    <br />
                    <textarea
                      placeholder="Description"
                      id="descriptionseven"
                      className="rounded-lg py-3 px-2"
                      cols={30}
                      rows={10}
                      value={gallery.descriptionseven}
                      onChange={(e) =>
                        setGallery({ ...gallery, descriptionseven: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div>
                  <div className="my-3">
                    <label htmlFor="title8">Sub Title-8</label>
                    <br />
                    <input
                      type="text"
                      className="py-5 px-9 rounded-lg"
                      id="title8"
                      placeholder="Title"
                      value={gallery.subTitleseven}
                      onChange={(e) =>
                        setGallery({ ...gallery, subTitleseven: e.target.value })
                      }
                    />
                  </div>
                  <div className="my-3">
                    <label htmlFor="descriptioneight">Description-8</label>
                    <br />
                    <textarea
                      placeholder="Description"
                      id="descriptioneight"
                      className="rounded-lg py-3 px-2"
                      cols={30}
                      rows={10}
                      value={gallery.descriptioneight}
                      onChange={(e) =>
                        setGallery({ ...gallery, descriptioneight: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div>
                  <div className="my-3">
                    <label htmlFor="title9">Sub Title-9</label>
                    <br />
                    <input
                      type="text"
                      className="py-5 px-9 rounded-lg"
                      id="title9"
                      placeholder="Title"
                      value={gallery.subTitleeight}
                      onChange={(e) =>
                        setGallery({ ...gallery, subTitleeight: e.target.value })
                      }
                    />
                  </div>
                  <div className="my-3">
                    <label htmlFor="descriptionnine">Description-9</label>
                    <br />
                    <textarea
                      placeholder="Description"
                      id="descriptionnine"
                      className="rounded-lg py-3 px-2"
                      cols={30}
                      rows={10}
                      value={gallery.descriptionnine}
                      onChange={(e) =>
                        setGallery({ ...gallery, descriptionnine: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="my-3">
                <label htmlFor="file">Chosen File</label>
                <br />
                <input
                  type="file"
                  className="w-72 rounded-sm py-3 px-3"
                  id="file"
                  onChange={handleChangeUpload}
                />
              </div>
              <div className="my-3">
                <button
                  className="bg-slate-500 rounded-md py-4 px-7 text-slate-100"
                  onClick={(e) => handleGallery(e)}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPostDetails;
