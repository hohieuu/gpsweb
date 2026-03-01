import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liên hệ | AIGPS – Lắp đặt định vị tại Huế",
  description: "Liên hệ AIGPS – Gọi 0869913144 (Hồ Nhân Ái). Bán và lắp đặt định vị tận nơi tại Huế.",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Liên hệ"
        description="Gọi 0869913144 – Lắp đặt tận nơi tại Huế"
      />
      <div className="container">
        <h1 className="text-3xl font-semibold text-center my-8">
          Liên hệ <span className="text-primary">lắp đặt định vị</span> tại Huế
        </h1>
      </div>
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full md:w-1/2">
            <p className="text-center text-lg">
              Gọi ngay <a href="tel:0869913144" className="font-semibold text-primary">0869913144</a> (Hồ Nhân Ái) để được tư vấn và đặt lịch <span className="font-semibold text-primary">lắp đặt định vị</span> tận nơi tại Huế.
            </p>
          </div>
        </div>
      </div>

      <Contact />
    </>
  );
};

export default ContactPage;
