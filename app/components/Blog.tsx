import Link from "next/link";
import { blogPosts } from "@/lib/blogData";

export default function Blog() {
  return (
    <section id="blog" className="px-8 py-20">
      <h2 className="text-4xl font-bold mb-10">Latest Blog Posts</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {blogPosts.slice(0, 3).map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="bg-[#0d1321] border border-white/10 rounded-xl p-5 hover:border-blue-500 transition"
          >
            <h3 className="text-xl font-semibold text-white">{post.title}</h3>
            <p className="text-gray-400 mt-2">{post.description}</p>
            <p className="text-blue-400 mt-3 text-sm">Read more →</p>
          </Link>
        ))}
      </div>

      <Link
        href="/blog"
        className="block text-blue-400 mt-6 hover:underline text-right"
      >
        View all posts →
      </Link>
    </section>
  );
}
