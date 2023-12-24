"use client";
import Link from "next/link";

const Dashboard = () => {
  return (
    <div className="h-full">
      <div className="text-center font-medium text-slate-900">
        <h1 className="text-3xl">
          <Link href="/isDivineAdmin">Divine Mission</Link>
        </h1>
      </div>
      <div className="my-5">
        <div>
          <Link href="/isDivineAdmin/gallery-post">Add Gallery</Link>
        </div>
        <div>
          <Link href="/isDivineAdmin/manage-gallery">Manage Gallery</Link>
        </div>
        <div>
          <Link href="/isDivineAdmin/gallery-post">Custom Theory</Link>
        </div>
        <div>
          <Link href="/isDivineAdmin/gallery-post">Add Gallery</Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
