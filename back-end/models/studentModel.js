import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose"

const StudentSchema = new Schema(
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
        watchHistory: [
            {
                courseName: {
                    type: String,
                    required: true,
                },
                url: {
                    type: String,
                    required: true,
                },
                thumbnail: {
                    type: String, // cloudinary url
                    required: true,
                },
                title: {
                    type: String,
                    required: true,
                },
                durationWatched: {
                    type: Number,
                    required: true,
                },
                owner: {
                    type: Schema.Types.ObjectId(),
                    // User doesn't exist
                    ref: "User"
                }
            },
        ],
        courcesEnrolled:[
            {
                title: {
                    type: String,
                    required: true,
                },
                owner: {
                    type: Schema.Types.ObjectId(),
                    // User doesn't exist
                    ref: "User"
                },
                status: {
                    type: Boolean,
                    required: true,
                }
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

StudentSchema.plugin(passportLocalMongoose, {
  usernameField: "username",
  usernameUnique: true,
  usernameQueryFields: ["username"],
});


export default mongoose.model("Student",StudentSchema)