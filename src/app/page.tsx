import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MapExplorer } from "@/components/MapExplorer";
import { ProjectSections } from "@/components/ProjectSections";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return <><a className="skip-link" href="#main-content">Zum Inhalt springen</a><Header /><main id="main-content"><Hero /><MapExplorer /><ProjectSections /></main><Footer /></>;
}
