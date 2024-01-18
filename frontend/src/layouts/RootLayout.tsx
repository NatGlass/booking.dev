import Header from "@/components/global/Header";
import { PropsWithChildren } from "react";

function RootLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {children}
    </div>
  );
}

export default RootLayout;
