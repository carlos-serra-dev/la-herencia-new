import { ArrowDownRight } from "lucide-react";
import Button from "./ui/button";

export default function Menu() {
  const handleDownloadMenu = () => {
    // Crear un enlace temporal para descargar el archivo
    const link = document.createElement("a");
    link.href = "/menu.jpg";
    link.download = "menu-alma-de-feria.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <section className="hidden lg:flex gap-10 mt-20">
        <h1 className="text-8xl font-black tracking-widest [writing-mode:vertical-rl]">
          MENÚ
        </h1>

        <div className="flex flex-col relative w-7/12">
          <div className="rounded-xl py-5 px-10 border-[1px]">
            <h2 className="font-bold text-lg">ALMA</h2>

            <ul className="ml-4 mt-2 list-none">
              <li className="list-disc font-medium">
                Jamón de cebo de campo a cuchillo de Rentero
              </li>
              <li className="list-disc font-medium">
                Lomo ibérico al corte de la berkel
              </li>
              <li className="list-disc font-medium">
                Salmorejo y gazpacho con airbag de Jesús
              </li>
              <li className="list-disc font-medium">
                Panipuri de rusa con su cantabrico
              </li>
              <li className="list-disc font-medium">
                Camarones de la isla cocidos
              </li>
              <li className="list-disc font-medium">
                Tartar de cerdo de mar y tierra
              </li>
              <li className="list-disc font-medium">
                Croqueta de puchero de la abuela
              </li>
              <li className="list-disc font-medium">Caballitos rocinantes</li>
              <li className="list-disc font-medium">Choquito de trasmayo</li>
              <li className="list-disc font-medium">Cazón de poniente</li>
              <li className="list-disc font-medium">
                Taquitos de dorada al limón
              </li>
              <li className="list-disc font-medium">
                Galeta de gruñón estofada
              </li>
              <li className="list-disc font-medium">
                Rabo de toro Santa Rosalía
              </li>
              <li className="list-disc font-medium">
                Arroz con carabineros "Edu Torres"
              </li>
              <h2 className="list-disc font-medium mt-2">POSTRE</h2>
              <p className="list-disc font-medium">
                Delicatessen de nuestro maestro pastelero Martín Rivera
              </p>
            </ul>
          </div>

          <p className="mt-5 font-medium">
            Además del menú, habrá más sorpresas a lo largo del evento. Y, por
            supuesto, para los más fiesteros, contaremos con snacks fríos para
            reponer fuerzas y seguir bailando.
          </p>

          <div className="absolute -top-5 -right-56">
            <div className="bg-yellow-custom rounded-xl py-5 px-10 border-[1px]">
              <h2 className="font-bold text-lg">NANCI 25</h2>

              <ul className="ml-4 mt-2 list-none">
                <li className="list-disc font-medium">Salazón</li>
                <li className="list-disc font-medium">Encurtidos</li>
                <li className="list-disc font-medium">Papas Parlamento</li>
                <li className="list-disc font-medium">Rebujitos</li>
                <li className="list-disc font-medium">
                  Croft Twist Fino Spritz / Tío Pepe
                </li>
                <li className="list-disc font-medium">Agua</li>
                <li className="list-disc font-medium">Refrescos</li>
                <li className="list-disc font-medium">Cerveza</li>
              </ul>
            </div>

            <Button
              className="text-sm mt-10 ml-10"
              onClick={handleDownloadMenu}
            >
              DESCARGAR MENÚ <br /> DEL EVENTO AQUÍ{" "}
              <ArrowDownRight width={40} height={40} strokeWidth={1} />
            </Button>
          </div>
        </div>
      </section>

      <section className="flex lg:hidden gap-5 mt-20">
        <div className="flex w-full flex-col gap-5">
          <h1 className="text-8xl font-black tracking-widest">MENÚ</h1>

          <div className="rounded-xl py-5 px-10 border-[1px]">
            <h2 className="font-bold text-lg">NANCI 25</h2>

            <ul className="ml-4 mt-2 list-none">
              <li className="list-disc font-medium">Salazón</li>
              <li className="list-disc font-medium">Encurtidos</li>
              <li className="list-disc font-medium">Papas Parlamento</li>
              <li className="list-disc font-medium">Rebujitos</li>
              <li className="list-disc font-medium">
                Croft Twist Fino Spritz / Tío Pepe
              </li>
              <li className="list-disc font-medium">Agua</li>
              <li className="list-disc font-medium">Refrescos</li>
              <li className="list-disc font-medium">Cerveza</li>
            </ul>
          </div>

          <div className="rounded-xl py-5 px-10 border-[1px]">
            <h2 className="font-bold text-lg">ALMA</h2>

            <ul className="ml-4 mt-2 list-none">
              <li className="list-disc font-medium">
                Jamón de cebo de campo a cuchillo de Rentero
              </li>
              <li className="list-disc font-medium">
                Lomo ibérico al corte de la berkel
              </li>
              <li className="list-disc font-medium">
                Salmorejo y gazpacho con airbag de Jesús
              </li>
              <li className="list-disc font-medium">
                Panipuri de rusa con su cantabrico
              </li>
              <li className="list-disc font-medium">
                Camarones de la isla cocidos
              </li>
              <li className="list-disc font-medium">
                Tartar de cerdo de mar y tierra
              </li>
              <li className="list-disc font-medium">
                Croqueta de puchero de la abuela
              </li>
              <li className="list-disc font-medium">Caballitos rocinantes</li>
              <li className="list-disc font-medium">Choquito de trasmayo</li>
              <li className="list-disc font-medium">Cazón de poniente</li>
              <li className="list-disc font-medium">
                Taquitos de dorada al limón
              </li>
              <li className="list-disc font-medium">
                Galeta de gruñón estofada
              </li>
              <li className="list-disc font-medium">
                Rabo de toro Santa Rosalía
              </li>
              <li className="list-disc font-medium">
                Arroz con carabineros "Edu Torres"
              </li>
              <h2 className="list-disc font-medium mt-2">POSTRE</h2>
              <p className="list-disc font-medium">
                Delicatessen de nuestro maestro pastelero Martín Rivera
              </p>
            </ul>
          </div>

          <Button className="text-sm mt-10 w-fit" onClick={handleDownloadMenu}>
            DESCARGAR MENÚ <br /> DEL EVENTO AQUÍ{" "}
            <ArrowDownRight width={40} height={40} strokeWidth={1} />
          </Button>

          <p className="mt-5 font-medium">
            Además del menú, habrá más sorpresas a lo largo del evento. Y, por
            supuesto, para los más fiesteros, contaremos con snacks fríos para
            reponer fuerzas y seguir bailando.
          </p>
        </div>
      </section>
    </>
  );
}
