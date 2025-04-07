import mongoose from 'mongoose';

const dbConnect = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/users');
    } catch (err) {
        console.log(err);
    }
};

export { dbConnect };
