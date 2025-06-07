import { useEffect, useRef, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

const AUTO_PLAY_INTERVAL = 2000;

export default function Performances() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1,
    loop: false,
  });

  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoPlay = useCallback(() => {
    if (!emblaApi || autoPlayRef.current) return;

    autoPlayRef.current = setInterval(() => {
      if (!emblaApi) return;

      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, AUTO_PLAY_INTERVAL);
  }, [emblaApi]);

  const stopAutoPlay = useCallback(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (emblaApi) {
      startAutoPlay();

      return stopAutoPlay;
    }
  }, [emblaApi, startAutoPlay, stopAutoPlay]);

  return (
    <section>
      <h1 className="font-bold text-3xl mb-8">ACTUACIONES</h1>

      <div
        className="overflow-hidden"
        ref={emblaRef}
        onMouseEnter={stopAutoPlay}
        onMouseLeave={startAutoPlay}
      >
        <div className="flex gap-2">
          {PERFORMANCES.map((performance, index) => (
            <div className="flex-none w-full md:w-1/2" key={index}>
              <div className="rounded-lg overflow-hidden">
                <img
                  className="aspect-auto"
                  src={performance.image}
                  alt={performance.name}
                />

                <h1 className="mt-2 text-xs">{performance.name}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const PERFORMANCES = [
  {
    name: "CUADRO FLAMENCO JESÚS QUILES",
    image: "src/assets/images/cuadro-flamenco-jesus-quiles.jpg",
  },
  {
    name: "DE NORTE A SUR",
    image: "src/assets/images/de-norte-a-sur.jpg",
  },
  {
    name: "DJ",
    image: "src/assets/images/dj.jpg",
  },
  {
    name: "GRUPO BRUMAS",
    image: "src/assets/images/grupo-brumas.jpg",
  },
  {
    name: "JAUJA ESPECTÁCULOS",
    image: "src/assets/images/jauja-espectaculos.png",
  },
  {
    name: "MARTA RODRÍGUEZ",
    image: "src/assets/images/marta-rodriguez.jpg",
  },
];
