import { cx } from "@/utils/all";

export default function Label({
  color,
  children,
}: {
  color: string;
  children: React.ReactNode;
}) {
  const colors: Record<string, string> = {
    green: "text-emerald-700",
    blue: "text-blue-600",
    orange: "text-orange-700",
    purple: "text-purple-600",
    pink: "text-pink-600",
  };
  return (
    <span
      className={cx(
        "inline-block mt-5 text-xs font-medium tracking-wider uppercase ",
        colors[color] || colors["pink"]
      )}
    >
      {children}
    </span>
  );
}
