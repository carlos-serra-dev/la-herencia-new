import Button from "./ui/button";
import { ArrowDownRight } from "lucide-react";
import { Link } from "react-router";

export default function FirstCta() {
  return (
    <section className="border-y-[1px] mt-8">
      <div className="flex">
        <div className="hidden md:block w-5/12 border-r-[1px]"></div>

        <div className="w-auto flex items-center">
          <p className="text-2xl font-black font-stretch-condensed tracking-widest py-6 sm:p-6">
            ¡EL 7 DE MARZO NOS VAMOS A LA FERIA!
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row border-t-[1px]">
        <div className="sm:w-7/12 sm:border-r-[1px]">
          <p className="text-2xl font-black font-stretch-condensed tracking-widest py-6 sm:p-6">
            PREPÁRATE PARA VIVIR UN EVENTO ÚNICO CON ALMA ANDALUZA, MUCHO
            ARTE... ¡Y UN GRAN MOTIVO SOLIDARIO!
          </p>
        </div>

        <div className="sm:w-5/12 flex items-center md:justify-center pb-6 sm:p-6">
          <Link to="/comprar-entradas">
            <Button>
              COMPRAR ENTRADAS{" "}
              <ArrowDownRight width={40} height={40} strokeWidth={1} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
