import puppeteer from 'puppeteer'

const convertToPDF = async (data) => {
    const browser = await puppeteer.launch({ headless: 'new' })
    const page = await browser.newPage()
    await page.setContent(data, { waitUntil: 'domcontentloaded'})

    const pdfBuffer = await page.pdf({
        format: 'A4',
        printBackground: true
    })

    return pdfBuffer

    
}

export default convertToPDF