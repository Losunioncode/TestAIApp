import "@/app/ui/globals.css"

import Footer from "@/components/layouts/Footer"
import Provider from "@/components/Provider"
import { Inter } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })
export const metadata = {
    title: "TestExamAI",
    description: "Make & Upload your Test Exams"

}

const RootLayout = ({ children }) => {
  return (
    
    
    <html lang="en">
        <body className="">
          <Provider>
                
                <main >
                    { children }
                </main>
                <div className="">
                    {/* <Footer /> */}
                </div>
          </Provider>
        </body>
    </html>
  )
}













export default RootLayout