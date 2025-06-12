import { useState } from "react";
import EventActivity from "./event-activity";
import EventActivityExtended from "./event-activity-extended";
import EventDetails from "./event-details";
import EventLogo from "./event-logo";
import FirstCta from "./first-cta";
import Menu from "./menu";
import OneMiddleLine from "./one-middle-line";
import Partners from "./Partners";
import Performances from "./performances";
import SecondCta from "./second-cta";
import TwoInitialLines from "./two-initial-lines";
import TicketForm from "./ticket-form";

export default function LandingPage() {
  const [showTicketForm, setShowTicketForm] = useState(false);

  if (showTicketForm) {
    return <TicketForm onBack={() => setShowTicketForm(false)} />;
  }

  return (
    <>
      <TwoInitialLines />
      <EventLogo />
      <EventDetails />
      <FirstCta />
      <EventActivity />
      <EventActivityExtended />
      <OneMiddleLine />
      <Performances />
      <Menu />
      <SecondCta />
      <Partners />
    </>
  );
} 