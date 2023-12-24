import GalleryModel from "@/models/galleryModels";
import { connect } from "@/utils/dbConfig";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest, content: any) {
  try {
    await connect();
    const { galleryId } = content.params;
    const record = { _id: galleryId };

    const data = await GalleryModel.findOne(record);

    if (!data) {
      NextResponse.json({
        message: "Gallery not found!",
        success: false,
        status: 404,
      });
    }

    const gallery = await GalleryModel.findByIdAndDelete(record);

    return NextResponse.json({
      message: "Gallery deleted",
      success: true,
      status: 202,
      gallery,
    });
  } catch (err: any) {
    NextResponse.json({ err: err.message, status: 500, success: false });
  }
}
