import type { Metadata } from "next";
import { Inter, Josefin_Sans } from "next/font/google";
import "./globals.css";
import LoadingScreen from "./LoadingScreen";
import VisualEffects from "./VisualEffects";
import { LanguageProvider } from "@/lib/LanguageContext";
import { getSiteConfig } from "@/config/site";
import { getDictionary } from "@/lib/dictionaries";

export const dynamic = 'force-dynamic';

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const josefin = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const siteConfig = getSiteConfig();
  
  return {
    title: {
      default: siteConfig.name,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.author }],
    creator: siteConfig.author,
    openGraph: {
      type: "website",
      locale: "th_TH",
      url: siteConfig.url,
      title: siteConfig.name,
      description: siteConfig.description,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.name,
      description: siteConfig.description,
      images: [siteConfig.ogImage],
    },
    icons: {
      icon: "/favicon.ico",
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const siteConfig = getSiteConfig();
  const dictionary = getDictionary();

  return (
    <html lang="en" className={`h-full ${inter.variable} ${josefin.variable}`}>
      <head>
        <style dangerouslySetInnerHTML={{ __html: `
          :root {
            --bg-dark: ${siteConfig.theme.colors.background};
            --bg-panel: ${siteConfig.theme.colors.panel};
            --accent-red: ${siteConfig.theme.colors.primary};
            --accent-gold: ${siteConfig.theme.colors.secondary};
            --border-action: ${siteConfig.theme.colors.border};
          }
        `}} />
      </head>
      <body className={`${inter.className} min-h-full flex flex-col relative`}>
        <LanguageProvider initialDictionary={dictionary} initialSiteConfig={siteConfig}>
          <div className="bg-vignette" />
          <div className="bg-glow" />
          <LoadingScreen />
          <VisualEffects />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
