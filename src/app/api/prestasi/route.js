import puppeteer from "puppeteer";

export async function GET(req) {
  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto(
      "https://prestasi.unikom.ac.id/profil/mahasiswa/1f7Si6BSYELq4ckh5BTgpv05HyqBBDPC"
    );

    const prestasi = await page.evaluate(() => {
      const prestasiElements = document.querySelectorAll(".media-body");
      const prestasiArray = [];

      prestasiElements.forEach((prestasiElement) => {
        const namaKompetisi =
          prestasiElement.querySelector("h4")?.innerText || "";
        const jenisPrestasi =
          prestasiElement.querySelector("h5")?.innerText || "";
        const linkPrestasi = prestasiElement.querySelector("a")?.href || "";

        // Extract badge data
        const badges = Array.from(
          prestasiElement.querySelectorAll(".badge a")
        ).map((badge) => ({
          kategori: badge.innerText,
          kategoriLink: badge.href,
        }));

        prestasiArray.push({
          namaKompetisi,
          jenisPrestasi,
          linkPrestasi,
          badges,
        });
      });

      return prestasiArray;
    });

    await browser.close();

    return new Response(JSON.stringify(prestasi), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({
        error: "Something went wrong while scraping the website.",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
