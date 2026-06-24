import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import gsap from "gsap";
import Logo from "./Logo";
import Menu from "./Menu";
import Button from "../ui/Button";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Entrance animation, once on mount
  useEffect(() => {
    gsap.from(".navbar-shell", {
      y: -40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    });
  }, []);

  // Shrink + add shadow once the page has scrolled a little
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close the mobile panel automatically whenever a link inside it is clicked
  const closeMobileMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-8 left-0 w-full z-50 px-2 sm:px-0">
      <div className="container-base">
        <nav
          className={`navbar-shell flex items-center justify-between h-22 lg:h-24 border-card px-5 lg:px-8 rounded-full bg-white transition-shadow duration-300 mt-5 opacity-100! ${
            scrolled ? "shadow-lg" : ""
          }`}
        >
          <Logo className="w-32 lg:w-40 shrink-0" />

          <div className="hidden lg:block">
            <Menu />
          </div>

          <div className="hidden lg:block shrink-0">
            <Button to="/about" text="Admission Now" />
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="lg:hidden text-3xl text-heading-1 cursor-pointer"
          >
            <Icon icon={menuOpen ? "material-symbols:close-rounded" : "material-symbols:menu-rounded"} />
          </button>
        </nav>

        {/* Mobile slide-down panel */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            menuOpen ? "max-h-175 opacity-100 mt-2" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white rounded-3xl p-6 shadow-lg border-card">
            <Menu mobile onNavigate={closeMobileMenu} />
            <div className="mt-5">
              <Button to="/about" text="Admission Now" className="w-full" onClick={closeMobileMenu} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
