import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaInstagram, FaStackOverflow } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex flex-col h-[85vh] items-center justify-between font-sans">
      <section className="flex flex-col h-full items-center justify-center text-center">
        <h1 className="text-2xl md:text-4xl lg:text-5xl leading-[3rem]">
          My way of flexing my <br />
          <span className="font-extrabold text-3xl md:text-5xl lg:text-7xl">
            Authentication skills
          </span>
        </h1>
        <div className="flex gap-4 m-8">
          <Button size={"icon"}>
            <FaGithub size={20} />
          </Button>
          <Button size={"icon"} className="bg-pink-600 hover:bg-pink-700">
            <FaInstagram size={20} />
          </Button>
          <Button size={"icon"} className="bg-orange-500 hover:bg-orange-600">
            <FaStackOverflow size={20} />
          </Button>
        </div>
      </section>
    </main>
  );
}
