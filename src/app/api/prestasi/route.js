import axios from "axios";
import cheerio from "cheerio";

export default async function handler(req, res) {
  if (req.method === "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: "URL parameter is required" });
  }

  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    // Contoh: mengambil semua judul artikel (ubah selektor sesuai kebutuhan)
    const titles = [];
    $("article h2").each((index, element) => {
      titles.push($(element).text());
    });

    res.status(200).json({ titles });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error scraping website", details: error.message });
  }
}
