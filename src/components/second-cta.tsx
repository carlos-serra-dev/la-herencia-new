import { ArrowDownRight } from "lucide-react";
import Button from "./ui/button";

export default function SecondCta() {
  return (
    <>
      <section className="flex flex-col md:flex-row mt-20 border-y-[1px]">
        <div className="md:w-1/2 p-6 md:border-r-[1px]">
          <p className="text-lg font-bold">
            LA ENTRADA SOLIDARIA TIENE UN COSTE DE 60€ POR PERSONA E INCLUYE
            MARIDAJE CON: REBUJITO, CROFT SODA, LICOR 43 Y GINGER
          </p>

          <br />

          <p>
            LAS BEBIDAS NO INCLUIDAS EN ESTA SECCIÓN DEBERÁN ABONARSE POR
            SEPARADO
          </p>
        </div>

        <div className="flex items-center justify-center pb-6 md:pb-0 md:w-1/2">
          <Button className="text-lg font-bold">
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
