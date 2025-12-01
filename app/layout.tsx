import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";   // ✅ ADD THIS

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Samir Mode | Portfolio",
  description: "Portfolio website of Samir Mode - Electronics, Data Science, and Projects",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        
        {/* Background gradient */}
        <div
          className="
            fixed inset-0 pointer-events-none 
            bg-[radial-gradient(ellipse_at_top,rgba(56,130,255,0.05),transparent)]
          "
        ></div>

        {children}

        <Analytics /> {/* ✅ Vercel Analytics inserted here */}
      </body>
    </html>
  );
}
