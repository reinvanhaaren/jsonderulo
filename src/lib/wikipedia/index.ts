import { z } from "zod";

const wikipediaSchema = z.object({
  query: z.object({
    pages: z.record(
      z
        .object({
          title: z.string(),
          extract: z.string(),
        })
        .transform((data) => ({
          title: data.title,
          content: data.extract,
        }))
    ),
  }),
});

export async function getWikipediaContent({ titles }: { titles: string }) {
  const url = new URL(`/w/api.php`, "https://en.wikipedia.org");

  url.searchParams.append("action", "query");
  url.searchParams.append("format", "json");
  url.searchParams.append("prop", "extracts");
  url.searchParams.append("exintro", "");
  url.searchParams.append("explaintext", "");
  url.searchParams.append("titles", titles);

  const response = await fetch(url, {
    next: { tags: ["wikipedia"], revalidate: 60 * 60 * 24 },
  });
  const data = await response.json();

  const result = wikipediaSchema.parse(data);

  return result.query.pages[Object.keys(result.query.pages)[0]];
}
