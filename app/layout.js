import "./globals.css";
import Navbar from "@/components/Navbar";
import { SITE_NAME } from "@/lib/constants";

export const metadata = {
  title: SITE_NAME,
  description: "F&B 전략 분석 및 인사이트",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
