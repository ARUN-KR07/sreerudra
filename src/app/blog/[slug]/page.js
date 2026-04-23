import { blogData } from "@/lib/blogData";
import BlogDetail from "@/components/blog/BlogDetail";

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.slug,
  }));
}

// Dynamic metadata
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = blogData.find((p) => p.slug === slug);

  return {
    title: blog ? `${blog.title} | Sreerudra Ayurveda` : "Blog Detail",
    description: blog?.description || "Read more about our Ayurvedic insights.",
  };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const blog = blogData.find((p) => p.slug === slug);

  return <BlogDetail blog={blog} />;
}
