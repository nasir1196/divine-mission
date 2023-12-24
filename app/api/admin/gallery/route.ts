import { connect } from "@/utils/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import GalleryModel from "./../../../../models/galleryModels";

export async function POST(request: NextRequest) {
  try {
    await connect();
    const requestBody = await request.json();
    const {
      title,
      subTitleone,
      subTitletwo,
      subTitlethree,
      subTitlefour,
      subTitlefive,
      subTitlesix,
      subTitleseven,
      subTitleeight,
      descriptionone,
      descriptiontwo,
      descriptionthree,
      descriptionfour,
      descriptionfive,
      descriptionsix,
      descriptionseven,
      descriptioneight,
      descriptionnine,
      picture,
    } = requestBody;
    const newGallery = new GalleryModel({
      title,
      subTitleone,
      subTitletwo,
      subTitlethree,
      subTitlefour,
      subTitlefive,
      subTitlesix,
      subTitleseven,
      subTitleeight,
      descriptionone,
      descriptiontwo,
      descriptionthree,
      descriptionfour,
      descriptionfive,
      descriptionsix,
      descriptionseven,
      descriptioneight,
      descriptionnine,
      picture,
    });

    const saveGallery = await newGallery.save();
    return NextResponse.json({
      message: "Gallery Added",
      success: true,
      status: 201,
      saveGallery,
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message, status: 400 });
  }
}
