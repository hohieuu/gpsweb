import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import { Product } from "@/types/product";

interface FeaturesProps {
  products: Product[];
}

const Features = ({ products }: FeaturesProps) => {
  return (
    <>
      <section id="san-pham" className="py-14 md:py-20 lg:py-24">
        <div className="container">
          <SectionTitle
            title="Sản phẩm & Dịch vụ"
            paragraph="Định vị xe máy, định vị ô tô, camera hành trình và camera giám sát. Lắp đặt tận nơi tại Huế."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2">
            {products.map((product) => (
              <SingleFeature key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
