import type { Metadata } from "next";
import ClientLayout from "./ClientLayout";

export const metadata: Metadata = {
  icons: {
    icon: "/images/logo/aigps-icon.svg",
    apple: "/images/logo/aigps-icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="vi" className="light">
      <head />
      <ClientLayout>{children}</ClientLayout>
    </html>
  );
}
