import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        nev: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        jelszo: {
            type: String,
            required: true,
        },
        statusz: {
            type: String,
            required: true,
            default: 'felhasználó',
        },
    },
    { timestamps: true },
);

const UserModel = mongoose.model('user', userSchema);

export default UserModel;
