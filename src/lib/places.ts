import type { Place, PlaceCategory } from "@/types/place";

export const filterPlaces = (places: Place[], query: string, categories: PlaceCategory[]) => {
  const normalizedQuery = query.trim().toLocaleLowerCase("de-DE");
  return places.filter((place) => {
    const matchesCategory = categories.length === 0 || categories.includes(place.category) || (categories.includes("highlight") && place.isHighlight);
    const searchable = [place.name, place.shortDescription, place.description, ...place.features, ...place.childrenRights].join(" ").toLocaleLowerCase("de-DE");
    return matchesCategory && (!normalizedQuery || searchable.includes(normalizedQuery));
  });
};

export const buildRouteUrl = (place: Place) => {
  if (place.routeUrl) return place.routeUrl;
  if (place.coordinates.lat === null || place.coordinates.lng === null || place.address.street === "Noch zu ergänzen") return null;
  const destination = [place.address.street, place.address.postalCode, place.address.city].filter(Boolean).join(", ");
  return `https://www.openstreetmap.org/search?query=${encodeURIComponent(destination)}`;
};

export const validateFeedback = (form: { type: string; message: string; place?: string; contact?: string }) => {
  const errors: Partial<Record<keyof typeof form, string>> = {};
  if (!form.type) errors.type = "Wähle bitte eine Art der Rückmeldung aus.";
  if (!form.message.trim() || form.message.trim().length < 10) errors.message = "Schreibe bitte mindestens 10 Zeichen.";
  if (form.contact && !/^\S+@\S+\.\S+$/.test(form.contact)) errors.contact = "Bitte gib eine gültige E-Mail-Adresse ein – oder lass das Feld leer.";
  return errors;
};
