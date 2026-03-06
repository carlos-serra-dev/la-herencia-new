import { ArrowLeft } from "lucide-react";
import { useEffect, useRef } from "react";
import Button from "./ui/button";
import TwoInitialLines from "./two-initial-lines";
import EventLogo from "./event-logo";
import EventDetails from "./event-details";
import Partners from "./Partners";
import { Link } from "react-router-dom";

interface TicketFormProps {
  onBack: () => void;
}

export default function TicketForm({ onBack }: TicketFormProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <TwoInitialLines />
      <EventLogo onClick={onBack} />
      <EventDetails />

      <section ref={sectionRef} className="border-y-[1px] mt-8 py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-black tracking-widest font-stretch-condensed text-red-600 mb-6">
            ENTRADAS AGOTADAS
          </h1>

          <p className="text-lg mb-8 text-red-600">
            Todas las entradas para este evento han sido vendidas.
            ¡Gracias por vuestro interés!
          </p>

          <div className="flex items-center gap-4 pt-4">
            <Link to={"/"}>
              <Button className="text-lg bg-transparent!">
                <ArrowLeft /> VOLVER
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="flex gap-6 items-center justify-around text-center mt-6 pb-6 flex-wrap border-b-[1px]">
        <p className="text-center font-bold text-2xl tracking-widest">7 MAR</p>

        <p className="text-center font-bold tracking-widest">
          Te esperamos el 7 de marzo a las 13h.
        </p>

        <p className="text-center font-bold text-2xl tracking-widest">13H</p>
      </section>

      <Partners />
    </>
  );
}
