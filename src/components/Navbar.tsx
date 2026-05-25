function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur border-b border-cyan-500/20 z-50">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <h1 className="text-2xl font-bold text-cyan-400 tracking-widest">
          BDPH GROUP
        </h1>

        <div className="hidden md:flex gap-8 uppercase text-sm tracking-widest">

          <a href="#" className="hover:text-cyan-400">
            Home
          </a>

          <a href="#" className="hover:text-cyan-400">
            Services
          </a>

          <a href="#" className="hover:text-cyan-400">
            Dashboard
          </a>

          <a href="#" className="hover:text-cyan-400">
            Contact
          </a>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;
