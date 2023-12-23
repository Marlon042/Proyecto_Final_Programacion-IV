
import { Josefin_Sans  } from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar'

//const inter = Inter({ subsets: ['cyrillic-ext'] })
const josefinSans = Josefin_Sans({ subsets: ['latin-ext'] })
 
export const metadata = {
  title: 'Proyecto',
  description: 'Progra',
}

export default function RootLayout({children}:any){

  return (
    <html lang="en">
      <body className={josefinSans.className}> 
      <Navbar/>
        {children}
      </body>
    </html>
  )
}