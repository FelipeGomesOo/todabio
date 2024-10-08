import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import Image from "next/image";
import MobileMenu from "@/components/menu/MobileMenu";
import { buttonVariants } from "@/components/ui/button";

export default function Menu() {
  return (
    <nav className="bg-white px-8 font-mono ">
      <div className="flex flex-row  items-center h-16 w-full">
        <Link href="/" className="shrink-0 basis-2/12">
          <Image
            src="/logotipo-todabio-site.svg"
            alt="Logo"
            width={140}
            height={25.68}
          />
        </Link>
        <div className="basis-8/12">
          <NavigationMenu className=" hidden md:block  ">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                <NavigationMenuContent className="p-2">
                  <div className="flex-col flex gap-2">
                    <NavigationMenuLink
                      href="/solutions/for-nbs-projects"
                      className={`w-full ${navigationMenuTriggerStyle()}`}
                    >
                      For NBS Projects
                    </NavigationMenuLink>
                    <NavigationMenuLink
                      href="/solutions/for-compensation-needs"
                      className={`w-full ${navigationMenuTriggerStyle()}`}
                    >
                      For Compensation Needs
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/blog" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Blog
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contact Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <Link
          className={` basis-2/12 ${buttonVariants({ variant: "accent" })}`}
          href="/biodiversity-samples"
        >
          Verifiable biodiversity
        </Link>
      </div>
      <MobileMenu />
    </nav>
  );
}
