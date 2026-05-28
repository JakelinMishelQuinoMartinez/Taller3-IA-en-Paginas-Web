# 🎓 EduTrack - Plataforma EdTech

Plataforma educativa completa para cursos de tecnología online dirigida a profesionales colombianos.

**Desarrollado como taller integrado de IA en páginas web con Prompt Engineering y validación de datasets sintéticos.**

---

## 📋 Contenido del Proyecto

### **FASE 1: Landing Page** ✅
- Archivo: `index.html` + `styles.css`
- Presenta la plataforma con llamadas a la acción
- Secciones: Hero, Cursos, Estadísticas, Testimonios, Registro, Footer
- Diseño responsive (mobile-first, tablet, desktop)
- Botón WhatsApp flotante en móvil
- Tipografía desde Google Fonts (Inter, Space Grotesk)

### **FASE 2: Dashboard del Estudiante** ✅
- Archivo: `dashboard.html` + `dashboard-styles.css` + `dashboard-script.js`
- Panel principal para estudiantes autenticados
- Sidebar navegable (colapsable en móvil)
- 3 tarjetas KPI: Cursos Activos, Progreso Promedio, Próximo Vencimiento
- Tabla de cursos con 6 columnas responsiva
- Menú hamburguesa funcional con JavaScript vanilla

### **FASE 3: Dataset de Estudiantes** ✅
- Archivo: `dataset.json`
- 35 registros de estudiantes colombianos
- Campos: id, nombre, email, ciudad, curso, progreso, fechaInscripcion, plan, montoUSD, activo
- Validación de restricciones (IDs únicos, emails válidos, montos coherentes con planes, etc.)
- Distribución realista: más estudiantes en Bogotá y Medellín
- Al menos 5 estudiantes inactivos

### **FASE 4: Validación Programática** ✅
- Archivo: `validacion.js`
- Clase `DatasetValidator` que verifica:
  - Estructura del dataset
  - Unicidad de IDs y emails
  - Rangos de valores (progreso 0-100, fechas válidas)
  - Coherencia plan-monto (básico=29, estándar=59, premium=99)
  - Cantidad de estudiantes inactivos
- Genera reporte detallado con errores y advertencias

### **FASE 5: Visualización + CRUD + localStorage** ✅
- Archivo: `app.html` + `app-styles.css` + `main.js`
- **Visualización en Grid:**
  - Cards de estudiantes con avatar, nombre, email, ciudad, curso, progreso (barra), plan, estado
  
- **Búsqueda y Filtros:**
  - Input de búsqueda en tiempo real (nombre/email)
  - Filter por ciudad (Bogotá, Medellín, Cali, Barranquilla, Cartagena)
  - Filter por plan (básico, estándar, premium)
  - Combinación simultánea de todos los filtros
  
- **CRUD Completo:**
  - Agregar estudiante (modal con validación)
  - Editar estudiante (precarga datos en modal)
  - Eliminar con confirmación
  - Validación de formulario (nombre 2-60 chars, email único, etc.)
  
- **Persistencia:**
  - localStorage con clave `edutrack_estudiantes`
  - Carga automática al iniciar
  - Sincronización en cada operación
  
- **Gráfico:**
  - Chart.js: Gráfico de barras con estudiantes por ciudad
  - Actualiza dinámicamente con CRUD

---

## 🚀 Cómo Usar

### **1. Ver Landing Page**
```
Abre: index.html
```
- Navega entre secciones con scroll suave
- Completa el formulario de registro
- Botón WhatsApp disponible en móvil

### **2. Ver Dashboard**
```
Abre: dashboard.html
```
- Panel de control de estudiante
- Sidebar con navegación
- KPIs y tabla de cursos activos
- Responsivo en móvil (menú hamburguesa)

### **3. Gestionar Estudiantes**
```
Abre: app.html
```
- Visualiza todos los estudiantes en formato de cards
- Busca por nombre o email
- Filtra por ciudad y plan
- Agregar nuevo estudiante (+)
- Editar estudiante (✏️)
- Eliminar estudiante (🗑️)
- Ve el gráfico de distribución por ciudad

### **4. Validar Dataset**
```
En la consola del navegador (F12):
- Abre app.html
- Abre DevTools > Console
- Se ejecuta automáticamente y muestra el reporte
```

O ejecuta manualmente en Node.js:
```javascript
const DatasetValidator = require('./validacion.js');
const dataset = require('./dataset.json');
const validator = new DatasetValidator(dataset);
const report = validator.printReport();
```

---

## 📁 Estructura de Archivos

```
.
├── index.html                    # Landing page
├── styles.css                    # Estilos landing
├── dashboard.html               # Panel estudiante
├── dashboard-styles.css         # Estilos dashboard
├── dashboard-script.js          # Lógica dashboard
├── app.html                     # Gestor de estudiantes
├── app-styles.css               # Estilos app
├── main.js                      # Lógica CRUD + localStorage
├── dataset.json                 # 35 registros de estudiantes
├── validacion.js                # Validación de dataset
└── README.md                    # Este archivo
```

---

## 🎨 Paleta de Colores

| Nombre | Hex | Uso |
|--------|-----|-----|
| Primario | #2563EB | Botones, bordes activos |
| Primario Hover | #3B82F6 | Estados hover |
| Acento | #FACC15 | Badges, highlights |
| BG Primario | #0F172A | Fondo principal |
| BG Secundario | #1E293B | Tarjetas, modales |
| Texto Primario | #F8FAFC | Texto principal |
| Texto Secundario | #CBD5E1 | Texto secundario |
| Éxito | #25D366 | Estados activos (verde) |
| Error | #EF4444 | Eliminación, inactivos |

---

## 📊 Dataset - Estructura

### Campos
```json
{
  "id": 1,
  "nombre": "Ana Martínez",
  "email": "ana.martinez@gmail.com",
  "ciudad": "Bogotá",
  "curso": "JavaScript Avanzado",
  "progreso": 78,
  "fechaInscripcion": "2024-02-10",
  "plan": "premium",
  "montoUSD": 99,
  "activo": true
}
```

### Validaciones Aplicadas
- **ID**: Único, entero > 0
- **Nombre**: 2-60 caracteres
- **Email**: Formato válido, único
- **Ciudad**: Bogotá, Medellín, Cali, Barranquilla, Cartagena
- **Curso**: 10 cursos válidos predefinidos
- **Progreso**: 0-100 (entero)
- **Fecha**: 2023-01-01 a 2025-05-01 (formato YYYY-MM-DD)
- **Plan**: básico, estándar, premium
- **MontoUSD**: Coherente con plan (29, 59, 99)
- **Activo**: Booleano

---

## 🔧 Tecnologías

| Tecnología | Versión | Uso |
|------------|---------|-----|
| HTML5 | - | Estructura semántica |
| CSS3 | - | Estilos puros (sin frameworks) |
| JavaScript | ES6+ | Lógica, CRUD, localStorage |
| Google Fonts | - | Tipografía (Inter, Space Grotesk) |
| Chart.js | v3+ | Gráficos de datos |

---

## 📱 Responsividad

### Breakpoints
- **Mobile**: < 768px (sidebar oculto, grid 1 columna)
- **Tablet**: 768px - 1023px (grid 2 columnas)
- **Desktop**: ≥ 1024px (grid 3 columnas, sidebar visible)

### Mobile-First Approach
- Estilos base para móvil
- @media queries para pantallas más grandes
- Menú hamburguesa en dashboard
- Tabla responsiva (oculta columnas no críticas)

---

## 💾 localStorage

### Clave: `edutrack_estudiantes`
```javascript
// Se guarda automáticamente después de cada operación
localStorage.setItem('edutrack_estudiantes', JSON.stringify(estudiantes));

// Se carga al iniciar app.html
const stored = localStorage.getItem('edutrack_estudiantes');
```

### Datos Guardados
- Array completo de estudiantes
- Todos los cambios (CRUD) se persisten
- Si no existe, se carga `dataset.json` automáticamente

---

## 🎯 Funciones Clave

### `main.js` - EduTrackApp
```javascript
new EduTrackApp()           // Inicialización
await cargarDatos()         // Carga localStorage o dataset
guardarDatos()              // Persistencia
renderizarCards(lista)      // Renderiza cards dinámicamente
filtrar()                   // Búsqueda + filtros
abrirModal(id)              // Modal agregar/editar
guardarEstudiante()         // CRUD - Crear/Actualizar
eliminarEstudiante(id)      // CRUD - Eliminar
actualizarGrafico()         // Chart.js - Actualizar gráfico
```

### `validacion.js` - DatasetValidator
```javascript
new DatasetValidator(dataset)   // Inicialización
validate()                      // Ejecuta todas las validaciones
validateIds()                   // Verifica unicidad
validateEmails()                // Email válido y único
validatePlanes()                // Plan en lista válida
validateConsistenciaPlanMonto() // Monto coherente
printReport()                   // Imprime en consola
```

### `dashboard-script.js` - DashboardManager
```javascript
new DashboardManager()      // Inicialización
toggleSidebar()             // Abre/cierra sidebar
openSidebar() / closeSidebar()
switchSection(sectionId)    // Cambia sección activa
logout()                    // Cierre de sesión
```

---

## ✅ Checklist de Requisitos Cumplidos

### Fase 1: Landing Page
- [x] Secciones: Hero, Cursos, Estadísticas, Testimonios, Registro, Footer
- [x] Variables CSS en :root
- [x] Flexbox/Grid (sin floats)
- [x] Mobile-first con 2+ breakpoints
- [x] Botón WhatsApp flotante
- [x] Tipografía Google Fonts
- [x] Scroll suave

### Fase 2: Dashboard
- [x] Sidebar fijo 240px
- [x] 4+ items de navegación
- [x] 3 tarjetas KPI
- [x] Tabla 6 columnas x 5 filas
- [x] Sidebar colapsable JavaScript
- [x] Responsivo (<768px oculta sidebar)

### Fase 3: Dataset
- [x] 35 registros válidos
- [x] IDs únicos y consecutivos
- [x] Emails válidos y únicos
- [x] Montos coherentes con planes
- [x] Fechas en rango válido
- [x] Distribución realista (Bogotá/Medellín mayoritarios)
- [x] 5+ estudiantes inactivos

### Fase 4: Validación
- [x] Valida estructura
- [x] Valida IDs únicos
- [x] Valida emails
- [x] Valida rangos (progreso, fechas)
- [x] Valida consistencia plan-monto
- [x] Genera reporte detallado

### Fase 5: CRUD + localStorage
- [x] Renderizado en grid de cards
- [x] Búsqueda en tiempo real
- [x] Filtros por ciudad y plan
- [x] Agregar estudiante (modal)
- [x] Editar estudiante
- [x] Eliminar con confirmación
- [x] localStorage automático
- [x] Gráfico Chart.js

---

## 🎓 Técnicas de Prompt Engineering Aplicadas

1. **Priming**: Contexto inicial establecido ("Eres un desarrollador senior...")
2. **Chain of Thought**: Propuesta de diseño paso a paso
3. **Prompts en Cascada**: HTML → CSS → JavaScript
4. **Few-Shot**: Ejemplos iniciales para dataset
5. **Meta-Prompting**: Instrucciones sobre instrucciones
6. **Negative Prompting**: "No uses Bootstrap, no uses tablas para layout..."
7. **Role Prompting**: Actuación como UX/UI designer
8. **One-Shot**: Registro de ejemplo para generar dataset

---

## 📝 Notas Importantes

- **Sin frameworks frontend**: Todo es HTML/CSS/JS vanilla
- **Sin Bootstrap/Tailwind**: CSS puro con variables
- **Validación programática**: No solo HTML5 validation
- **localStorage**: Datos persistentes en el navegador
- **Responsive**: Probado en mobile, tablet, desktop
- **Accesibilidad**: Labels, ARIA labels, navegación clara
- **Performance**: Lazy rendering, eficiente DOM manipulation

---

## 🔮 Futuras Mejoras

- [ ] Backend API (Node.js + Express)
- [ ] Autenticación real (JWT)
- [ ] Más gráficos y estadísticas
- [ ] Certificados descargables
- [ ] Sistema de comentarios
- [ ] Notificaciones en tiempo real
- [ ] Exportar datos (CSV, PDF)
- [ ] Modo oscuro/claro

---

## 👨‍💻 Autor

Desarrollado como proyecto educativo de taller integrado con IA.

**Tecnologías**: HTML5 | CSS3 | JavaScript ES6+ | Chart.js | localStorage

---

## 📄 Licencia

Proyecto educativo - Libre para uso académico.

---

**Última actualización**: Mayo 2026
