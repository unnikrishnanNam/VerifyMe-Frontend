import React from "react";
import Link from "next/link";
import { Fingerprint } from "lucide-react";

const Logo = () => {
  return (
    <Link
      href="/"
      className="text-2xl font-extrabold flex m-2 gap-2 items-center justify-center"
    >
      <Fingerprint size={32} />
      VerifyMe
    </Link>
  );
};

export default Logo;
