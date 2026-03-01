import { Blog } from "@/types/blog";

const AUTHOR = {
  name: "Hồ Nhân Ái",
  image: "/images/logo/aigps-icon.svg",
  designation: "Chuyên gia định vị · AIGPS Huế",
};

const blogData: Blog[] = [
  {
    id: 1,
    slug: "dinh-vi-xe-may-tai-viet-nam-tai-sao-nen-lap",
    title: "Định vị xe máy tại Việt Nam: Tại sao nên lắp và cách chọn thiết bị",
    paragraph: "Xe máy là phương tiện phổ biến tại Việt Nam, đồng thời cũng là đối tượng dễ bị trộm. Lắp định vị xe máy giúp theo dõi vị trí, hành trình và bảo vệ tài sản hiệu quả. Bài viết nêu lợi ích và tiêu chí chọn thiết bị định vị phù hợp.",
    image: "/images/blog/blog-01.jpg",
    author: AUTHOR,
    tags: ["Định vị xe máy"],
    publishDate: "12 Tháng 1, 2025",
  },
  {
    id: 2,
    slug: "loi-ich-dinh-vi-xe-may-o-hue",
    title: "Lợi ích của định vị xe máy ở Huế: An tâm đi lại và chống trộm",
    paragraph: "Định vị xe máy ở Huế giúp chủ xe theo dõi xe từ xa, cảnh báo khi xe di chuyển bất thường và hỗ trợ tìm lại xe khi mất. Dịch vụ lắp đặt định vị tận nơi tại Huế ngày càng tiện lợi.",
    image: "/images/blog/blog-02.jpg",
    author: AUTHOR,
    tags: ["Định vị xe máy ở Huế"],
    publishDate: "20 Tháng 1, 2025",
  },
  {
    id: 3,
    slug: "huong-dan-mua-dinh-vi-o-hue",
    title: "Hướng dẫn mua định vị ở Huế: Nên mua ở đâu, giá và bảo hành",
    paragraph: "Mua định vị ở Huế cần chọn đơn vị uy tín, có bảo hành và lắp đặt chuyên nghiệp. Bài viết gợi ý cách so sánh giá, tính năng và chính sách lắp đặt tận nơi tại Huế.",
    image: "/images/blog/blog-03.jpg",
    author: AUTHOR,
    tags: ["Mua định vị ở Huế"],
    publishDate: "28 Tháng 1, 2025",
  },
  {
    id: 4,
    slug: "mua-dinh-vi-hue-dia-chi-uy-tin",
    title: "Mua định vị Huế: Địa chỉ uy tín lắp định vị xe máy tận nơi",
    paragraph: "Tìm địa chỉ mua định vị Huế đáng tin cậy giúp bạn có thiết bị chất lượng, lắp đặt đúng kỹ thuật và được bảo hành. AIGPS hỗ trợ lắp đặt định vị tận nơi tại Huế.",
    image: "/images/blog/blog-04.jpg",
    author: AUTHOR,
    tags: ["Mua định vị Huế"],
    publishDate: "5 Tháng 2, 2025",
  },
  {
    id: 5,
    slug: "cach-lap-dat-dinh-vi-xe-may-an-toan",
    title: "Cách lắp đặt định vị xe máy an toàn và hiệu quả",
    paragraph: "Lắp đặt định vị xe máy đúng cách giúp thiết bị hoạt động ổn định và khó bị phát hiện. Bài viết mô tả quy trình lắp, vị trí gợi ý và lưu ý bảo trì.",
    image: "/images/blog/blog-05.jpg",
    author: AUTHOR,
    tags: ["Định vị xe máy", "Hướng dẫn"],
    publishDate: "14 Tháng 2, 2025",
  },
  {
    id: 6,
    slug: "dinh-vi-xe-may-va-bao-hiem-co-nen-lap",
    title: "Định vị xe máy và bảo hiểm: Có nên lắp không?",
    paragraph: "Nhiều gói bảo hiểm xe máy khuyến nghị hoặc ưu đãi khi xe có lắp định vị. Tìm hiểu mối liên hệ giữa định vị xe máy và bảo hiểm để quyết định lắp đặt.",
    image: "/images/blog/blog-06.jpg",
    author: AUTHOR,
    tags: ["Định vị xe máy", "Bảo hiểm"],
    publishDate: "22 Tháng 2, 2025",
  },
  {
    id: 7,
    slug: "so-sanh-dinh-vi-xe-may-theo-gia-va-tinh-nang",
    title: "So sánh định vị xe máy theo giá và tính năng tại Việt Nam",
    paragraph: "Thị trường định vị xe máy tại Việt Nam đa dạng về giá và tính năng: theo dõi realtime, lịch sử hành trình, cảnh báo vùng. Bài viết so sánh để chọn sản phẩm phù hợp.",
    image: "/images/blog/blog-07.jpg",
    author: AUTHOR,
    tags: ["Định vị xe máy", "So sánh"],
    publishDate: "1 Tháng 3, 2025",
  },
  {
    id: 8,
    slug: "lap-dinh-vi-xe-may-tan-noi-tai-hue",
    title: "Lắp định vị xe máy tận nơi tại Huế – Quy trình và bảo hành",
    paragraph: "Dịch vụ lắp định vị xe máy tận nơi tại Huế giúp khách hàng tiết kiệm thời gian. Tìm hiểu quy trình đặt lịch, lắp đặt và chính sách bảo hành tại AIGPS.",
    image: "/images/blog/blog-08.jpg",
    author: AUTHOR,
    tags: ["Định vị xe máy ở Huế", "Lắp đặt tận nơi"],
    publishDate: "10 Tháng 3, 2025",
  },
];

export default blogData;

export function getBlogBySlug(slug: string): Blog | undefined {
  return blogData.find((b) => b.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogData.map((b) => b.slug);
}
