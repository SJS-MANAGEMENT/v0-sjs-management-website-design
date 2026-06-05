import type { Metadata } from 'next'
import { DM_Serif_Display, Inter } from 'next/font/google'
import './globals.css'

const dmSerifDisplay = DM_Serif_Display({
  variable: '--font-dm-serif',
  subsets: ['latin'],
  weight: '400',
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'SJS Management — Experts-Comptables',
  description:
    'SJS Management, cabinet d\'expertise comptable à votre service. Expertise comptable, commissariat aux comptes, conseil fiscal et juridique.',
  metadataBase: new URL('https://sjsmanagement.fr'),
  openGraph: {
    title: 'SJS Management — Experts-Comptables',
    description: 'Votre partenaire de confiance en expertise comptable.',
    url: 'https://sjsmanagement.fr',
    siteName: 'SJS Management',
    locale: 'fr_FR',
    type: 'website',
  },
  themeColor: '#F5F3EE',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="fr"
      className={`${dmSerifDisplay.variable} ${inter.variable} bg-background scroll-smooth`}
    >
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  )
}
