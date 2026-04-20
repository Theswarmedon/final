Memoria del Proyecto: Sistema de Gestión de Citas Médicas

Autor: Santiago  
Fecha de entrega: 1 de Junio de 2026  

---

1. Título del Proyecto
SaludSinEsperas: Optimización y gestión de flujo de pacientes en centros médicos de asistencia primaria.

2. Integrantes
* Santiago

3. Objetivos del Proyecto
El objetivo principal es reducir la frustración de los pacientes y mejorar la eficiencia operativa de los centros mediante:
* Desarrollo Web: Crear una interfaz intuitiva para la gestión de citas.
* Infraestructura Propia: Configurar un servidor físico (Raspberry Pi) para alojar la aplicación de forma local.
Accesibilidad: Facilitar el acceso a la información de turnos en tiempo real para sectores de clase media-baja.
Aprendizaje Técnico: Documentar el proceso de despliegue desde cero, incluyendo la configuración de red y servidores web.

4. Organización de Tareas (Metodología Ágil)
Para este proyecto se ha adoptado una metodología Agile/Scrum simplificada, organizada en Sprints de 1 semana.

* Backlog de Producto: Lista de todas las tareas (Plan de empresa, Web, Configuración Raspberry, Memoria).
* Sprints: Cada bloque semanal del diagrama de Gantt representa un Sprint con entregables claros.
* Daily Stand-up: Revisión personal diaria de los objetivos para asegurar que se cumple el hito del 1 de junio.
* Herramientas: Uso de GitHub para el control de versiones y este documento como guía de seguimiento.

Planificación Temporal (Gantt)

```mermaid
gantt
    title Planificación del Proyecto - Santiago
    dateFormat  YYYY-MM-DD
    axisFormat %d/%m

    section Fase 1: Plan y Web
    Web y Estructura Plan Empresa :a1, 2026-04-20, 7d
    Diseño Frontend y Lean Canvas   :a2, 2026-04-27, 10d
    Finalizar Web y subir a GitHub  :a3, 2026-05-04, 7d

    section Fase 2: Infraestructura
    Montaje Raspberry (OS y SSH)    :b1, 2026-04-27, 7d
    Configurar Nginx y Software     :b2, 2026-05-04, 7d
    Router, IP Estática y Puertos   :b3, 2026-05-11, 7d
    Despliegue y Test Local         :b4, 2026-05-18, 7d

    section Fase 3: Documentación y Cierre
    Memoria y README.md             :c1, 2026-04-20, 14d
    Pruebas y Ajustes Finales       :c2, 2026-05-11, 14d
    Entrega Final                   :milestone, m1, 2026-06-01, 0d