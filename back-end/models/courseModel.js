import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Instructor",
      required: true,
    },
    courseTitle: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    coursePrice: {
      type: Number,
      required: true,
    },
    noOfVideos: {
      type: Number,
      required: true,
    },
    coursePlaylist: {
      type: String,
      required: true,
    },
    courseInfo: {
      type: String,
      required: true,
    },
    videoLinks: [
      {
        type: String,
        required: true,
      },
    ],
    imagePreview: {
      type: String, // cloudinary url
    },
    studentsEnrolled: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Course", courseSchema)