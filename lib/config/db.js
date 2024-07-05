import mongoose from "mongoose";

// Declaring MongoDB username and password to variables
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

// Exporting the DB Connection function
export const connectDB = async () => {
  await mongoose.connect(
    `mongodb+srv://${username}:${password}@cluster0.xgnkur1.mongodb.net/`
  );

  console.log("DB Connected");
};
