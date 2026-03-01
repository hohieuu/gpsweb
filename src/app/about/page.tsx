import AboutSectionOne from "@/components/About/AboutSectionOne";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Giới thiệu | AIGPS – Lắp đặt định vị tại Huế",
  description: "AIGPS – Bán và lắp đặt định vị tại Huế. Lắp đặt tận nơi định vị xe máy, ô tô, camera. 0869913144.",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Giới thiệu"
        description="AIGPS chuyên bán và lắp đặt định vị tại Huế: định vị xe máy, ô tô, camera hành trình, camera giám sát. Lắp đặt tận nơi."
      />
      <AboutSectionOne />
      {/* <AboutSectionTwo /> */}
    </>
  );
};

export default AboutPage;
