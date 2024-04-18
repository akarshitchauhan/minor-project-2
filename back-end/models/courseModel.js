import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const courseSchema = new Schema(
    {
        owner: {
                type: Schema.Types.ObjectId(),
                ref: "Instructor",
                required: true,
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
                type: Schema.Types.ObjectId(),
                ref: "Student"
            }
        ],
    },
    {
        timestamps: true
    }
)

courseSchema.plugin(mongooseAggregatePaginate)

export const Course = mongoose.model("Course", courseSchema)