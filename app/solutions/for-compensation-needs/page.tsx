import OurProcess from "@/components/OurProcess";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "./hero";

export default function Home() {
  return (
    <div className="flex flex-col justify-start items-start">
      <Hero />
      <OurProcess />
    </div>
  );
}
