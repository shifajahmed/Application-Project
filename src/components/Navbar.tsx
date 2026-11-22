export default function Navbar() {
  return (
    <nav className="bg-[#0c0d0f] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-white font-black text-lg">
          <span className="text-lime-400">⚡</span> FITLOG
        </h1>

        {/* Navigation */}
        <div className="flex items-center gap-6 text-xs">
          <a
            href="#workouts"
            className="bg-lime-400 text-black px-4 py-2 rounded-full font-bold"
          >
            Workouts
          </a>

          <a href="#my-plan" className="text-gray-400">
            My Plan
          </a>
        </div>

        {/* User */}
        <div className="flex items-center gap-3 text-xs">
          <a href="#upgrade" className="text-gray-400">
            Upgrade
          </a>

          <span className="text-lime-400">●</span>

          <button className="text-white">User</button>
        </div>
      </div>
    </nav>
  );
}
