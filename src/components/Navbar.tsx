import { ChevronDown, ShoppingBag } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="font-ibm-plex absolute top-10 left-1/2 z-10 container flex -translate-x-1/2 items-center justify-between bg-transparent text-white">
      <a href="/" className="cursor-pointer text-2xl">
        Panto
      </a>
      <ul className="flex gap-15">
        <li className="flex cursor-pointer items-center gap-2">
          <span>Furniture</span>
          <ChevronDown size={20} />
        </li>
        <li className="cursor-pointer">
          <span>Shop</span>
        </li>
        <li className="cursor-pointer">
          <span>About Us</span>
        </li>
        <li className="cursor-pointer">
          <span>Contact</span>
        </li>
      </ul>
      <button>
        <ShoppingBag />
      </button>
    </nav>
  );
}
