import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Boris Drogt Fysio | Manuele therapie & kaakfysiotherapie Nijmegen",
  description: "Fysiotherapie in Nijmegen voor kaakklachten, tinnitus, hoofdpijn, nekpijn en rug/bekkenspanning. Boris Drogt combineert manuele therapie, oefentherapie en dry needling.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className="bg-white text-gray-900">
        <Header />

        {children}
        <Script id="clarity-script">
          {`(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "y8e9b5zkz0");`}
        </Script>

      </body>
    </html>
  )
}
