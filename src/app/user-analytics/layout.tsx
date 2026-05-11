import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Activity Insights",
  description: "Real-time audience behavior tracking and engagement analytics for the Sailor Piece Wiki.",
};

export default function UserAnalyticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
