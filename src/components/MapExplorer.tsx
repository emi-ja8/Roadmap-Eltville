"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { PlaceCategory } from "@/types/place";
import { places } from "@/data/places";
import { filterPlaces } from "@/lib/places";
import { CategoryFilter } from "@/components/CategoryFilter";
import { PlaceCard } from "@/components/PlaceCard";
import { RoadmapView } from "@/components/RoadmapView";

export function MapExplorer() {
  const [query, setQuery] = useState("");
  const [activeCategories, setActiveCategories] = useState<PlaceCategory[]>([]);
  const [selectedSlug, setSelectedSlug] = useState<string | null>(places[0]?.slug ?? null);
  const [view, setView] = useState<"map" | "list">("map");
  const visiblePlaces = useMemo(() => filterPlaces(places, query, activeCategories), [query, activeCategories]);
  const selectedPlace = visiblePlaces.find((place) => place.slug === selectedSlug);
  const verifiedCount = visiblePlaces.filter((place) => place.status === "verified").length;
  const toggleCategory = (category: PlaceCategory) => setActiveCategories((current) => current.includes(category) ? current.filter((item) => item !== category) : [...current, category]);
  const reset = () => { setActiveCategories([]); setQuery(""); };

  return <section id="karte" className="explorer-section shell" aria-labelledby="map-title">
    <div className="section-intro"><div><p className="eyebrow">Die digitale Roadmap</p><h2 id="map-title">Finde deinen <span>Lieblingsort.</span></h2></div><p>Schau dich um, filtere nach dem, was dich interessiert, und öffne die Details eines Ortes.</p></div>
    <div className="explorer-layout">
      <div className={`map-panel ${view === "list" ? "map-panel--hidden-mobile" : ""}`}><RoadmapView places={visiblePlaces} selectedSlug={selectedSlug} onSelect={setSelectedSlug} /></div>
      <aside className="results-panel" aria-label="Ortsübersicht">
        <div className="results-panel__top"><div><span className="eyebrow">Ortsübersicht</span><p className="results-count"><strong>{visiblePlaces.length}</strong> Orte gefunden</p><p className="results-proof"><span className="live-dot" /> {verifiedCount} mit offizieller Stadtquelle</p></div><button className="view-toggle" onClick={() => setView(view === "map" ? "list" : "map")} aria-label={view === "map" ? "Listenansicht anzeigen" : "Kartenansicht anzeigen"}>{view === "map" ? "☷ Liste" : "⌖ Karte"}</button></div>
        <label className="search-field"><span aria-hidden="true">⌕</span><span className="sr-only">Orte durchsuchen</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Ort oder Thema suchen" /><kbd>⌘ K</kbd></label>
        <CategoryFilter active={activeCategories} onToggle={toggleCategory} onReset={reset} />
        <div className="results-list" aria-live="polite">{visiblePlaces.length > 0 ? visiblePlaces.map((place) => <PlaceCard key={place.slug} place={place} selected={place.slug === selectedSlug} onSelect={() => { setSelectedSlug(place.slug); setView("map"); }} />) : <div className="empty-state"><span className="empty-state__icon">⌕</span><h3>Nichts gefunden</h3><p>Probier ein anderes Wort oder setze die Filter zurück.</p><button className="text-button" onClick={reset}>Filter zurücksetzen</button></div>}</div>
        {selectedPlace && <div className="selected-preview"><span className="eyebrow">Ausgewählt</span><h3>{selectedPlace.name}</h3><p>{selectedPlace.shortDescription}</p><Link href={`/orte/${selectedPlace.slug}`} className="card-link">Details öffnen <span aria-hidden="true">→</span></Link></div>}
      </aside>
    </div>
  </section>;
}
