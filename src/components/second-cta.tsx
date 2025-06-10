import { ArrowDownRight } from "lucide-react";
import Button from "./ui/button";

interface SecondCtaProps {
  onBuyTickets: () => void;
}

export default function SecondCta({ onBuyTickets }: SecondCtaProps) {
  return (
    <>
      <section className="flex flex-col md:flex-row mt-20 border-y-[1px]">
        <div className="md:w-1/2 p-6 md:border-r-[1px]">
          <p className="text-lg font-bold">
            EL MENÚ SOLIDARIO TIENE UN COSTE DE <br />
            <u>60€ POR PERSONA</u>
          </p>

          <br />

          <p>
            UNA VEZ FINALIZADO EL MENÚ, TODAS LAS BEBIDAS DEBERÁN ABONARSE POR
            SEPARADO, NO ESTÁN INCLUIDAS EN EL PRECIO DE ENTRADA.
          </p>
        </div>

        <div className="flex items-center justify-center pb-6 md:pb-0 md:w-1/2">
          <Button className="text-lg font-bold" onClick={onBuyTickets}>
            COMPRAR ENTRADAS <ArrowDownRight />
          </Button>
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
    </>
  );
}
