function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md border-b border-cyan-500/20 z-50">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* LOGO */}

        <h1 className="text-3xl font-bold text-cyan-400 tracking-[0.3em]">
          BDPH GROUP
        </h1>

        {/* MENU */}

        <div className="hidden md:flex gap-10 uppercase text-sm tracking-[0.25em] font-semibold text-white">

          <a
            href="#home"
            className="hover:text-cyan-400 transition duration-300"
          >
            Home
          </a>

          <a
            href="#services"
            className="hover:text-cyan-400 transition duration-300"
          >
            Services
          </a>

          <a
            href="#dashboard"
            className="hover:text-cyan-400 transition duration-300"
          >
            Dashboard
          </a>

          <a
            href="#tracking"
            className="hover:text-cyan-400 transition duration-300"
          >
            Live Tracking
          </a>

          <a
            href="#analytics"
            className="hover:text-cyan-400 transition duration-300"
          >
            Analytics
          </a>

          <a
            href="#about"
            className="hover:text-cyan-400 transition duration-300"
          >
            About
          </a>

          <a
            href="#contact"
            className="hover:text-cyan-400 transition duration-300"
          >
            Contact
          </a>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;
