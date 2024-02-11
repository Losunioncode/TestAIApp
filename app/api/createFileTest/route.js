import { NextResponse } from "next/server"
import convertToPDF from "../(controllers)/translateToPDF"
import puppeteer from "puppeteer"



// export default async function (req, res) {

//     const browser = await puppeteer.launch()
//     const page = await browser.newPage()
//     const data = req.body
    
//     await page.emulateMediaType('screen')

//     const file_PDF = await convertToPDF(data)
    
//     console.log(file_PDF)
//     res.send(file_PDF)

//     await browser()
// }


export const POST = async (req, res) => {
    // Assuming 'data' should come from request body or query
    const { data } = await req.json()

    const response = NextResponse.next()

    if (!data) {
      return response.json({message: 'No data provided'}, {status: 401});
    }
  
    try {
      const pdf = await convertToPDF(data);
      console.log(pdf)
      response.headers.set('Content-Type', 'application/pdf');
      return response
    } catch (error) {
      console.error(error);
      return response
    }
  
}

