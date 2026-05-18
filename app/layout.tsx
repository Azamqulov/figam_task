import "./global.css";
import { Libre_Franklin } from "next/font/google";
import { ReactNode } from "react";

export const metadata = {
  title: `My projects's Project`,
};

const libre = Libre_Franklin({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-libre",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={libre.className} suppressHydrationWarning>{children}</body>
    </html>
  );
}
