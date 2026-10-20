"use client";

import { useState } from "react";
import Link from "./simple-link";

export function Logo({inverse=false}:{inverse?:boolean}) {
  const source=inverse ? "/images/unisan/brand/unisan-logo-footer.png" : "/images/unisan/brand/unisan-logo.jpg";
  return <Link href="/" className={`logo${inverse ? " logo-inverse" : ""}`} aria-label="UNISAN, inicio"><img src={source} alt="UNISAN"/></Link>;
}

export function Header() {
  const [open,setOpen] = useState(false);
  return <>
    <div className="topbar"><div className="container topbar-inner"><span>Soluciones ambientales y baños químicos para tu operación</span><a href="https://clientes.unisan.cl/">Acceso Clientes ↗</a></div></div>
    <header className="header"><nav className="container nav" aria-label="Navegación principal">
      <Logo/>
      <div className={`nav-links ${open ? "open" : ""}`}>
        <Link href="/soluciones">Soluciones</Link>
        <Link href="/nosotros">Nosotros</Link>
        <Link href="/contacto">Contacto</Link>
        <div className="mobile-nav-cta"><Link className="btn btn-primary" href="/solicitar-cotizacion">Solicitar cotización <span className="arrow">↗</span></Link></div>
      </div>
      <Link className="btn btn-primary header-quote" href="/solicitar-cotizacion">Solicitar cotización <span className="arrow">↗</span></Link>
      <button className="menu-button" aria-expanded={open} aria-label="Abrir menú" onClick={()=>setOpen(!open)}>{open ? "×" : "☰"}</button>
    </nav></header>
  </>;
}

export function Footer({whatsappContext}:{whatsappContext?:string}) {
  return <footer className="footer"><div className="container">
    <div className="footer-grid">
      <div className="footer-column footer-brand"><Logo inverse/><p>Gestión de residuos, economía circular y arriendo de baños químicos para empresas, faenas mineras y eventos.</p><address><span>Las Esteras Norte 2351, Quilicura</span><a href="tel:+56225772400">+56 2 2577 2400</a><a href="mailto:contacto@unisan.cl">contacto@unisan.cl</a></address></div>
      <nav className="footer-column" aria-label="Soluciones del footer"><h3>Soluciones</h3><Link href="/soluciones/banos-quimicos">Baños químicos</Link><Link href="/soluciones/trailer-lujo-eventos">Unibox</Link><Link href="/soluciones/manejo-fosas-grasas">Fosas y grasas</Link><Link href="/soluciones/economia-circular">Economía circular</Link><Link href="/soluciones/residuos-industriales">Residuos industriales</Link><Link href="/soluciones/manejo-escombros">Escombros</Link><Link href="/soluciones/residuos-peligrosos">Residuos peligrosos</Link></nav>
      <nav className="footer-column" aria-label="UNISAN en el footer"><h3>UNISAN</h3><Link href="/nosotros">Nosotros</Link><Link href="/contacto">Contacto</Link><a href="https://www.eticaunisan.cl/" target="_blank" rel="noopener noreferrer">Canal de Denuncias ↗</a><Link href="/solicitar-cotizacion">Solicitar cotización</Link><a href="https://clientes.unisan.cl/" target="_blank" rel="noopener noreferrer">Acceso Clientes ↗</a></nav>
      <nav className="footer-column" aria-label="Más información"><h3>Más información</h3><a href="https://www.instagram.com/unisan_uniboxs/" target="_blank" rel="noopener noreferrer">Instagram ↗</a><a href="https://www.linkedin.com/company/unisan-chile" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></nav>
    </div>
    <div className="footer-bottom"><span>© 2026 UNISAN. Todos los derechos reservados.</span><span>Soluciones para una gestión responsable.</span></div>
    <WhatsApp context={whatsappContext}/>
  </div></footer>;
}

export function WhatsApp({context}:{context?:string}) {
  const message=context ? `Hola, estoy revisando ${context} y quisiera conversar con alguien de UNISAN.` : "Hola, quisiera comunicarme con UNISAN para realizar una consulta.";
  return <a className="whatsapp" href={`https://wa.me/56225772406?text=${encodeURIComponent(message)}`} aria-label="Habla con Nosotros por WhatsApp"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.149-.173.198-.297.298-.496.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.273.297-1.04 1.016-1.04 2.479s1.065 2.875 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.99c-.003 5.45-4.437 9.884-9.887 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.14 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg></a>;
}

export function SiteShell({children,whatsappContext}:{children:React.ReactNode;whatsappContext?:string}) {
  return <><Header/><main>{children}</main><Footer whatsappContext={whatsappContext}/></>;
}
