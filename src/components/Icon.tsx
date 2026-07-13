type IconProps = { children: string; label?: string; className?: string };

export function Icon({ children, label, className = "" }: IconProps) {
  return <span className={`icon ${className}`} aria-hidden={label ? undefined : true} aria-label={label}>{children}</span>;
}
