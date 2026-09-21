# Propuesta local de rediseño UNISAN

Prototipo navegable construido exclusivamente en local a partir del contenido público de `unisan.cl`. No publica, no escribe en sistemas productivos y el formulario solo simula un envío en el navegador.

## Ejecutar

Requiere Node.js 22 o superior.

```bash
npm install
npm run dev
```

Abrir `http://localhost:5173`.

Para validar una compilación:

```bash
npm run build
```

## Rutas

- `/`: home orientada a identificar necesidad y avanzar a solución o cotización.
- `/soluciones`: cuatro categorías principales.
- `/soluciones/gestion-de-residuos`
- `/soluciones/economia-circular`
- `/soluciones/servicios-sanitarios` (incluye un detalle completo de baño químico con lavamanos)
- `/soluciones/eventos-unibox`
- `/industrias` y páginas de minería, construcción, industria, agricultura y eventos.
- `/nosotros`
- `/contacto`
- `/solicitar-cotizacion`: formulario único, condicional y simulado.

## Estructura

- `app/`: layout, metadata, estilos globales y resolución de rutas.
- `components/site-pages.tsx`: contenido y composición de páginas. Aquí se editan textos, soluciones, industrias y campos del formulario.
- `components/site-shell.tsx`: header, navegación, footer y WhatsApp.
- `public/images/`: assets locales organizados en `home`, `solutions`, `industries`, `clients` y `brand`.
- `docs/current-site-audit.md`: auditoría de la web actual.
- `docs/url-mapping.md`: recomendación de URLs y redirecciones.
- `docs/assets-source.md`: procedencia de recursos gráficos.

## Qué es propuesta

- La agrupación en cuatro grandes soluciones y la navegación alternativa por industria.
- La jerarquía, redacción resumida, sistema visual, proceso de trabajo y flujo único de cotización.
- La organización del menú, ubicación del acceso de clientes y canal de denuncias.
- El formulario progresivo y su estado de éxito local.
- La arquitectura y composición son propuestas; el logo, la paleta, Poppins, Roboto y las imágenes de servicios provienen del sitio público original y se sirven localmente.

## Pendiente de validar antes de producción

- Archivo vectorial maestro del logo y manual formal de marca (el prototipo usa el recurso raster y los estilos publicados en el sitio actual).
- Historia, cifras, cobertura, infraestructura, flota y certificaciones.
- Perfiles sociales exactos y autorización/listado completo de clientes.
- Política de privacidad y consentimiento del formulario.
- Reglas de enrutamiento, destinatarios e integración del cotizador.
- Inventario SEO completo de WordPress y decisión final sobre páginas de detalle.
- Contenido técnico y alcance de cada industria con responsables UNISAN.

Los placeholders visibles con `[Contenido pendiente de validar]` son deliberados y evitan inventar información corporativa.
