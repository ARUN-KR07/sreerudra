import React from "react";
import BlogList from "@/components/blog/BlogList";
import OurTreatments from "@/components/home/OurTreatments";

export const metadata = {
  title: "Blog | Sreerudra Ayurveda",
  description: "Read the latest articles and insights on Ayurvedic treatments, wellness, and healthy living from Sreerudra Ayurveda.",
};

export default function BlogPage() {
  return (
    <main className="w-full bg-white">
      <BlogList />
      <OurTreatments />
    </main>
  );
}
