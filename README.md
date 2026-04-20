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

    section Fase 3: Cierre
    Memoria y Documentación         :c1, 2026-05-11, 14d
    Pruebas y Ajustes Finales       :c2, 2026-05-25, 6d
    Entrega Final                   :milestone, m1, 2026-06-01, 0d