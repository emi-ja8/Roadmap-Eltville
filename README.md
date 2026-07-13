# Interaktive Roadmap Eltville

Ein barrierearmer, responsiver Prototyp für die „Roadmap der Kinderfreundlichen Kommune Eltville am Rhein“. Die Oberfläche verbindet die visuelle Sprache der gelieferten analogen Roadmap mit einer filterbaren Ortsliste, Detailseiten und einem datensparsamen Mitmachformular.

## Technologien

- Next.js 14 mit App Router
- React und TypeScript
- CSS mit zentralen Design Tokens
- lokal gepflegte TypeScript-Ortsdaten
- bereitgestellte Roadmap- und Projektgrafiken als lokale Assets
- Vitest für die Daten- und Formularlogik

Die Karte nutzt im MVP die bereitgestellte Roadmap-Grafik mit zugänglichen, interaktiven Markern. Dadurch werden keine ungeprüften Koordinaten veröffentlicht. Sobald die Stadt geprüfte Koordinaten freigibt, kann die Kartenfläche durch Leaflet/OpenStreetMap ersetzt werden, ohne Datenmodell oder Ortsliste zu ändern.

## Installation und Start

Voraussetzung: Node.js 20 oder neuer.

```bash
pnpm install
pnpm dev
```

Danach ist die Anwendung unter `http://localhost:3000` erreichbar.

Produktionsprüfung:

```bash
pnpm test
pnpm build
pnpm start
```

## Projektstruktur

```text
src/
  app/                  Seiten, Layout und globale Styles
  components/           Header, Hero, Roadmap, Karten, Formular und Footer
  data/                 Kategorien und Ortsdaten
  lib/                  Filter-, Such- und Validierungslogik
  types/                TypeScript-Datenmodell
public/assets/          Logo, Roadmap und Projektillustrationen
```

## Neue Orte ergänzen

Orte werden in `src/data/places.ts` über das zentrale `Place`-Modell ergänzt. Pflichtfelder sind unter anderem `slug`, `name`, `category`, `shortDescription`, `description`, `childrenRights`, `source` und `status`.

Wichtig:

1. Keine Adressen, Koordinaten, Öffnungszeiten oder Barrierefreiheitsangaben schätzen.
2. Unvollständige Daten mit `null`, „Noch zu ergänzen“ und `status: "needs-review"` kennzeichnen.
3. `source` und `lastUpdated` nach der fachlichen Prüfung ergänzen.
4. Für die aktuelle Roadmap-Ansicht kann `roadmapPosition` genutzt werden. Das ist eine visuelle Position auf der gelieferten Grafik, keine geografische Koordinate.
5. Neue Bilder benötigen einen Alt-Text und einen dokumentierten Bildnachweis.

Eine ausführlichere Redaktionshilfe steht in `DATA_GUIDE.md`.

## Design und Assets

Die zentralen Farb-, Radius-, Abstands- und Typografie-Tokens stehen in `DESIGN_TOKENS.md` und am Anfang von `src/app/globals.css`. Das Logo wird als eigenes, unverändertes Bild verwendet. Roadmap und Projektillustration liegen lokal unter `public/assets/`.

## Datenschutz und Backend

Das Beteiligungsformular ist ausdrücklich eine lokale Frontend-Demo. Es sendet keine Daten an Drittanbieter und veröffentlicht keine Vorschläge automatisch. Für den Livebetrieb braucht es ein geprüftes Backend mit serverseitiger Validierung, Moderationsstatus, Löschkonzept, Datenschutzhinweis und einer von der Stadt freigegebenen Kontakt- oder API-Adresse.

Der Standortzugriff ist im MVP nicht aktiviert. Für eine spätere Funktion „In meiner Nähe“ muss der Zugriff erst nach einem aktiven Klick angefragt werden; die Position darf nicht dauerhaft gespeichert werden.

## Bekannte offene Punkte

- Fachlich geprüfte Adressen, Koordinaten, Öffnungszeiten, Bilder und Barrierefreiheitsangaben fehlen noch.
- Die Map-Marker sind aktuell auf der gelieferten Roadmap-Grafik positioniert; für eine geografisch exakte Karte ist die Datenfreigabe erforderlich.
- Impressum, Datenschutz, Kontakt und Projektpartner müssen mit finalen Inhalten ersetzt werden.
- Das Formular braucht vor dem Livegang ein datenschutzkonformes Backend und einen moderierten Prozess.
- Die Schriftdateien sind aktuell als Google-Fonts-Import eingebunden. Für einen vollständig unabhängigen Betrieb sollten sie lokal eingebunden oder durch System-Fallbacks ersetzt werden.

## Qualitätschecks

```bash
pnpm test
pnpm build
```

Manuell geprüft werden sollten mindestens 360, 768, 1024 und 1440 Pixel, Tastaturfokus, Zoom auf 200 Prozent, Kontraste, fehlende Bilder, leere Suchergebnisse und der Formularfehlerzustand.
