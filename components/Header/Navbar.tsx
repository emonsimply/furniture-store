import Link from "next/link";
import React from "react";
import SearchBar from "./SearchBar";
import { LuShoppingCart } from "react-icons/lu";
import Menu from "./Menu";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <nav>
      
      <div className="flex items-center justify-between p-4">
        <SearchBar />

        <Link href="/">Logo</Link>

        
        <div className="flex items-center space-x-2">
          <Button variant="outline">Dashboard</Button>
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
    </nav>
  );
};

export default Navbar;
