import React from "react";

const navLinks1 = [
  { id: "Main", title: "Main" },
  { id: "About", title: "About" },
  { id: "Experience", title: "Experience" },
];

const navLinks2 = [{ id: "Contact", title: "Contact" }];

const Navbar = () => {
  return (
    <div className="bg-background text-white py-[28px] px-[20%] flex justify-between items-center gap-[32px]">
      <ul className="flex items-center justify-center gap-10">
        {navLinks1.map((link) => (
          <li>
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>
      <a>
        <img className="w-[190px] h-[43px]" src="/logo.png"></img>
      </a>
      <ul className="flex items-center justify-center gap-10">
        <li>
          <a href="">GitHub</a>
        </li>
        <li>
          <a href="">Blog</a>
        </li>
        {navLinks2.map((link) => (
          <li>
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
