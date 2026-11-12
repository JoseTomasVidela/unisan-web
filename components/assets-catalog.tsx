import catalogData from "@/data/activos-unisan.json";
import Link from "./simple-link";
import { SiteShell } from "./site-shell";

type Photo={local_path:string|null;source_url:string;verification:string};
type Asset={
  id:string;
  nombre:string;
  categoria_original:string;
  descripcion_original:string;
  caracteristicas_originales:string;
  especificaciones_originales:string;
  aplicaciones_y_usos_originales:string;
  fotografias:Photo[];
  estado_recuperacion:string;
  observaciones:string[];
};

type AssetCategory={slug:string;name:string;description:string;assetIds:string[];coverId:string;kind:"activos"|"servicios"};

const assets=(catalogData.activos as Asset[]);
const assetById=new Map(assets.map(asset=>[asset.id,asset]));

export const assetCategories:AssetCategory[]=[
  {
    slug:"banos-quimicos-y-equipamiento-sanitario",
    name:"Baños químicos y equipamiento sanitario",
    description:"Baños químicos y equipamiento sanitario complementario publicado por UNISAN.",
    coverId:"banos-quimicos-con-lavamanos",
    kind:"activos",
    assetIds:["arnes-alzador","banos-minusvalidos","banos-quimicos-con-lavamanos","banos-quimicos-sin-lavamanos","banos-sobre-carro","carro-urbano","casetas-de-vigilancia","duchas-portatiles","lavamanos-portatiles","urinarios-simple-pasillo"],
  },
  {
    slug:"unibox-y-traileres",
    name:"Unibox y tráileres",
    description:"Tráileres sanitarios para eventos y requerimientos de distinto estándar.",
    coverId:"trailer-gold",
    kind:"activos",
    assetIds:["trailer-gold","trailer-minusvalido","trailer-presidencial","trailer-silver","trailer-vip"],
  },
  {
    slug:"eventos-agua-e-higiene",
    name:"Equipamiento para eventos, agua e higiene",
    description:"Equipos de apoyo para higiene, agua potable y operación de eventos.",
    coverId:"puntos-de-agua",
    kind:"activos",
    assetIds:["contenedores-basura-120lt-1-1100lt","lavafondos","mudadores","puntos-de-agua","puntos-limpios-con-sin-monitores","suministro-agua-potable"],
  },
  {
    slug:"contenedores-y-tolvas",
    name:"Contenedores y tolvas",
    description:"Unidades de almacenamiento y manejo publicadas para distintos tipos de residuos.",
    coverId:"tolvas-abiertas",
    kind:"activos",
    assetIds:["alzacontenedores","bodegas-de-respel","contenedores-a-la-medida","tolvas-abiertas-5-a-12m3","tolvas-abiertas-5-a-30-metros","tolvas-abiertas","tolvas-cerradas-12-15","tolvas-cerradas","tolvas-estanco-para-lodo"],
  },
  {
    slug:"compactadores-y-maquinaria",
    name:"Compactadores y maquinaria",
    description:"Equipos y vehículos de apoyo para compactación, carga, traslado y procesamiento.",
    coverId:"camion-rampla-10-a-22-pallets",
    kind:"activos",
    assetIds:["autocompactadores-20m3","autocompactadores","cargas-tolvas-con-bobcat","chipeadoras","enfardadoras","camion-rampla-10-a-22-pallets"],
  },
  {
    slug:"puntos-limpios-y-segregacion",
    name:"Puntos limpios y segregación",
    description:"Equipamiento recuperado para separación y manejo de materiales valorizables.",
    coverId:"puntos-limpios",
    kind:"activos",
    assetIds:["atril-con-sacas","jaula-segregacion","puntos-limpios"],
  },
  {
    slug:"servicios-operativos-asociados",
    name:"Servicios operativos asociados",
    description:"Prestaciones publicadas en el catálogo original que corresponden a servicios y no a activos físicos.",
    coverId:"limpieza-hydrojet",
    kind:"servicios",
    assetIds:["destruccion-de-inventarios","limpieza-de-foodtruck","limpieza-hydrojet","manejo-de-organicos","personal-segregacion-en-origen","retiro-de-aguas-contaminadas","retiro-disposicion-aguas-servidas","retiro-disposicion-de-riles","retiro-disposicion-grasas-casino"],
  },
];

const categoryByAssetId=new Map(assetCategories.flatMap(category=>category.assetIds.map(id=>[id,category] as const)));

function imagePath(asset?:Asset){
  const photo=asset?.fotografias.find(item=>item.verification==="archivo_descargado"&&item.local_path);
  return photo?.local_path ? `/${photo.local_path.replace(/^public\//,"")}` : null;
}

function CatalogHero({title,lead,trail}:{title:string;lead:string;trail?:React.ReactNode}){
  return <section className="assets-hero"><div className="container"><nav className="asset-breadcrumb" aria-label="Migas de pan"><Link href="/">Inicio</Link><span>/</span><Link href="/activos">Activos</Link>{trail}</nav><p className="eyebrow">Catálogo UNISAN</p><h1>{title}</h1><p>{lead}</p></div></section>;
}

export function AssetCategoryCard({category}:{category:AssetCategory}){
  const cover=imagePath(assetById.get(category.coverId));
  return <Link className="asset-category-card" href={`/activos/categoria/${category.slug}`} style={cover?{"--asset-cover":`url(${cover})`} as React.CSSProperties:undefined}>
    <span className="asset-category-card-overlay"/>
    <span className="asset-category-card-content"><strong>{category.name}</strong><small>{category.assetIds.length} {category.kind==="servicios"?"servicios":"activos"}</small></span>
  </Link>;
}

export function AssetCategoryGrid(){
  return <div className="asset-category-grid">{assetCategories.map(category=><AssetCategoryCard category={category} key={category.slug}/>)}</div>;
}

export function AssetCard({asset}:{asset:Asset}){
  const image=imagePath(asset);
  return <Link className="asset-card" href={`/activos/${asset.id}`} aria-label={`Ver ficha de ${asset.nombre}`}>
    {image?<img src={image} alt={asset.nombre}/>:<div className="asset-image-placeholder" role="img" aria-label={`Fotografía pendiente para ${asset.nombre}`}>Imagen próximamente</div>}
    <div className="asset-card-copy"><h2>{asset.nombre}</h2><span>Ver ficha <b aria-hidden="true">↗</b></span></div>
  </Link>;
}

export function AssetsIndexPage(){
  return <SiteShell><CatalogHero title="Activos" lead="Catálogo de equipos, productos y prestaciones publicados por UNISAN para apoyar requerimientos sanitarios, ambientales y operativos."/>
    <section className="section assets-section"><div className="container"><div className="assets-intro"><div><p className="eyebrow">Explora por categoría</p><h2>Equipamiento y prestaciones organizados según su uso.</h2></div><p>Las categorías reúnen las 48 fichas recuperadas del catálogo original. Los servicios que no corresponden a un activo físico se presentan por separado.</p></div><AssetCategoryGrid/></div></section>
  </SiteShell>;
}

export function AssetCategoryPage({slug}:{slug:string}){
  const category=assetCategories.find(item=>item.slug===slug);
  if(!category)return <AssetsIndexPage/>;
  const categoryAssets=category.assetIds.map(id=>assetById.get(id)).filter((asset):asset is Asset=>Boolean(asset));
  return <SiteShell><CatalogHero title={category.name} lead={category.description} trail={<><span>/</span><span>{category.name}</span></>}/>
    <section className="section assets-section"><div className="container"><div className="asset-category-toolbar"><Link className="asset-back-link" href="/activos">← Volver a Activos</Link><span>{categoryAssets.length} {category.kind==="servicios"?"servicios":"activos"}</span></div><div className="asset-grid">{categoryAssets.map(asset=><AssetCard asset={asset} key={asset.id}/>)}</div></div></section>
  </SiteShell>;
}

function DetailSection({title,content}:{title:string;content:string}){
  if(!content)return null;
  return <section className="asset-detail-section"><h2>{title}</h2><p>{content}</p></section>;
}

export function AssetDetailPage({slug}:{slug:string}){
  const asset=assetById.get(slug);
  if(!asset)return <AssetsIndexPage/>;
  const category=categoryByAssetId.get(asset.id);
  const image=imagePath(asset);
  return <SiteShell whatsappContext={`el activo ${asset.nombre}`}><CatalogHero title={asset.nombre} lead={category?.description||"Ficha recuperada del catálogo original de UNISAN."} trail={<><span>/</span>{category&&<Link href={`/activos/categoria/${category.slug}`}>{category.name}</Link>}<span>/</span><span>{asset.nombre}</span></>}/>
    <section className="section asset-detail"><div className="container"><div className="asset-detail-top">
      <div className="asset-detail-media">{image?<img src={image} alt={asset.nombre}/>:<div className="asset-image-placeholder" role="img" aria-label={`Fotografía pendiente para ${asset.nombre}`}>Imagen próximamente</div>}</div>
      <div className="asset-detail-summary"><p className="eyebrow">Ficha de catálogo</p><h2>{asset.nombre}</h2><p className="asset-original-category">Categoría original: {asset.categoria_original}</p>{asset.descripcion_original&&<p>{asset.descripcion_original}</p>}<Link className="btn btn-primary" href="/solicitar-cotizacion">Solicitar cotización</Link></div>
    </div><div className="asset-detail-content"><DetailSection title="Características y condiciones" content={asset.caracteristicas_originales}/><DetailSection title="Especificaciones" content={asset.especificaciones_originales}/><DetailSection title="Aplicaciones y usos" content={asset.aplicaciones_y_usos_originales}/>{asset.estado_recuperacion!=="completa"&&<aside className="asset-recovery-note"><strong>Ficha recuperada parcialmente</strong><p>{asset.observaciones.join(" ")}</p></aside>}</div>
    {category&&<nav className="asset-detail-nav" aria-label="Navegación del catálogo"><Link href={`/activos/categoria/${category.slug}`}>← Volver a {category.name}</Link><Link href="/activos">Ver todas las categorías</Link></nav>}</div></section>
  </SiteShell>;
}

export function getAssetName(slug:string){return assetById.get(slug)?.nombre;}
export function getAssetCategoryName(slug:string){return assetCategories.find(category=>category.slug===slug)?.name;}
