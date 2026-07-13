import { describe, expect, it } from "vitest";
import { places } from "@/data/places";
import { buildRouteUrl, filterPlaces, validateFeedback } from "@/lib/places";

describe("Roadmap-Datenlogik", () => {
  it("filtert nach Kategorie", () => {
    const results = filterPlaces(places, "", ["play"]);
    expect(results.length).toBeGreaterThan(0);
    expect(results.every((place) => place.category === "play")).toBe(true);
  });

  it("findet Orte über Suche und Schlagwort", () => {
    const results = filterPlaces(places, "Rhein", []);
    expect(results.map((place) => place.slug)).toContain("rheinufer-eltville");
  });

  it("setzt Filter durch leere Auswahl zurück", () => {
    expect(filterPlaces(places, "", []).length).toBe(places.length);
  });

  it("validiert das Beteiligungsformular", () => {
    expect(Object.keys(validateFeedback({ type: "", message: "kurz", contact: "" }))).toEqual(["type", "message"]);
    expect(validateFeedback({ type: "feedback", message: "Das ist ein hilfreicher Hinweis.", contact: "" })).toEqual({});
  });

  it("liefert einen leeren Suchzustand", () => {
    expect(filterPlaces(places, "gibt es nicht", [])).toEqual([]);
  });

  it("erzeugt für ungeprüfte Demo-Orte keinen irreführenden Routenlink", () => {
    const unverifiedPlace = places.find((place) => place.status === "needs-review");
    expect(unverifiedPlace).toBeDefined();
    expect(buildRouteUrl(unverifiedPlace!)).toBeNull();
  });
});
