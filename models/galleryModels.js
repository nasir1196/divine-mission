import mongoose from "mongoose";

const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const galleryModels = new Schema({
  title: {
    type: String,
    required: [true, "please provide a Title"],
  },
  subTitleone: { type: String },
  subTitletwo: { type: String },
  subTitlethree: { type: String },
  subTitlefour: { type: String },
  subTitlefive: { type: String },
  subTitlesix: { type: String },
  subTitleseven: { type: String },
  subTitleeight: { type: String },
  subTitle9: { type: String },
  descriptionone: {
    type: String,
  },
  descriptiontwo: {
    type: String,
  },
  descriptionthree: {
    type: String,
  },
  descriptionfour: {
    type: String,
  },
  descriptionfive: {
    type: String,
  },
  descriptionsix: {
    type: String,
  },
  descriptionseven: {
    type: String,
  },
  descriptioneight: {
    type: String,
  },
  descriptionnine: {
    type: String,
  },
  picture: {
    type: String,
    required: true,
  },
});

const GalleryModel =
  mongoose.models.GalleryModels ||
  mongoose.model("GalleryModels", galleryModels);

export default GalleryModel;
