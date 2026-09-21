import type { Metadata } from "next";
import "./globals.css";
import "./seven-solutions.css";

export const metadata: Metadata = {
  title: { default: "UNISAN | Soluciones ambientales y sanitarias", template: "%s | UNISAN" },
  description: "Gestión de residuos, economía circular y servicios sanitarios para empresas, faenas y proyectos.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
