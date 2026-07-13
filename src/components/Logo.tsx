import Image from "next/image";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`brand-lockup ${compact ? "brand-lockup--compact" : ""}`}>
      <Image src="/assets/eltville-logo.png" alt="Kinderfreundliche Kommune Eltville am Rhein" width={compact ? 56 : 68} height={compact ? 56 : 68} priority />
      {!compact && <span className="brand-lockup__text"><strong>Kinderfreundliche</strong><span>Kommune Eltville</span></span>}
    </div>
  );
}
