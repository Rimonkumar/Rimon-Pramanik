export default function Stats() {
  const items = [
    { label: "Years Experience", value: "2+" },
    { label: "Projects", value: "13+" },
    { label: "Happy Clients", value: "2+" },
    { label: "Certifications", value: "3+" },
  ];

  return (
    <section id="stats" className="py-5 bg-gray-950 text-white flex justify-center">
      {/* Outer gradient border wrapper */}
      <div className="w-[90%] rounded-3xl p-[1px] bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 animate-gradient shadow-2xl">
        {/* Inner content */}
        <div className="rounded-3xl bg-gray-950 border border-gray-800 p-10">
          {/* Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
            <div className="mt-2 w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto"></div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {items.map((it) => (
              <div
                key={it.label}
                className="rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6 text-center shadow-md 
                transform transition duration-300 hover:scale-105 hover:shadow-xl hover:border-purple-500"
              >
                <div className="text-4xl font-extrabold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                  {it.value}
                </div>
                <div className="mt-2 text-sm text-gray-400">{it.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gradient Animation */}
      <style>{`
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientMove 6s ease infinite;
        }
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
}
