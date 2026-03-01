"use client";
import SectionTitle from "../Common/SectionTitle";

const PHONE = "0869913144";

const Pricing = () => {
  return (
    <section id="pricing" className="relative z-10 py-14 md:py-20 lg:py-24">
      <div className="container">
        <SectionTitle
          title="Liên hệ báo giá"
          paragraph="Báo giá thiết bị định vị xe máy, định vị ô tô, camera hành trình và camera giám sát. Lắp đặt định vị tận nơi tại Huế. Gọi ngay để được tư vấn."
          center
          width="665px"
        />
        <div className="mx-auto max-w-md text-center">
          <a
            href={`tel:${PHONE}`}
            className="inline-flex rounded-sm bg-primary px-10 py-4 text-lg font-semibold text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
          >
            Gọi {PHONE} – Hồ Nhân Ái
          </a>
          <p className="mt-4 text-base text-body-color dark:text-body-color-dark">
            Lắp đặt tận nơi tại Huế
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C20F0F" />
              <stop offset="1" stopColor="#C20F0F" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C20F0F" />
              <stop offset="1" stopColor="#C20F0F" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
