import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "무림 성향 팩폭 테스트",
  description: "내 안의 숨겨진 본성을 찾는 뼈 때리는 무협 MBTI 테스트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        {children}
      </body>
    </html>
  );
}
