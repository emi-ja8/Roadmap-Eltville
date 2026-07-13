import type { Place } from "@/types/place";

const reviewNote = "Noch zu prüfen – bitte vor einer Veröffentlichung mit Stadt bzw. Träger abgleichen.";
const projectSource = "Gelieferte Roadmap und Projektunterlagen; fachliche Prüfung ausstehend.";
const officialSource = "Offizielle Stadtseite Eltville, recherchiert am 13.07.2026.";

type PlaceDefaults = Pick<Place, "address" | "coordinates" | "accessibility" | "openingHours" | "source" | "status" | "lastUpdated">;
type PlaceSeed = Omit<Place, keyof PlaceDefaults> & Partial<PlaceDefaults>;

const makePlace = (place: PlaceSeed): Place => ({
  address: { street: "Noch zu ergänzen", postalCode: "65343", city: "Eltville am Rhein" },
  coordinates: { lat: null, lng: null, verificationNote: reviewNote },
  accessibility: reviewNote,
  openingHours: reviewNote,
  source: projectSource,
  status: "needs-review",
  lastUpdated: null,
  ...place
});

const official = (place: PlaceSeed): Place => makePlace({
  source: officialSource,
  status: "verified",
  lastUpdated: "2026-07-13",
  ...place
});

export const places: Place[] = [
  official({
    id: "gutenbergschule-eltville", slug: "gutenbergschule-eltville", name: "Gutenbergschule Eltville", category: "learning",
    shortDescription: "Realschule und Lernort am Wiesweg.",
    description: "Die Gutenbergschule Eltville ist ein wichtiger Lern- und Bildungsort für Kinder und Jugendliche. Die offizielle Stadtseite führt die Schule als Realschule am Wiesweg.",
    address: { street: "Wiesweg 7", postalCode: "65343", city: "Eltville am Rhein" },
    coordinates: { lat: 50.0365456, lng: 8.1166656 }, roadmapPosition: { x: 33.3, y: 9.4 }, ageGroups: ["10–17"], features: ["Realschule", "Bildung"], childrenRights: ["Bildung", "Beteiligung"],
    officialUrl: "https://www.eltville.de/strukturierte-daten/schulen/gutenbergschule-eltville/", isHighlight: false, hasDevelopmentPotential: false
  }),
  official({
    id: "freiherr-vom-stein-schule", slug: "freiherr-vom-stein-schule", name: "Freiherr-vom-Stein-Schule", category: "learning",
    shortDescription: "Grundschule und betreuender Lernort in der Adolfstraße.",
    description: "Die Freiherr-vom-Stein-Schule ist als Grundschule ein zentraler Bildungsort in Eltville. Der Standort ist zugleich als Wahllokal und betreuende Grundschule dokumentiert.",
    address: { street: "Adolfstraße 22", postalCode: "65343", city: "Eltville am Rhein" },
    coordinates: { lat: 50.0288889, lng: 8.1138889 }, roadmapPosition: { x: 27.4, y: 55.1 }, ageGroups: ["6–10"], features: ["Grundschule", "Betreuung"], childrenRights: ["Bildung", "Beteiligung"],
    officialUrl: "https://www.eltville.de/strukturierte-daten/schulen/freiherr-vom-stein-schule-eltville/", isHighlight: false, hasDevelopmentPotential: false
  }),
  makePlace({
    id: "gymnasium-eltville", slug: "gymnasium-eltville", name: "Gymnasium Eltville", category: "learning", shortDescription: "Bildung und Begegnung für junge Menschen in Eltville.",
    description: "Das Gymnasium Eltville ist auf der gelieferten Roadmap als Bildungsort eingezeichnet. Die genaue Adresse wird vor dem Livegang mit der Schule bzw. Stadt abgeglichen.",
    coordinates: { lat: 50.0373713601716, lng: 8.114409113880324 }, roadmapPosition: { x: 31.6, y: 14.2 }, ageGroups: ["10–17"], features: ["Lernort", "Schule"], childrenRights: ["Bildung", "Beteiligung"], isHighlight: false, hasDevelopmentPotential: false
  }),
  official({
    id: "kindergartenburg", slug: "kindergartenburg", name: "Kita Kindergartenburg", category: "learning",
    shortDescription: "Städtische Kita mit Fokus auf Bildung, Mitbestimmung und Inklusion.",
    description: "In der Kindergartenburg steht das Kind im Mittelpunkt. Die städtische Kita arbeitet mit einem Situationsansatz und versteht Mitbestimmung als Teil des pädagogischen Alltags.",
    address: { street: "Holzstraße 7", postalCode: "65343", city: "Eltville am Rhein" },
    coordinates: { lat: 50.029798, lng: 8.116608 }, roadmapPosition: { x: 38.6, y: 53.1 }, ageGroups: ["2,5–6"], features: ["Kita", "Inklusion", "Mitbestimmung"], childrenRights: ["Bildung", "Spiel", "Beteiligung"],
    openingHours: "Mo–Do 7:15–16:30 Uhr; Fr 7:15–15:15 Uhr", officialUrl: "https://www.eltville.de/strukturierte-daten/kitas/kindertagesstaette-kindergartenburg/", isHighlight: false, hasDevelopmentPotential: false
  }),
  official({
    id: "wichtelhauschen", slug: "wichtelhauschen", name: "Kita Wichtelhäuschen", category: "learning",
    shortDescription: "Städtische Kita in Hattenheim für frühe Bildung und Betreuung.",
    description: "Das Wichtelhäuschen ist eine städtische Kindertagesstätte im Stadtteil Hattenheim und ergänzt die kinderfreundlichen Orte der Kernstadt um einen wichtigen Bildungsort im Stadtgebiet.",
    address: { street: "Hallgartener Straße 4", postalCode: "65347", city: "Eltville-Hattenheim" },
    ageGroups: ["1–6"], features: ["Kita", "Frühe Bildung"], childrenRights: ["Bildung", "Spiel"], officialUrl: "https://www.eltville.de/strukturierte-daten/kitas/kindertagesstaette-wichtelhaeuschen/", isHighlight: false, hasDevelopmentPotential: false
  }),
  official({
    id: "piratennest", slug: "piratennest", name: "Kita Piratennest", category: "learning",
    shortDescription: "Naturpädagogische Kita in der ehemaligen Schlittschule.",
    description: "Das Piratennest bietet Krippen- und Kindergartenkindern individuell ausgestattete Räume, Bewegungsangebote und ein eigenes Außengelände in Rheinnähe.",
    address: { street: "Schwalbacher Straße 27", postalCode: "65343", city: "Eltville am Rhein" },
    coordinates: { lat: 50.029118, lng: 8.118067 }, roadmapPosition: { x: 42.8, y: 55.5 }, ageGroups: ["0–6"], features: ["Kita", "Naturpädagogik", "Außengelände"], childrenRights: ["Bildung", "Spiel"],
    openingHours: "Mo–Fr 7:00–17:00 Uhr", officialUrl: "https://www.eltville.de/strukturierte-daten/kitas/kindertagesstaette-piratennest/", isHighlight: false, hasDevelopmentPotential: false
  }),
  official({
    id: "triangelis-kita", slug: "triangelis-kita", name: "Evangelische Kita Triangelis", category: "learning",
    shortDescription: "Evangelische Kindertagesstätte in der Gartenstraße.",
    description: "Die evangelische Kindertagesstätte Triangelis ist ein frühkindlicher Bildungs- und Begegnungsort in der Eltviller Kernstadt.",
    address: { street: "Gartenstraße 12", postalCode: "65343", city: "Eltville am Rhein" },
    coordinates: { lat: 50.02785, lng: 8.11495 }, roadmapPosition: { x: 47.1, y: 48.0 }, ageGroups: ["1–6"], features: ["Kita", "Frühe Bildung"], childrenRights: ["Bildung", "Spiel"], officialUrl: "https://www.eltville.de/strukturierte-daten/kitas/evangelische-kindertagesstaette-triangelis/", isHighlight: false, hasDevelopmentPotential: false
  }),
  official({
    id: "kita-farbenland", slug: "kita-farbenland", name: "Kita Farbenland", category: "learning",
    shortDescription: "ASB-Kita in der Wilhelm-Kreis-Straße.",
    description: "Die ASB-Kita Farbenland erweitert die Bildungsorte für Familien in Eltville. Der Eintrag nutzt die offizielle Adress- und Kontaktdatenbank der Stadt.",
    address: { street: "Wilhelm-Kreis-Straße 60", postalCode: "65343", city: "Eltville am Rhein" },
    coordinates: { lat: 50.0320, lng: 8.1073 }, roadmapPosition: { x: 9.6, y: 40.1 }, ageGroups: ["1–6"], features: ["Kita", "ASB"], childrenRights: ["Bildung", "Spiel"], officialUrl: "https://www.eltville.de/strukturierte-daten/kitas/kindertagesstaette-farbenland/", isHighlight: false, hasDevelopmentPotential: false
  }),
  official({
    id: "kita-sonnenblick", slug: "kita-sonnenblick", name: "Kita Sonnenblick", category: "learning",
    shortDescription: "ASB-Kita in der Wilhelm-Kreis-Straße.",
    description: "Die ASB-Kita Sonnenblick ist ein weiterer offizieller Kita-Standort in Eltville und macht die Vielfalt der frühkindlichen Bildungsorte auf der Roadmap sichtbar.",
    address: { street: "Wilhelm-Kreis-Straße 21", postalCode: "65343", city: "Eltville am Rhein" },
    coordinates: { lat: 50.0307, lng: 8.1105 }, roadmapPosition: { x: 11.3, y: 45.4 }, ageGroups: ["1–6"], features: ["Kita", "ASB"], childrenRights: ["Bildung", "Spiel"], officialUrl: "https://www.eltville.de/strukturierte-daten/kitas/kindertagesstaette-sonnenblick/", isHighlight: false, hasDevelopmentPotential: false
  }),
  official({
    id: "kita-st-peter-und-paul", slug: "kita-st-peter-und-paul", name: "Kita St. Peter und Paul", category: "learning",
    shortDescription: "Katholische Kita in der Gartenstraße.",
    description: "Die katholische Kindertagesstätte St. Peter und Paul ergänzt die Eltviller Bildungsorte um ein Angebot in Trägerschaft von St. Peter und Paul.",
    address: { street: "Gartenstraße 3a", postalCode: "65343", city: "Eltville am Rhein" },
    coordinates: { lat: 50.02765, lng: 8.11475 }, roadmapPosition: { x: 51.2, y: 56.2 }, ageGroups: ["1–6"], features: ["Kita", "Frühe Bildung"], childrenRights: ["Bildung", "Spiel"], officialUrl: "https://www.eltville.de/strukturierte-daten/kitas/katholische-kindertagesstaette-st-peter-und-paul/", isHighlight: false, hasDevelopmentPotential: false
  }),
  official({
    id: "jugendzentrum", slug: "jugendzentrum", name: "Jugendzentrum Eltville", category: "community", shortDescription: "Treffpunkt für Jugendliche ab 14 Jahren mit Raum für Freizeit und Mitbestimmung.",
    description: "Das Jugendzentrum im alten Amtsgericht ist ein Treffpunkt für Jugendliche ab 14 Jahren. Das Jugendteam und das JuVA-Team gestalten Programm, Räume und Social-Media-Auftritt mit.",
    address: { street: "Schwalbacher Straße 40", postalCode: "65343", city: "Eltville am Rhein" },
    coordinates: { lat: 50.02995, lng: 8.11755 }, roadmapPosition: { x: 40.7, y: 50.4 }, ageGroups: ["14–27"], features: ["Treffpunkt", "Billard", "Mitbestimmung"], childrenRights: ["Beteiligung", "Freizeit", "Gemeinschaft"],
    openingHours: "Mo–Do 18:00–22:00 Uhr; Bürozeiten nach Vereinbarung", officialUrl: "https://www.eltville.de/leben-wohnen/familienstadt/kinder-und-jugendliche/jugendzentrum/", isHighlight: true, hasDevelopmentPotential: false
  }),
  official({
    id: "kinder-und-jugendbuero", slug: "kinder-und-jugendbuero", name: "Kinder- und Jugendbüro", category: "participation", shortDescription: "Knotenpunkt für Fragen, Ideen und Kinderrechte.",
    description: "Im alten Amtsgericht sitzt die Kinder- und Jugendbeauftragte Ursula Wolf. Das Büro ist Anlaufstelle für Fragen und Anregungen zu Kinderrechten und zur Kinderfreundlichen Kommune Eltville.",
    address: { street: "Schwalbacher Straße 40", postalCode: "65343", city: "Eltville am Rhein" },
    coordinates: { lat: 50.02995, lng: 8.11755 }, ageGroups: ["Für alle"], features: ["Kinderrechte", "Beratung", "Mitmachen"], childrenRights: ["Beteiligung", "Information", "Schutz"], officialUrl: "https://www.eltville.de/leben-wohnen/familienstadt/kinder-und-jugendliche/kinder-und-jugendbuero/", isHighlight: true, hasDevelopmentPotential: false
  }),
  official({
    id: "mediathek", slug: "mediathek", name: "Mediathek Eltville", category: "learning", shortDescription: "Bücher, Medien, Lern-Apps und Veranstaltungen für alle Generationen.",
    description: "Die Mediathek bietet rund 16.000 Medien, digitale Angebote wie die Onleihe sowie Veranstaltungen, Lesungen und Workshops. Für Kinder und Jugendliche ist sie damit Bildungs- und Begegnungsort zugleich.",
    address: { street: "Rheingauer Straße 28", postalCode: "65343", city: "Eltville am Rhein" },
    coordinates: { lat: 50.0247, lng: 8.1205 }, roadmapPosition: { x: 47.9, y: 75.7 }, ageGroups: ["Für alle"], features: ["16.000 Medien", "Onleihe", "Workshops"], childrenRights: ["Bildung", "Information", "Kultur"],
    openingHours: "Mo 10:00–13:00 & 15:00–18:00; Mi 15:00–18:00; Do 10:00–13:00 & 15:00–19:00; Fr 15:00–18:00; Sa 10:00–13:00", officialUrl: "https://www.eltville.de/freizeit-tourismus/mediathek/", isHighlight: false, hasDevelopmentPotential: false
  }),
  official({
    id: "rosenbad-eltville", slug: "rosenbad-eltville", name: "Freibad Eltville", category: "play", shortDescription: "Freibad mit Spielplatz, Beachvolleyball, Fußballtor und Tischtennis.",
    description: "Das Rosenbad verbindet Wasser, Bewegung und Sommerfreude. Zur Anlage gehören ein Spielplatz, ein Beachvolleyballfeld, ein mobiles Fußballtor und eine Tischtennisplatte.",
    address: { street: "Erbacher Straße 22", postalCode: "65343", city: "Eltville am Rhein" },
    coordinates: { lat: 50.02143, lng: 8.10804 }, roadmapPosition: { x: 11.6, y: 97.2 }, ageGroups: ["Für alle"], features: ["50-m-Bahn", "Spielplatz", "Beachvolleyball"], childrenRights: ["Spiel", "Freizeit", "Gesundheit"],
    accessibility: "Rollstuhlgeeignet", openingHours: "Saison 2026: täglich; Di & Do ab 6:30 Uhr, letzter Einlass 19:20 Uhr", officialUrl: "https://www.eltville.de/freizeit-tourismus/aktiv-vital/freibad-rosenbad/", isHighlight: true, hasDevelopmentPotential: false
  }),
  official({
    id: "mehrgenerationenhaus-1", slug: "mehrgenerationenhaus-1", name: "Mehrgenerationenhaus 1", category: "community", shortDescription: "Begegnungsort für Menschen jeden Alters und jeder Herkunft.",
    description: "Das Mehrgenerationenhaus und Familienzentrum lädt zum Verweilen, Mitmachen und Mitgestalten ein. Hier finden Familien, Kinder und ältere Menschen Angebote, Kontakte und Unterstützung.",
    address: { street: "Gutenbergstraße 38", postalCode: "65343", city: "Eltville am Rhein" },
    coordinates: { lat: 50.0272818, lng: 8.123811 }, ageGroups: ["Für alle"], features: ["Familienzentrum", "Begegnung", "Spieletreff"], childrenRights: ["Gemeinschaft", "Freizeit", "Beteiligung"],
    accessibility: "Rollstuhlgeeignet", openingHours: "Mo–Fr 8:30–22:00 Uhr; am Wochenende bei Sonderveranstaltungen", officialUrl: "https://www.eltville.de/leben-wohnen/familienstadt/mehrgenerationenhaus-familienzentrum/", isHighlight: true, hasDevelopmentPotential: false
  }),
  official({
    id: "mehrgenerationenhaus-2", slug: "mehrgenerationenhaus-2", name: "Mehrgenerationenhaus 2", category: "community", shortDescription: "Familienzentrum mit offenen Angeboten in der Wallufer Straße.",
    description: "Der zweite Standort des Mehrgenerationenhauses bietet offene Angebote, Kurse und Treffpunkte für verschiedene Generationen. Das Programm wird regelmäßig aktualisiert.",
    address: { street: "Wallufer Straße 10", postalCode: "65343", city: "Eltville am Rhein" },
    coordinates: { lat: 50.0273, lng: 8.1272 }, ageGroups: ["Für alle"], features: ["Familienzentrum", "Kurse", "Treffpunkt"], childrenRights: ["Gemeinschaft", "Freizeit", "Beteiligung"],
    accessibility: "Rollstuhlgeeignet", openingHours: "Mo–Fr 8:30–22:00 Uhr; am Wochenende bei Sonderveranstaltungen", officialUrl: "https://www.eltville.de/leben-wohnen/familienstadt/mehrgenerationenhaus-familienzentrum/", isHighlight: false, hasDevelopmentPotential: false
  }),
  official({
    id: "rathaus-eltville", slug: "rathaus-eltville", name: "Rathaus Eltville", category: "participation", shortDescription: "Der Ort, an dem kommunale Entscheidungen und Beteiligung zusammenkommen.",
    description: "Das Rathaus ist als Verwaltungsort ein wichtiger Anlaufpunkt für Familien und Bürger:innen. Kinderfreundlichkeit wird hier über Verwaltung, Beteiligung und die Umsetzung des Aktionsplans sichtbar.",
    address: { street: "Gutenbergstraße 13", postalCode: "65343", city: "Eltville am Rhein" },
    coordinates: { lat: 50.0264, lng: 8.1208 }, ageGroups: ["Für alle"], features: ["Bürgerservice", "Verwaltung", "Beteiligung"], childrenRights: ["Beteiligung", "Information"],
    openingHours: "Bürgerservice: Mo 8:00–12:00 & 15:00–18:00; Di–Fr 8:00–12:00", officialUrl: "https://www.eltville.de/buergerservice-rathaus/", isHighlight: false, hasDevelopmentPotential: false
  }),
  official({
    id: "stadtpark-eltville", slug: "stadtpark-eltville", name: "Stadtpark Eltville", category: "nature", shortDescription: "Park für alle Generationen mit neu gestaltetem Spielbereich.",
    description: "Der neugestaltete Stadtpark hinter dem Kiliansring ist als Park für alle Generationen gedacht. Kinder, Jugendliche und Bürger:innen wurden in die Entwicklung einbezogen; ein neuer Spielbereich ist bereits eröffnet.",
    address: { street: "Kiliansring", postalCode: "65343", city: "Eltville am Rhein" },
    coordinates: { lat: 50.02552, lng: 8.11512 }, ageGroups: ["Für alle"], features: ["Spielbereich", "Park", "Beteiligung"], childrenRights: ["Spiel", "Erholung", "Beteiligung"],
    officialUrl: "https://www.eltville.de/buergerservice-rathaus/aktuelles/staedtische-projekte/stadtpark-eltville/", isHighlight: true, hasDevelopmentPotential: false
  }),
  official({
    id: "platz-der-kinderrechte", slug: "platz-der-kinderrechte", name: "Platz der Kinderrechte", category: "participation", shortDescription: "Geplanter klimaadaptiver Aufenthaltsort mit Kindern und Jugendlichen.",
    description: "Vor dem Jugendzentrum und der Kita Kindergartenburg soll ein Ort mit Aufenthaltsqualität für Kinder und Jugendliche entstehen. Das Projekt wird wissenschaftlich begleitet und gemeinsam mit Kindern entwickelt.",
    address: { street: "Schwalbacher Straße 40", postalCode: "65343", city: "Eltville am Rhein" },
    coordinates: { lat: 50.02995, lng: 8.11755 }, ageGroups: ["Für alle"], features: ["Kinderrechte", "Klima", "Mitgestaltung"], childrenRights: ["Beteiligung", "Spiel", "Gesundheit"],
    officialUrl: "https://www.eltville.de/buergerservice-rathaus/aktuelles/staedtische-projekte/platz-der-kinderrechte/", isHighlight: true, hasDevelopmentPotential: true
  }),
  official({
    id: "entenplatz", slug: "entenplatz", name: "Entenplatz", category: "community", shortDescription: "Historischer Platz und Treffpunkt mitten in der Altstadt.",
    description: "Der Platz am Breitenstein wird in Eltville liebevoll Entenplatz genannt. Als historischer Kommunikationsort bietet er einen spannenden Anknüpfungspunkt für Stadtgeschichte, Aufenthalt und gemeinsames Entdecken.",
    address: { street: "Platz am Breitenstein", postalCode: "65343", city: "Eltville am Rhein" },
    coordinates: { lat: 50.02455, lng: 8.11911 }, ageGroups: ["Für alle"], features: ["Altstadt", "Treffpunkt", "Geschichte"], childrenRights: ["Freizeit", "Kultur", "Gemeinschaft"],
    officialUrl: "https://www.eltville.de/freizeit-tourismus/aufenthalt-service/information-in-english/highlights-sightseeing/", isHighlight: true, hasDevelopmentPotential: true
  }),
  makePlace({
    id: "jugendpark-der-kulturen", slug: "jugendpark-der-kulturen", name: "Jugendpark der Kulturen", category: "nature", shortDescription: "Grüner Kultur- und Aufenthaltsort unmittelbar neben der Burg.",
    description: "Der Jugendpark der Kulturen liegt – vom Rhein aus gesehen – unmittelbar rechts neben der Kurfürstlichen Burg. Der Ort verbindet Rheinlage, Grün und Kultur und sollte vor dem Livegang mit der Stadt vor Ort verifiziert werden.",
    coordinates: { lat: 50.02484, lng: 8.1234 }, roadmapPosition: { x: 61.5, y: 77.2 }, ageGroups: ["13–17", "Für alle"], features: ["Grünraum", "Kultur", "Rhein"], childrenRights: ["Freizeit", "Beteiligung", "Erholung"], isHighlight: true, hasDevelopmentPotential: false
  }),
  makePlace({
    id: "kurfuerstliche-burg-eltville", slug: "kurfuerstliche-burg-eltville", name: "Kurfürstliche Burg Eltville", category: "highlight", shortDescription: "Geschichte, Rheinblick und ein prägender Ort der Stadt.",
    description: "Die Kurfürstliche Burg ist ein besonderer Lern- und Erlebnisort am Rhein. In Verbindung mit dem Jugendpark der Kulturen entsteht hier ein starkes Ziel für eine kinderfreundliche Entdeckungstour.",
    address: { street: "Burgstraße", postalCode: "65343", city: "Eltville am Rhein" }, coordinates: { lat: 50.024528, lng: 8.122111 }, ageGroups: ["Für alle"], features: ["Geschichte", "Rheinblick", "Kultur"], childrenRights: ["Freizeit", "Kultur"], isHighlight: true, hasDevelopmentPotential: false
  }),
  makePlace({
    id: "rheinufer-eltville", slug: "rheinufer-eltville", name: "Rheinufer Eltville am Rhein", category: "nature", shortDescription: "Rheinluft, Weite und Platz für eine Pause draußen.",
    description: "Das Rheinufer ist ein frei zugänglicher Natur- und Erholungsraum. Wege, Aufenthaltsqualität und Barrierefreiheit sollten für eine spätere Livekarte separat geprüft werden.",
    coordinates: { lat: 50.0240, lng: 8.1212 }, roadmapPosition: { x: 38.2, y: 90.4 }, ageGroups: ["Für alle"], features: ["Rhein", "Erholung", "Spazierweg"], childrenRights: ["Erholung", "Freizeit"], isHighlight: true, hasDevelopmentPotential: true
  }),
  makePlace({
    id: "buecherwagen", slug: "buecherwagen", name: "Bücherwagen", category: "learning", shortDescription: "Mobile Lesepunkte, die Bücher und Geschichten in die Stadt bringen.",
    description: "Bücherwagen wurden im Praxisfeedback als kinderfreundliche Orte genannt. Der Eintrag macht diese Idee sichtbar; konkrete Standorte und regelmäßige Zeiten werden noch mit den Projektpartner:innen abgestimmt.",
    ageGroups: ["Für alle"], features: ["Bücher", "Lesen", "Mobil"], childrenRights: ["Bildung", "Information"], isHighlight: false, hasDevelopmentPotential: false
  }),
  makePlace({
    id: "buecherregal", slug: "buecherregal", name: "Bücherregal", category: "learning", shortDescription: "Lesestoff zum Mitnehmen, Tauschen und Entdecken.",
    description: "Das Bücherregal ist auf der gelieferten Roadmap als kleiner Bildungsort verzeichnet. Der genaue Standort und die Betreuung werden vor einer Veröffentlichung noch bestätigt.",
    roadmapPosition: { x: 46.8, y: 85.2 }, ageGroups: ["Für alle"], features: ["Bücher", "Tauschen"], childrenRights: ["Bildung", "Information"], isHighlight: false, hasDevelopmentPotential: false
  }),
  makePlace({
    id: "hundewiese", slug: "hundewiese", name: "Hundewiese", category: "community", shortDescription: "Freiraum für Bewegung, Begegnung und das gemeinsame Unterwegssein.", description: "Die Hundewiese ist in der überarbeiteten Projekt-Roadmap als eigener Freiraum im Norden Eltvilles markiert. Die genaue Ausstattung und Nutzungshinweise werden noch ergänzt.", roadmapPosition: { x: 27.0, y: 7.4 }, ageGroups: ["Für alle"], features: ["Freiraum", "Bewegung"], childrenRights: ["Freizeit", "Erholung"], isHighlight: false, hasDevelopmentPotential: false
  }),
  makePlace({
    id: "spielplatz-rieslingstrasse", slug: "spielplatz-rieslingstrasse", name: "Spielplatz Rieslingstraße", category: "play", shortDescription: "Spiel- und Bewegungsort im nördlichen Stadtgebiet.", description: "Der Spielplatz an der Rieslingstraße ist auf der überarbeiteten Roadmap als eigener Spielort eingezeichnet. Ausstattung und Barrierefreiheit werden noch mit der städtischen Spielplatzkarte ergänzt.", roadmapPosition: { x: 30.4, y: 28.2 }, ageGroups: ["0–12", "Familien"], features: ["Spielplatz", "Bewegung"], childrenRights: ["Spiel", "Freizeit"], isHighlight: false, hasDevelopmentPotential: false
  }),
  makePlace({
    id: "bolzplatz-am-wasserwerk", slug: "bolzplatz-am-wasserwerk", name: "Bolzplatz am Wasserwerk", category: "play", shortDescription: "Platz für Fußball, Bewegung und gemeinsames Spielen.", description: "Der Bolzplatz am Wasserwerk ist auf der überarbeiteten Roadmap am westlichen Stadtrand markiert. Die Ausstattung und Zugänglichkeit werden noch geprüft.", roadmapPosition: { x: 4.4, y: 54.8 }, ageGroups: ["6–17"], features: ["Bolzplatz", "Fußball", "Bewegung"], childrenRights: ["Spiel", "Freizeit", "Gesundheit"], isHighlight: false, hasDevelopmentPotential: false
  }),
  makePlace({
    id: "spielplatz-weststadt", slug: "spielplatz-weststadt", name: "Spielplatz", category: "play", shortDescription: "Ein weiterer Spielort für Kinder im westlichen Stadtgebiet.", description: "Der Spielplatz ist in der überarbeiteten Roadmap westlich der Innenstadt verzeichnet. Der genaue Name, die Ausstattung und die Adresse werden noch ergänzt.", roadmapPosition: { x: 17.8, y: 52.3 }, ageGroups: ["0–12", "Familien"], features: ["Spielplatz", "Draußen"], childrenRights: ["Spiel", "Freizeit"], isHighlight: false, hasDevelopmentPotential: false
  }),
  makePlace({
    id: "wasdas-sprachschule", slug: "wasdas-sprachschule", name: "Wasdas-Sprachschule", category: "learning", shortDescription: "Sprachbildung und Begegnung für Kinder, Jugendliche und Familien.", description: "Die Wasdas-Sprachschule ist auf der überarbeiteten Roadmap als Bildungsort nahe der Rheingauer Straße markiert. Weitere Angebotsdetails werden noch ergänzt.", roadmapPosition: { x: 50.4, y: 72.4 }, ageGroups: ["Für alle"], features: ["Sprache", "Bildung", "Begegnung"], childrenRights: ["Bildung", "Beteiligung"], isHighlight: false, hasDevelopmentPotential: false
  }),
  makePlace({
    id: "skatepark-eltville", slug: "skatepark-eltville", name: "Skatepark Eltville", category: "play", shortDescription: "Bewegungsort für Rollen, Tricks und gemeinsames Draußensein.", description: "Der Skatepark ist auf der überarbeiteten Roadmap am südwestlichen Rand der Karte markiert. Ausstattung, Öffnungszeiten und Zugänglichkeit werden noch ergänzt.", roadmapPosition: { x: 4.8, y: 97.2 }, ageGroups: ["8–17"], features: ["Skatepark", "Bewegung"], childrenRights: ["Spiel", "Freizeit", "Gesundheit"], isHighlight: false, hasDevelopmentPotential: false
  }),
  makePlace({
    id: "spielplatz-stadtpark", slug: "spielplatz-stadtpark", name: "Spielplatz im Stadtpark", category: "play", shortDescription: "Neu gestalteter Spielbereich im Park für alle Generationen.",
    description: "Der Spielbereich im Stadtpark ist ein konkretes Ergebnis der Neugestaltung. Das Angebot wurde im Rahmen des Projekts „Park für alle“ entwickelt; Ausstattung und Wege können weiter ergänzt werden.",
    coordinates: { lat: 50.02552, lng: 8.11512 }, roadmapPosition: { x: 32.3, y: 75.3 }, ageGroups: ["0–12", "Familien"], features: ["Spielplatz", "Park", "Bewegung"], childrenRights: ["Spiel", "Freizeit"], isHighlight: false, hasDevelopmentPotential: false
  }),
  makePlace({
    id: "spielplatz-am-rheinufer", slug: "spielplatz-am-rheinufer", name: "Spielplatz am Rheinufer", category: "play", shortDescription: "Spiel und Bewegung am südlichen Stadtrand.", description: "Der Spielplatz am Rheinufer ist auf der neuesten Roadmap westlich des Rheinufers markiert. Ausstattung und Zugang werden noch mit der Stadt abgeglichen.", roadmapPosition: { x: 24.8, y: 95.0 }, ageGroups: ["0–12", "Familien"], features: ["Spielplatz", "Rhein", "Draußen"], childrenRights: ["Spiel", "Freizeit"], isHighlight: false, hasDevelopmentPotential: false
  }),
  makePlace({
    id: "bahnhof-eltville", slug: "bahnhof-eltville", name: "Bahnhof Eltville", category: "community", shortDescription: "Ankunfts- und Übergangsort mit Entwicklungspotenzial für Familien.", description: "Der Bahnhof Eltville ist auf der neuesten Roadmap als Ort mit Entwicklungspotenzial markiert. Die konkrete kinderfreundliche Gestaltung wird im Projekt weiter betrachtet.", roadmapPosition: { x: 51.8, y: 65.5 }, ageGroups: ["Für alle"], features: ["Mobilität", "Ankunft", "Entwicklungspotenzial"], childrenRights: ["Beteiligung", "Sicherheit", "Freizeit"], isHighlight: false, hasDevelopmentPotential: true
  }),
  makePlace({
    id: "spielplatz-moenchhahn", slug: "spielplatz-moenchhahn", name: "Spielplatz Mönchhahn", category: "play", shortDescription: "Ein Spielort für Bewegung, Fantasie und gemeinsame Zeit.", description: "Der Spielplatz Mönchhahn ist als Spiel- und Bewegungsort in der überarbeiteten Roadmap markiert. Ausstattung und Barrierefreiheit werden noch ergänzt.", roadmapPosition: { x: 52.1, y: 33.0 }, ageGroups: ["0–12", "Familien"], features: ["Spielplatz", "Bewegung"], childrenRights: ["Spiel", "Freizeit"], isHighlight: false, hasDevelopmentPotential: false
  }),
  makePlace({
    id: "spielplatz-eltville-ost", slug: "spielplatz-eltville-ost", name: "Spielplatz Eltville-Ost", category: "play", shortDescription: "Spiel, Bewegung und Zeit draußen.", description: "Der Spielplatz Eltville-Ost ist auf der überarbeiteten Roadmap als Spielort markiert. Die genaue Ausstattung und die Adresse werden mit der städtischen Spielplatzkarte abgeglichen.", roadmapPosition: { x: 84.8, y: 44.4 }, ageGroups: ["0–12", "Familien"], features: ["Spielplatz", "Draußen"], childrenRights: ["Spiel", "Freizeit"], isHighlight: false, hasDevelopmentPotential: false
  }),
  makePlace({
    id: "kleiner-spielplatz-nikolasquelle", slug: "kleiner-spielplatz-nikolasquelle", name: "Kleiner Spielplatz Nikolasquelle", category: "play", shortDescription: "Ein kleiner Spielort zum Draußensein und Bewegen.", description: "Der kleine Spielplatz an der Nikolasquelle ist auf der überarbeiteten Roadmap als Spielort markiert. Ausstattung und Zugang werden noch ergänzt.", roadmapPosition: { x: 39.6, y: 63.1 }, ageGroups: ["0–12", "Familien"], features: ["Spielplatz", "Draußen"], childrenRights: ["Spiel", "Freizeit"], isHighlight: false, hasDevelopmentPotential: false
  }),
  makePlace({
    id: "nachbarschaftshilfe", slug: "nachbarschaftshilfe", name: "Nachbarschaftshilfe", category: "community", shortDescription: "Gemeinsam füreinander da sein und Unterstützung finden.", description: "Die Nachbarschaftshilfe ist auf der überarbeiteten Roadmap als Ort der Begegnung und Gemeinschaft verzeichnet. Die Kontaktinformationen werden noch ergänzt.", roadmapPosition: { x: 56.5, y: 68.1 }, ageGroups: ["Für alle"], features: ["Gemeinschaft", "Hilfe"], childrenRights: ["Gemeinschaft", "Beteiligung"], isHighlight: false, hasDevelopmentPotential: false
  }),
  makePlace({
    id: "mueze-treffpunkt", slug: "mueze-treffpunkt", name: "MÜZE – Treffpunkt für ALLE", category: "community", shortDescription: "Ein offener Treffpunkt für Austausch, Unterstützung und Gemeinschaft.", description: "Das MÜZE ist in der überarbeiteten Roadmap als Treffpunkt für alle Menschen markiert. Weitere Details werden noch ergänzt.", roadmapPosition: { x: 71.3, y: 65.5 }, ageGroups: ["Für alle"], features: ["Treffpunkt", "Gemeinschaft"], childrenRights: ["Gemeinschaft", "Beteiligung"], isHighlight: false, hasDevelopmentPotential: false
  }),
  makePlace({
    id: "tanzschule-haas", slug: "tanzschule-haas", name: "Tanzschule Haas", category: "community", shortDescription: "Musik, Bewegung und Begegnung.", description: "Die Tanzschule Haas ist auf der überarbeiteten Roadmap als Begegnungsort dargestellt. Angebote und Zeiten werden noch anhand einer offiziellen Quelle ergänzt.", roadmapPosition: { x: 74.6, y: 63.3 }, ageGroups: ["7–17"], features: ["Tanz", "Bewegung"], childrenRights: ["Freizeit", "Gemeinschaft"], isHighlight: false, hasDevelopmentPotential: false
  }),
  makePlace({
    id: "rheingauer-tischtenniscenter-kreis", slug: "rheingauer-tischtenniscenter-kreis", name: "Rheingauer Tischtenniscenter Kreis", category: "play", shortDescription: "Bewegung, Spiel und sportliche Herausforderungen.", description: "Ein sportlicher Ort aus der analogen Roadmap. Die genauen Angebote und Zeiten werden noch mit einer offiziellen Quelle abgeglichen.", ageGroups: ["7–17"], features: ["Sport", "Bewegung"], childrenRights: ["Freizeit", "Gesundheit"], isHighlight: false, hasDevelopmentPotential: false
  }),
  makePlace({
    id: "friedhof-eltville", slug: "friedhof-eltville", name: "Friedhof Eltville", category: "nature", shortDescription: "Ein ruhiger, grüner Ort zum Innehalten.", description: "Der Friedhof Eltville ist auf der überarbeiteten Roadmap als grüner Ort dargestellt. Nutzungshinweise und Zugänge werden vor dem Livegang geprüft.", roadmapPosition: { x: 32.0, y: 22.9 }, ageGroups: ["Für alle"], features: ["Grünraum", "Ruhe"], childrenRights: ["Erholung", "Gesundheit"], isHighlight: false, hasDevelopmentPotential: false
  }),
  makePlace({
    id: "riveria-leinpfad", slug: "riveria-leinpfad", name: "„Riveria“ – Leinpfad", category: "nature", shortDescription: "Ein Weg am Rhein für Spaziergänge und kleine Entdeckungen.", description: "Der Leinpfad ist auf der überarbeiteten Roadmap als Natur- und Erholungsort eingezeichnet. Name und genaue Wegführung werden noch redaktionell geprüft.", roadmapPosition: { x: 89.3, y: 66.4 }, ageGroups: ["Für alle"], features: ["Weg", "Rhein"], childrenRights: ["Erholung", "Freizeit"], isHighlight: false, hasDevelopmentPotential: false
  })
];

export const findPlace = (slug: string) => places.find((place) => place.slug === slug);
