import SectionTitle from "../Common/SectionTitle";

const Blog = () => {
  return (
    <section
      id="blog"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Bài Viết Mới Nhất"
          paragraph="Bên dưới là những bài viết mới nhất của chúng tôi."
          center
        />

        Đang cập nhật...
      </div>
    </section>
  );
};

export default Blog;
