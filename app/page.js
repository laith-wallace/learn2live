import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/sections/Hero/Hero';
import AboutJermaine from '../components/sections/AboutJermaine/AboutJermaine';
import TheFramework from '../components/sections/TheFramework/TheFramework';
import ImpactStats from '../components/sections/ImpactStats/ImpactStats';
import OurSon from '../components/sections/OurSon/OurSon';
import Partners from '../components/sections/Partners/Partners';
import GetInvolved from '../components/sections/GetInvolved/GetInvolved';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <AboutJermaine />
        <TheFramework />
        <ImpactStats />
        <OurSon />
        <Partners />
        <GetInvolved />
      </main>
      <Footer />
    </>
  );
}
