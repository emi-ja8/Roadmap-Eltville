import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kinderfreundliche Kommune Eltville | Orte entdecken",
  description: "Die interaktive Roadmap für kinderfreundliche Orte, Themen und Beteiligung in Eltville am Rhein.",
  openGraph: { title: "Kinderfreundliche Kommune Eltville", description: "Eltville mit Kinderaugen entdecken.", type: "website" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="de"><body>{children}</body></html>;
}
