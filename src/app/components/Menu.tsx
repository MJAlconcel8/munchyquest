'use client';  // This marks the file as a client component

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CartIcon from './CartIcon';

const Menu = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const user = false;

  const links = [
    { id: 1, title: "HomePage", url: "/" },
    { id: 2, title: "Menu", url: "/menu" },
    { id: 3, title: "Working Hours", url: "/" },
    { id: 4, title: "Contact", url: "/" }
  ];

  return (
    <div onClick={handleClick} className="cursor-pointer z-20">
        <Image 
          src={open ? "/close.png" : "/open.png"} 
          alt={open ? "Close menu" : "Open menu"} 
          width={20} 
          height={20} 
        />
         {open && (
        <div className="bg-red-500 text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10">
          {links.map(link => (
            <Link href={link.url} key={link.id} onClick={handleClick}>
              {link.title}
            </Link>
          ))}
          {/* Conditional render of Login/Orders link */}
          <Link href={user ? "/orders" : "/login"} onClick={handleClick}>
            {user ? "Orders" : "Login"}
          </Link>
          {/* Cart Icon */}
         <Link href="/cart">
            <CartIcon />
        </Link>
        </div>
      )}
      </div>
  );
};

export default Menu;


