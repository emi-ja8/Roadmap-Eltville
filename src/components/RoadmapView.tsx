import { getCategory } from "@/data/categories";
import type { Place } from "@/types/place";
import { Icon } from "@/components/Icon";
import Link from "next/link";
import { assetPath } from "@/lib/site";

export function RoadmapView({ places, selectedSlug, onSelect }: { places: Place[]; selectedSlug: string | null; onSelect: (slug: string) => void }) {
  // The revised project roadmap is the visual source of truth for marker placement.
  // Coordinates remain available for the detail pages, but must not shift pins away
  // from the positions agreed in the supplied roadmap artwork.
  const mapPlaces = places.filter((place) => place.roadmapPosition);

  return (
    <div className="roadmap-frame">
      <div className="roadmap-toolbar"><span className="map-status"><span className="live-dot" /> Interaktive Roadmap <span className="map-status__muted">Eltville am Rhein</span></span><span className="map-scale">{mapPlaces.length} klickbare Orte · Stand 13.07.2026</span></div>
      <div className="roadmap-canvas" role="group" aria-label="Interaktive Roadmap mit den Orten in Eltville">
        <img src={assetPath("/assets/eltville-base-map.png")} alt="Stadtkarte von Eltville am Rhein mit Straßen, Stadtteilen und Rheinverlauf" />
        <div className="map-hint"><span className="live-dot" /> Marker auswählen</div>
        {mapPlaces.map((place) => {
          const category = getCategory(place.category);
          const selected = selectedSlug === place.slug;
          const basePosition = place.roadmapPosition!;
          const position = {
            x: basePosition.x + (place.mapOffset?.x ?? 0),
            y: basePosition.y + (place.mapOffset?.y ?? 0),
          };
          const placement = `${position.x > 65 ? "map-marker-group--left" : ""} ${position.y > 76 ? "map-marker-group--above" : ""}`;
          return <div key={place.slug} className={`map-marker-group ${placement} ${selected ? "is-selected" : ""}`} style={{ left: `${position.x}%`, top: `${position.y}%`, "--marker-color": category.color } as React.CSSProperties}>
            <button className={`map-marker ${place.status === "verified" ? "map-marker--located" : "map-marker--provisional"}`} onClick={() => onSelect(place.slug)} aria-label={`${place.name}, Kategorie ${category.label}${place.status === "verified" ? "" : ", Lage noch in Prüfung"}${selected ? ", ausgewählt" : ""}`} aria-pressed={selected}><Icon>{place.isHighlight ? "★" : category.icon}</Icon></button>
            {selected && <div className="map-callout" role="status">
              <div className="map-callout__meta"><span style={{ color: category.color }}>{category.label}</span>{place.status !== "verified" && <span className="map-callout__status">Prüfung offen</span>}</div>
              <strong>{place.name}</strong>
              <p>{place.shortDescription}</p>
              <div className="map-callout__address">{place.address.street}<br />{place.address.postalCode} {place.address.city}</div>
              <Link href={`/orte/${place.slug}`} className="map-callout__link">Details öffnen <span aria-hidden="true">→</span></Link>
            </div>}
          </div>;
        })}
        <div className="map-compass" aria-hidden="true"><span>N</span><b>↑</b></div>
      </div>
      <p className="map-caption">Klicke einen aufrechten Marker an. Das Infokästchen zeigt dir die wichtigsten Angaben direkt neben dem Ort; über „Details öffnen“ gelangst du zur vollständigen Ortsseite. Die Pin-Lagen folgen der überarbeiteten Projekt-Roadmap; gestrichelte Marker sind noch in Prüfung.</p>
    </div>
  );
}
