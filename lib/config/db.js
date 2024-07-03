import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://akashkennedy:iam_@k@$#@cluster0.xgnkur1.mongodb.net/blog.app"
  );
  console.log("DB Connected");
};
