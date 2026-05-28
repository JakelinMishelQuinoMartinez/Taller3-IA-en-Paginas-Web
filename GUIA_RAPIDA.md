# 🚀 GUÍA RÁPIDA - EduTrack

## ¿Qué es EduTrack?

Plataforma EdTech completa para cursos de tecnología online, desarrollada como proyecto integrado de IA con todas las técnicas de Prompt Engineering aplicadas.

---

## 📂 Estructura del Proyecto

```
edutrack/
├── index.html                    # Landing page principal
├── styles.css                    # Estilos landing
├── dashboard.html               # Panel estudiante
├── dashboard-styles.css         # Estilos dashboard
├── dashboard-script.js          # Lógica dashboard
├── app.html                     # Gestor de estudiantes
├── app-styles.css               # Estilos app
├── main.js                      # CRUD + localStorage
├── dataset.json                 # 35 estudiantes
├── validacion.js                # Validación de datos
├── README.md                    # Documentación completa
├── VERIFICACION.html            # Este archivo
└── GUIA_RAPIDA.md              # Instrucciones uso
```

---

## ⚡ 5 Formas de Usar EduTrack

### 1️⃣ **Ver Landing Page**
```
Abre: index.html

Qué verás:
✓ Hero con CTA
✓ 6 Cursos destacados
✓ Estadísticas (1.200+ estudiantes, 98%, 40 cursos)
✓ 3 Testimonios
✓ Formulario registro
✓ Footer con redes
✓ Botón WhatsApp flotante (móvil)

Interacción:
- Navega secciones con scroll suave
- Completa el formulario
- Ve responsive en móvil
```

### 2️⃣ **Ver Dashboard Estudiante**
```
Abre: dashboard.html

Qué verás:
✓ Sidebar fijo con navegación
✓ 3 KPI Cards (Cursos, Progreso, Vencimiento)
✓ Tabla con 5 cursos activos
✓ Badges de estado (azul/verde/amarillo)

Interacción (Móvil):
- Click ☰ para abrir sidebar
- Click ✕ para cerrar
- Click fuera cierra automáticamente
```

### 3️⃣ **Gestionar Estudiantes**
```
Abre: app.html

Qué verás:
✓ Grid con 35 estudiantes en cards
✓ Buscador en tiempo real
✓ Filtros por ciudad y plan
✓ Botones Editar/Eliminar en cada card
✓ Botón "+ Agregar Estudiante"
✓ Gráfico de barras por ciudad

Acciones CRUD:
- Busca por nombre/email
- Filtra por ciudad: Bogotá, Medellín, Cali, Barranquilla, Cartagena
- Filtra por plan: Básico, Estándar, Premium
- Agregar: Click + → Completa modal → Guardar
- Editar: Click ✏️ en card → Edita modal → Guardar
- Eliminar: Click 🗑️ → Confirma → Listo
- Los datos se guardan en localStorage automáticamente
```

### 4️⃣ **Ver Datos en JSON**
```
Abre: dataset.json

Qué verás:
Array de 35 estudiantes con:
- ID, nombre, email
- Ciudad (Bogotá, Medellín, Cali, Barranquilla, Cartagena)
- Curso (10 opciones)
- Progreso (0-100%)
- Fecha inscripción (2023-2025)
- Plan (básico, estándar, premium)
- Monto USD (29, 59, 99)
- Activo (true/false)
```

### 5️⃣ **Validar Integridad**
```
Abre: app.html
Presiona: F12 (DevTools)
Ve: Console

Qué verás automáticamente:
✓ Reporte de validación del dataset
✓ Total registros
✓ Errores encontrados (0 idealmente)
✓ Advertencias
✓ Estado: ✅ VÁLIDO o ❌ INVÁLIDO

Validaciones automáticas:
- IDs únicos y consecutivos
- Emails válidos y únicos
- Montos coherentes con planes
- Fechas en rango válido
- Estudiantes inactivos >= 5
```

---

## 🎯 Casos de Uso

### Caso 1: **Instructor** 👨‍🏫
```
1. Abre app.html
2. Ve todos los estudiantes en cards
3. Busca un estudiante específico
4. Filtra por ciudad/plan para análisis
5. Ve gráfico de distribución
6. Actualiza estado de estudiantes (✏️)
```

### Caso 2: **Administrador** 👨‍💼
```
1. Abre app.html
2. Agrega nuevos estudiantes (+)
3. Edita datos existentes (✏️)
4. Elimina estudiantes inactivos (🗑️)
5. Los cambios se guardan automáticamente
6. Ve reportes en gráficos
```

### Caso 3: **Estudiante** 👨‍🎓
```
1. Abre landing page (index.html)
2. Lee sobre cursos disponibles
3. Ve testimonios de otros estudiantes
4. Completa formulario de registro
5. Accede a dashboard.html
6. Ve sus cursos y progreso
```

### Caso 4: **QA Tester** 🧪
```
1. Abre VERIFICACION.html
2. Lee checklist de requisitos
3. Prueba responsivo en móvil
4. Abre DevTools Console en app.html
5. Verifica reporte de validación
6. Prueba CRUD (crear, editar, eliminar)
7. Verifica localStorage (abre DevTools > Application)
```

---

## 🎨 Características Visuales

### Colores
```
Primario:      #2563EB (Azul)
Acento:        #FACC15 (Amarillo)
Éxito:         #25D366 (Verde)
Error:         #EF4444 (Rojo)
BG Principal:  #0F172A (Azul oscuro)
Texto:         #F8FAFC (Blanco)
```

### Tipografía
```
Headings: Space Grotesk (bold, 600-700)
Body:     Inter (regular, 400-500)
```

### Responsive
```
Móvil:   < 768px  → 1 columna, sidebar oculto
Tablet:  768-1024 → 2 columnas
Desktop: > 1024px → 3 columnas, sidebar visible
```

---

## 🔐 Datos en localStorage

Los datos se guardan automáticamente en:
```
localStorage.getItem('edutrack_estudiantes')
```

### Para limpiar datos (resetear):
```javascript
// En DevTools Console:
localStorage.removeItem('edutrack_estudiantes');
location.reload();
```

---

## ❓ Preguntas Frecuentes

### P1: ¿Cómo agrego un nuevo estudiante?
**R:** Abre `app.html`, click en "+ Agregar Estudiante", completa el formulario y click "Guardar".

### P2: ¿Los datos se pierden si cierro el navegador?
**R:** No. Están guardados en localStorage. Se cargan automáticamente al abrir la página.

### P3: ¿Cómo borro todos los datos y empiezo de nuevo?
**R:** F12 → Console → `localStorage.removeItem('edutrack_estudiantes')` → Reload página.

### P4: ¿Puedo usar esto en producción?
**R:** Como MVP sí. Para producción necesitarías: backend API, base de datos, autenticación real.

### P5: ¿Funciona sin internet?
**R:** Sí, excepto las imágenes placeholder y Google Fonts (podrían estar en caché).

### P6: ¿Qué navegadores soporta?
**R:** Chrome, Firefox, Safari, Edge (cualquier navegador moderno con ES6 y localStorage).

---

## 🚨 Troubleshooting

### "La tabla no se ve"
```
→ Abre app.html (no dashboard.html)
→ Los datos se cargan en grid de cards, no tabla
```

### "No veo el gráfico"
```
→ Espera a que cargue Chart.js desde CDN
→ Si está bloqueado, descarga Chart.js localmente
```

### "Los datos desaparecieron"
```
→ localStorage fue limpiado (navegador, sync, etc.)
→ Recarga app.html para cargar dataset.json de nuevo
```

### "El sidebar no se cierra"
```
→ Click en ✕ button
→ O click fuera del sidebar
→ O resize ventana a > 768px
```

### "El email no es válido"
```
→ Revisa que tenga formato: algo@dominio.com
→ No puede tener espacios ni caracteres especiales
```

---

## 📊 Estadísticas del Dataset

| Métrica | Valor |
|---------|-------|
| Total estudiantes | 35 |
| Ciudades | 5 (Bogotá 12, Medellín 11, Cali 5, Barranquilla 4, Cartagena 3) |
| Cursos | 10 tipos distintos |
| Planes | Básico 11, Estándar 12, Premium 12 |
| Inactivos | 6 estudiantes |
| Progreso promedio | ~66% |
| Rango progreso | 30-100% |

---

## 🎓 Técnicas de Prompt Engineering Usadas

1. **Priming** - Rol inicial: "Eres un desarrollador senior..."
2. **Chain of Thought** - Pasos: diseño → HTML → CSS → JS
3. **Few-Shot** - Ejemplos: 5 registros → 35 registros
4. **Meta-Prompting** - "¿Cuál es el mejor formato?"
5. **Negative Prompting** - "No uses Bootstrap"
6. **Role Prompting** - "Eres un UX/UI designer"

---

## ✅ Checklist de Verificación

### Funcionalidad
- [x] Landing page responsive
- [x] Dashboard con KPIs y tabla
- [x] Gesto de estudiantes (CRUD)
- [x] Búsqueda y filtros
- [x] localStorage persistente
- [x] Gráfico Chart.js

### Requisitos
- [x] 35 registros dataset
- [x] Validación programática
- [x] Sin Bootstrap/Tailwind
- [x] JavaScript vanilla
- [x] Mobile-first responsive
- [x] Botón WhatsApp flotante

### Calidad
- [x] Código comentado
- [x] Estructura modular
- [x] Variables CSS
- [x] Transiciones suaves
- [x] Accesibilidad básica
- [x] Sin errores en consola

---

## 📞 Contacto & Soporte

Este proyecto fue desarrollado como taller integrado de IA en Páginas Web.

Para soporte:
1. Abre VERIFICACION.html
2. Lee la documentación completa en README.md
3. Revisa la consola (F12) para errores
4. Valida el dataset automáticamente en app.html

---

**¡Gracias por usar EduTrack!** 🎓✨

Versión: 1.0  
Última actualización: Mayo 2026
