/**
 * Dashboard Script - EduTrack
 * Maneja la navegación del sidebar, responsive mobile y navegación entre secciones
 */

class DashboardManager {
    constructor() {
        this.sidebar = document.getElementById('sidebar');
        this.sidebarOverlay = document.getElementById('sidebarOverlay');
        this.menuToggle = document.getElementById('menuToggle');
        this.sidebarClose = document.getElementById('sidebarClose');
        this.logoutBtn = document.getElementById('logoutBtn');
        this.navItems = document.querySelectorAll('.nav-item');
        this.pageSections = document.querySelectorAll('.page-section');

        this.initEventListeners();
        this.initNavigation();
    }

    /**
     * Inicializa los event listeners
     */
    initEventListeners() {
        // Toggle del sidebar en móvil
        this.menuToggle.addEventListener('click', () => this.toggleSidebar());
        this.sidebarClose.addEventListener('click', () => this.closeSidebar());
        this.sidebarOverlay.addEventListener('click', () => this.closeSidebar());

        // Logout
        this.logoutBtn.addEventListener('click', () => this.logout());

        // Cerrar sidebar al hacer click en un nav item (en móvil)
        this.navItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const section = item.dataset.section;
                this.switchSection(section);
                this.closeSidebar();
            });
        });

        // Cerrar sidebar si se redimensiona a desktop
        window.addEventListener('resize', () => {
            if (window.innerWidth > 767) {
                this.closeSidebar();
            }
        });
    }

    /**
     * Toggle sidebar abierto/cerrado
     */
    toggleSidebar() {
        if (this.sidebar.classList.contains('active')) {
            this.closeSidebar();
        } else {
            this.openSidebar();
        }
    }

    /**
     * Abre el sidebar
     */
    openSidebar() {
        this.sidebar.classList.add('active');
        this.sidebarOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    /**
     * Cierra el sidebar
     */
    closeSidebar() {
        this.sidebar.classList.remove('active');
        this.sidebarOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    /**
     * Inicializa la navegación (sección activa por defecto)
     */
    initNavigation() {
        const defaultSection = 'dashboard';
        this.switchSection(defaultSection);
    }

    /**
     * Cambia de sección
     * @param {string} sectionId - ID de la sección a mostrar
     */
    switchSection(sectionId) {
        // Actualizar secciones (ocultar todas, mostrar seleccionada)
        this.pageSections.forEach(section => {
            section.classList.remove('active');
        });
        const activeSection = document.getElementById(sectionId);
        if (activeSection) {
            activeSection.classList.add('active');
        }

        // Actualizar nav items (marcar como active)
        this.navItems.forEach(item => {
            item.classList.remove('active');
            if (item.dataset.section === sectionId) {
                item.classList.add('active');
            }
        });
    }

    /**
     * Maneja el logout del usuario
     */
    logout() {
        if (confirm('¿Estás seguro de que deseas cerrar sesión?')) {
            // En producción, aquí irías a eliminar la sesión en el servidor
            // Por ahora solo redireccionamos a la landing page
            window.location.href = 'index.html';
        }
    }
}

/**
 * Inicializar cuando el DOM esté listo
 */
document.addEventListener('DOMContentLoaded', () => {
    new DashboardManager();
});
