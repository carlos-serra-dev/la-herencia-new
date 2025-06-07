import logoDeNorteASur from "../assets/images/logo-de-norte-a-sur.png";
import logoEsfering from "../assets/images/logo-esfering.png";
import logoFrostalia from "../assets/images/logo-frostalia.png";
import logoFundacionDarsdesi from "../assets/images/logo-fundacion-darsdesi.png";
import logoGrupoBrumas from "../assets/images/logo-grupo-brumas.png";
import logoGrupoPericales from "../assets/images/logo-grupo-pericales.png";
import logoHeineken from "../assets/images/logo-heineken.png";
import logoJaula from "../assets/images/logo-jaula.png";
import logoLaHerencia from "../assets/images/logo-la-herencia.png";
import logoMartaRodriguez from "../assets/images/logo-marta-rodriguez.png";
import logoMercedesBenzDimovil from "../assets/images/logo-mercedes-benz-dimovil.png";
import logoPrometeo from "../assets/images/logo-prometeo.png";
import logoRoyalBliss from "../assets/images/logo-royal-bliss.png";
import logoTioPepe from "../assets/images/logo-tio-pepe.png";

const Partners = () => {
  const firstRowLogos = [
    { src: logoDeNorteASur, alt: "De Norte a Sur" },
    { src: logoEsfering, alt: "Esfering" },
    { src: logoFrostalia, alt: "Frostalia" },
    { src: logoFundacionDarsdesi, alt: "Fundación Darsdesi" },
    { src: logoGrupoBrumas, alt: "Grupo Brumas" },
  ];

  const secondRowLogos = [
    { src: logoGrupoPericales, alt: "Grupo Pericales" },
    { src: logoHeineken, alt: "Heineken" },
    { src: logoJaula, alt: "Jaula" },
    { src: logoLaHerencia, alt: "La Herencia" },
  ];

  const thirdRowLogos = [
    { src: logoMartaRodriguez, alt: "Marta Rodríguez" },
    { src: logoMercedesBenzDimovil, alt: "Mercedes Benz Dimovil" },
    { src: logoPrometeo, alt: "Prometeo" },
    { src: logoRoyalBliss, alt: "Royal Bliss" },
    { src: logoTioPepe, alt: "Tío Pepe" },
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

          {/* Segunda fila - 4 logos */}
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

          {/* Tercera fila - 5 logos */}
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
