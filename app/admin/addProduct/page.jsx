"use client";
import React, { useState } from "react";
import Image from "next/image";
import { assets } from "@/Public/assets";

const page = () => {
  const [image, setImage] = useState(false);

  return (
    <>
      <form action="" className="pt-5 px-5 sm:pt-12 sm:pl-16">
        <p className="text-xl">Upload Thumbnail</p>
        <label htmlFor="image">
          <Image
            className="mt-4 cursor-pointer"
            src={!image ? assets.upload_area : URL.createObjectURL(image)}
            width={140}
            height={70}
            alt=""
          />
        </label>
        <input
          type="file"
          id="image"
          hidden
          required
          onChange={(e) => setImage(e.target.files[0])}
        />
        <p className="text-xl mt-4">Blog Title</p>
        <input
          type="text"
          placeholder="Type Here..."
          required
          className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
        />
        <p className="text-xl mt-4">Blog Description</p>
        <textarea
          type="text"
          placeholder="Write Content Here..."
          required
          className="w-full sm:w-[500px] mt-4 px-4 py-3 border resize-none"
          rows={6}
        />
        <p className="text-xl mt-4">Blog Category</p>
        <select
          name="category"
          className="w-40 mt-4 px-4 py-3 border text-gray-500"
        >
          <option value="Startup">Startup</option>
          <option value="Technology">Technology</option>
          <option value="Lifestyle">Lifestyle</option>
        </select>
        <button
          type="submit"
          className="my-3 w-40 h-10 bg-black text-white block"
        >
          Add
        </button>
      </form>
    </>
  );
};

export default page;
