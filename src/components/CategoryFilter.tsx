import { categoryConfig } from "@/data/categories";
import type { PlaceCategory } from "@/types/place";
import { Icon } from "@/components/Icon";

export function CategoryFilter({ active, onToggle, onReset }: { active: PlaceCategory[]; onToggle: (category: PlaceCategory) => void; onReset: () => void }) {
  return (
    <div className="filter-block">
      <div className="filter-heading"><div><span className="eyebrow">Themen entdecken</span><h3>Was suchst du?</h3></div>{active.length > 0 && <button className="text-button" onClick={onReset}>Alle zurücksetzen</button>}</div>
      <div className="category-list" role="group" aria-label="Kategorien filtern">
        {categoryConfig.map((category) => {
          const selected = active.includes(category.key);
          return <button key={category.key} className={`category-chip ${selected ? "is-selected" : ""}`} style={{ "--chip-color": category.color, "--chip-soft": category.softColor } as React.CSSProperties} aria-pressed={selected} onClick={() => onToggle(category.key)}><Icon>{category.icon}</Icon><span>{category.label}</span></button>;
        })}
      </div>
    </div>
  );
}
