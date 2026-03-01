import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { slug, title, image, paragraph, author, tags, publishDate } = blog;
  return (
    <>
      <div className="group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark">
        <Link
          href={`/blog/${slug}`}
          className="relative block aspect-[37/22] w-full"
        >
          <span className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold capitalize text-white">
            {tags[0]}
          </span>
          <Image src={image} alt={title} fill />
        </Link>
        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          <h3>
            <Link
              href={`/blog/${slug}`}
              className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
            >
              {title}
            </Link>
          </h3>
          <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
            {paragraph}
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-body-color/10 pt-4 dark:border-white/10">
            <div className="flex items-center gap-3">
              <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full">
                <Image src={author.image} alt={author.name} fill />
              </div>
              <div>
                <p className="text-sm font-medium text-black dark:text-white">
                  {author.name}
                </p>
                <p className="text-xs text-body-color dark:text-body-color-dark">
                  {author.designation}
                </p>
              </div>
            </div>
            <p className="text-sm text-body-color dark:text-body-color-dark">
              {publishDate}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
