import { useState, useEffect } from "react";
import { Search, Filter, Eye, CheckCircle, Calendar } from "lucide-react";
import Button from "./ui/button";
import TwoInitialLines from "./two-initial-lines";
import EventLogo from "./event-logo";
import EventDetails from "./event-details";
import Partners from "./Partners";

interface Customer {
  id: number;
  name_surname: string;
  email: string;
  phone: string;
  tickets: number;
  state: string;
  state_display_spanish: string;
  justificante: { url: string } | null;
  created_at: string;
  updated_at: string;
}

interface CustomersTableProps {
  onBack?: () => void;
}

export default function CustomersTable({ onBack }: CustomersTableProps) {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [filteredCustomers, setFilteredCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [confirmingCustomer, setConfirmingCustomer] = useState<number | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  
  // Filtros
  const [searchTerm, setSearchTerm] = useState("");
  const [stateFilter, setStateFilter] = useState("all");

  // Cargar datos de clientes
  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        setLoading(true);
        console.log('Haciendo petición a /api/customers...'); // Debug
        
        const response = await fetch('/api/customers');
        console.log('Respuesta:', response.status, response.statusText); // Debug
        
        if (response.ok) {
          const data = await response.json();
          console.log('Datos recibidos:', data); // Debug
          
          // La API devuelve {count: X, customers: [...]}
          setCustomers(data.customers || []);
          setFilteredCustomers(data.customers || []);
        } else {
          const errorText = await response.text();
          console.error('Error de la API:', response.status, errorText); // Debug
          setError(`Error al cargar los clientes: ${response.status} ${response.statusText}`);
        }
      } catch (err) {
        console.error('Error de conexión:', err); // Debug
        setError('Error de conexión');
      } finally {
        setLoading(false);
      }
    };

    fetchCustomers();
  }, []);

  // Aplicar filtros
  useEffect(() => {
    let filtered = customers;

    // Filtro por búsqueda (nombre, email, teléfono)
    if (searchTerm) {
      filtered = filtered.filter(customer =>
        customer.name_surname.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.phone.includes(searchTerm)
      );
    }

    // Filtro por estado
    if (stateFilter !== "all") {
      filtered = filtered.filter(customer => customer.state === stateFilter);
    }

    setFilteredCustomers(filtered);
  }, [customers, searchTerm, stateFilter]);

  const handleBackClick = () => {
    if (onBack) {
      onBack();
    }
  };

  const handleViewJustificante = (customer: Customer) => {
    if (customer.justificante && customer.justificante.url) {
      window.open(customer.justificante.url, '_blank');
    }
  };

  const handleConfirmPayment = async (customer: Customer) => {
    setConfirmingCustomer(customer.id);
    setError(null);
    setSuccessMessage(null);

    try {
      const response = await fetch(`/api/confirm-customer/${customer.id}/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setSuccessMessage('Entrada enviada');
        // Actualizar el estado del cliente en la lista
        setCustomers(prevCustomers => 
          prevCustomers.map(c => 
            c.id === customer.id 
              ? { ...c, state: 'confirmed', state_display_spanish: 'Confirmado' }
              : c
          )
        );
        // Limpiar mensaje después de 3 segundos
        setTimeout(() => setSuccessMessage(null), 3000);
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Error al confirmar el pago');
      }
    } catch (err) {
      setError('Error de conexión');
    } finally {
      setConfirmingCustomer(null);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit', 
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStateColor = (state: string) => {
    switch (state) {
      case 'pending_payment':
        return 'text-orange-600 bg-orange-50';
      case 'pending_confirmation':
        return 'text-blue-600 bg-blue-50';
      case 'confirmed':
        return 'text-green-600 bg-green-50';
      case 'cancelled':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <>
      <TwoInitialLines />
      <EventLogo onClick={handleBackClick} />
      <EventDetails />

      <section className="border-y-[1px] mt-8 py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-red-600 mb-6 text-center">
            GESTIÓN DE CLIENTES
          </h1>
          
          <p className="text-lg mb-8 text-center text-red-600">
            Administra las reservas y justificantes de pago de los clientes.
          </p>

          {/* Mensajes de éxito/error */}
          {successMessage && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-600 font-bold text-center">{successMessage}</p>
            </div>
          )}

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 font-bold text-center">{error}</p>
            </div>
          )}

          {/* Filtros */}
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Búsqueda */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Buscar por nombre, email o teléfono..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>

              {/* Filtro por estado */}
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <select
                  value={stateFilter}
                  onChange={(e) => setStateFilter(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent appearance-none"
                >
                  <option value="all">Todos los estados</option>
                  <option value="pending_payment">Pendiente de Pago</option>
                  <option value="pending_confirmation">Pendiente de Confirmación</option>
                  <option value="confirmed">Confirmado</option>
                  <option value="cancelled">Cancelado</option>
                </select>
              </div>

              {/* Contador de resultados */}
              <div className="flex items-center justify-center bg-white rounded-lg px-4 py-2 border">
                <span className="font-bold text-red-600">
                  {filteredCustomers.length} cliente{filteredCustomers.length !== 1 ? 's' : ''}
                </span>
              </div>
            </div>
          </div>

          {/* Tabla */}
          {loading ? (
            <div className="text-center py-8">
              <p className="text-lg text-gray-600">Cargando clientes...</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full bg-white border border-gray-200 rounded-lg shadow-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Cliente
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Contacto
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Entradas
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Estado
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Fecha
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Justificante
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredCustomers.map((customer) => (
                    <tr key={customer.id} className="hover:bg-gray-50">
                      <td className="px-4 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {customer.name_surname}
                          </div>
                          <div className="text-sm text-gray-500">
                            ID: {customer.id}
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{customer.email}</div>
                        <div className="text-sm text-gray-500">{customer.phone}</div>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <span className="text-sm font-bold text-red-600">
                          {customer.tickets}
                        </span>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStateColor(customer.state)}`}>
                          {customer.state_display_spanish}
                        </span>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatDate(customer.created_at)}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        {customer.justificante && customer.justificante.url ? (
                          <Button
                            onClick={() => handleViewJustificante(customer)}
                            className="!bg-green-600 hover:!bg-green-700 !text-white !px-3 !py-1 !text-sm"
                          >
                            <Eye className="w-4 h-4 mr-1" />
                            Ver
                          </Button>
                        ) : (
                          <span className="text-sm text-gray-400">Sin justificante</span>
                        )}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        {customer.state === 'pending_confirmation' ? (
                          <Button
                            onClick={() => handleConfirmPayment(customer)}
                            disabled={confirmingCustomer === customer.id}
                            className="!bg-blue-600 hover:!bg-blue-700 !text-white !px-3 !py-1 !text-sm"
                          >
                            <CheckCircle className="w-4 h-4 mr-1" />
                            {confirmingCustomer === customer.id ? 'Confirmando...' : 'Confirmar Pago'}
                          </Button>
                        ) : (
                          <span className="text-sm text-gray-400">
                            {customer.state === 'confirmed' ? 'Confirmado' : 'N/A'}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {filteredCustomers.length === 0 && !loading && (
                <div className="text-center py-8">
                  <p className="text-lg text-gray-600">No se encontraron clientes</p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      <Partners />
    </>
  );
} 