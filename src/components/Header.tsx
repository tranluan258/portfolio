import ModeToggle from "./ToggleTheme";

const Header = () => {
  return (
    <header className="flex flex-row px-96 md:py-10 fixed w-full z-10  max-sm:px-10 items-center">
      <ul className="basis-1/4 md:block">
        <li>
          <a href="/portfolio" className="text-2xl font-bold">
            Luan Tran
          </a>
        </li>
      </ul>
      {/* Desktop Nav */}
      <nav className="md:block basis-1/2">
        <ul className="flex items-center justify-center">
          <li className="text-2xl font-bold">
            <a href="/portfolio">Home</a>
          </li>
          <li className="text-2xl font-bold">
            <a>Projects</a>
          </li>
          <li className="text-2xl font-bold">
            <a href="/portfolio/#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <ul className="ml-auto basis-1/4 flex flex-row items-center justify-end">
        <li>
          <ModeToggle />
        </li>
      </ul>
    </header>
  );
};

export default Header;
