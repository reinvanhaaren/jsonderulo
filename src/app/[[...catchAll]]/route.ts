import { getWikipediaContent } from "@/lib/wikipedia";

export async function GET() {
  const data = await getWikipediaContent({ titles: "Jason_Derulo" });

  return Response.json(data);
}
