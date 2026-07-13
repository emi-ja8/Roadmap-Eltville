import Link from "next/link";
import { places } from "@/data/places";
import { categoryConfig } from "@/data/categories";

export function Hero() {
  const verifiedPlaces = places.filter((place) => place.status === "verified").length;
  return (
    <section className="hero shell" aria-labelledby="hero-title">
      <div className="hero__copy">
        <p className="eyebrow"><span className="eyebrow__dot" /> Gemeinsam. heute für morgen.</p>
        <h1 id="hero-title">Eltville mit <span>Kinderaugen</span> entdecken.</h1>
        <p className="hero__lead">Finde Orte zum Spielen, Lernen, Treffen und Durchatmen – und entdecke, wo Kinder in Eltville mitreden und mitgestalten können.</p>
        <div className="hero__actions">
          <Link href="/#karte" className="button button--blue">Orte entdecken <span aria-hidden="true">→</span></Link>
          <Link href="/#mitmachen" className="button button--light">Ort vorschlagen <span aria-hidden="true">＋</span></Link>
        </div>
        <div className="hero__signals" aria-label="Roadmap-Überblick">
          <span><b>{categoryConfig.slice(0, 5).length}</b> Themenwelten</span><span><b>{places.length}</b> Orte auf der Roadmap</span><span><b>{verifiedPlaces}</b> mit Stadtquelle</span>
        </div>
      </div>
      <div className="hero__art" aria-label="Illustration aus den Projektunterlagen" role="img">
        <div className="hero__sun" />
        <div className="hero__badge">Kinderfreundliche<br /><strong>Orte entdecken</strong></div>
        <img src="/assets/roadmap-cover.png" alt="Illustrative Roadmap mit Kindern, Natur und Eltville am Rhein" />
      </div>
    </section>
  );
}
