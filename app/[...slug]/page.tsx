import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";
import { AboutPage, ContactPage, IndustriesPage, QuotePage, SolutionPage, SolutionsPage } from "@/components/site-pages";
import { AssetCategoryPage, AssetDetailPage, AssetsIndexPage, getAssetCategoryName, getAssetName } from "@/components/assets-catalog";

type Props={params:Promise<{slug:string[]}>};
const sanitaryAssetMetadata:Record<string,{title:string;description:string}>={
  "arnes-alzador":{title:"Arnés Alzador para Baños Químicos",description:"Conoce las características del arnés alzador de acero para izaje de baños químicos y revisa sus condiciones de arriendo."},
  "banos-minusvalidos":{title:"Baños Químicos Accesibles",description:"Revisa las características, medidas y condiciones de arriendo de los baños químicos accesibles disponibles en el catálogo de UNISAN."},
  "banos-quimicos-con-lavamanos":{title:"Baños Químicos con Lavamanos",description:"Baños químicos con lavamanos para arriendo mensual. Revisa sus características, medidas y condiciones de instalación."},
  "banos-quimicos-sin-lavamanos":{title:"Baños Químicos sin Lavamanos",description:"Baños químicos sin lavamanos con arriendo mensual y mantención según la frecuencia acordada. Revisa sus especificaciones."},
  "banos-sobre-carro":{title:"Baños Químicos sobre Carro",description:"Conoce las características de los baños químicos sobre carro, sus condiciones de arriendo y especificaciones de traslado."},
  "carro-urbano":{title:"Carro Urbano para Baños Químicos",description:"Revisa las características, medidas y condiciones de arriendo del carro urbano para traslado de baños químicos."},
  "casetas-de-vigilancia":{title:"Casetas de Vigilancia en Arriendo",description:"Conoce las características, medidas y condiciones de arriendo de las casetas de vigilancia disponibles en UNISAN."},
  "duchas-portatiles":{title:"Duchas Portátiles en Arriendo",description:"Revisa las características, medidas y condiciones de instalación y arriendo mensual de las duchas portátiles de UNISAN."},
  "lavamanos-portatiles":{title:"Lavamanos Portátiles en Arriendo",description:"Conoce las características, medidas y condiciones de instalación y arriendo mensual de los lavamanos portátiles de UNISAN."},
  "urinarios-simple-pasillo":{title:"Urinarios Portátiles en Arriendo",description:"Revisa las características, capacidad y condiciones de arriendo y mantención de los urinarios portátiles de UNISAN."},
};
export async function generateMetadata({params}:Props):Promise<Metadata>{
  const {slug}=await params;
  if(slug[0]==="soluciones"&&(slug[1]==="banos-quimicos"||slug[1]==="unidades-sanitarias"))return {title:"Arriendo de Baños Químicos",description:"Arriendo y mantención de baños químicos para empresas, construcción, minería y eventos. Conoce las soluciones de UNISAN y solicita una cotización."};
  if(slug[0]==="soluciones"&&slug[1]==="trailer-lujo-eventos")return {title:"Unibox",description:"Unibox, trailers y baños premium para eventos y proyectos temporales."};
  if(slug[0]==="soluciones"&&!slug[1])return {title:"Soluciones Ambientales y Baños Químicos",description:"Conoce las líneas de negocio de UNISAN: arriendo de baños químicos, gestión de residuos, economía circular, escombros, fosas y grasas."};
  if(slug[0]==="activos"&&!slug[1])return {title:"Equipos y Activos para Operaciones",description:"Explora equipos y activos para apoyar requerimientos sanitarios, ambientales y operativos, incluidos baños químicos y equipamiento complementario."};
  if(slug[0]==="activos"&&slug[1]==="categoria"&&slug[2]){
    const name=getAssetCategoryName(slug[2]);
    return {title:name||"Activos",description:name?`Explora ${name.toLowerCase()} en el catálogo de UNISAN.`:"Catálogo de activos de UNISAN."};
  }
  if(slug[0]==="activos"&&slug[1]){
    const optimized=sanitaryAssetMetadata[slug[1]];
    if(optimized)return optimized;
    const name=getAssetName(slug[1]);
    return {title:name||"Activos",description:name?`Ficha de ${name} recuperada del catálogo original de UNISAN.`:"Catálogo de activos de UNISAN."};
  }
  const label=slug.map(x=>x.replaceAll("-"," ")).join(" · ");
  return {title:label.charAt(0).toUpperCase()+label.slice(1),description:`Conoce las soluciones de UNISAN para ${label}.`};
}
export default async function RoutedPage({params}:Props){
  const {slug}=await params; const [first,second,third]=slug;
  if(first==="soluciones"&&second==="unidades-sanitarias")permanentRedirect("/soluciones/banos-quimicos");
  if(first==="soluciones"&&second)return <SolutionPage slug={second}/>;
  if(first==="soluciones")return <SolutionsPage/>;
  if(first==="activos"&&second==="categoria"&&third)return <AssetCategoryPage slug={third}/>;
  if(first==="activos"&&second)return <AssetDetailPage slug={second}/>;
  if(first==="activos")return <AssetsIndexPage/>;
  if(first==="industrias")return <IndustriesPage industry={second}/>;
  if(first==="nosotros")return <AboutPage/>;
  if(first==="contacto")return <ContactPage/>;
  if(first==="solicitar-cotizacion")return <QuotePage/>;
  return <SolutionsPage/>;
}
