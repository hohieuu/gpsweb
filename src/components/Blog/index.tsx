import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";

const Blog = () => {
  const latest = blogData.slice(0, 3);
  return (
    <section
      id="blog"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Bài Viết Mới Nhất"
          paragraph="Định vị xe máy, mua định vị ở Huế – tư vấn và hướng dẫn."
          center
        />
        <div className="-mx-4 flex flex-wrap justify-center">
          {latest.map((blog) => (
            <div
              key={blog.id}
              className="mb-10 w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
            >
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex rounded-sm bg-primary px-8 py-3 text-base font-medium text-white duration-300 hover:bg-primary/90"
          >
            Xem tất cả bài viết
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
