type NavItems = {
  href: string;
  text: string;
};

function Navbar() {
  const navItems: NavItems[] = [
    {
      href: "#about-me",
      text: "About Me",
    },
    {
      href: "#work-experience",
      text: "Work Experience",
    },
    {
      href: "#projects",
      text: "Projects",
    },
    {
      href: "#education",
      text: "Education",
    },
    {
      href: "#contact",
      text: "Contact",
    },
  ];

  return (
    <nav className="w-full py-3">
      <ul className="flex flex-row items-center justify-end">
        {navItems.map((navItem: NavItems, index: number) => (
          <li
            key={index}
            className="mr-5 py-1 px-2 hover:text-yellow-500 duration-500 transition-all"
          >
            <a href={navItem.href} className="font-bold">
              {navItem.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
