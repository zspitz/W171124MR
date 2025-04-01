import mongoose from 'mongoose';

const dbConnect = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/fake_users');
    } catch (err) {
        console.log(err);
    }
};

export { dbConnect };
