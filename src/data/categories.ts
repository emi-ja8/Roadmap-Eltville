import type { PlaceCategory } from "@/types/place";

export type CategoryConfig = {
  key: PlaceCategory;
  label: string;
  shortLabel: string;
  color: string;
  softColor: string;
  icon: string;
  description: string;
};

export const categoryConfig: CategoryConfig[] = [
  {
    key: "play",
    label: "Spielen & Bewegung",
    shortLabel: "Spielen",
    color: "#F6C945",
    softColor: "#FFF6C9",
    icon: "🏃",
    description: "Orte zum Spielen, Klettern und Bewegen."
  },
  {
    key: "learning",
    label: "Lernen & Bildung",
    shortLabel: "Lernen",
    color: "#4D9FC3",
    softColor: "#E2F4FA",
    icon: "📖",
    description: "Schulen, Kitas, Bücher und neue Ideen."
  },
  {
    key: "community",
    label: "Begegnung & Gemeinschaft",
    shortLabel: "Gemeinschaft",
    color: "#F47A22",
    softColor: "#FFF0E3",
    icon: "👥",
    description: "Treffpunkte, Austausch und Zusammenhalt."
  },
  {
    key: "nature",
    label: "Natur & Erholung",
    shortLabel: "Natur",
    color: "#2E7D32",
    softColor: "#E7F4E7",
    icon: "🌿",
    description: "Grüne Orte, Rheinluft und kleine Pausen."
  },
  {
    key: "participation",
    label: "Beteiligung & Kinderrechte",
    shortLabel: "Mitmachen",
    color: "#0B4EA2",
    softColor: "#E7F0FC",
    icon: "💬",
    description: "Mitreden, mitgestalten und gehört werden."
  },
  {
    key: "highlight",
    label: "Besondere Highlights",
    shortLabel: "Highlights",
    color: "#8E3FE5",
    softColor: "#F1E7FD",
    icon: "★",
    description: "Orte, die besonders in Erinnerung bleiben."
  }
];

export const getCategory = (key: PlaceCategory) =>
  categoryConfig.find((category) => category.key === key) ?? categoryConfig[0];
