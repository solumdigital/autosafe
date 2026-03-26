# AutoSafe Blindajes — Sitio Web (Wireframe Navegable)

**Versión:** 1.0  
**Última actualización:** Marzo 2025  
**Desarrollado por:** Dirección de Marketing — AutoSafe Blindajes

---

## Estructura del Proyecto

```
autosafe-site/
├── index.html          # Página principal (SPA con routing JS)
├── css/
│   └── style.css       # Estilos del sitio (paleta AutoSafe + componentes)
├── js/
│   └── main.js         # Navegación SPA + slider hero
├── img/
│   ├── logo-black.svg  # Logo para header (fondo claro)
│   ├── logo-white.svg  # Logo para footer (fondo oscuro)
│   ├── hero-slide-1.jpg # Hero: LC 300 estudio
│   ├── hero-slide-2.jpg # Hero: Flota Bogotá atardecer
│   ├── hero-slide-3.jpg # Hero: Interior premium
│   ├── hero-slide-4.jpg # Hero: Familia protegida
│   └── workshop.jpg     # Sección Nosotros: taller
└── README.md
```

## Páginas Incluidas

| Página | Descripción |
|--------|-------------|
| Home | Hero slider (4 slides), servicios, por qué elegirnos, testimonios, certificaciones, CTA |
| Nosotros | Historia, timeline, presencia internacional, misión/visión, diferenciadores |
| Servicios | Blindaje (3 niveles), mantenimiento, Safe Glass, proyectos especiales |
| Blog | Artículos, casos de éxito, galería de marcas |
| Artículo (plantilla) | Layout completo con sidebar, compartir, artículos relacionados |
| Caso de Éxito (plantilla) | Ficha técnica, estadísticas, galería, testimonial |
| Pago en Línea | Métodos de pago (PSE, PayPal, TC), placeholder de pasarela |
| Contáctenos | Formulario de cotización, datos de contacto, mapa, redes |
| Aviso de Privacidad | Ley 1581 de 2012, 10 secciones, placeholders jurídicos |
| Términos y Condiciones | 11 secciones, legislación colombiana, placeholders jurídicos |

## Notas Técnicas

- **SPA (Single Page Application):** Toda la navegación se maneja con JavaScript sin recargar la página.
- **Responsive:** Diseñado mobile-first con breakpoints en 768px y 1024px.
- **Dependencias externas:** Google Fonts (Montserrat Alternates, Open Sans) y Font Awesome 6 via CDN.
- **Placeholders `{{VARIABLE}}`:** Los documentos legales contienen variables para completar con datos reales.
- **Producción WordPress:** La estructura modular está diseñada para migrar a Elementor sección por sección.

## Paleta de Marca

| Color | HEX | Uso |
|-------|-----|-----|
| Celeste | #B8ECE5 | Fondos claros, acentos |
| Dark Cyan | #009C9C | Botones, CTAs |
| Caribbean | #006A70 | Encabezados |
| Midnight Green | #004C59 | Fondos oscuros |
| Jet | #2B2D2F | Textos, footer |
| Gold | #C8A84B | Acentos premium |

## Deploy

### GitHub Pages
```bash
git init
git add .
git commit -m "AutoSafe wireframe v1.0"
git branch -M main
git remote add origin https://github.com/[usuario]/autosafe-site.git
git push -u origin main
# Activar GitHub Pages en Settings > Pages > Source: main / root
```

### Hosting tradicional
Subir toda la carpeta al directorio raíz del hosting vía FTP/SFTP.

---

© 2026 AutoSafe Blindajes S.A. — Parte de WBA Security Group
