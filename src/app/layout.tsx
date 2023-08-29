import type { Metadata } from "next";
import { Providers } from "./providers";
import MainLayout from "@/layouts/main";
import "@fontsource/inter/latin.css";

export const metadata: Metadata = {
  title: {
    default: "Marco Tan",
    template: "%s | Marco Tan",
  },
  description: "Marco Tan's personal website.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Providers>
          <MainLayout>{children}</MainLayout>
        </Providers>
      </body>
    </html>
  );
}
