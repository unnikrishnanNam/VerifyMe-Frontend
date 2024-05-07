import Link from "next/link";
import React from "react";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full h-[15vh] flex flex-col items-center justify-center bg-black text-white p-4 text-center text-xs sm:text-base md:text-xl">
      <p>© 2024 VerifyMe</p>
      <div className="flex items-center justify-center gap-2 p-4">
        <p>Made with by </p>
        <Heart className="text-red-500" size={20} />
        <Link
          href="https://www.instagram.com/unnikrishnan.n.ek/"
          className="text-blue-400"
        >
          @unnikrishnan.n.ek
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
