"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { blogData } from "@/lib/blogData";
import OurTreatments from "@/components/home/OurTreatments";

const BlogDetail = ({ blog }) => {
  if (!blog) return <div className="py-20 text-center">Blog post not found.</div>;

  // Get latest posts for sidebar, excluding current post
  const latestPosts = blogData.filter(p => p.id !== blog.id).slice(0, 3);

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[350px] md:h-[450px] flex flex-col items-center justify-center">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000&auto=format&fit=crop")' }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 text-center flex flex-col items-center max-w-4xl px-6">
          <p className="text-white text-sm uppercase tracking-widest mb-4">Blog</p>
          <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold tracking-wide leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
            {blog.title}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Main Content (Left) */}
          <div className="lg:w-2/3">
            <div className="relative w-full aspect-[16/9] mb-8 overflow-hidden rounded-tl-[80px] rounded-br-[80px] rounded-tr-3xl rounded-bl-3xl shadow-xl">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex items-center justify-center md:justify-start text-gray-500 mb-6">
              <span className="w-4 h-4 bg-green-600 rounded-full mr-2"></span>
              <span className="text-sm font-medium">{blog.date}</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black text-center md:text-left" style={{ fontFamily: 'Playfair Display, serif' }}>
              {blog.title}
            </h2>

            <div
              className="prose prose-lg max-w-none text-gray-700 leading-relaxed text-center md:text-left"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            {/* Pagination Links */}
            <div className="mt-16 pt-8 border-t border-gray-100 flex justify-between items-center">
              <div className="flex flex-col">
                <span className="text-xs text-gray-400 uppercase tracking-wider mb-1">Previous</span>
                <Link href="/blog" className="text-green-800 font-semibold hover:underline">Back to Blog</Link>
              </div>
              <div className="flex flex-col text-right">
                <span className="text-xs text-gray-400 uppercase tracking-wider mb-1">Next</span>
                <Link href="/blog" className="text-green-800 font-semibold hover:underline">Next Article</Link>
              </div>
            </div>
          </div>

          {/* Sidebar (Right) */}
          <div className="lg:w-1/3">
            {/* Latest Posts */}
            <div className="mb-12">
              <h3 className="text-xl font-bold mb-6 pb-2 border-b-2 border-green-600 inline-block">Latest Posts</h3>
              <div className="space-y-6">
                {latestPosts.map((post) => (
                  <Link key={post.id} href={`/blog/${post.slug}`} className="flex gap-4 group">
                    <div className="relative w-24 h-20 flex-shrink-0 overflow-hidden rounded-lg">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h3 className="text-xl font-bold text-gray-800 line-clamp-2 leading-tight group-hover:text-green-700 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-[12px] text-gray-500 mt-1 uppercase tracking-wider">{post.date}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA Box */}
            <div className="bg-[#004e22] rounded-[40px] p-10 text-center text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4 text-white">
                  Consult with Your Doctor
                </h3>
                <p style={{ fontFamily: 'Playfair Display, serif' }} className="text-white mb-2 text-bold text-xl ">Registration: ₹ 200</p>
                <p style={{ fontFamily: 'Playfair Display, serif' }} className="text-white mb-8 text-bold text-xl ">Consultation fee: ₹ 300</p>
                <button className="bg-[#ED8916] hover:bg-[#a67a42] text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg">
                  Book Appointment
                </button>
              </div>
              {/* Decorative background shape */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
            </div>
          </div>

        </div>
      </section>

      {/* Re-use OurTreatments component */}
      <OurTreatments />
    </div>
  );
};

export default BlogDetail;
