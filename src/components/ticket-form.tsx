import { ArrowDownRight } from "lucide-react";
import { useEffect, useRef } from "react";
import Button from "./ui/button";
import TwoInitialLines from "./two-initial-lines";
import EventLogo from "./event-logo";
import EventDetails from "./event-details";
import Partners from "./Partners";

interface TicketFormProps {
  onBack: () => void;
}

export default function TicketForm({ onBack }: TicketFormProps) {
  const formRef = useRef<HTMLElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulario enviado");
  };

  useEffect(() => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <TwoInitialLines />
      <EventLogo onClick={onBack} />
      <EventDetails />

      <section ref={formRef} className="border-y-[1px] mt-8 py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-red-600 mb-6 text-center">
            ESTÁS A UN PASO DE CONSEGUIR TUS ENTRADAS.
          </h1>

          <p className="text-lg mb-8 text-center text-red-600">
            Completa el siguiente formulario con tus datos. Una vez enviado,
            recibirás un correo con la información necesaria para poder realizar
            el pago y finalizar la compra.
          </p>

          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
            <div>
              <label className="block text-xl font-bold text-red-600 mb-2">
                NOMBRE Y APELLIDOS
              </label>

              <input
                type="text"
                required
                className="w-full border-b-2 border-red-600 bg-transparent pb-2 text-lg focus:outline-none focus:border-red-800"
              />
            </div>

            <div>
              <label className="block text-xl font-bold text-red-600 mb-2">
                EMAIL
              </label>

              <input
                type="email"
                required
                className="w-full border-b-2 border-red-600 bg-transparent pb-2 text-lg focus:outline-none focus:border-red-800"
              />
            </div>

            <div>
              <label className="block text-xl font-bold text-red-600 mb-2">
                TELÉFONO
              </label>

              <input
                type="tel"
                required
                className="w-full border-b-2 border-red-600 bg-transparent pb-2 text-lg focus:outline-none focus:border-red-800"
              />
            </div>

            <div>
              <label className="block text-xl font-bold text-red-600 mb-2">
                Nº ENTRADAS
              </label>

              <input
                type="number"
                min="1"
                max="10"
                required
                className="w-full border-b-2 border-red-600 bg-transparent pb-2 text-lg focus:outline-none focus:border-red-800"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 pt-8">
              <Button type="submit" className="text-lg">
                ENVIAR <ArrowDownRight />
              </Button>

              <p className="text-xl font-bold text-red-600">
                ¡TE ESPERAMOS EL 28 DE JUNIO!
              </p>
            </div>
          </form>
        </div>
      </section>

      <section className="flex gap-6 items-center justify-around text-center mt-6 pb-6 flex-wrap border-b-[1px]">
        <p className="text-center font-bold text-2xl tracking-widest">28 JUN</p>

        <p className="text-center font-bold tracking-widest">
          Te esperamos el 28 de junio a las 13h. Reserva tu entrada <br /> y
          únete a esta causa con mucho arte y mucha solidaridad.
        </p>

        <p className="text-center font-bold text-2xl tracking-widest">13H</p>
      </section>

      <Partners />
    </>
  );
}
