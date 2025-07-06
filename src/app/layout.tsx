import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Noto_Sans_KR } from "next/font/google";
import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import RandomBanner from "@/components/banners/random-banner";
import "./globals.css";
import "nextra-theme-docs/style.css";

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "코리아IT아카데미 신촌",
  description: "코리아IT아카데미 신촌",
};

const banner = <RandomBanner />;
const navbar = (
  <Navbar
    logo={<b>코리아IT아카데미 신촌 - 이종석</b>}
    // ... Your additional navbar options
  />
);
const footer = (
  <Footer>
    MIT {new Date().getFullYear()} © 코리아IT아카데미 신촌 - Jaceleedev
  </Footer>
);

export default async function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html
      // Not required, but good for SEO
      lang="ko"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body className={`${notoSansKR.className} antialiased`}>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
          footer={footer}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
