// src/components/icons/ServiceIcons.tsx
import * as React from "react";
import { type SVGProps } from "react";
import { Code, Brush, Search } from "lucide-react";

// Nombres válidos de icono
export type IconName = "code" | "design" | "seo";

// Tipo de componente de icono (un componente que renderiza un <svg>)
type IconComponent = React.ComponentType<SVGProps<SVGSVGElement>>;

// Diccionario de iconos, tipado estrictamente por clave
const ICONS: Record<IconName, IconComponent> = {
  code: Code,
  design: Brush,
  seo: Search,
};

export interface ServiceIconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
  className?: string;
  title?: string;
}

export function ServiceIcon({ name, className, title, ...svgProps }: ServiceIconProps) {
  const Icon = ICONS[name];
  return <Icon className={className} aria-hidden={title ? undefined : true} {...svgProps} />;
}

export default ServiceIcon;
