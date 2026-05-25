import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="min-h-screen bg-[#030712] text-white">
      <Navbar />

      <section className="flex flex-col items-center justify-center min-h-screen text-center px-6">

        <h1 className="text-6xl md:text-7xl font-extrabold leading-tight mb-8">
          FUTURE OF
          <span className="text-cyan-400"> TECHNOLOGY </span>
          & ENTERPRISE SOLUTIONS
        </h1>

        <p className="text-gray-400 text-xl max-w-3xl mb-10">
          BDPH Group delivers intelligent enterprise solutions including
          GPS tracking, fuel management, realtime analytics and monitoring.
        </p>

        <div className="flex gap-6 flex-wrap justify-center">

          <button className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-8 py-4 rounded-2xl">
            Explore Services
          </button>

          <button className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-2xl hover:bg-cyan-500 hover:text-black">
            Live Demo
          </button>

        </div>

      </section>
    </div>
  );
}

export default Home;
