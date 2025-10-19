import "./globals.css"
import { brandHead, brandBody } from "./fonts"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export const metadata = {
  title: "Safety & Work – Consultores de Seguridad e Higiene",
  description: "Prevención de accidentes y excelencia operacional para la industria.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
 