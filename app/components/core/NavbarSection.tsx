type NavItems = {
  href: string;
  text: string;
};

function NavbarSection() {
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
    <nav className="w-full py-3 fixed top-0 left-0 z-50 shadow-md backdrop-blur-md">
      <ul className="flex flex-row items-center justify-between">
        <li className="py-1 px-2 ml-5">
          <a href="/">
            <img src="/logo.png" alt="Logo" height={20} width={20} />
          </a>
        </li>

        <span className="flex flex-row items-center justify-end">
          {navItems.map((navItem: NavItems, index: number) => (
            <li
              key={index}
              className="mr-5 py-1 px-2 text-slate-400 hover:text-yellow-500 duration-500 transition-all"
            >
              <a href={navItem.href} className="font-bold">
                {navItem.text}
              </a>
            </li>
          ))}
        </span>
      </ul>
    </nav>
  );
}

export default NavbarSection;
