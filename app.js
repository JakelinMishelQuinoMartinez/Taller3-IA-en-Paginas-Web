// ==========================================
// FASE 3: DATASET SINTÉTICO (35 REGISTROS)
// ==========================================
const datasetInicialEstudiantes = [
    { id: 1, nombre: 'Ana Martínez', email: 'ana.martinez@gmail.com', ciudad: 'Bogotá', curso: 'JavaScript Avanzado', progreso: 78, fechaInscripcion: '2024-02-10', plan: 'premium', montoUSD: 99, activo: true },
    { id: 2, nombre: 'Carlos Vega', email: 'carlos.vega@outlook.com', ciudad: 'Medellín', curso: 'React desde cero', progreso: 45, fechaInscripcion: '2024-05-22', plan: 'estándar', montoUSD: 59, activo: true },
    { id: 3, nombre: 'Luisa Herrera', email: 'luisa.h@gmail.com', ciudad: 'Cali', curso: 'Python para datos', progreso: 100, fechaInscripcion: '2023-11-03', plan: 'básico', montoUSD: 29, activo: false },
    { id: 4, nombre: 'Juan Fernando Quintero', email: 'juanfer@gmail.com', ciudad: 'Medellín', curso: 'Git & GitHub', progreso: 90, fechaInscripcion: '2024-01-15', plan: 'básico', montoUSD: 29, activo: true },
    { id: 5, nombre: 'María Camila Osorio', email: 'm.osorio@hotmail.com', ciudad: 'Bogotá', curso: 'Figma para devs', progreso: 30, fechaInscripcion: '2024-03-12', plan: 'premium', montoUSD: 99, activo: true },
    { id: 6, nombre: 'Santiago Arias', email: 'santiago.arias@gmail.com', ciudad: 'Bogotá', curso: 'JavaScript Avanzado', progreso: 100, fechaInscripcion: '2023-05-20', plan: 'premium', montoUSD: 99, activo: false },
    { id: 7, nombre: 'Paula Andrea Betancur', email: 'paula.beta@outlook.com', ciudad: 'Medellín', curso: 'React desde cero', progreso: 62, fechaInscripcion: '2024-06-11', plan: 'estándar', montoUSD: 59, activo: true },
    { id: 8, nombre: 'Andrés Cepeda', email: 'andres.ceped@gmail.com', ciudad: 'Bogotá', curso: 'Node.js con Express', progreso: 15, fechaInscripcion: '2025-01-10', plan: 'estándar', montoUSD: 59, activo: true },
    { id: 9, nombre: 'Carolina Cruz', email: 'caro.cruz@gmail.com', ciudad: 'Cali', curso: 'CSS Moderno', progreso: 100, fechaInscripcion: '2023-12-01', plan: 'básico', montoUSD: 29, activo: false },
    { id: 10, nombre: 'Daniel Martínez', email: 'daniel.mtz@hotmail.com', ciudad: 'Barranquilla', curso: 'SQL para devs', progreso: 45, fechaInscripcion: '2024-07-19', plan: 'básico', montoUSD: 29, activo: true },
    { id: 11, nombre: 'Esteban Chaves', email: 'chaves.es@gmail.com', ciudad: 'Bogotá', curso: 'TypeScript esencial', progreso: 88, fechaInscripcion: '2024-02-28', plan: 'premium', montoUSD: 99, activo: true },
    { id: 12, nombre: 'Fabián Vargas', email: 'fabian.vargas@outlook.com', ciudad: 'Bogotá', curso: 'Docker básico', progreso: 0, fechaInscripcion: '2025-04-05', plan: 'básico', montoUSD: 29, activo: true },
    { id: 13, nombre: 'Gloria Valencia', email: 'gloria.val@gmail.com', ciudad: 'Cartagena', curso: 'Figma para devs', progreso: 73, fechaInscripcion: '2024-09-14', plan: 'estándar', montoUSD: 59, activo: true },
    { id: 14, nombre: 'Humberto De la Calle', email: 'humberto.calle@gmail.com', ciudad: 'Manizales', curso: 'JavaScript Avanzado', progreso: 50, fechaInscripcion: '2024-03-22', plan: 'premium', montoUSD: 99, activo: true },
    { id: 15, nombre: 'Iván Ramiro Córdoba', email: 'ivan.ramiro@hotmail.com', ciudad: 'Medellín', curso: 'React desde cero', progreso: 100, fechaInscripcion: '2023-08-14', plan: 'premium', montoUSD: 99, activo: false },
    { id: 16, nombre: 'Jorge Celedón', email: 'jorge.celedon@gmail.com', ciudad: 'Barranquilla', curso: 'Python para datos', progreso: 35, fechaInscripcion: '2024-11-20', plan: 'básico', montoUSD: 29, activo: true },
    { id: 17, nombre: 'Karol Giraldo', email: 'karol.g@outlook.com', ciudad: 'Medellín', curso: 'Node.js con Express', progreso: 92, fechaInscripcion: '2024-01-30', plan: 'premium', montoUSD: 99, activo: true },
    { id: 18, nombre: 'Lina Tejeiro', email: 'lina.tej@gmail.com', ciudad: 'Bogotá', curso: 'CSS Moderno', progreso: 55, fechaInscripcion: '2024-10-05', plan: 'estándar', montoUSD: 59, activo: true },
    { id: 19, nombre: 'Mario Alberto Yepes', email: 'mario.yepes@gmail.com', ciudad: 'Cali', curso: 'SQL para devs', progreso: 100, fechaInscripcion: '2023-06-15', plan: 'premium', montoUSD: 99, activo: false },
    { id: 20, nombre: 'Natalia Paris', email: 'natalia.paris@hotmail.com', ciudad: 'Medellín', curso: 'Git & GitHub', progreso: 40, fechaInscripcion: '2024-04-18', plan: 'básico', montoUSD: 29, activo: true },
    { id: 21, nombre: 'Oscar Córdoba', email: 'oscar.cor@gmail.com', ciudad: 'Cali', curso: 'TypeScript esencial', progreso: 67, fechaInscripcion: '2024-05-12', plan: 'estándar', montoUSD: 59, activo: true },
    { id: 22, nombre: 'Piedad Córdoba', email: 'piedad.cor@outlook.com', ciudad: 'Bogotá', curso: 'Docker básico', progreso: 22, fechaInscripcion: '2025-02-11', plan: 'básico', montoUSD: 29, activo: true },
    { id: 23, font: 'Radamel Falcao', nombre: 'Radamel Falcao García', email: 'falcao@gmail.com', ciudad: 'Santa Marta', curso: 'Figma para devs', progreso: 85, fechaInscripcion: '2024-08-09', plan: 'premium', montoUSD: 99, activo: true },
    { id: 24, nombre: 'Shakira Mebarak', email: 'shakira@outlook.com', ciudad: 'Barranquilla', curso: 'JavaScript Avanzado', progreso: 95, fechaInscripcion: '2024-02-14', plan: 'premium', montoUSD: 99, activo: true },
    { id: 25, nombre: 'Taliana Vargas', email: 'tali.vargas@gmail.com', ciudad: 'Cartagena', curso: 'React desde cero', progreso: 10, fechaInscripcion: '2025-03-01', plan: 'básico', montoUSD: 29, activo: true },
    { id: 26, nombre: 'Ubaldo Fillol', email: 'ubaldo.f@gmail.com', ciudad: 'Bogotá', curso: 'Python para datos', progreso: 60, fechaInscripcion: '2024-06-25', plan: 'estándar', montoUSD: 59, activo: true },
    { id: 27, nombre: 'Valerie Domínguez', email: 'valerie.dom@hotmail.com', ciudad: 'Barranquilla', curso: 'Node.js con Express', progreso: 100, fechaInscripcion: '2023-04-12', plan: 'premium', montoUSD: 99, activo: false },
    { id: 28, nombre: 'Wason Rentería', email: 'wason.r@gmail.com', ciudad: 'Chocó', curso: 'CSS Moderno', progreso: 41, fechaInscripcion: '2024-09-09', plan: 'básico', montoUSD: 29, activo: true },
    { id: 29, nombre: 'Ximena Restrepo', email: 'ximena.res@outlook.com', ciudad: 'Medellín', curso: 'SQL para devs', progreso: 77, fechaInscripcion: '2024-07-01', plan: 'estándar', montoUSD: 59, activo: true },
    { id: 30, nombre: 'Yerry Mina', email: 'yerry.mina@gmail.com', ciudad: 'Cali', curso: 'Git & GitHub', progreso: 33, fechaInscripcion: '2024-11-15', plan: 'básico', montoUSD: 29, activo: true },
    { id: 31, nombre: 'Zinedine Zidane', email: 'zizou.col@gmail.com', ciudad: 'Bogotá', curso: 'TypeScript esencial', progreso: 91, fechaInscripcion: '2024-03-10', plan: 'premium', montoUSD: 99, activo: true },
    { id: 32, nombre: 'James Rodríguez', email: 'james.10@gmail.com', ciudad: 'Cúcuta', curso: 'Docker básico', progreso: 5, fechaInscripcion: '2025-05-01', plan: 'estándar', montoUSD: 59, activo: true },
    { id: 33, nombre: 'Luis Díaz', email: 'lucho.diaz@hotmail.com', ciudad: 'Barranquilla', curso: 'Figma para devs', progreso: 82, fechaInscripcion: '2024-05-18', plan: 'premium', montoUSD: 99, activo: true },
    { id: 34, nombre: 'David Ospina', email: 'rey.david@outlook.com', ciudad: 'Medellín', curso: 'JavaScript Avanzado', progreso: 100, fechaInscripcion: '2023-10-10', plan: 'básico', montoUSD: 29, activo: true },
    { id: 35, nombre: 'Juan Cuadrado', email: 'cuadrado.11@gmail.com', ciudad: 'Cali', curso: 'React desde cero', progreso: 58, fechaInscripcion: '2024-12-20', plan: 'estándar', montoUSD: 59, activo: true }
];

let estudiantes = [];
let cityChartInstance = null;

// ==========================================
// FASE 4: VALIDACIÓN PROGRAMÁTICA AUTOMÁTICA
// ==========================================
function validarYRepararDataset(data) {
    let erroresDetectados = 0;
    
    const datosLimpios = data.map((estudiante) => {
        let clon = { ...estudiante };
        
        // Regla 1: Coherencia de montos por plan
        if (clon.plan === 'básico' && clon.montoUSD !== 29) { clon.montoUSD = 29; erroresDetectados++; }
        else if (clon.plan === 'estándar' && clon.montoUSD !== 59) { clon.montoUSD = 59; erroresDetectados++; }
        else if (clon.plan === 'premium' && clon.montoUSD !== 99) { clon.montoUSD = 99; erroresDetectados++; }
        
        // Regla 2: Restricciones numéricas del progreso
        if (clon.progreso < 0) { clon.progreso = 0; erroresDetectados++; }
        if (clon.progreso > 100) { clon.progreso = 100; erroresDetectados++; }
        
        // Regla 3: Si el progreso es 100% y está activo, pero rompe coherencia lógica de finalización
        // (Nota: Las reglas del negocio admiten true o false, garantizamos que sea booleano válido)
        if (typeof clon.activo !== 'boolean') {
            clon.activo = clon.progreso !== 100;
            erroresDetectados++;
        }
        return clon;
    });

    if(erroresDetectados > 0) {
        console.warn(`[Auditoría de Datos] Se encontraron y repararon automáticamente ${erroresDetectados} inconsistencias.`);
    }
    return datosLimpios;
}

// ==========================================
// FASE 5: OPERACIONES CRUD & PERSISTENCIA
// ==========================================

function cargarDatos() {
    const datosLocal = localStorage.getItem('edutrack_estudiantes');
    if (datosLocal) {
        estudiantes = JSON.parse(datosLocal);
    } else {
        estudiantes = datasetInicialEstudiantes;
        guardarDatos();
    }
    estudiantes = validarYRepararDataset(estudiantes);
}

function guardarDatos() {
    localStorage.setItem('edutrack_estudiantes', JSON.stringify(estudiantes));
}

// Renderizado de las Tarjetas del Dashboard
function renderizarCards(lista) {
    const container = document.getElementById('student-cards-container');
    container.innerHTML = '';

    if(lista.length === 0) {
        container.innerHTML = `<p style="grid-column: 1/-1; text-align:center; color:var(--text-muted);">No se encontraron estudiantes con los filtros aplicados.</p>`;
        return;
    }

    lista.forEach(est => {
        const card = document.createElement('div');
        card.className = 'student-item-card';
        card.innerHTML = `
            <div>
                <h4>${est.nombre}</h4>
                <p>📧 ${est.email}</p>
                <p>📍 <strong>${est.ciudad}</strong></p>
                <p>📚 Curso: <em>${est.curso}</em></p>
                <div style="margin: 0.5rem 0;">
                    <span class="status-badge ${est.plan === 'premium' ? 'verde' : est.plan === 'estándar' ? 'azul' : 'amarillo'}">${est.plan}</span>
                    <span class="status-badge ${est.activo ? 'azul' : 'amarillo'}" style="margin-left:5px;">${est.activo ? 'Activo' : 'Inactivo'}</span>
                </div>
                <div class="progress-bar-container">
                    <div class="progress-bar-fill" style="width: ${est.progreso}%;"></div>
                </div>
                <span style="font-size:0.75rem; color:var(--text-muted); display:block; margin-top:3px;">Progreso: ${est.progreso}%</span>
            </div>
            <div class="card-actions">
                <button class="btn-card btn-edit" onclick="abrirModal(${est.id})">✏️ Editar</button>
                <button class="btn-card btn-delete" onclick="eliminarEstudiante(${est.id})">🗑️ Borrar</button>
            </div>
        `;
        container.appendChild(card);
    });
}

// Filtrado Multidimensional Combinado
function filtrar() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const ciudadSeleccionada = document.getElementById('filter-city').value;
    const planSeleccionado = document.getElementById('filter-plan').value;

    const estudiantesFiltrados = estudiantes.filter(est => {
        const matchesSearch = est.nombre.toLowerCase().includes(query) || est.email.toLowerCase().includes(query);
        const matchesCity = ciudadSeleccionada === "" || est.ciudad === ciudadSeleccionada;
        const matchesPlan = planSeleccionado === "" || est.plan === planSeleccionado;
        
        return matchesSearch && matchesCity && matchesPlan;
    });

    renderizarCards(estudiantesFiltrados);
}

// Control de Modales (CRUD)
function abrirModal(id = null) {
    const modal = document.getElementById('student-modal');
    const form = document.getElementById('student-form');
    document.getElementById('modal-title').innerText = id ? 'Editar Datos del Estudiante' : 'Inscribir Nuevo Estudiante';
    
    form.reset();
    document.getElementById('student-id').value = id ? id : '';

    if (id) {
        const est = estudiantes.find(e => e.id === id);
        if (est) {
            document.getElementById('form-name').value = est.nombre;
            document.getElementById('form-email').value = est.email;
            document.getElementById('form-city').value = est.ciudad;
            document.getElementById('form-course').value = est.curso;
            document.getElementById('form-progress').value = est.progreso;
            document.getElementById('form-plan').value = est.plan;
            document.getElementById('form-active').checked = est.activo;
        }
    }
    modal.style.display = 'flex';
}

function cerrarModal() {
    document.getElementById('student-modal').style.display = 'none';
}

function guardarEstudiante(e) {
    e.preventDefault();
    
    const id = document.getElementById('student-id').value;
    const nombre = document.getElementById('form-name').value;
    const email = document.getElementById('form-email').value;
    const ciudad = document.getElementById('form-city').value;
    const curso = document.getElementById('form-course').value;
    const progreso = parseInt(document.getElementById('form-progress').value);
    const plan = document.getElementById('form-plan').value;
    const activo = document.getElementById('form-active').checked;
    const fechaInscripcion = document.getElementById('form-date').value || new Date().toISOString().split('T')[0];

    // Asignación estricta de precios según el plan de negocio
    let montoUSD = 29;
    if (plan === 'estándar') montoUSD = 59;
    if (plan === 'premium') montoUSD = 99;

    if (id) {
        // Modo Edición
        const index = estudiantes.findIndex(e => e.id === parseInt(id));
        if (index !== -1) {
            estudiantes[index] = { id: parseInt(id), nombre, email, ciudad, curso, progreso, fechaInscripcion, plan, montoUSD, activo };
        }
    } else {
        // Modo Creación
        const nuevoId = estudiantes.length > 0 ? Math.max(...estudiantes.map(e => e.id)) + 1 : 1;
        estudiantes.push({ id: nuevoId, nombre, email, ciudad, curso, progreso, fechaInscripcion, plan, montoUSD, activo });
    }

    guardarDatos();
    filtrar();
    actualizarMétricasGlobales();
    actualizarGrafico();
    cerrarModal();
}

function eliminarEstudiante(id) {
    if (confirm('¿Estás completamente seguro de dar de baja o eliminar este registro de estudiante?')) {
        estudiantes = estudiantes.filter(e => e.id !== id);
        guardarDatos();
        filtrar();
        actualizarMétricasGlobales();
        actualizarGrafico();
    }
}

// Recalcular métricas de las tarjetas KPI dinámicamente
function actualizarMétricasGlobales() {
    const totalCursosActivos = estudiantes.filter(e => e.activo).length;
    const promedioProgreso = estudiantes.length > 0 
        ? Math.round(estudiantes.reduce((acc, curr) => acc + curr.progreso, 0) / estudiantes.length) 
        : 0;

    document.getElementById('kpi-cursos-activos').innerText = totalCursosActivos;
    document.getElementById('kpi-progreso-promedio').innerText = `${promedioProgreso}%`;
    document.getElementById('kpi-progress-bar').style.width = `${promedioProgreso}%`;
}

// ==========================================
// RENDERIZADO ESTADÍSTICO DE CHART.JS
// ==========================================
function actualizarGrafico() {
    const conteoCiudades = {};
    
    // Contabilizar frecuencias
    estudiantes.forEach(est => {
        conteoCiudades[est.ciudad] = (conteoCiudades[est.ciudad] || 0) + 1;
    });

    const labels = Object.keys(conteoCiudades);
    const data = Object.values(conteoCiudades);

    const ctx = document.getElementById('cityChart').getContext('2d');

    if (cityChartInstance) {
        cityChartInstance.destroy();
    }

    cityChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Distribución de Estudiantes por Región/Ciudad',
                data: data,
                backgroundColor: 'rgba(15, 42, 74, 0.8)',
                borderColor: 'rgba(15, 42, 74, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: { beginAtZero: true, ticks: { stepSize: 1 } }
            }
        }
    });
}

// ==========================================
// LISTENERS DE INTERFACES Y MENÚS
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    cargarDatos();
    renderizarCards(estudiantes);
    actualizarMétricasGlobales();
    actualizarGrafico();

    // Eventos de Filtrado
    document.getElementById('search-input').addEventListener('input', filtrar);
    document.getElementById('filter-city').addEventListener('change', filtrar);
    document.getElementById('filter-plan').addEventListener('change', filtrar);

    // Eventos de Modales
    document.getElementById('btn-add-student').addEventListener('click', () => abrirModal());
    document.getElementById('close-modal-btn').addEventListener('click', cerrarModal);
    document.getElementById('student-form').addEventListener('submit', guardarEstudiante);

    // Lógica del Menú Hamburguesa de la Landing Page
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuBtn.innerText = navLinks.classList.contains('active') ? '✕' : '☰';
    });

    // Lógica del Sidebar del Dashboard (Fase 2 - Paso 4)
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebar = document.getElementById('sidebar');

    sidebarToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        sidebar.classList.toggle('active');
        sidebarToggle.innerText = sidebar.classList.contains('active') ? '✕' : '☰';
    });

    // Cierre al hacer click fuera del Sidebar
    document.addEventListener('click', (e) => {
        if (sidebar.classList.contains('active') && !sidebar.contains(e.target) && e.target !== sidebarToggle) {
            sidebar.classList.remove('active');
            sidebarToggle.innerText = '☰';
        }
    });
});