import CoverIimage from "../assets/banner 1.png";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-8">
      <div className="relative bg-[#17191e] rounded-xl overflow-hidden min-h-[340px] flex items-center">
        {/* Left Content */}
        <div className="relative z-10 p-8 md:p-12 w-full md:w-3/5">
          <p className="text-lime-400 text-xs font-bold tracking-widest mb-4">
            WORKOUT LIBRARY
          </p>

          <h1 className="text-white text-3xl md:text-5xl font-black uppercase leading-tight">
            Train With Intent. Log Every Set.
          </h1>

          <p className="text-gray-400 text-sm mt-4 max-w-md leading-relaxed">
            Find your perfect workout, track your progress, and build a stronger
            version of yourself. Every rep counts. Every set matters.
          </p>

          <a
            href="#workouts"
            className="inline-block mt-6 bg-lime-400 hover:bg-lime-300 text-black font-bold text-xs px-5 py-3 rounded-sm"
          >
            BROWSE WORKOUTS
          </a>
        </div>

        {/* Right Image */}
        <div className="absolute right-0 top-0 h-full w-2/5 flex items-center justify-center">
          <img
            src={CoverIimage}
            alt="Workout library"
            className="h-full w-full object-contain p-4"
          />
        </div>
      </div>
    </section>
  );
}
