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
        categories.split(",").map((item, index) => {
          return (
            <Label key={index} color={color}>
              {item}
            </Label>
          );
        })}
    </div>
  );
}
