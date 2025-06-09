import { useState } from "react";
import EventActivity from "./components/event-activity";
import EventActivityExtended from "./components/event-activity-extended";
import EventDetails from "./components/event-details";
import EventLogo from "./components/event-logo";
import FirstCta from "./components/first-cta";
import Menu from "./components/menu";
import OneMiddleLine from "./components/one-middle-line";
import Partners from "./components/Partners";
import Performances from "./components/performances";
import SecondCta from "./components/second-cta";
import TwoInitialLines from "./components/two-initial-lines";
import LandingLayout from "./layouts/landing-layout";
import TicketForm from "./components/ticket-form";

function App() {
  const [showTicketForm, setShowTicketForm] = useState(false);

  if (showTicketForm) {
    return (
      <LandingLayout>
        <TicketForm onBack={() => setShowTicketForm(false)} />
      </LandingLayout>
    );
  }

  return (
    <LandingLayout>
      <TwoInitialLines />
      <EventLogo />
      <EventDetails />
      <FirstCta onBuyTickets={() => setShowTicketForm(true)} />
      <EventActivity />
      <EventActivityExtended />
      <OneMiddleLine />
      <Performances />
      <Menu />
      <SecondCta onBuyTickets={() => setShowTicketForm(true)} />
      <Partners />
    </LandingLayout>
  );
}

export default App;
