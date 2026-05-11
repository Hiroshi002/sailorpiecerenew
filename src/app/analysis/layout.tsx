import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "System Analysis Dashboard",
  description: "Forensic root cause analysis and session rework diagnostics for the Sailor Piece Wiki project.",
};

export default function AnalysisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
