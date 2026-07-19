// Suppress TS error for side-effect CSS import when no type declarations are present
// @ts-ignore
import "./globals.css";
import { Providers } from "@/components/shared/providers";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar></Navbar>
        <Providers>{children}</Providers>
        <Footer></Footer>
      </body>
    </html>
  );
}
