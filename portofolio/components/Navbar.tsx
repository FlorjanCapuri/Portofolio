import React from "react";

const navLinks = [
  { id: "Main", title: "Main" },
  { id: "About", title: "About" },
  { id: "Experience", title: "Experience" },
  { id: "Contact", title: "Contact" },
];

const Navbar = () => {
  return (
    <div className="bg-background text-white py-5">
      <ul className="flex gap-10 justify-center list-none">
        {navLinks.map((link) => (
          <li>
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
