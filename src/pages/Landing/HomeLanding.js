import Navbar from "src/components/landing/Navbar/Navbar";
import Footer from "src/components/landing/Footer/Footer";
import HeroSectionHeader from "src/components/landing/HeroSectionHeader/HeroSectionHeader";
import AboutUsHome from "src/components/landing/AboutUsHome/AboutUsHome";
import Colaborations from "src/components/landing/Colaborations/Colaborations";
import EventsPreviewSection from "src/components/landing/EventsPreviewSection/EventsPreviewSection";
import LocationSection from "src/components/landing/LocationSection/LocationSection";

/* CTA de contacte inline (petit, no necessita component propi) */
const ContactCTA = () => (
  <section
    className="py-20 px-6 text-center relative overflow-hidden"
    style={{ background: "linear-gradient(135deg, #232323 0%, #1a1a1a 100%)" }}
  >
    {/* Decorative glow */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(ellipse at center, rgba(255,116,48,0.15) 0%, transparent 65%)",
      }}
    />
    <div className="relative z-10 max-w-2xl mx-auto">
      <h2
        className="font-extrabold mb-4 tracking-tight"
        style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "white" }}
      >
        Vols formar part de <span className="gradient-text">LleidaHack</span>?
      </h2>
      <p
        className="text-lg mb-10 leading-relaxed"
        style={{ color: "rgba(255,255,255,0.65)" }}
      >
        Som una associació oberta. Si ets estudiant de la UdL i t'apassiona la
        tecnologia, t'esperem!
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="/lleidahack/contacte"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white no-underline transition-all duration-200"
          style={{
            background: "#FF7430",
            boxShadow: "0 4px 24px rgba(255,116,48,0.4)",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#e55010")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#FF7430")}
        >
          Contacta'ns
        </a>
        <a
          href="/lleidahack/qui-som"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold no-underline transition-all duration-200"
          style={{
            background: "rgba(255,255,255,0.08)",
            border: "1.5px solid rgba(255,255,255,0.2)",
            color: "white",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "rgba(255,255,255,0.15)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "rgba(255,255,255,0.08)")
          }
        >
          Coneix-nos
        </a>
      </div>
    </div>
  </section>
);

const HomeLanding = () => {
  return (
    <div id="HomeLanding">
      <Navbar />
      <HeroSectionHeader />
      <AboutUsHome />
      <EventsPreviewSection />
      <LocationSection />
      <Colaborations />
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default HomeLanding;
