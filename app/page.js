import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/sections/Hero/Hero';
import FeatureVideo from '../components/sections/FeatureVideo/FeatureVideo';
import WhyThisExists from '../components/sections/WhyThisExists/WhyThisExists';
import TheGap from '../components/sections/TheGap/TheGap';
import TheModel from '../components/sections/TheModel/TheModel';
import VideoProofGrid from '../components/sections/VideoProofGrid/VideoProofGrid';
import MediaRecognition from '../components/sections/MediaRecognition/MediaRecognition';
import Pathways from '../components/sections/Pathways/Pathways';
import OurSonFeature from '../components/sections/OurSonFeature/OurSonFeature';
import AboutJermaine from '../components/sections/AboutJermaine/AboutJermaine';
import ImpactStats from '../components/sections/ImpactStats/ImpactStats';
import TripleCTA from '../components/shared/TripleCTA/TripleCTA';
import Footer from '../components/Footer/Footer';

/**
 * Homepage composition — 11 sections, cinematic narrative arc.
 * Hero → Feature Video → Why → The Gap → The Model → Video Proof →
 * Pathways → Our Son flagship → Founder → Impact → Final CTA.
 *
 * Partners and GetInvolved removed from the homepage — Partners content
 * moves into TrustStrip on /fund, and the contact form lives on /fund
 * and /keynote as topic-specific enquiry forms.
 */
export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <FeatureVideo />
        <WhyThisExists />
        <TheGap />
        <TheModel />
        <VideoProofGrid />
        <MediaRecognition />
        <Pathways />
        <OurSonFeature />
        <AboutJermaine />
        <ImpactStats />
        <TripleCTA
          eyebrow="Where we go next"
          headline="This work is already in motion. The only question now is scale."
          intro="Fund a cohort, bring the model to your borough, or book Jermaine to speak to your team. Every pathway leads to the same place — a young person finding their own voice."
        />
      </main>
      <Footer />
    </>
  );
}
