import React from "react";

const navLinks1 = [
  { id: "Main", title: "Main" },
  { id: "About", title: "About" },
  { id: "Experience", title: "Experience" },
];

const navLinks2 = [{ id: "Contact", title: "Contact" }];

const Navbar = () => {
  return (
    <div className="bg-background text-white py-[28px] px-[20%] flex justify-between items-center gap-[32px] fixed top-0 left-0 right-0">
      <ul className="flex items-center justify-center gap-10">
        {navLinks1.map((link) => (
          <li>
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>
      <a href="/">
        <img className="w-[190px] h-[43px]" src="/logo.png"></img>
      </a>
      <ul className="flex items-center justify-center gap-10">
        <li>
          <a href="https://github.com/FlorjanCapuri">GitHub</a>
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
