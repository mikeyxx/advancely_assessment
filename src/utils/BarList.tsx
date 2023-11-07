import { BarList, Card } from "@tremor/react";

const data = [
  {
    name: "USA",
    value: 10,
  },
  {
    name: "UK",
    value: 12,
  },
  {
    name: "India",
    value: 14,
  },
  {
    name: "BD",
    value: 15,
  },
  {
    name: "England",
    value: 13,
  },
  {
    name: "India",
    value: 18,
  },
];

export default function BarListComp() {
  return (
    <Card className="w-full h-fit">
      <BarList data={data} className="mt-2" />
    </Card>
  );
}
