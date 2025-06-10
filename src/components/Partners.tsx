const Partners = () => {
  const firstRowLogos = [
    { src: "/images/logo-de-norte-a-sur.png", alt: "De Norte a Sur" },
    { src: "/images/logo-esfering.png", alt: "Esfering" },
    { src: "/images/logo-frostalia.png", alt: "Frostalia" },
    { src: "/images/logo-fundacion-darsdesi.png", alt: "Fundación Darsdesi" },
    { src: "/images/logo-grupo-brumas.png", alt: "Grupo Brumas" },
  ];

  const secondRowLogos = [
    { src: "/images/logo-grupo-pericales.png", alt: "Grupo Pericales" },
    { src: "/images/logo-heineken.png", alt: "Heineken" },
    { src: "/images/logo-jaula.png", alt: "Jaula" },
    { src: "/images/logo-la-herencia.png", alt: "La Herencia" },
  ];

  const thirdRowLogos = [
    { src: "/images/logo-marta-rodriguez.png", alt: "Marta Rodríguez" },
    {
      src: "/images/logo-mercedes-benz-dimovil.png",
      alt: "Mercedes Benz Dimovil",
    },
    { src: "/images/logo-prometeo.png", alt: "Prometeo" },
    { src: "/images/logo-royal-bliss.png", alt: "Royal Bliss" },
    { src: "/images/logo-tio-pepe.png", alt: "Tío Pepe" },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center justify-items-center">
            {firstRowLogos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 rounded-lg w-full h-24 md:h-28"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-w-full max-h-full object-contain filter transition-all duration-300"
                />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center justify-items-center max-w-4xl mx-auto">
            {secondRowLogos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 rounded-lg w-full h-24 md:h-28"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-w-full max-h-full object-contain filter transition-all duration-300"
                />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center justify-items-center">
            {thirdRowLogos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 rounded-lg w-full h-24 md:h-28"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-w-full max-h-full object-contain filter transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
