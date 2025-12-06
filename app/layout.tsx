import type { Metadata } from "next";
import "./globals.css";
import TopNav from "@/components/ui/top-nav";

export const metadata: Metadata = {
  title: "Roxy",
  description: "Work & Social universe",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground">
        <div className="flex flex-col min-h-screen">
          <TopNav />
          <main className="flex-1 px-4 py-6 max-w-5xl mx-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
