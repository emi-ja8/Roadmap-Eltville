# Design Tokens

Die Tokens orientieren sich an der gelieferten Roadmap, dem Präsentationscover und dem Konzeptleitfaden. Wo die Unterlagen keine digitalen Farbwerte liefern, sind die Werte als arbeitsfähige Näherung zu verstehen.

## Farben

| Token | Wert | Verwendung |
| --- | --- | --- |
| `--brand-blue` | `#0B4EA2` | Hauptfarbe, Links, Buttons |
| `--brand-blue-dark` | `#073B7A` | Überschriften, dunkle Flächen |
| `--learning-blue` | `#63B4D1` | Lernen & Bildung |
| `--community-orange` | `#F47A22` | Begegnung, Beteiligung, Call-to-Action |
| `--play-yellow` | `#F6C945` | Spielen & Bewegung |
| `--nature-green` | `#2E7D32` | Natur & Erholung |
| `--highlight-purple` | `#8E3FE5` | Besondere Highlights |
| `--potential-pink` | `#FF5AA5` | Entwicklungspotenziale |
| `--surface-cream` | `#FFF8E5` | warme Inhaltsflächen |
| `--surface-mint` | `#E4F6EA` | Natur- und Infobereiche |
| `--text-main` | `#17324D` | Fließtext |
| `--line` | `#D9E2EC` | Rahmen und Trennlinien |

## Formen und Abstände

- Grundabstände: 4, 8, 12, 16, 24, 32, 48, 64 px
- große Karten: 24 px Radius
- Bedienelemente: 11–14 px Radius
- Touch-Ziele: mindestens 44 px Höhe
- Inhaltsbreite: maximal 1240 px
- Kartenschatten: weich, sparsam und mit hohem Weißraumanteil

## Typografie

- Überschriften: Comfortaa, 28–68 px, semibold/bold
- Fließtext und UI: Nunito Sans, mindestens 16 px für Lesetexte
- Fallback: `system-ui, -apple-system, Segoe UI, sans-serif`
- Kurze Zeilen und einfache Sprache statt dichter Textblöcke

## Accessibility

Farbe ist nie die einzige Kennzeichnung. Kategorien erhalten zusätzlich Icon und Textlabel. Fokus wird über den Browser-Fokus und den blauen Fokusrahmen sichtbar gemacht. Animationen werden bei `prefers-reduced-motion: reduce` reduziert.
