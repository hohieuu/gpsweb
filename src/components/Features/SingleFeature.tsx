import Image from "next/image";
import { Product } from "@/types/product";
import AIGPSIcon from "../Common/AIGPSIcon";

const SingleFeature = ({ product }: { product: Product }) => {
  const { imagePath, title, description } = product;
  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="relative mb-6 aspect-[16/10] w-full overflow-hidden rounded-lg bg-gray-light dark:bg-gray-dark">
          {imagePath ? (
            <Image
              src={imagePath}
              alt={title}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : (
            <span className="absolute inset-0 flex items-center justify-center">
              <AIGPSIcon className="text-primary" size={56} />
            </span>
          )}
        </div>
        <h3 className="mb-3 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
