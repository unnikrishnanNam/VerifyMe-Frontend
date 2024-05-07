import React from "react";
import Logo from "./Logo";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="fixed w-full flex p-4 px-2 md:px-16 lg:px-32 justify-between items-center bg-white text-black shadow-sm font-sans">
      <Logo />
      <div className="flex gap-2 mx-2">
        <Link href={"/auth/register/"}>
          <Button variant={"secondary"}>Register</Button>
        </Link>
        <Link href={"/auth/login"}>
          <Button>Login</Button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
