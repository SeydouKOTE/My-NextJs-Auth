import React from "react";
import {Navbar} from "@/app/(protected)/_components/navbar";
import {Toaster} from "sonner";


export default async function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
           <div className="relative z-10 w-full max-w-md gap-x-2">
               <Toaster />
               <Navbar />
               {children}
           </div>
  );
}
