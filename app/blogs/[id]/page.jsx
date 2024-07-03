"use client";

import { assets, blog_data } from "@/Public/assets";
import { useEffect, useState } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import Link from "next/link";

const page = ({ params }) => {
  const [data, setData] = useState(null);

  const fetchBlogData = () => {
    // Looping throught  the blog data
    for (let i = 0; i < blog_data.length; i++) {
      // If the Params from dynamic routing matches the index of blog data then...
      if (Number(params.id) === blog_data[i].id) {
        // Store the data in Data in the data state
        setData(blog_data[i]);
        console.log(blog_data[i]);
        break;
      }
    }
  };

  useEffect(() => {
    fetchBlogData();
  }, []);
  return data ? (
    <>
      <div className="bg-gray-200 py-5 md:px-12 lg:px-28">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src={assets.logo}
              width={180}
              alt=""
              className="w-[130px]   sm:w-auto"
            />
          </Link>
          <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]">
            Get Started <Image src={assets.arrow} alt="" />
          </button>
        </div>
        <div className="text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">
            {data.title}
          </h1>
          <Image
            src={data.author_img}
            width={60}
            height={60}
            alt=""
            className="mx-auto mt-6 border border-white rounded-full"
          />
          <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto">
            {data.author}
          </p>
        </div>
      </div>
      <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
        <Image src={data.image} width={1280} height={720} alt="Image" />
        <h1 className="my-8 text-[26px] font-semibold">Introduction:</h1>
        <p>{data.description}</p>
        <h3 className="my-5 text-[18px] font-semibold">
          Step 1: Self Reflection and Goal Setting
        </h3>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
          veniam!
        </p>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
          veniam!
        </p>
        <h3 className="my-5 text-[18px] font-semibold">
          Step 1: Self Reflection and Goal Setting
        </h3>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
          veniam!
        </p>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
          veniam!
        </p>{" "}
        <h3 className="my-5 text-[18px] font-semibold">
          Step 1: Self Reflection and Goal Setting
        </h3>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
          veniam!
        </p>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
          veniam!
        </p>
        <h3 className="my-5 text-[18px] font-semibold">Conclusion</h3>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
          veniam!
        </p>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
          veniam!
        </p>
        <div className="my-24">
          <p className="text-black font-semibold my-4">
            Share this Article on Social Media
          </p>
          <div className="flex">
            <Image src={assets.facebook_icon} />
            <Image src={assets.twitter_icon} />
            <Image src={assets.googleplus_icon} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <></>
  );
};

export default page;
