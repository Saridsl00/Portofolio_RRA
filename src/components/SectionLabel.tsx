import type { ReactNode } from "react";

type SectionLabelProps = {
  number: string;
  children: ReactNode;
};

export default function SectionLabel({ number, children }: SectionLabelProps) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <span>{children}</span>
    </div>
  );
}