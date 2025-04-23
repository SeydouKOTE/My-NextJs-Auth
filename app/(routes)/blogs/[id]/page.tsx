import { blogs } from '@/data/blog'
import { notFound } from 'next/navigation'
import Image from 'next/image'

// This function handles rendering the page
export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const blog = blogs.find((b) => b.id === id);

  if (!blog) return notFound()

  return (
    <main className="py-20 px-4 max-w-5xl mx-auto">
      <div className="mb-10">
        <span className="text-sm text-gray-500 uppercase">{blog.category}</span>
        <h1 className="text-4xl font-bold mt-2">{blog.title}</h1>
        <p className="text-gray-500 mt-2">{new Date(blog.date).toLocaleDateString()}</p>
      </div>

      <div className="w-full h-[400px] relative overflow-hidden rounded-3xl shadow-lg">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>

      <article className="prose prose-lg mt-10 text-gray-800">
        {blog.content}
      </article>
    </main>
  )
}

// Generate static params for dynamic routes
export async function generateStaticParams() {
  return blogs.map((blog) => ({
    params: { id: blog.id },
  }))
}
