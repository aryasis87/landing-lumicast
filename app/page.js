import Hero from "./components/Hero";
import Dibahas from "./components/Dibahas";
import Rundown from "./components/Rundown";
import Narasumber from "./components/Narasumber";
import Untuk from "./components/Untuk";
import Paket from "./components/Paket";
import FAQ from "./components/FAQ";
import Registration from "./components/Registration";
import SiaranBerikutnya from "./components/SiaranBerikutnya";
import { SIARAN, SITE } from "@/lib/siaran";

const eventLd = {
  "@context": "https://schema.org",
  "@type": "EducationEvent",
  name: `Lumicast #${SIARAN.nomor}: ${SIARAN.judul}`,
  startDate: `${SIARAN.iso}T08:30:00+07:00`,
  endDate: `${SIARAN.iso}T16:00:00+07:00`,
  eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: { "@type": "VirtualLocation", url: SITE },
  organizer: { "@type": "Organization", name: "Lumicast", url: SITE },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Dibahas />
      <Rundown />
      <Narasumber />
      <Untuk />
      <Paket />
      <FAQ />
      <Registration />
      <SiaranBerikutnya />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventLd) }} />
    </main>
  );
}
