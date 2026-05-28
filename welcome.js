/**
 * EduTrack Console Welcome Message
 * Mostrar información del proyecto en la consola
 */

function mostrarBienvenidaEduTrack() {
    const styles = {
        titulo: 'color: #2563EB; font-size: 18px; font-weight: bold; font-family: "Space Grotesk", sans-serif;',
        subtitulo: 'color: #FACC15; font-size: 14px; font-weight: 600;',
        texto: 'color: #CBD5E1; font-size: 12px;',
        exito: 'color: #25D366; font-size: 12px; font-weight: bold;',
        enlace: 'color: #3B82F6; text-decoration: underline; cursor: pointer;'
    };

    console.clear();
    console.log('%c🎓 EduTrack - Plataforma EdTech', styles.titulo);
    console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #334155; font-weight: bold;');
    
    console.log('%cProyecto Integrado IA + Web', styles.subtitulo);
    console.log('%cTaller: "IA en Páginas Web con Prompt Engineering"\n', styles.texto);

    console.log('%c📊 FASES COMPLETADAS:', styles.subtitulo);
    console.log('%c✓ Fase 1: Landing Page (index.html)', styles.exito);
    console.log('%c✓ Fase 2: Dashboard (dashboard.html)', styles.exito);
    console.log('%c✓ Fase 3: Dataset (dataset.json - 35 registros)', styles.exito);
    console.log('%c✓ Fase 4: Validación (validacion.js)', styles.exito);
    console.log('%c✓ Fase 5: CRUD + localStorage (app.html)', styles.exito);

    console.log('\n%c🗂️ ARCHIVOS CREADOS:', styles.subtitulo);
    console.log('%c1. index.html + styles.css', styles.texto);
    console.log('%c2. dashboard.html + dashboard-styles.css + dashboard-script.js', styles.texto);
    console.log('%c3. app.html + app-styles.css + main.js', styles.texto);
    console.log('%c4. dataset.json (35 estudiantes)', styles.texto);
    console.log('%c5. validacion.js (DatasetValidator)', styles.texto);

    console.log('\n%c🎯 NAVEGACIÓN RÁPIDA:', styles.subtitulo);
    console.log('%cindex.html', styles.enlace, '← Landing Page');
    console.log('%cdashboard.html', styles.enlace, '← Dashboard Estudiante');
    console.log('%capp.html', styles.enlace, '← Gestor de Estudiantes');
    console.log('%cVERIFICACION.html', styles.enlace, '← Checklist de Requisitos');

    console.log('\n%c📈 ESTADÍSTICAS:', styles.subtitulo);
    console.log(`%c
    • 35 Estudiantes en dataset
    • 5 Ciudades colombianas
    • 10 Cursos especializados
    • 3 Planes (Básico, Estándar, Premium)
    • 6+ Estudiantes inactivos
    • 100% Requisitos completados
    `, styles.texto);

    console.log('%c🔍 VALIDACIÓN DE DATOS:', styles.subtitulo);
    console.log('%c✓ IDs únicos y consecutivos', styles.exito);
    console.log('%c✓ Emails válidos y únicos', styles.exito);
    console.log('%c✓ Montos coherentes con planes', styles.exito);
    console.log('%c✓ Fechas en rango válido', styles.exito);
    console.log('%c✓ Progreso entre 0-100', styles.exito);

    console.log('\n%c💾 FUNCIONALIDADES:', styles.subtitulo);
    console.log('%c✓ localStorage automático', styles.texto);
    console.log('%c✓ Búsqueda en tiempo real', styles.texto);
    console.log('%c✓ Filtros por ciudad y plan', styles.texto);
    console.log('%c✓ CRUD completo (Create, Read, Update, Delete)', styles.texto);
    console.log('%c✓ Gráfico Chart.js dinámico', styles.texto);
    console.log('%c✓ Responsive (mobile-first)', styles.texto);

    console.log('\n%c🎨 TECNOLOGÍAS:', styles.subtitulo);
    console.log('%cHTML5 | CSS3 | JavaScript ES6+ | Chart.js', styles.texto);
    console.log('%cGoogle Fonts (Inter, Space Grotesk)', styles.texto);
    console.log('%cSin frameworks (Vanilla + localStorage)', styles.texto);

    console.log('\n%c⚡ TIPS:', styles.subtitulo);
    console.log('%c1. Abre app.html para ver gráficos y CRUD', styles.texto);
    console.log('%c2. F12 → Application → localStorage → edutrack_estudiantes', styles.texto);
    console.log('%c3. Busca y filtra en tiempo real', styles.texto);
    console.log('%c4. Agrega, edita y elimina estudiantes', styles.texto);
    console.log('%c5. Los datos persisten automáticamente', styles.texto);

    console.log('\n%c🎓 TÉCNICAS DE IA APLICADAS:', styles.subtitulo);
    console.log(`%c
    • Priming: Rol inicial del asistente
    • Chain of Thought: Razonamiento paso a paso
    • Few-Shot: Ejemplos para generar dataset
    • Meta-Prompting: Optimización de prompts
    • Negative Prompting: Restricciones claras
    • Role Prompting: Actuación de experto
    `, styles.texto);

    console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #334155; font-weight: bold;');
    console.log('%c✅ Proyecto completado y funcional', styles.exito);
    console.log('%c¡Listo para presentar! 🚀\n', 'color: #FACC15; font-size: 14px; font-weight: bold;');
}

// Mostrar mensaje al cargar la página
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mostrarBienvenidaEduTrack);
} else {
    mostrarBienvenidaEduTrack();
}
