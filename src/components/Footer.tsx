import { Logo } from "@/components/Logo";

export function Footer() {
  return <footer className="site-footer"><div className="shell footer-grid"><div><Logo compact /><p className="footer-note">Gemeinsam machen wir Eltville zu einem noch besseren Ort für Kinder und Jugendliche.</p></div><div><h3>Roadmap</h3><a href="#karte">Karte entdecken</a><a href="#entdecken">Themenwelten</a><a href="#mitmachen">Mitmachen</a></div><div><h3>Hinweise</h3><a href="#">Impressum-Platzhalter</a><a href="#">Datenschutz-Platzhalter</a><a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">Kartendaten: OpenStreetMap</a></div></div><div className="shell footer-bottom"><span>Projektprototyp · Stand 2026</span><span>Gemeinsam. heute für morgen.</span></div></footer>;
}
