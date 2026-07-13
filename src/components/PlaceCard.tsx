import Link from "next/link";
import { getCategory } from "@/data/categories";
import type { Place } from "@/types/place";
import { Icon } from "@/components/Icon";

export function PlaceCard({ place, selected = false, onSelect }: { place: Place; selected?: boolean; onSelect?: () => void }) {
  const category = getCategory(place.category);
  return (
    <article className={`place-card ${selected ? "is-selected" : ""}`} style={{ "--place-color": category.color, "--place-soft": category.softColor } as React.CSSProperties}>
      <div className="place-card__marker" aria-hidden="true"><Icon>{place.isHighlight ? "★" : category.icon}</Icon></div>
      <div className="place-card__body">
        <div className="place-card__meta"><span className="category-label">{category.label}</span>{place.status === "needs-review" && <span className="status-pill">Noch prüfen</span>}{place.status === "draft" && <span className="status-pill">Entwurf</span>}</div>
        <h3>{place.name}</h3>
        <p>{place.shortDescription}</p>
        <div className="place-card__actions">
          {onSelect ? <button className="card-link" onClick={onSelect}>Auf der Roadmap zeigen <span aria-hidden="true">↗</span></button> : <Link className="card-link" href={`/orte/${place.slug}`}>Mehr erfahren <span aria-hidden="true">→</span></Link>}
        </div>
      </div>
    </article>
  );
}
