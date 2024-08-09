import cheerio from "cheerio";
import { parseISO, format } from "date-fns";

export const GET = async (req, res) => {
  try {
    const response = await fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@zulfi.fazhar12/"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    if (!data.items) {
      throw new Error("Invalid data format received from API");
    }

    const parsedData = data.items.map((item) => {
      const $ = cheerio.load(item.description);
      const imgSrc = $("img").attr("src") || item.thumbnail;
      const pubDate = format(parseISO(item.pubDate), "MMM dd, yyyy");
      const categories = item.categories
        .map((category) =>
          category
            .replace(/-/g, " ")
            .replace(/\b\w/g, (char) => char.toUpperCase())
        )
        .join(", ");

      return {
        ...item,
        imgSrc,
        pubDate,
        categories,
      };
    });

    return new Response(JSON.stringify(parsedData), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};
