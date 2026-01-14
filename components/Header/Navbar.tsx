import Link from "next/link";
import React from "react";
import SearchBar from "./SearchBar";
import { LuShoppingCart } from "react-icons/lu";
import Menu from "./Menu";
import { Button } from "../ui/button";
import Logo from "../Logo/Logo";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 bg-white w-full">
      
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between p-4">
        <SearchBar />

        <Link href="/"><Logo></Logo></Link>

        
        <div className="flex items-center space-x-2">

          <Link href="/dashboard">
            <Button variant="outline">Dashboard</Button>
          </Link>
          <Button variant="outline">Login</Button>
          <Button variant="outline">
            <LuShoppingCart />
          </Button>
        </div>
      </div>

      <hr />
      <div className="flex justify-center">
        <Menu />
      </div>
      <hr />
      </div>
    </nav>
  );
};

export default Navbar;
