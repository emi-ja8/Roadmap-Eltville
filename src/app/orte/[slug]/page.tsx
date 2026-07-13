import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getCategory } from "@/data/categories";
import { findPlace, places } from "@/data/places";
import { buildRouteUrl } from "@/lib/places";

export function generateStaticParams() { return places.map((place) => ({ slug: place.slug })); }
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const place = findPlace(params.slug);
  return { title: place ? `${place.name} | Kinderfreundliche Kommune Eltville` : "Ort nicht gefunden", description: place?.shortDescription };
}

export default function PlacePage({ params }: { params: { slug: string } }) {
  const place = findPlace(params.slug);
  if (!place) notFound();
  const category = getCategory(place.category);
  const routeUrl = buildRouteUrl(place);
  return <><a className="skip-link" href="#main-content">Zum Inhalt springen</a><Header /><main id="main-content" className="detail-page"><div className="shell"><Link className="back-link" href="/#karte">← Zurück zur Roadmap</Link><div className="detail-layout"><article className="detail-card"><div className="detail-card__top" style={{ "--detail-color": category.color, "--detail-soft": category.softColor } as React.CSSProperties}><span className="detail-icon">{place.isHighlight ? "★" : category.icon}</span><div><span className="category-label">{category.label}</span><h1>{place.name}</h1></div></div><p className="detail-lead">{place.shortDescription}</p><div className="detail-copy"><h2>Was ist hier los?</h2><p>{place.description}</p><h2>Das passt hierher</h2><div className="tag-list">{place.features.map((feature) => <span key={feature}>{feature}</span>)}</div><h2>Welche Kinderrechte gehören dazu?</h2><div className="rights-list">{place.childrenRights.map((right) => <span key={right}>♥ {right}</span>)}</div></div><div className="detail-actions">{routeUrl ? <a className="button button--blue" href={routeUrl} target="_blank" rel="noreferrer">Route planen <span aria-hidden="true">↗</span></a> : <span className="button button--disabled" aria-disabled="true">Route nach Datenprüfung verfügbar</span>}{place.officialUrl && <a className="button button--light" href={place.officialUrl} target="_blank" rel="noreferrer">Originalquelle <span aria-hidden="true">↗</span></a>}<Link className="button button--light" href="/#mitmachen">Verbesserung melden</Link></div></article><aside className="detail-aside"><div className="fact-card"><span className="eyebrow">Gut zu wissen</span><dl><div><dt>Adresse</dt><dd>{place.address.street}<br />{place.address.postalCode} {place.address.city}</dd></div><div><dt>Für wen?</dt><dd>{place.ageGroups.join(" · ")}</dd></div><div><dt>Barrierefreiheit</dt><dd>{place.accessibility}</dd></div><div><dt>Öffnungszeiten</dt><dd>{place.openingHours}</dd></div></dl></div><div className={`source-card ${place.status === "verified" ? "source-card--verified" : ""}`}><strong>{place.status === "verified" ? "Amtlich recherchiert" : "Prüfung offen"}</strong><p>{place.status === "verified" ? "Adresse und Basisinformationen stammen aus einer offiziellen Eltviller Stadtquelle." : "Dieser Eintrag stammt aus der gelieferten Roadmap oder dem Praxisfeedback. Angaben bitte vor Veröffentlichung mit der Stadt abgleichen."}</p><span>Quelle: {place.source}</span></div></aside></div></div></main><Footer /></>;
}
