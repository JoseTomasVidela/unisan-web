import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";
import { AboutPage, ContactPage, IndustriesPage, QuotePage, SolutionPage, SolutionsPage } from "@/components/site-pages";

type Props={params:Promise<{slug:string[]}>};
export async function generateMetadata({params}:Props):Promise<Metadata>{
  const {slug}=await params;
  if(slug[0]==="soluciones"&&(slug[1]==="banos-quimicos"||slug[1]==="unidades-sanitarias"))return {title:"Baños químicos",description:"Arriendo y mantención de baños químicos, duchas y lavamanos para faenas, empresas y proyectos."};
  const label=slug.map(x=>x.replaceAll("-"," ")).join(" · ");
  return {title:label.charAt(0).toUpperCase()+label.slice(1),description:`Conoce las soluciones de UNISAN para ${label}.`};
}
export default async function RoutedPage({params}:Props){
  const {slug}=await params; const [first,second]=slug;
  if(first==="soluciones"&&second==="unidades-sanitarias")permanentRedirect("/soluciones/banos-quimicos");
  if(first==="soluciones"&&second)return <SolutionPage slug={second}/>;
  if(first==="soluciones")return <SolutionsPage/>;
  if(first==="industrias")return <IndustriesPage industry={second}/>;
  if(first==="nosotros")return <AboutPage/>;
  if(first==="contacto")return <ContactPage/>;
  if(first==="solicitar-cotizacion")return <QuotePage/>;
  return <SolutionsPage/>;
}
