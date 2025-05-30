import { ReactNode } from "react";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const ibm = IBM_Plex_Mono({
  weight: ["300"],
  subsets: ["latin"],
});
export const metadata = {
  title: "Zachary Short",
  description: "",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${ibm.className} antialiased`}>{children}</body>
    </html>
  );
}
