"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { blogData } from "@/lib/blogData";

const BlogList = () => {
  return (
    <div className="w-full flex flex-col items-center mb-16">
      {/* Hero Section */}
      <section className="relative w-full h-[300px] md:h-[400px] flex flex-col items-center justify-center mb-8">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000&auto=format&fit=crop")' }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center flex flex-col items-center">
          <h1 className="text-white text-5xl md:text-6xl font-bold tracking-wide" style={{ fontFamily: 'Playfair Display, serif' }}>
            Blog
          </h1>
        </div>
      </section>

      {/* Main Blog Grid */}
      <section className="w-full py-16 md:py-24" style={{ backgroundColor: "#2b5a35" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {blogData.map((blog) => (
              <div key={blog.id} className="flex flex-col items-start group">
                <Link href={`/blog/${blog.slug}`} className="w-full">
                  <div className="relative w-full aspect-[4/3] mb-6 overflow-hidden rounded-tr-2xl rounded-bl-2xl rounded-tl-[60px] rounded-br-[60px] transition-transform duration-500 group-hover:scale-[1.02]">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                </Link>
                <div className="flex flex-col flex-grow w-full px-1">
                  <Link href={`/blog/${blog.slug}`}>
                    <h3 className="text-white text-[22px] md:text-[24px] font-bold mb-3 leading-snug hover:text-green-200 transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {blog.title}
                    </h3>
                  </Link>
                  <p className="text-gray-100 leading-relaxed line-clamp-3 mb-5">
                    {blog.description}
                  </p>
                  <div className="mt-auto">
                    <Link href={`/blog/${blog.slug}`}>
                      <button className="bg-white text-[#2b5a35] text-[14px] font-bold py-2 px-6 rounded-full hover:bg-gray-100 hover:shadow-lg transition-all duration-300">
                        Read More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogList;
