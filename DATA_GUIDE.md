# Datenpflege: Orte ergänzen

## Minimaler Ablauf

1. Ort und Kategorie anhand einer offiziellen oder projektintern freigegebenen Quelle prüfen.
2. Datensatz in `src/data/places.ts` anlegen oder ergänzen.
3. Fehlende Inhalte als `null` bzw. „Noch zu ergänzen“ lassen.
4. Quelle und Prüfdatum eintragen.
5. Erst nach fachlicher Freigabe `status` auf `verified` setzen.
6. `pnpm test` und `pnpm build` ausführen.

## `roadmapPosition` und Koordinaten

`roadmapPosition` beschreibt nur die Position eines Markers auf der gelieferten Bild-Roadmap in Prozent. Sie darf nicht als GPS-Datenquelle verwendet werden.

Für eine spätere Leaflet-/OpenStreetMap-Karte müssen `coordinates.lat` und `coordinates.lng` aus einer freigegebenen Quelle kommen. Die Listen- und Detailansicht funktioniert auch ohne diese Werte.

## Inhaltliche Leitfragen

- Was ist das für ein Ort?
- Was können Kinder und Jugendliche dort machen?
- Warum ist der Ort kinderfreundlich?
- Welche Kinderrechte werden sichtbar?
- Was sollte man vor dem Besuch wissen?
- Wer ist die offizielle Quelle?

## Moderation

Vorschläge aus dem Formular werden nie automatisch veröffentlicht. Das spätere Backend muss eine Prüfung, einen Status, eine verantwortliche Stelle und ein Löschkonzept abbilden.
