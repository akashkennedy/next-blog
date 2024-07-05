import { connectDB } from "@/lib/config/db";
import BlogModel from "@/lib/models/blogModel";
import { writeFile } from "fs/promises";
const { NextResponse } = require("next/server");

const loadDB = async () => {
  await connectDB(); // Connects to Database using exported function at lib/config/db.js
};

loadDB(); // Loads the Database

export async function GET(request) {
  return NextResponse.json({ msg: "API Working" });
}

// Function for POSTING the Request
export async function POST(request) {
  const formData = await request.formData(); // Sending data as Form to Database
  const timeStamp = Date.now(); // Method to show the current date

  const image = formData.get("image"); // Get image data from the Posted Data
  const imageByteData = await image.arrayBuffer(); // Store binary data in imageByteData
  const buffer = Buffer.from(imageByteData); // Using the Buffer
  const path = `./images/${timeStamp}_${image.name}`; // Setting up the Path for Images
  await writeFile(path, buffer); // Write the specified data to the file
  const imgUrl = `/${timeStamp}_${image.name}`; // The Image Url
  // The Blog Data
  const blogData = {
    title: `${formData.get("title")}`,
    description: `${formData.get("description")}`,
    category: `${formData.get("category")}`,
    author: `${formData.get("author")}`,
    image: `${imgUrl}`,
    authorImg: `${formData.get("authorImg")}`,
  };
  // Creating the Blog Model from the Schema
  await BlogModel.create(blogData);
  console.log("Blog Saved");
  return NextResponse.json({ sucess: true, msg: "Blog" });
}
