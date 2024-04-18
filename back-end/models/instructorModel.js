import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose"

const InstructorSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        fullname: {
            type: String,
            required: true,
            trim: true,
            index: true
        },
        coverImage: {
            type: String, // cloudinary url
        },
        subscribers: [
            {
                type: Schema.Types.ObjectId(),
                ref: "Student"
            }
        ],
        cources:[
            {
                type: Schema.Types.ObjectId(),
                ref: "Course"
            },
        ],
        password: {
            type: String,
            required: [true, 'Password is required']
        }
    },
    {
        timestamps: true
    }
)

InstructorSchema.plugin(passportLocalMongoose, {
  usernameField: "username",
  usernameUnique: true,
  usernameQueryFields: ["username"],
});


export default mongoose.model("Instructor",InstructorSchema)