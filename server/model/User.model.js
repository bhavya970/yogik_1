import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, "Please provide a User name"],
        unique : false,
    },
    email: {
        type: String,
        required : [true, "Please provide a unique email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
        unique : false,
    },
});

export default mongoose.model.Users || mongoose.model('User', UserSchema);