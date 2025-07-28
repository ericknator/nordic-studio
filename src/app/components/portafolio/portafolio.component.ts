import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ProyectoDetalle {
  id: string;
  titulo: string;
  cliente: string;
  descripcion: string;
  funcionalidades: string[];
  tecnologias: string;
  estado: string;
}

@Component({
  selector: 'app-portafolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portafolio.component.html',
  styleUrl: './portafolio.component.css'
})
export class PortafolioComponent {
  mostrarModal = false;
  proyectoSeleccionado: ProyectoDetalle | null = null;

  proyectosDetalle: ProyectoDetalle[] = [
    {
      id: 'sigpi',
      titulo: 'SIGPI - Gestión de Pedidos de Información',
      cliente: 'Oficina PNP',
      descripcion: 'Sistema robusto para registrar, buscar y exportar pedidos con identidad institucional.',
      funcionalidades: [
        'Registro con validaciones',
        'Exportación a PDF y Excel',
        'Buscador avanzado por fuente, año, folio',
        'Interfaz con identidad institucional'
      ],
      tecnologias: 'Python (Tkinter), SQLite, FPDF',
      estado: 'Implementado en oficina policial'
    },
    {
      id: 'zapier',
      titulo: 'Automatización WhatsApp + Zapier',
      cliente: 'Emprendedores y negocios online',
      descripcion: 'Conecta formularios con WhatsApp para respuestas automáticas y gestión de pedidos.',
      funcionalidades: [
        'Google Sheets + Zapier',
        'Webhook a WhatsApp Business',
        'Confirmación de pedidos al instante',
        'Configuración escalable y personalizable'
      ],
      tecnologias: 'Zapier, Webhooks, Google Sheets',
      estado: 'Implementado'
    },
    {
    id: 'catalogo',
    titulo: 'Catálogo de Maquillaje',
    cliente: 'Emprendimientos y tiendas en redes',
    descripcion: 'Sistema digital para mostrar productos, registrar pedidos y organizar ventas de manera ordenada y visual.',
    funcionalidades: [
      'Visualización de productos por categoría',
      'Registro automático de pedidos',
      'Control de stock y precios',
      'Versión móvil para facilidad de uso'
    ],
    tecnologias: 'Google Sheets, Apps Script',
    estado: 'En uso en emprendimiento real'
  },
  {
    id: 'dashboard',
    titulo: 'Dashboard Ejecutivo en Google Sheets',
    cliente: 'Negocios que requieren KPIs en tiempo real',
    descripcion: 'Visualización automática de métricas desde formularios o bases conectadas. Ideal para seguimiento de objetivos.',
    funcionalidades: [
      'Filtros por fechas y métricas clave',
      'Gráficos dinámicos y visuales',
      'Conexión con formularios activos',
      'Plantilla adaptable a cualquier rubro'
    ],
    tecnologias: 'Google Sheets, Looker Studio (Data Studio)',
    estado: 'Disponible para implementación inmediata'
  },
  {
    id: 'gamezone',
    titulo: 'GameZone - Web SPA',
    cliente: 'Sitios de videojuegos, comunidades digitales',
    descripcion: 'Sitio web de una sola página con navegación fluida y diseño moderno. Ideal para contenidos interactivos o promociones.',
    funcionalidades: [
      'Estructura SPA con rutas dinámicas',
      'Diseño responsive con Tailwind',
      'Secciones modulares (inicio, servicios, contacto)',
      'Integración de video, imágenes y animaciones'
    ],
    tecnologias: 'React, Tailwind CSS, React Router DOM',
    estado: '100% funcional, listo para personalizar'
  },
  {
    id: 'android',
    titulo: 'App Android con Firebase',
    cliente: 'Empresas o instituciones educativas',
    descripcion: 'Aplicación móvil con login seguro, formularios de datos, cámara, audio y almacenamiento local.',
    funcionalidades: [
      'Inicio de sesión con Firebase Auth',
      'Descarga de imágenes desde URL',
      'Captura de fotos y grabación de audio',
      'Almacenamiento local con SQLite'
    ],
    tecnologias: 'Android Studio, Java, Firebase, SQLite',
    estado: 'Listo para adaptar por cliente'
  },
  {
    id: 'restaurante',
    titulo: 'App para Restaurantes - Android',
    cliente: 'Restaurantes, food trucks, cocinas ocultas',
    descripcion: 'App nativa para gestionar menús, pedidos y reservas en restaurantes. Rápida, intuitiva y lista para implementar.',
    funcionalidades: [
      'Menú digital con imágenes y categorías',
      'Registro de pedidos con selección múltiple',
      'Vista resumen del pedido y total',
      'Interfaz moderna y ágil'
    ],
    tecnologias: 'Android Studio, Java, SQLite',
    estado: 'Disponible para venta e instalación'
  },
  {
    id: 'iphone',
    titulo: 'App para iPhone - Aplicación iOS',
    cliente: 'Educación, negocios o apps personales',
    descripcion: 'Aplicación desarrollada para dispositivos Apple, con navegación fluida, interfaz amigable y escalabilidad.',
    funcionalidades: [
      'Pantallas limpias y minimalistas',
      'Navegación con menú inferior',
      'Animaciones suaves y responsivas',
      'Diseño adaptable a diferentes sectores'
    ],
    tecnologias: 'Swift, Xcode',
    estado: 'Prototipo funcional con posibilidad de expansión'
  },
  {
    id: 'qa',
    titulo: 'Sistema de Testing y Control de Calidad',
    cliente: 'Equipos de QA y desarrollo de software',
    descripcion: 'Documentación estructurada para pruebas de software: casos de prueba, matrices, control de defectos.',
    funcionalidades: [
      'Matriz de trazabilidad completa',
      'Casos de prueba organizados por módulo',
      'Reporte de defectos con descripción y evidencia',
      'Modelo exportable a herramientas como Jira o TestLink'
    ],
    tecnologias: 'Google Sheets, Google Docs',
    estado: 'Disponible para empresas de software o formación'
  }   
  ];

  abrirModal(id: string) {
    const proyecto = this.proyectosDetalle.find(p => p.id === id);
    if (proyecto) {
      this.proyectoSeleccionado = proyecto;
      this.mostrarModal = true;
    }
  }

  cerrarModal() {
    this.mostrarModal = false;
    this.proyectoSeleccionado = null;
  }
}
