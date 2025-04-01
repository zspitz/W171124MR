import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    createdOn: {
        type: Date,
        default: Date.now,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true
    }
});

const UserModel = mongoose.model('User', userSchema);

export default UserModel;
