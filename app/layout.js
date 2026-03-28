import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Leo F&B Strategy",
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
