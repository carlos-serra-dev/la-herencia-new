import Button from "./ui/button";

export default function SecondCta() {
  return (
    <>
      <section className="flex flex-col md:flex-row mt-20 border-y-[1px]">
        <div className="md:w-1/2 py-6 md:px-6 md:border-r-[1px]">
          <p className="text-lg font-semibold tracking-widest">
            EL MENÚ SOLIDARIO TIENE UN COSTE DE <br />
            <u>60€ POR PERSONA.</u>
          </p>

          <br />

          <p className="font-semibold tracking-widest">
            UNA VEZ FINALIZADO EL MENÚ, TODAS LAS BEBIDAS DEBERÁN ABONARSE POR
            SEPARADO, NO ESTÁN INCLUIDAS EN EL PRECIO DE ENTRADA.
          </p>
        </div>

        <div className="flex items-center md:justify-center pb-6 md:pb-0 md:w-1/2">
          <Button className="text-lg font-bold opacity-50 cursor-not-allowed" disabled>
            ENTRADAS AGOTADAS
          </Button>
        </div>
      </section>

      <section className="flex gap-6 items-center justify-right md:justify-around text-center mt-6 pb-6 flex-wrap border-b-[1px]">
        <p className="font-bold text-2xl tracking-widest">7 MAR</p>

        <p className="hidden md:block text-left font-bold tracking-widest">
          TE ESPERAMOS EL 7 DE MARZO A LAS 13H. RESERVA TU ENTRADA <br /> Y
          ÚNETE A ESTA CAUSA CON MUCHO ARTE Y MUCHA SOLIDARIDAD.
        </p>

        <p className="md:hidden block text-left font-bold tracking-widest">
          TE ESPERAMOS EL 7 DE MARZO A LAS 13H. RESERVA TU ENTRADA Y ÚNETE A
          ESTA CAUSA CON MUCHO ARTE Y MUCHA SOLIDARIDAD.
        </p>

        <p className="font-bold text-2xl tracking-widest">13H</p>
      </section>
    </>
  );
}
