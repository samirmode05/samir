import { blogPosts } from "@/lib/blogData";

export default async function BlogDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // unwrap Promise

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-20 text-white">
        <h1 className="text-3xl font-bold mb-4">Blog Not Found</h1>
        <p className="text-gray-400">
          The blog you are looking for does not exist.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-20 text-white">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-400 mb-6">{post.date}</p>

      {/* Removed Image Section Completely */}

      <article
        className="prose prose-invert leading-relaxed"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
}
