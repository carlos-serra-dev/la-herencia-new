import EventActivity from "../components/event-activity";
import EventActivityExtended from "../components/event-activity-extended";
import EventDetails from "../components/event-details";
import EventLogo from "../components/event-logo";
import FirstCta from "../components/first-cta";
import Menu from "../components/menu";
import OneMiddleLine from "../components/one-middle-line";
import Partners from "../components/Partners";
import Performances from "../components/performances";
import SecondCta from "../components/second-cta";
import TwoInitialLines from "../components/two-initial-lines";

export default function Home() {
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
