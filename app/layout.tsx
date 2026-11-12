import type { Metadata } from "next";
import "./globals.css";
import "./seven-solutions.css";

export const metadata: Metadata = {
  title: { default: "Arriendo de Baños Químicos y Gestión de Residuos | UNISAN", template: "%s | UNISAN" },
  description: "Arriendo de baños químicos para empresas, construcción, minería y eventos, junto con soluciones ambientales y gestión de residuos de UNISAN.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
