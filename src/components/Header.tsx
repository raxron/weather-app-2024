import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
export default function Header() {
    return (
        <Navbar className="bg-blue-100/10 ">
            <NavbarBrand>
                <Link className="flex gap-4 items-center" href="/">
                <Image src="/logo.png" alt="logo" width={50} height={50} className="h-auto" />
                <h1 className="font-bold text-orange-200">QuickSky</h1>
                </Link>
              
            </NavbarBrand>
           
        </Navbar>
    )
}