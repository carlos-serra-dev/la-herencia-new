import { ArrowDownRight, Upload, FileText, CheckCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "./ui/button";
import TwoInitialLines from "./two-initial-lines";
import EventLogo from "./event-logo";
import EventDetails from "./event-details";
import Partners from "./Partners";

interface UploadDocumentsProps {
  onBack?: () => void;
}

export default function UploadDocuments({ onBack }: UploadDocumentsProps) {
  const { uid } = useParams<{ uid: string }>();
  const navigate = useNavigate();
  const formRef = useRef<HTMLElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validar tipo de archivo (imágenes y PDFs)
      const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf'];
      if (!allowedTypes.includes(file.type)) {
        setError('Solo se permiten archivos JPG, PNG o PDF');
        return;
      }
      
      // Validar tamaño (máximo 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setError('El archivo debe ser menor a 5MB');
        return;
      }
      
      setSelectedFile(file);
      setError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedFile) {
      setError('Por favor selecciona un archivo');
      return;
    }

    if (!uid) {
      setError('No se encontró el identificador del usuario');
      return;
    }

    setUploading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('justificante', selectedFile);

      const response = await fetch(`/api/upload-receipt/${uid}/`, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setUploaded(true);
        setTimeout(() => {
          navigate('/');
        }, 3000);
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Error al subir el archivo');
      }
    } catch (err) {
      setError('Error de conexión. Inténtalo de nuevo.');
    } finally {
      setUploading(false);
    }
  };

  useEffect(() => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const handleBackClick = () => {
    if (onBack) {
      onBack();
    } else {
      navigate('/');
    }
  };

  if (uploaded) {
    return (
      <>
        <TwoInitialLines />
        <EventLogo onClick={handleBackClick} />
        <EventDetails />
        
        <section ref={formRef} className="border-y-[1px] mt-8 py-8 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <CheckCircle className="mx-auto w-16 h-16 text-green-600 mb-6" />
            <h1 className="text-3xl md:text-4xl font-bold text-green-600 mb-6">
              ¡JUSTIFICANTE ENVIADO CORRECTAMENTE!
            </h1>
            <p className="text-lg mb-8 text-green-600">
              Hemos recibido tu justificante de pago. Procesaremos tu solicitud y te contactaremos pronto.
            </p>
            <p className="text-sm text-gray-600">
              Redirigiendo a la página principal...
            </p>
          </div>
        </section>
        
        <Partners />
      </>
    );
  }

  return (
    <>
      <TwoInitialLines />
      <EventLogo onClick={handleBackClick} />
      <EventDetails />

      <section ref={formRef} className="border-y-[1px] mt-8 py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-red-600 mb-6 text-center">
            SUBE TU JUSTIFICANTE DE PAGO
          </h1>
          
          <p className="text-lg mb-8 text-center text-red-600">
            Adjunta el comprobante de tu transferencia bancaria para completar tu reserva de entradas.
          </p>

          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
            <div>
              <label className="block text-xl font-bold text-red-600 mb-4">
                JUSTIFICANTE DE PAGO
              </label>
              
              <div className="border-2 border-dashed border-red-600 rounded-lg p-8 text-center">
                <input
                  type="file"
                  accept="image/*,.pdf"
                  onChange={handleFileSelect}
                  className="hidden"
                  id="file-upload"
                />
                
                <label 
                  htmlFor="file-upload" 
                  className="cursor-pointer flex flex-col items-center gap-4"
                >
                  <Upload className="w-12 h-12 text-red-600" />
                  <span className="text-lg font-bold text-red-600">
                    Haz clic aquí para seleccionar tu archivo
                  </span>
                  <span className="text-sm text-gray-600">
                    Formatos permitidos: JPG, PNG, PDF (máximo 5MB)
                  </span>
                </label>
              </div>
              
              {selectedFile && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                  <FileText className="w-6 h-6 text-green-600" />
                  <div>
                    <p className="font-bold text-green-600">{selectedFile.name}</p>
                    <p className="text-sm text-green-500">
                      {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                </div>
              )}
            </div>

            {error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600 font-bold">{error}</p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row items-center gap-6 pt-8">
              <Button 
                type="submit" 
                className="text-lg" 
                disabled={!selectedFile || uploading}
              >
                {uploading ? 'SUBIENDO...' : 'ENVIAR JUSTIFICANTE'} 
                <ArrowDownRight />
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