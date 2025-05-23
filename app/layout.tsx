import { ReactNode } from "react";
import { Fira_Code } from "next/font/google";
import "./globals.css";

const fira_code = Fira_Code({
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
      <body className={`${fira_code.className} antialiased`}>{children}</body>
    </html>
  );
}
