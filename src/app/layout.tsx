import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SIH Hackathon",
  description:
    "An App that deals with the legal doucmentation and that kind of stuff",
};
import Providers from "@/components/Provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  uploadModal: React.ReactNode;
}) {
  return (
    <html lang="en" className="antialiased">
      <body className={cn("min-h-screen antialiased", inter.className)}>
        <Providers>
          <Navbar />
          <div className="container border max-w-7xl border-gray-400 my-4 h-full py-6">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
