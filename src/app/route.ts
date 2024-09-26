import { track } from "@vercel/analytics/server";
import { unstable_after as after } from "next/server";

import { getWikipediaContent } from "@/lib/wikipedia";

export async function GET() {
  after(async () => {
    await track("pageview");
  });

  const data = await getWikipediaContent({ titles: "Jason_Derulo" });

  return Response.json(data);
}
