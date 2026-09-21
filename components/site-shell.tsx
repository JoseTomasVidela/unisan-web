"use client";

import Link from "next/link";
import { useState } from "react";

export function Logo({inverse=false}:{inverse?:boolean}) {
  return inverse
    ? <Link href="/" className="logo logo-inverse" aria-label="UNISAN, inicio"><span>UNISAN</span><small>Soluciones Sustentables para la Gestión de Residuos</small></Link>
    : <Link href="/" className="logo" aria-label="UNISAN, inicio"><img src="/images/unisan/brand/unisan-logo.jpg" alt="UNISAN"/></Link>;
}

export function Header() {
  const [open,setOpen] = useState(false);
  return <>
    <div className="topbar"><div className="container topbar-inner"><span>Soluciones ambientales y sanitarias para tu operación</span><a href="https://clientes.unisan.cl/">Acceso Clientes ↗</a></div></div>
    <header className="header"><nav className="container nav" aria-label="Navegación principal">
      <Logo/>
      <div className={`nav-links ${open ? "open" : ""}`}>
        <Link href="/soluciones" onClick={()=>setOpen(false)}>Soluciones</Link>
        <Link href="/nosotros" onClick={()=>setOpen(false)}>Nosotros</Link>
        <Link href="/contacto" onClick={()=>setOpen(false)}>Contacto</Link>
        <Link className="mobile-client" href="https://clientes.unisan.cl/">Acceso Clientes ↗</Link>
      </div>
      <Link className="btn btn-primary" href="/solicitar-cotizacion">Solicitar cotización <span className="arrow">↗</span></Link>
      <button className="menu-button" aria-expanded={open} aria-label="Abrir menú" onClick={()=>setOpen(!open)}>{open ? "×" : "☰"}</button>
    </nav></header>
  </>;
}

export function Footer() {
  return <footer className="footer"><div className="container">
    <div className="footer-grid">
      <div><Logo inverse/><p>Gestión de residuos, economía circular y servicios sanitarios para empresas, faenas y proyectos.</p><p>Las Esteras Norte 2351, Quilicura<br/><a href="tel:+56225772400">+56 2 2577 2400</a><br/><a href="mailto:contacto@unisan.cl">contacto@unisan.cl</a></p></div>
      <div><h3>Soluciones</h3><Link href="/soluciones/unidades-sanitarias">Unidades sanitarias</Link><Link href="/soluciones/trailer-lujo-eventos">Trailer de lujo / Eventos</Link><Link href="/soluciones/manejo-fosas-grasas">Fosas y grasas</Link><Link href="/soluciones/economia-circular">Economía circular</Link><Link href="/soluciones/residuos-industriales">Residuos industriales</Link><Link href="/soluciones/manejo-escombros">Escombros</Link><Link href="/soluciones/residuos-peligrosos">Residuos peligrosos</Link></div>
      <div><h3>UNISAN</h3><Link href="/nosotros">Nosotros</Link><Link href="/contacto">Contacto</Link><Link href="/solicitar-cotizacion">Solicitar cotización</Link><a href="https://clientes.unisan.cl/">Acceso Clientes ↗</a></div>
      <div><h3>Más información</h3><a href="https://www.eticaunisan.cl/">Canal de Denuncias ↗</a><a href="https://www.instagram.com/unisan_uniboxs/">Instagram ↗</a><a href="https://www.linkedin.com/company/unisan-chile">LinkedIn ↗</a></div>
    </div>
    <div className="footer-bottom"><span>© 2026 UNISAN. Todos los derechos reservados.</span><span>Soluciones para una gestión responsable.</span></div>
  </div></footer>;
}

export function WhatsApp({context}:{context?:string}) {
  const message=context ? `Hola, estoy revisando ${context} y quisiera conversar con alguien de UNISAN.` : "Hola, quisiera comunicarme con UNISAN para realizar una consulta.";
  return <a className="whatsapp" href={`https://wa.me/56225772406?text=${encodeURIComponent(message)}`} aria-label="Contactar por WhatsApp"><b>◉</b><span>Hablar con nosotros</span></a>;
}

export function SiteShell({children,whatsappContext}:{children:React.ReactNode;whatsappContext?:string}) {
  return <><Header/><main>{children}</main><Footer/><WhatsApp context={whatsappContext}/></>;
}
