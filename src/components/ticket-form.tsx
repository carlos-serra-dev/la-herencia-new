import { ArrowDownRight, ArrowLeft, CheckCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Button from "./ui/button";
import TwoInitialLines from "./two-initial-lines";
import EventLogo from "./event-logo";
import EventDetails from "./event-details";
import Partners from "./Partners";
import { Link } from "react-router-dom";

interface TicketFormProps {
  onBack: () => void;
}

interface FormData {
  name_surname: string;
  email: string;
  phone: string;
  tickets: number;
}

export default function TicketForm({ onBack }: TicketFormProps) {
  const formRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name_surname: "",
    email: "",
    phone: "",
    tickets: 1,
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "tickets" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setSubmitting(true);
    setError(null);

    try {
      const response = await fetch('https://laherencia-api-502669222749.europe-west1.run.app/api/submit-form/', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Error al enviar el formulario");
      }
    } catch (err) {
      setError("Error de conexión. Por favor, inténtalo de nuevo.");
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  if (submitted) {
    return (
      <>
        <TwoInitialLines />
        <EventLogo onClick={onBack} />
        <EventDetails />

        <section ref={formRef} className="border-y-[1px] mt-8 py-8 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <CheckCircle className="mx-auto w-16 h-16 text-green-600 mb-6" />
            <h1 className="text-3xl md:text-4xl font-bold text-green-600 mb-6">
              ¡FORMULARIO ENVIADO CORRECTAMENTE!
            </h1>
            <p className="text-lg mb-8 text-green-600">
              Hemos recibido tu solicitud de entradas. Te enviaremos un correo
              con la información de pago y el enlace para subir tu justificante.
            </p>
            <p className="text-xl font-bold text-red-600 mb-4">
              Revisa tu bandeja de entrada (y spam) en los próximos minutos.
            </p>
            <Button onClick={onBack} className="text-lg">
              Volver al inicio
            </Button>
          </div>
        </section>

        <section className="flex gap-6 items-center justify-around text-center mt-6 pb-6 flex-wrap border-b-[1px]">
          <p className="text-center font-bold text-2xl tracking-widest">
            28 JUN
          </p>
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

  return (
    <>
      <TwoInitialLines />
      <EventLogo onClick={onBack} />
      <EventDetails />

      <section ref={formRef} className="border-y-[1px] mt-8 py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-black tracking-widest font-stretch-condensed text-red-600 mb-6">
            ESTÁS A UN PASO DE CONSEGUIR TUS ENTRADAS.
          </h1>

          <p className="text-lg mb-8 text-red-600">
            Completa el siguiente formulario con tus datos. Una vez enviado,
            recibirás un correo con la información necesaria para poder realizar
            el pago y finalizar la compra.
          </p>

          <form
            onSubmit={handleSubmit}
            className="hidden lg:block max-w-2xl mx-auto space-y-6"
          >
            <div className="flex flex-col">
              <label className="block -mb-6 text-3xl font-black tracking-widest font-stretch-condensed text-red-600">
                NOMBRE Y APELLIDOS
              </label>

              <input
                type="text"
                name="name_surname"
                value={formData.name_surname}
                onChange={handleInputChange}
                required
                className="w-11/12 self-end pl-80 border-b-2 border-red-600 bg-transparent pb-2 text-lg focus:outline-none focus:border-red-800"
              />
            </div>

            <div className="flex flex-col">
              <label className="block -mb-6 text-3xl font-black tracking-widest font-stretch-condensed text-red-600">
                EMAIL
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-11/12 self-end pl-20 border-b-2 border-red-600 bg-transparent pb-2 text-lg focus:outline-none focus:border-red-800"
              />
            </div>

            <div className="flex flex-col">
              <label className="block -mb-6 text-3xl font-black tracking-widest font-stretch-condensed text-red-600">
                TELÉFONO
              </label>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-11/12 self-end pl-32 border-b-2 border-red-600 bg-transparent pb-2 text-lg focus:outline-none focus:border-red-800"
              />
            </div>

            <div className="flex flex-col">
              <label className="block -mb-6 text-3xl font-black tracking-widest font-stretch-condensed text-red-600">
                Nº ENTRADAS
              </label>

              <input
                type="number"
                name="tickets"
                value={formData.tickets}
                onChange={handleInputChange}
                min="1"
                max="w-11/12 self-end pl-20 border-b-2 border-red-600 bg-transparent pb-2 text-lg focus:outline-none focus:border-red-800"
                required
                pl-20
                className="w-11/12 self-end pl-42 border-b-2 border-red-600 bg-transparent pb-2 text-lg focus:outline-none focus:border-red-800"
              />
            </div>

            {error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600 font-bold">{error}</p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-8">
              <Link to={"/"}>
                <Button
                  type="submit"
                  className="text-lg bg-transparent!"
                  disabled={submitting}
                >
                  <ArrowLeft /> VOLVER
                </Button>
              </Link>

              <Button type="submit" className="text-lg" disabled={submitting}>
                {submitting ? "ENVIANDO..." : "ENVIAR"} <ArrowDownRight />
              </Button>

              <p className="text-xl font-bold text-red-600">
                ¡TE ESPERAMOS EL 28 DE JUNIO!
              </p>
            </div>
          </form>

          <form
            onSubmit={handleSubmit}
            className="max-w-2xl block lg:hidden mx-auto space-y-6"
          >
            <div>
              <label className="block text-xl font-bold text-red-600 mb-2">
                NOMBRE Y APELLIDOS
              </label>

              <input
                type="text"
                name="name_surname"
                value={formData.name_surname}
                onChange={handleInputChange}
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
                name="email"
                value={formData.email}
                onChange={handleInputChange}
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
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
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
                name="tickets"
                value={formData.tickets}
                onChange={handleInputChange}
                min="1"
                max="10"
                required
                className="w-full border-b-2 border-red-600 bg-transparent pb-2 text-lg focus:outline-none focus:border-red-800"
              />
            </div>

            {error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600 font-bold">{error}</p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-8">
              <Link to={"/"}>
                <Button
                  type="submit"
                  className="text-lg bg-transparent!"
                  disabled={submitting}
                >
                  <ArrowLeft /> VOLVER
                </Button>
              </Link>

              <Button type="submit" className="text-lg" disabled={submitting}>
                {submitting ? "ENVIANDO..." : "ENVIAR"} <ArrowDownRight />
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
