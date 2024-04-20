import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
    {
        owner: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Instructor",
                required:true,
                
        },
        courseName: {
            type: String,
            required: true,
            trim: true,
            index: true
        },
        cost: {
            type: Number,
            required: true,
        },
        duration: {
            type: Number,
            required: true,
        },
        noOfVideos: {
            type: Number,
            required: true,
        },
        playlistUrl:{
            type:String,
            required:true,
        },
        videoLinks: [
            {
                type: String,
                required: true,
            },
        ],
        coverImage: {
            type: String, // cloudinary url
        },
        studentsEnrolled: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            }
        ],
    },
    {
        timestamps: true
    }
)

export default mongoose.model("Course", courseSchema)