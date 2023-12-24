"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Dashboard from "./Dashboard";

const ManageGalleryDetails = () => {
  const initialData: any = [];
  const [gallery, setGallery] = useState(initialData);
  const handleDelete = async (deleteId: any) => {
    try {
      const res = await axios.delete(`/api/admin/deleteGallery/${deleteId}`);
      if (res.data) {
        alert("delete data");
      } 
    } catch (err: any) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    axios
      .get("/api/admin/getGallery")
      .then((res: any) => {
        setGallery(res.data.data);
      })
      .catch((err: any) => console.log(err.message));
  }, []);
  return (
    <div className="flex flex-row gap-1 justify-center items-center">
      <div className="m-2">
        <Dashboard />
      </div>
      <div className="my-10">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 bg-gray-50 dark:bg-gray-800 text-center"
                >
                  Gallery Name
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  ID
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 bg-gray-50 dark:bg-gray-800 text-center"
                >
                  Action
                </th>
              </tr>
            </thead>
            {gallery &&
              gallery?.galleryData?.map((item: any) => (
                <tbody key={item._id}>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                    >
                      {item.title}
                    </th>
                    <td className="px-6 py-4">{item._id}</td>
                      <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                        <button
                          type="button"
                          onClick={() => handleDelete(item._id)}
                        >
                          Delete
                        </button>
                      </td>
                  </tr>
                </tbody>
              ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageGalleryDetails;
