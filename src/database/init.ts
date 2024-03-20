// import mongoose from 'mongoose';

// export async function connectToDatabase(): Promise<void> {
//     try {
//         await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/myapp', {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//             useCreateIndex: true,
//             useFindAndModify: false
//         });
//         console.log('Connected to database');
//     } catch (error) {
//         console.error('Error connecting to database:', error);
//         process.exit(1); // Exit process with failure
//     }
// }