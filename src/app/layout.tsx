import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const seoTitle = "강남 유흥 | 강남 가라오케 가격·하이퍼블릭 안내";
const seoDescription = "강남 유흥을 알아보는 분을 위한 하이가라오케 이용 안내. 강남 가라오케 가격, 강남 하이퍼블릭 시스템, 시간당 비용과 할인 조건을 확인하세요. 대치동 위치·예약 문의 010-8701-1746.";

export const metadata: Metadata = {
  metadataBase: new URL("https://winterbeom-room.com"),
  title: seoTitle,
  description: seoDescription,
  keywords: ["강남 유흥", "강남 가라오케 가격", "강남 하이퍼블릭"],
  openGraph: {
    title: seoTitle,
    description: seoDescription,
    url: "https://winterbeom-room.com/",
    siteName: "하이가라오케",
    locale: "ko_KR",
    type: "website",
    images: [{ url: "/hero.jpg", alt: "하이가라오케 라운지" }],
  },
  twitter: {
    card: "summary_large_image",
    title: seoTitle,
    description: seoDescription,
    images: ["/hero.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://winterbeom-room.com/" },
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
                  image: "https://winterbeom-room.com/hero.jpg",
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
