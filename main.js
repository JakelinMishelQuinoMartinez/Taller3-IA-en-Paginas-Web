/**
 * Main App - EduTrack Estudiantes Manager
 * CRUD completo con localStorage, búsqueda, filtros y gráficos
 */

class EduTrackApp {
    constructor() {
        this.estudiantes = [];
        this.estudiantesFiltrados = [];
        this.currentEdit = null;
        this.init();
    }

    /**
     * Inicializa la aplicación
     */
    async init() {
        // Cargar datos
        await this.cargarDatos();
        
        // Inicializar UI
        this.inicializarEventListeners();
        this.renderizarCards(this.estudiantes);
        this.actualizarGrafico();
    }

    /**
     * Carga datos de localStorage o dataset.json
     */
    async cargarDatos() {
        const datosLocalStorage = localStorage.getItem('edutrack_estudiantes');
        
        if (datosLocalStorage) {
            this.estudiantes = JSON.parse(datosLocalStorage);
            console.log('✓ Datos cargados desde localStorage');
        } else {
            try {
                const response = await fetch('dataset.json');
                this.estudiantes = await response.json();
                this.guardarDatos();
                console.log('✓ Datos cargados desde dataset.json');
            } catch (error) {
                console.error('Error cargando dataset:', error);
                this.estudiantes = [];
            }
        }
        
        this.estudiantesFiltrados = [...this.estudiantes];
    }

    /**
     * Guarda datos en localStorage
     */
    guardarDatos() {
        localStorage.setItem('edutrack_estudiantes', JSON.stringify(this.estudiantes));
        console.log('✓ Datos guardados en localStorage');
    }

    /**
     * Inicializa event listeners
     */
    inicializarEventListeners() {
        // Búsqueda
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('input', () => this.filtrar());
        }

        // Filtros
        const ciudadFilter = document.getElementById('ciudadFilter');
        if (ciudadFilter) {
            ciudadFilter.addEventListener('change', () => this.filtrar());
        }

        const planFilter = document.getElementById('planFilter');
        if (planFilter) {
            planFilter.addEventListener('change', () => this.filtrar());
        }

        // Botón agregar estudiante
        const btnAgregar = document.getElementById('btnAgregar');
        if (btnAgregar) {
            btnAgregar.addEventListener('click', () => this.abrirModal());
        }

        // Botón guardar en modal
        const btnGuardar = document.getElementById('btnGuardar');
        if (btnGuardar) {
            btnGuardar.addEventListener('click', () => this.guardarEstudiante());
        }

        // Botón cerrar modal
        const btnCerrarModal = document.getElementById('btnCerrarModal');
        if (btnCerrarModal) {
            btnCerrarModal.addEventListener('click', () => this.cerrarModal());
        }

        // Cerrar modal al hacer click en el overlay
        const modalOverlay = document.getElementById('modalOverlay');
        if (modalOverlay) {
            modalOverlay.addEventListener('click', (e) => {
                if (e.target === modalOverlay) {
                    this.cerrarModal();
                }
            });
        }
    }

    /**
     * Renderiza las tarjetas de estudiantes
     */
    renderizarCards(lista) {
        const container = document.getElementById('estudiantesContainer');
        if (!container) return;

        if (lista.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <p>📭 No se encontraron estudiantes</p>
                </div>
            `;
            return;
        }

        container.innerHTML = lista.map(estudiante => `
            <article class="student-card">
                <div class="card-header">
                    <div class="student-avatar">${estudiante.nombre.charAt(0)}</div>
                    <div class="card-title">
                        <h3>${estudiante.nombre}</h3>
                        <p>${estudiante.email}</p>
                    </div>
                </div>
                
                <div class="card-body">
                    <div class="card-row">
                        <span class="label">Ciudad:</span>
                        <span class="value">${estudiante.ciudad}</span>
                    </div>
                    <div class="card-row">
                        <span class="label">Curso:</span>
                        <span class="value">${estudiante.curso}</span>
                    </div>
                    <div class="card-row">
                        <span class="label">Progreso:</span>
                        <span class="value">${estudiante.progreso}%</span>
                    </div>
                    <div class="progress-mini">
                        <div class="progress-fill" style="width: ${estudiante.progreso}%"></div>
                    </div>
                    <div class="card-row">
                        <span class="label">Plan:</span>
                        <span class="badge ${this.getBadgeClass(estudiante.plan)}">${estudiante.plan}</span>
                    </div>
                    <div class="card-row">
                        <span class="label">Estado:</span>
                        <span class="badge ${estudiante.activo ? 'badge-active' : 'badge-inactive'}">
                            ${estudiante.activo ? '✓ Activo' : '✗ Inactivo'}
                        </span>
                    </div>
                </div>
                
                <div class="card-footer">
                    <button class="btn-edit" data-id="${estudiante.id}">✏️ Editar</button>
                    <button class="btn-delete" data-id="${estudiante.id}">🗑️ Eliminar</button>
                </div>
            </article>
        `).join('');

        // Agregar event listeners a botones de editar/eliminar
        container.querySelectorAll('.btn-edit').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = parseInt(e.target.dataset.id);
                this.abrirModal(id);
            });
        });

        container.querySelectorAll('.btn-delete').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = parseInt(e.target.dataset.id);
                this.eliminarEstudiante(id);
            });
        });
    }

    /**
     * Filtra estudiantes según búsqueda y filtros
     */
    filtrar() {
        const searchValue = document.getElementById('searchInput')?.value.toLowerCase() || '';
        const ciudadValue = document.getElementById('ciudadFilter')?.value || '';
        const planValue = document.getElementById('planFilter')?.value || '';

        this.estudiantesFiltrados = this.estudiantes.filter(est => {
            const coincideBusqueda = est.nombre.toLowerCase().includes(searchValue) ||
                                   est.email.toLowerCase().includes(searchValue);
            const coincideCiudad = ciudadValue === '' || est.ciudad === ciudadValue;
            const coincidePlan = planValue === '' || est.plan === planValue;

            return coincideBusqueda && coincideCiudad && coincidePlan;
        });

        this.renderizarCards(this.estudiantesFiltrados);
    }

    /**
     * Abre el modal de formulario
     */
    abrirModal(id = null) {
        const modal = document.getElementById('modal');
        const modalTitle = document.getElementById('modalTitle');
        const form = document.getElementById('estudianteForm');

        if (id) {
            // Editar
            const estudiante = this.estudiantes.find(e => e.id === id);
            if (estudiante) {
                this.currentEdit = id;
                modalTitle.textContent = 'Editar Estudiante';
                
                document.getElementById('nombre').value = estudiante.nombre;
                document.getElementById('email').value = estudiante.email;
                document.getElementById('ciudad').value = estudiante.ciudad;
                document.getElementById('curso').value = estudiante.curso;
                document.getElementById('progreso').value = estudiante.progreso;
                document.getElementById('plan').value = estudiante.plan;
                document.getElementById('activo').checked = estudiante.activo;
            }
        } else {
            // Nuevo
            this.currentEdit = null;
            modalTitle.textContent = 'Agregar Nuevo Estudiante';
            form.reset();
            document.getElementById('activo').checked = true;
        }

        modal.classList.add('active');
    }

    /**
     * Cierra el modal
     */
    cerrarModal() {
        const modal = document.getElementById('modal');
        modal.classList.remove('active');
        this.currentEdit = null;
    }

    /**
     * Valida el formulario
     */
    validarFormulario() {
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const ciudad = document.getElementById('ciudad').value;
        const curso = document.getElementById('curso').value;
        const progreso = parseInt(document.getElementById('progreso').value);
        const plan = document.getElementById('plan').value;

        if (!nombre || nombre.length < 2) {
            alert('El nombre debe tener al menos 2 caracteres');
            return false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('El email no es válido');
            return false;
        }

        if (!ciudad) {
            alert('Debes seleccionar una ciudad');
            return false;
        }

        if (!curso) {
            alert('Debes seleccionar un curso');
            return false;
        }

        if (isNaN(progreso) || progreso < 0 || progreso > 100) {
            alert('El progreso debe ser un número entre 0 y 100');
            return false;
        }

        if (!plan) {
            alert('Debes seleccionar un plan');
            return false;
        }

        // Validar email único (excepto si está editando)
        const emailExistente = this.estudiantes.find(e => 
            e.email === email && e.id !== this.currentEdit
        );
        if (emailExistente) {
            alert('Este email ya existe');
            return false;
        }

        return true;
    }

    /**
     * Guarda o actualiza un estudiante
     */
    guardarEstudiante() {
        if (!this.validarFormulario()) return;

        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const ciudad = document.getElementById('ciudad').value;
        const curso = document.getElementById('curso').value;
        const progreso = parseInt(document.getElementById('progreso').value);
        const plan = document.getElementById('plan').value;
        const activo = document.getElementById('activo').checked;

        const montos = { 'básico': 29, 'estándar': 59, 'premium': 99 };
        const montoUSD = montos[plan];

        if (this.currentEdit) {
            // Actualizar
            const idx = this.estudiantes.findIndex(e => e.id === this.currentEdit);
            if (idx !== -1) {
                this.estudiantes[idx] = {
                    id: this.currentEdit,
                    nombre,
                    email,
                    ciudad,
                    curso,
                    progreso,
                    fechaInscripcion: this.estudiantes[idx].fechaInscripcion,
                    plan,
                    montoUSD,
                    activo
                };
                console.log('✓ Estudiante actualizado');
            }
        } else {
            // Crear nuevo
            const nuevoId = Math.max(...this.estudiantes.map(e => e.id), 0) + 1;
            const hoy = new Date().toISOString().split('T')[0];
            
            this.estudiantes.push({
                id: nuevoId,
                nombre,
                email,
                ciudad,
                curso,
                progreso,
                fechaInscripcion: hoy,
                plan,
                montoUSD,
                activo
            });
            console.log('✓ Nuevo estudiante agregado');
        }

        this.guardarDatos();
        this.cerrarModal();
        this.filtrar();
        this.actualizarGrafico();
    }

    /**
     * Elimina un estudiante
     */
    eliminarEstudiante(id) {
        if (confirm('¿Estás seguro de que quieres eliminar este estudiante?')) {
            this.estudiantes = this.estudiantes.filter(e => e.id !== id);
            this.guardarDatos();
            this.filtrar();
            this.actualizarGrafico();
            console.log('✓ Estudiante eliminado');
        }
    }

    /**
     * Retorna la clase CSS para los badges de plan
     */
    getBadgeClass(plan) {
        const classes = {
            'básico': 'badge-basic',
            'estándar': 'badge-standard',
            'premium': 'badge-premium'
        };
        return classes[plan] || 'badge';
    }

    /**
     * Actualiza el gráfico de estudiantes por ciudad (Chart.js)
     */
    actualizarGrafico() {
        const ctx = document.getElementById('cityChart');
        if (!ctx) return;

        const conteos = {};
        this.estudiantes.forEach(est => {
            conteos[est.ciudad] = (conteos[est.ciudad] || 0) + 1;
        });

        const ciudades = Object.keys(conteos);
        const datos = Object.values(conteos);

        // Destruir gráfico anterior si existe
        if (window.cityChartInstance) {
            window.cityChartInstance.destroy();
        }

        window.cityChartInstance = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ciudades,
                datasets: [{
                    label: 'Estudiantes por Ciudad',
                    data: datos,
                    backgroundColor: [
                        '#2563EB',
                        '#3B82F6',
                        '#FACC15',
                        '#25D366',
                        '#F59E0B'
                    ],
                    borderColor: [
                        '#1E40AF',
                        '#1D4ED8',
                        '#D97706',
                        '#059669',
                        '#D97706'
                    ],
                    borderWidth: 1,
                    borderRadius: 5
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: true,
                        labels: {
                            color: '#CBD5E1',
                            font: {
                                family: "'Inter', sans-serif",
                                size: 12
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            color: '#CBD5E1'
                        },
                        grid: {
                            color: 'rgba(51, 65, 85, 0.3)'
                        }
                    },
                    x: {
                        ticks: {
                            color: '#CBD5E1'
                        },
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    }
}

/**
 * Inicializa la aplicación cuando el DOM esté listo
 */
document.addEventListener('DOMContentLoaded', () => {
    new EduTrackApp();
});