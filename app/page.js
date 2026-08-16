import Hero from "./components/Hero";
import Rundown from "./components/Rundown";
import About from "./components/About";
import Speakers from "./components/Speakers";
import TargetAudience from "./components/TargetAudience";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Registration from "./components/Registration";
import Sponsorship from "./components/Sponsorship";
import Message from "./components/Message";

export default function Home() {
  return (
    <>
      <main>
        <Message />
        <Hero />
        <About />
        <Speakers />
        <Rundown />
        <TargetAudience />
        <Pricing />
        <FAQ />
        <Registration />
        <Sponsorship />
      </main>
    </>
  );
}