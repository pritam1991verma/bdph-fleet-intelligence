import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="min-h-screen bg-black text-white">

      <Navbar />

      <section className="flex items-center justify-center min-h-screen">
        <h1 className="text-5xl text-cyan-400 font-bold">
          BDPH ENTERPRISE
        </h1>
      </section>

    </div>
  );
}

export default Home;
