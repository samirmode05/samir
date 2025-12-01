import Link from "next/link";
import { blogPosts } from "@/lib/blogData";

export default function BlogPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-10">Blog</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="bg-[#0d1321] border border-white/10 rounded-xl p-5 hover:border-blue-500 transition"
          >
            <h2 className="text-2xl font-semibold text-white">{post.title}</h2>
            <p className="text-gray-400 mt-2">{post.description}</p>
            <p className="text-blue-400 mt-3 text-sm">Read more →</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
