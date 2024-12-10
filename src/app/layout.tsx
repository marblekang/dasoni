import type { Metadata } from "next";
import "./globals.css";
import QueryProvider from "@/components/providers/tanstack-query-provider";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Dasoni - Writing Journal for You",
  description: "A journaling app for loved ones.",
};

const lemonada = localFont({
  src: "../../public/fonts/Lemonada-VariableFont_wght.ttf",
  display: "swap",
  variable: "--font-lemonada",
});

const khmer = localFont({
  src: "../../public/fonts/Khmer400.ttf",
  weight: "400",
  variable: "--font-khmer",
});

const montserratSubrayada = localFont({
  src: [
    {
      path: "../../public/fonts/MontserratSubrayada-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/MontserratSubrayada-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-montserratSubrayada",
});
const permanentMarker = localFont({
  src: "../../public/fonts/PermanentMarker-Regular.ttf",
  display: "swap",
  variable: "--font-permanentMarker",
});
const pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
  display: "swap",
  variable: "--font-pretendard",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` bg-gray-100 text-gray-800 flex justify-center ${lemonada.variable} ${montserratSubrayada.variable} ${pretendard.variable} ${permanentMarker.variable} ${khmer.variable}`}
      >
        <QueryProvider>
          <div className="max-w-[500px] w-full min-h-screen relatvie">
            {children}
          </div>
        </QueryProvider>
      </body>
    </html>
  );
}
