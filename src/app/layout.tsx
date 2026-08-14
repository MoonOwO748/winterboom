import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "☎ 010-8701-1746 | 강남 엘리트 하이가라오케 | 강남 룸싸롱 | 프라이빗 VIP룸",
  description:
    "☎ 010-8701-1746 | 강남 엘리트 하이가라오케. 대치동 890-38 위치, 프라이빗 VIP 룸, 투명 정찰제 운영. 강남 룸싸롱 가격 안내 및 실시간 요금 계산기 제공.",
  keywords: ["강남 엘리트", "강남 룸싸롱", "강남 룸싸롱 가격", "하이가라오케", "강남 가라오케", "대치동 엘리트"],
  openGraph: {
    title: "☎ 010-8701-1746 | 강남 엘리트 하이가라오케 | 강남 룸싸롱",
    description:
      "강남 엘리트 하이가라오케. 대치동 890-38 위치, 프라이빗 VIP 룸, 투명 정찰제 운영. 전화 010-8701-1746.",
    url: "https://winterbeom-room.com",
    siteName: "하이가라오케",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "☎ 010-8701-1746 | 강남 엘리트 하이가라오케",
    description:
      "강남 엘리트 하이가라오케. 대치동 890-38 위치, 프라이빗 VIP 룸, 투명 정찰제 운영.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://winterbeom-room.com",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className={`${notoSansKr.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://winterbeom-room.com/#website",
                  url: "https://winterbeom-room.com",
                  name: "하이가라오케",
                  inLanguage: "ko",
                },
                {
                  "@type": "NightClub",
                  "@id": "https://winterbeom-room.com/#business",
                  name: "하이가라오케",
                  alternateName: ["강남 엘리트", "하이 가라오케", "Hi Karaoke"],
                  url: "https://winterbeom-room.com",
                  telephone: "+82-10-8701-1746",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "대치동 890-38 엘리트",
                    addressLocality: "강남구",
                    addressRegion: "서울",
                    addressCountry: "KR",
                  },
                  openingHoursSpecification: [
                    {
                      "@type": "OpeningHoursSpecification",
                      dayOfWeek: [
                        "Monday", "Tuesday", "Wednesday", "Thursday",
                        "Friday", "Saturday", "Sunday",
                      ],
                      opens: "18:00",
                      closes: "15:00",
                    },
                  ],
                  priceRange: "₩100,000~",
                  inLanguage: "ko",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-ink text-bone antialiased">
        {children}
      </body>
    </html>
  );
}
