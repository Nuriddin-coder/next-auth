import { Card } from "@/components/card";
import { GetData } from "@/service/get-data";

export default async function Home() {
  const data = await GetData();

  return (
    <div className="container">
      <div className="flex py-8 gap-y-4 flex-wrap justify-between">
        {data.map((item, i) => (
          <Card {...item} key={i} />
        ))}
      </div>
    </div>
  );
}
