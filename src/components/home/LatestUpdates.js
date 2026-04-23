"use client";

import Image from "next/image";
import Link from "next/link";
import { blogData } from "@/lib/blogData";

export default function LatestUpdates() {
  const posts = blogData.slice(0, 3);

  return (
    <main className="page-spacing">
    <section style={{ backgroundColor: "#2F6B3A" }} className="w-full py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-center text-white text-[36px] font-semibold mb-16">
          Latest Updates
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {posts.map((post, i) => (
            <div key={i} className="flex flex-col h-full">

              {/* Image */}
              <Link href={`/blog/${post.slug}`} className="block overflow-hidden rounded-[40px] group">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={500}
                  height={300}
                  className="w-full h-[230px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </Link>

              {/* Content */}
              <Link href={`/blog/${post.slug}`}>
                <h3  style={{ fontFamily: "'Playfair Display', serif" }} className="mt-6 text-white text-[24px] font-semibold leading-snug hover:text-green-200 transition-colors">
                  {post.title}
                </h3>
              </Link>

              <p className="mt-3 text-white/90 text-[18px] leading-relaxed line-clamp-3">
                {post.description}
              </p>

              {/* Button */}
              <div className="mt-auto pt-6">
                <Link href={`/blog/${post.slug}`}>
                  <button className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition">
                    Read More
                  </button>
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
    </main>
  );
}