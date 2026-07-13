export type PlaceCategory =
  | "play"
  | "learning"
  | "community"
  | "nature"
  | "participation"
  | "highlight";

export type PlaceStatus = "verified" | "draft" | "needs-review";

export type RoadmapPosition = {
  x: number;
  y: number;
};

export type Place = {
  id: string;
  slug: string;
  name: string;
  category: PlaceCategory;
  shortDescription: string;
  description: string;
  address: {
    street: string;
    postalCode: string;
    city: string;
  };
  coordinates: {
    lat: number | null;
    lng: number | null;
    verificationNote?: string;
  };
  roadmapPosition?: RoadmapPosition;
  /** Small visual separation for multiple places at the same address. */
  mapOffset?: RoadmapPosition;
  image?: {
    src: string;
    alt: string;
    credit?: string;
  };
  accessibility: string;
  openingHours: string;
  ageGroups: string[];
  features: string[];
  childrenRights: string[];
  officialUrl?: string;
  routeUrl?: string;
  source: string;
  status: PlaceStatus;
  isHighlight: boolean;
  hasDevelopmentPotential: boolean;
  lastUpdated: string | null;
};
