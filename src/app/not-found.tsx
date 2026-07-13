import Link from "next/link";

export default function NotFound() { return <main className="not-found"><span className="eyebrow">Hoppla</span><h1>Dieser Ort wurde nicht gefunden.</h1><p>Vielleicht ist der Link noch nicht aktuell. Auf der Roadmap findest du alle verfügbaren Orte.</p><Link className="button button--blue" href="/#karte">Zur Roadmap</Link></main>; }
