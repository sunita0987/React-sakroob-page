import React from "react";
import { BLOG_DATA } from "../utils/helper";

const BlogSection = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#112D49] mb-10">
        Blog, Guides, Build Logs <br /> & More
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {BLOG_DATA.slice(0, 2).map((blog, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row  items-center bg-[#E5E4E2] rounded-2xl p-5"
          >
            <img
              src={blog.image}
              alt={blog.description}
              className="w-full md:w-1/3 rounded-lg object-cover"
            />
            <div className="mt-4 md:mt-0 md:ml-6">
              <h3 className="text-2xl font-semibold text-[#112D49]">
                {blog.title}
              </h3>
              <p className="text-gray-600 mt-2">{blog.description}</p>
              <button className="mt-4 text-[#112D49] font-medium hover:underline cursor-pointer">
                {blog.buttonText}
              </button>
            </div>
          </div>
        ))}
        <div className="col-span-1 md:col-span-2 flex flex-col md:flex-row items-center bg-[#D5E8FF] rounded-2xl p-5">
          <img
            src={BLOG_DATA[2].image}
            alt={BLOG_DATA[2].title}
            className="w-full md:w-1/3 rounded-lg object-cover"
          />
          <div className="mt-4 md:mt-0 md:ml-6">
            <h3 className="text-2xl font-semibold text-[#112D49]">
              {BLOG_DATA[2].title}
            </h3>
            <p className="text-gray-600 mt-2">{BLOG_DATA[2].description}</p>
            <button className="mt-4 text-[#112D49] font-medium hover:underline cursor-pointer">
              {BLOG_DATA[2].buttonText}
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <button className="px-6 py-3 bg-[#112D49] text-[#ffffff] font-medium rounded-full  transition cursor-pointer">
          View All Blog Posts
        </button>
      </div>
    </section>
  );
};

export default BlogSection;
