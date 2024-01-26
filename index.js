import puppeteer from "puppeteer";

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("https://quotes.toscrape.com/");
    // await page.screenshot({ path: "screenshot1.png" })

    // const grabHeadline = await page.evaluate(() => {
    //     const hTag = document.querySelector(".header-box div h1 a");
    //     const text = hTag.innerHTML;
    //     const aTag = document.querySelector(".header-box div p a");
    //     const link = aTag.getAttribute('href');
    //     const headline = `${text} login di ${link}`;
    //     return headline;
    // })

    // const grabTagItems = await page.evaluate(() => {
    //     const aLink = document.querySelectorAll(".tag-item");
    //     let links = []
    //     aLink.forEach((link) => {
    //         links.push(link.innerText)
    //     })

    //     return links;
    // })

    // const grabQuotes = await page.evaluate(() => {
    //     const quotes = document.querySelectorAll(".quote");
    //     let quotesArr = []
    //     quotes.forEach((quote) => {
    //         const quoteDetail = quote.querySelectorAll("span");
    //         const quoteText = quoteDetail[0]
    //         const quoteAuthor = quoteDetail[1].querySelector("small");

    //         quotesArr.push({
    //             text: quoteText.innerText, 
    //             author: quoteAuthor.innerText,
    //         })
    //     })

    //     return quotesArr;
    // })

    await page.click("a[href='/login']");
    await page.type("#username", "mhmdfjr", {delay: 100});
    await page.type("#password", "Fajar#123", {delay: 100});
    await page.click("input[value='Login']");

    // console.log(grabQuotes);
    // await browser.close()
})();