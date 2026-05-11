import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wiki Directory | Sailor Piece Premium Guide",
  description: "Browse every major category, hub page, and published entry from one refined directory.",
};

export default function DirectoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
