import type { Metadata } from "next";
import { Inter, Rubik } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JalalDev | Portfolio",
  description: "Made with love, Enjoy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={rubik.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
