import { ArrowDownRight } from "lucide-react";
import Button from "./ui/button";

export default function Menu() {
  return (
    <>
      <section className="hidden lg:flex gap-10 mt-20">
        <h1 className="text-8xl font-black tracking-widest [writing-mode:vertical-rl]">
          MENÚ
        </h1>

        <div className="flex flex-col relative w-7/12">
          <div className="rounded-xl py-5 px-10 border-[1px]">
            <h2 className="font-bold text-lg">Alma</h2>

            <p className="ml-4 mt-2">
              Jamón de cebo de campo a cuchillo de Rentero <br /> Lomo ibérico
              al corte de la berkel <br /> Salmorejo y gazpacho con airbag de
              Jesús <br /> Panipuri de rusa con su cantabrico <br /> Camarones
              de la isla cocidos <br /> Tartar de cerdo de mar y tierra <br />{" "}
              Croqueta de puchero de la abuela <br /> Caballitos rocinantes{" "}
              <br />
              Choquito de trasmayo <br />
              Cazón de poniente <br /> Taquitos de dorada al limón <br /> Galeta
              de gruñón estofada <br /> Rabo de toro Santa Rosalía <br /> Arroz
              con carabineros “Edu Torres” <br /> <br /> POSTRE
              <br /> Delicatessen de nuestro maestro pastelero Martín Rivera
            </p>
          </div>

          <p className="mt-5">
            Además del menú, habrá más sorpresas a lo largo del evento. <br />{" "}
            Y, por supuesto, para los más fiesteros, contaremos con snacks fríos
            <br /> para reponer fuerzas y seguir bailando.
          </p>

          <div className="absolute -top-5 -right-56">
            <div className="bg-yellow-custom rounded-xl py-5 px-10 border-[1px]">
              <h2 className="font-bold text-lg">Nanci 25</h2>

              <p className="ml-4 mt-2">
                Salazón <br /> Encurtidos <br /> Papas Parlamento <br />{" "}
                Rebujitos <br /> Croft Soda/ Tío Pepe <br />
                Licor 43 Ginger
              </p>
            </div>

            <Button className="text-sm mt-10 ml-10">
              DESCARGAR MENÚ <br /> DEL EVENTO AQUÍ <ArrowDownRight />
            </Button>
          </div>
        </div>
      </section>

      <section className="flex lg:hidden gap-5 mt-20 justify-between">
        <div className="flex flex-col gap-5">
          <div className="rounded-xl w-fit py-5 px-10 border-[1px]">
            <h2 className="font-bold text-lg">Nanci 25</h2>

            <p className="ml-4 mt-2">
              Salazón <br /> Encurtidos <br /> Papas Parlamento <br /> Rebujitos{" "}
              <br /> Croft Soda/ Tío Pepe <br />
              Licor 43 Ginger
            </p>
          </div>

          <div className="rounded-xl w-fit py-5 px-10 border-[1px]">
            <h2 className="font-bold text-lg">Alma</h2>

            <p className="ml-4 mt-2">
              Jamón de cebo de campo a cuchillo de Rentero <br /> Lomo ibérico
              al corte de la berkel <br /> Salmorejo y gazpacho con airbag de
              Jesús <br /> Panipuri de rusa con su cantabrico <br /> Camarones
              de la isla cocidos <br /> Tartar de cerdo de mar y tierra <br />{" "}
              Croqueta de puchero de la abuela <br /> Caballitos rocinantes{" "}
              <br />
              Choquito de trasmayo <br />
              Cazón de poniente <br /> Taquitos de dorada al limón <br /> Galeta
              de gruñón estofada <br /> Rabo de toro Santa Rosalía <br /> Arroz
              con carabineros “Edu Torres” <br /> <br /> POSTRE
              <br /> Delicatessen de nuestro maestro pastelero Martín Rivera
            </p>
          </div>

          <p className="font-bold">MENÚ ALMA DE FERIA: 58€</p>

          <p className="mt-5">
            Además del menú, habrá más sorpresas a lo largo del evento. <br />{" "}
            Y, por supuesto, para los más fiesteros, contaremos con snacks fríos
            <br /> para reponer fuerzas y seguir bailando.
          </p>
        </div>

        <div className="flex flex-col gap-2 items-center">
          <h1 className="text-8xl font-black tracking-widest [writing-mode:vertical-rl]">
            MENÚ
          </h1>

          <div className="flex gap-0.5 h-full">
            <div className="w-1 border-r-[1px] h-full"></div>
            <div className="w-1 border-r-[1px] h-full"></div>
          </div>
        </div>
      </section>
    </>
  );
}
