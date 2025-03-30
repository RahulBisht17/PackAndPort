export default function OurServices() {
  const services = [
    {
      name: "Packing",
      icon: "📦",
      description:
        "We provide high-quality packing materials to ensure the safety of your items during transit.",
    },
    {
      name: "Loading",
      icon: "🚛",
      description:
        "Our trained professionals handle loading with care to prevent any damage.",
    },
    {
      name: "Unloading",
      icon: "🏠",
      description:
        "We carefully unload your belongings and place them as per your instructions.",
    },
    {
      name: "Safe Storage",
      icon: "🔒",
      description:
        "Store your items securely in our climate-controlled storage units.",
    },
  ];

  return (
    <div className="mt-10 w-full p-4 rounded-lg mx-auto pb-10 sm:px-10 md:px-14 max-w-7xl">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-cyan-700 mb-6 md:mb-10">
        Our Services
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex  cursor-pointer flex-col items-center justify-center p-4 bg-white border border-gray-300 rounded-xl shadow-md hover:shadow-cyan-900 hover:shadow-md hover:border-cyan-800 transition relative"
          >
            {/* Icon Box */}
            <div className="flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-gray-200 rounded-lg">
              <span className="text-4xl">{service.icon}</span>
            </div>

            {/* Service Name */}
            <p className="mt-2 text-lg md:text-xl font-semibold text-gray-700">
              {service.name}
            </p>

            {/* Description */}
            <p className="mt-2 text-md md:text-lg text-gray-600 text-center">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
