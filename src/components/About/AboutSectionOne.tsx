import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import AIGPSIcon from "../Common/AIGPSIcon";

const AboutSectionOne = () => {
  const List = ({ text }: { text: string }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        <AIGPSIcon size={18} />
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Lắp đặt tận nơi tại Huế"
                paragraph="AIGPS chuyên bán và lắp đặt định vị tại Huế. Tư vấn miễn phí, bảo hành thiết bị."
                mb="44px"
              />

              <div
                className="mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Đã có kinh nghiệm với 1000+ xe đã được lắp đặt" />
                    <List text="Lắp đặt tận nơi tại Huế" />
                    <List text="Tư vấn và báo giá miễn phí" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Định vị xe máy, ô tô, camera" />
                    <List text="Thiết bị chính hãng, bảo hành" />
                    <List text="Gọi 0869913144 – Hồ Nhân Ái" />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
                <Image
                  src="/images/about/about-image.svg"
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                />
                <Image
                  src="/images/about/about-image-dark.svg"
                  alt="about-image"
                  fill
                  className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
