import React from "react";
import { Navbar } from "@/app/(protected)/_components/navbar";
import { Toaster } from "sonner";

export default async function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="relative z-10 mx-auto w-full max-w-md sm:max-w-lg md:max-w-2xl space-y-6">
        <Toaster />
        <Navbar />
        <div className="bg-white bg-opacity-80 backdrop-blur-lg rounded-2xl shadow-lg p-4 sm:p-6 md:p-8">
          {children}
        </div>
      </div>
    </div>
  );
}
