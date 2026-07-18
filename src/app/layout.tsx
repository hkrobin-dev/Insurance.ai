// Suppress TS error for side-effect CSS import when no type declarations are present
// @ts-ignore
import "./globals.css";
import { Providers } from "@/components/shared/providers";
import { Navbar } from "@/components/layout/Navbar";

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
      </body>
    </html>
  );
}
