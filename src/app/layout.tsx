import { RootProvider } from "fumadocs-ui/provider/next";
import "./global.css";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { DirectionProvider } from "@/components/ui/direction";
import { ThemeProvider } from "@/components/theme-provider";

const vazirmatn = localFont({
  src: "../../public/fonts/Vazirmatn-VariableFont_wght.ttf",
  weight: "300 900",
  variable: "--font-sans",
});

const appName = "مجله ماسا";
const appDescription = "ماسا برگزارکننده دوره های تخصصی طراحی لباس و فشن.";

const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH?.trim() ?? "";
const normalizedBasePath =
  !rawBasePath || rawBasePath === "/"
    ? ""
    : rawBasePath.startsWith("/")
      ? rawBasePath
      : `/${rawBasePath}`;

function getMetadataBase(): URL {
  const url = new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  );

  if (!normalizedBasePath) return url;

  const currentPath = url.pathname.replace(/\/+$/, "") || "";
  if (currentPath.endsWith(normalizedBasePath)) return url;

  url.pathname = `${currentPath}${normalizedBasePath}`.replace(/\/+/g, "/");
  return url;
}

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  description: appDescription,
  applicationName: appName,
  keywords: [
    "ماسا",
    "طراحی لباس",
    "دوره طراحی لباس",
    "آموزش فشن",
    "فشن دیزاین",
    "دوره فشن",
    "آموزش آنلاین طراحی لباس",
  ],
  authors: [{ name: appName }],
  creator: appName,
  publisher: appName,
  category: "education",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: "/",
    siteName: appName,
    title: `${appName} | دوره های طراحی لباس و فشن`,
    description: appDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: `${appName} | دوره های طراحی لباس و فشن`,
    description: appDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fa-IR"
      dir="rtl"
      className={vazirmatn.variable}
      suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider
          theme={{
            enabled: true,
          }}
          dir="rtl">
          <DirectionProvider direction="rtl">
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem={false}
              disableTransitionOnChange>
              {children}
            </ThemeProvider>
          </DirectionProvider>
        </RootProvider>
      </body>
    </html>
  );
}
