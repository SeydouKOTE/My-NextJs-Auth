import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import { Toaster } from "sonner";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  title: "nextAuth by kote",
  description: "Développeur passionné par le web, la sécurité et les solutions innovantes.",
  icons: {
    icon: "/kote.png",
  },
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <html lang="en">
      <body className="min-h-screen">
        <SessionProvider session={session}>
          <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 relative overflow-hidden flex items-center justify-center px-4">
            {/* Effet de vague géométrique moderne */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-full h-full bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 scale-150"></div>
              <div className="absolute bottom-0 right-0 w-full h-full bg-white rounded-full transform translate-x-1/2 translate-y-1/2 scale-150"></div>
            </div>

            {/* Grain subtil pour texture */}
            <div
              className="absolute inset-0 opacity-10 bg-repeat"
              style={{
                backgroundImage:
                  "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMwMDAiPjwvcmVjdD4KPC9zdmc+')",
              }}
            ></div>

            {/* Contenu centré */}
            <div className="relative z-10 w-full max-w-md sm:max-w-lg md:max-w-2xl">
              <Toaster />
              {children}
              <Analytics />
              <SpeedInsights />
            </div>
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
