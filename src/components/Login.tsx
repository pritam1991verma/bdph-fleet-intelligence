import { motion } from "framer-motion";

function Login() {
  return (

    <section className="min-h-screen bg-[#030712] flex items-center justify-center px-6">

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-md bg-[#08111f] border border-cyan-500/20 rounded-3xl p-10 shadow-2xl"
      >

        <div className="text-center mb-10">

          <h1 className="text-4xl font-bold text-cyan-400 mb-4">
            BDPH ENTERPRISE
          </h1>

          <p className="text-gray-400">
            Secure AI Enterprise Access
          </p>

        </div>

        <div className="space-y-6">

          <div>

            <label className="block text-gray-400 mb-3">
              Email Address
            </label>

            <input
              type="email"
              placeholder="admin@bdphgroup.com"
              className="w-full bg-[#0f172a] border border-cyan-500/20 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400"
            />

          </div>

          <div>

            <label className="block text-gray-400 mb-3">
              Password
            </label>

            <input
              type="password"
              placeholder="••••••••"
              className="w-full bg-[#0f172a] border border-cyan-500/20 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400"
            />

          </div>

          <button className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-4 rounded-2xl transition">

            Secure Login

          </button>

        </div>

        <div className="mt-10 text-center text-gray-500 text-sm">

          Enterprise AI Monitoring Platform

        </div>

      </motion.div>

    </section>

  );
}

export default Login;
