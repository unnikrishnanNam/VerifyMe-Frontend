import Footer from "@/components/custom/Footer";
import NavBar from "@/components/custom/NavBar";
import React from "react";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default RootLayout;
