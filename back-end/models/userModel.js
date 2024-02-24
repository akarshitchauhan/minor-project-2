import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose"
const UserSchema=mongoose.Schema({
    name: String,
    contact: String,
    email: String,
},
{
    timestamps: true,
})

UserSchema.plugin(passportLocalMongoose, {
  usernameField: "email",
  usernameUnique: true,
  usernameQueryFields: ["email"],
});


export default mongoose.model("User",UserSchema)