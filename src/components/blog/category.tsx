import Label from "@/components/ui/label";

export default function CategoryLabel({
  categories,
  color,
}: {
  categories: string;
  color: string;
}) {
  return (
    <div className="flex gap-3">
      {categories &&
        <Label color={color}>
          {categories}
        </Label>
      }
    </div>
  );
}
