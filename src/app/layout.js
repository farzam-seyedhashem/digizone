import './globals.css'
// import {Roboto_Flex} from 'next/font/google'
import {ThemeProvider} from "@/app/theme-provider";
// import 'grapesjs/dist/css/grapes.min.css';
// import 'swiper/css';
import { IranYekan } from '@/fonts'
import {ClerkProvider} from "@clerk/nextjs";


// const robotoFlex = IranYekan({subsets: ['greek'], variable: '--font-iran-yekan'})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({children}) {
  return (
      <ClerkProvider>
      <html lang="fa">

      <body  dir={"rtl"} className={`${IranYekan.className} font-sans`}>
      <ThemeProvider>
        {children}
      </ThemeProvider>
      </body>
      </html>
      </ClerkProvider>
  )
}
