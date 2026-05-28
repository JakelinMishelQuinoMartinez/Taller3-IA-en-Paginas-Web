/**
 * Validación de Dataset - EduTrack
 * Validación programática de la integridad de datos
 */

class DatasetValidator {
    constructor(dataset) {
        this.dataset = dataset;
        this.errors = [];
        this.warnings = [];
    }

    /**
     * Valida todo el dataset
     */
    validate() {
        this.validateStructure();
        this.validateIds();
        this.validateEmails();
        this.validateNames();
        this.validateCiudades();
        this.validateCursos();
        this.validateProgreso();
        this.validateFechas();
        this.validatePlanes();
        this.validateConsistenciaPlanMonto();
        this.validateEstudiantesInactivos();

        return this.getReport();
    }

    /**
     * Valida la estructura básica del dataset
     */
    validateStructure() {
        if (!Array.isArray(this.dataset)) {
            this.errors.push('El dataset no es un array válido');
            return;
        }

        if (this.dataset.length === 0) {
            this.errors.push('El dataset está vacío');
            return;
        }

        const campos_requeridos = ['id', 'nombre', 'email', 'ciudad', 'curso', 'progreso', 'fechaInscripcion', 'plan', 'montoUSD', 'activo'];
        
        this.dataset.forEach((record, idx) => {
            const campos_faltantes = campos_requeridos.filter(campo => !(campo in record));
            if (campos_faltantes.length > 0) {
                this.errors.push(`Registro ${idx} (ID: ${record.id}): Campos faltantes: ${campos_faltantes.join(', ')}`);
            }
        });
    }

    /**
     * Valida que los IDs sean únicos y consecutivos
     */
    validateIds() {
        const ids = this.dataset.map(r => r.id);
        const idsUnicos = new Set(ids);

        if (ids.length !== idsUnicos.size) {
            const duplicados = ids.filter((id, idx) => ids.indexOf(id) !== idx);
            this.errors.push(`IDs duplicados encontrados: ${[...new Set(duplicados)].join(', ')}`);
        }

        const idsOrdenados = ids.sort((a, b) => a - b);
        for (let i = 0; i < idsOrdenados.length; i++) {
            if (idsOrdenados[i] !== i + 1) {
                this.warnings.push(`IDs no consecutivos. Se esperaba ID ${i + 1}, se encontró ${idsOrdenados[i]}`);
            }
        }
    }

    /**
     * Valida que los emails sean válidos y únicos
     */
    validateEmails() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const emails = [];

        this.dataset.forEach((record, idx) => {
            const email = record.email;

            // Validar formato
            if (!emailRegex.test(email)) {
                this.errors.push(`Registro ${idx} (ID: ${record.id}): Email inválido: "${email}"`);
            }

            // Validar unicidad
            if (emails.includes(email)) {
                this.errors.push(`Email duplicado encontrado: "${email}"`);
            }
            emails.push(email);
        });
    }

    /**
     * Valida los nombres
     */
    validateNames() {
        this.dataset.forEach((record, idx) => {
            const nombre = record.nombre;

            if (!nombre || typeof nombre !== 'string') {
                this.errors.push(`Registro ${idx} (ID: ${record.id}): Nombre no es una cadena válida`);
                return;
            }

            if (nombre.length < 2 || nombre.length > 60) {
                this.errors.push(`Registro ${idx} (ID: ${record.id}): Nombre debe tener entre 2 y 60 caracteres. Actual: ${nombre.length}`);
            }
        });
    }

    /**
     * Valida las ciudades
     */
    validateCiudades() {
        const ciudades_validas = ['Bogotá', 'Medellín', 'Cali', 'Barranquilla', 'Cartagena'];

        this.dataset.forEach((record, idx) => {
            if (!ciudades_validas.includes(record.ciudad)) {
                this.errors.push(`Registro ${idx} (ID: ${record.id}): Ciudad no válida: "${record.ciudad}". Válidas: ${ciudades_validas.join(', ')}`);
            }
        });
    }

    /**
     * Valida los cursos
     */
    validateCursos() {
        const cursos_validos = [
            'JavaScript Avanzado',
            'React desde cero',
            'Node.js con Express',
            'Python para datos',
            'CSS Moderno',
            'SQL para devs',
            'Git & GitHub',
            'TypeScript esencial',
            'Docker básico',
            'Figma para devs'
        ];

        this.dataset.forEach((record, idx) => {
            if (!cursos_validos.includes(record.curso)) {
                this.errors.push(`Registro ${idx} (ID: ${record.id}): Curso no válido: "${record.curso}"`);
            }
        });
    }

    /**
     * Valida el progreso (0-100)
     */
    validateProgreso() {
        this.dataset.forEach((record, idx) => {
            const progreso = record.progreso;

            if (typeof progreso !== 'number') {
                this.errors.push(`Registro ${idx} (ID: ${record.id}): Progreso debe ser un número. Actual: ${typeof progreso}`);
            } else if (progreso < 0 || progreso > 100) {
                this.errors.push(`Registro ${idx} (ID: ${record.id}): Progreso fuera de rango [0-100]. Actual: ${progreso}`);
            }

            if (!Number.isInteger(progreso)) {
                this.warnings.push(`Registro ${idx} (ID: ${record.id}): Progreso no es un entero: ${progreso}`);
            }
        });
    }

    /**
     * Valida las fechas de inscripción
     */
    validateFechas() {
        const fecha_minima = new Date('2023-01-01');
        const fecha_maxima = new Date('2025-05-01');
        const regex_fecha = /^\d{4}-\d{2}-\d{2}$/;

        this.dataset.forEach((record, idx) => {
            const fecha_str = record.fechaInscripcion;

            // Validar formato
            if (!regex_fecha.test(fecha_str)) {
                this.errors.push(`Registro ${idx} (ID: ${record.id}): Formato de fecha inválido: "${fecha_str}". Debe ser YYYY-MM-DD`);
                return;
            }

            // Validar rango
            const fecha = new Date(fecha_str);
            if (fecha < fecha_minima || fecha > fecha_maxima) {
                this.errors.push(`Registro ${idx} (ID: ${record.id}): Fecha fuera de rango [2023-01-01, 2025-05-01]. Actual: ${fecha_str}`);
            }
        });
    }

    /**
     * Valida los planes
     */
    validatePlanes() {
        const planes_validos = ['básico', 'estándar', 'premium'];

        this.dataset.forEach((record, idx) => {
            if (!planes_validos.includes(record.plan)) {
                this.errors.push(`Registro ${idx} (ID: ${record.id}): Plan no válido: "${record.plan}". Válidos: ${planes_validos.join(', ')}`);
            }
        });
    }

    /**
     * Valida que el montoUSD coincida con el plan
     */
    validateConsistenciaPlanMonto() {
        const monto_por_plan = {
            'básico': 29,
            'estándar': 59,
            'premium': 99
        };

        this.dataset.forEach((record, idx) => {
            const monto_esperado = monto_por_plan[record.plan];
            if (record.montoUSD !== monto_esperado) {
                this.errors.push(`Registro ${idx} (ID: ${record.id}): Inconsistencia plan-monto. Plan "${record.plan}" debe tener monto $${monto_esperado} USD, pero tiene $${record.montoUSD} USD`);
            }
        });
    }

    /**
     * Valida que hay al menos 5 estudiantes inactivos
     */
    validateEstudiantesInactivos() {
        const inactivos = this.dataset.filter(r => r.activo === false);
        
        if (inactivos.length < 5) {
            this.warnings.push(`Se esperaban al menos 5 estudiantes inactivos, se encontraron ${inactivos.length}`);
        }
    }

    /**
     * Retorna el reporte de validación
     */
    getReport() {
        return {
            total_registros: this.dataset.length,
            total_errores: this.errors.length,
            total_advertencias: this.warnings.length,
            es_valido: this.errors.length === 0,
            errores: this.errors,
            advertencias: this.warnings,
            resumen: `
Dataset de ${this.dataset.length} registros.
✓ Errores: ${this.errors.length}
⚠ Advertencias: ${this.warnings.length}
Estado: ${this.errors.length === 0 ? '✅ VÁLIDO' : '❌ INVÁLIDO'}
            `
        };
    }

    /**
     * Imprime el reporte en consola de forma legible
     */
    printReport() {
        const report = this.getReport();
        
        console.log('\n' + '='.repeat(60));
        console.log('REPORTE DE VALIDACIÓN DE DATASET - EduTrack');
        console.log('='.repeat(60));
        
        console.log(`\n📊 RESUMEN:`);
        console.log(`   • Total de registros: ${report.total_registros}`);
        console.log(`   • Errores encontrados: ${report.total_errores}`);
        console.log(`   • Advertencias: ${report.total_advertencias}`);
        console.log(`   • Estado: ${report.es_valido ? '✅ VÁLIDO' : '❌ INVÁLIDO'}`);
        
        if (report.errores.length > 0) {
            console.log(`\n❌ ERRORES (${report.errores.length}):`);
            report.errores.forEach((error, idx) => {
                console.log(`   ${idx + 1}. ${error}`);
            });
        }
        
        if (report.advertencias.length > 0) {
            console.log(`\n⚠ ADVERTENCIAS (${report.advertencias.length}):`);
            report.advertencias.forEach((warning, idx) => {
                console.log(`   ${idx + 1}. ${warning}`);
            });
        }
        
        console.log('\n' + '='.repeat(60) + '\n');
        
        return report;
    }
}

/**
 * Ejecutar validación (cuando se cargue en el navegador)
 */
if (typeof window !== 'undefined' && typeof fetch !== 'undefined') {
    document.addEventListener('DOMContentLoaded', async () => {
        try {
            const response = await fetch('dataset.json');
            const dataset = await response.json();
            
            const validator = new DatasetValidator(dataset);
            const report = validator.printReport();
            
            // También mostrar en un elemento del DOM si existe
            const reportElement = document.getElementById('validation-report');
            if (reportElement) {
                reportElement.innerHTML = `
                    <h2>Reporte de Validación</h2>
                    <p><strong>Estado:</strong> ${report.es_valido ? '✅ VÁLIDO' : '❌ INVÁLIDO'}</p>
                    <p><strong>Registros:</strong> ${report.total_registros}</p>
                    <p><strong>Errores:</strong> ${report.total_errores}</p>
                    <p><strong>Advertencias:</strong> ${report.total_advertencias}</p>
                `;
            }
        } catch (error) {
            console.error('Error cargando dataset:', error);
        }
    });
}
