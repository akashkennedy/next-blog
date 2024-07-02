import { assets } from "@/Public/assets";
import Image from "next/image";

const Header = () => {
  return (
    <div className="py-5 px-5 md:px-12 lg:px-28">
      <div className="flex justify-between items-center">
        <Image src={assets.logo} alt="Logo" className="w-[130px] sm:w-auto" />
        <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]">
          Get Started <Image src={assets.arrow} />
        </button>
      </div>
      <div className="text-center my-8">
        <h1 className="text-3xl sm:text-5xl font-medium">Latest Posts</h1>
        <p className="mt-10 max-w-[740px] m-auto text-xs sm:text-base">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
          fugiat est, nesciunt earum ex cumque pariatur tempora eos, sit fugit
          minus rerum eius exercitationem eaque laudantium, facilis harum modi
          sequi.
        </p>
        <form
          action=""
          className="flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]"
        >
          <input
            type="email"
            placeholder="Enter Your Email"
            className="pl-4 outline-none"
          />
          <button
            className="py-4 px-4 border-l border-black sm:px-8 active:bg-gray-600 active:text-white"
            type="submit"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
