
import './globals.css'
import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/providers/theme-provider';
import {Poppins} from 'next/font/google'
import { ConvexClientProvider } from '@/components/providers/convex-provider';
const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


export const metadata : Metadata = {
  title: 'Jotion',
  description: 'A Note Taking App',
  icons : {
    icon : [
      {
        media : "(prefers-color-scheme : light)" ,
        url : "/logo.svg",
        href : "/logo.svg" ,
      } ,
      {
        media : "(prefers-color-scheme : dark)" ,
        url : "/logo-dark.svg",
        href : "/logo-dark.svg" ,
      }
    ]

  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
   

<html className={`${poppins.variable}`} lang="en" suppressHydrationWarning>
      <body>
<ConvexClientProvider>


      <ThemeProvider
      attribute='class'
      defaultTheme='dark'
      enableSystem
      disableTransitionOnChange
      storageKey='jotion-theme'>
        {children}
      </ThemeProvider>
</ConvexClientProvider>
      </body>
    </html>
  
  )
}
