import Footer from "@/components/global/Footer";
import Header from "@/components/global/Header";
import { Toaster } from "@/components/ui/toaster";
import { PropsWithChildren } from "react";

function RootLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {children}
      <Footer />
      <Toaster />
    </div>
  );
}

export default RootLayout;
