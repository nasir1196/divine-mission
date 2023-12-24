import GalleryModel from '@/models/galleryModels';
import { connect } from '@/utils/dbConfig';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        await connect()
        const galleryData = await GalleryModel.find()
        return NextResponse.json({
            message: true,
            status: 200,
            data: {galleryData}
        })
    } catch (err: any) {
        return NextResponse.json({
            message: false,
            status: 404,
            error: err.message,
        })
    }
}
