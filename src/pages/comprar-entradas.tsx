import TicketForm from "../components/ticket-form";
import { useNavigate } from "react-router";

export default function ComprarEntradas() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return <TicketForm onBack={handleBack} />;
}
