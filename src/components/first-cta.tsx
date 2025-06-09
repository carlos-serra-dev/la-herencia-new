import Button from "./ui/button";
import { ArrowDownRight } from "lucide-react";

interface FirstCtaProps {
  onBuyTickets: () => void;
}

export default function FirstCta({ onBuyTickets }: FirstCtaProps) {
  return (
    <section className="border-y-[1px] mt-8">
      <div className="flex">
        <div className="hidden md:block w-4/12 border-r-[1px]"></div>

        <div className="w-auto flex items-center">
          <p className="text-2xl font-bold py-6 sm:p-6">
            ¡EL 28 DE JUNIO NOS VAMOS A LA FERIA!
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row border-t-[1px]">
        <div className="sm:w-8/12 sm:border-r-[1px]">
          <p className="text-2xl font-bold py-6 sm:p-6">
            PREPÁRATE PARA VIVIR UN EVENTO ÚNICO CON ALMA ANDALUZA, MUCHO
            ARTE... ¡Y UN GRAN MOTIVO SOLIDARIO!
          </p>
        </div>

        <div className="sm:w-4/12 flex items-center pb-6 sm:p-6">
          <Button onClick={onBuyTickets}>
            COMPRAR ENTRADAS <ArrowDownRight />
          </Button>
        </div>
      </div>
    </section>
  );
}
