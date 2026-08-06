import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  // OG 이미지의 상대경로(/images/...)를 절대 URL로 변환하는 기준. 미설정 시 카톡 공유 썸네일이 깨짐.
  metadataBase: new URL(siteUrl),
  title: "무림 성향 팩폭 테스트",
  description: "내 안의 숨겨진 본성을 찾는 뼈 때리는 무협 MBTI 테스트",
  openGraph: {
    title: "무림 성향 팩폭 테스트",
    description: "내 안의 숨겨진 본성을 찾는 뼈 때리는 무협 MBTI 테스트",
    type: "website",
    locale: "ko_KR",
  },
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
