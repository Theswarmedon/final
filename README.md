```mermaid
gantt
    title Santiago Gantt - Plan de Proyecto
    dateFormat  YYYY-MM-DD
    axisFormat %d/%m
    
    section Desarrollo y Plan
    Web y Estructura Plan Empresa :a1, 2026-04-20, 7d
    Diseño Frontend y Lean Canvas   :a2, 2026-04-27, 10d
    Finalizar Web y subir a GitHub  :a3, 2026-05-04, 7d

    section Infraestructura Raspberry
    Montaje Raspberry (OS y SSH)    :b1, 2026-04-27, 7d
    Configurar Nginx y Software     :b2, 2026-05-04, 7d
    Router, IP Estática y Puertos   :b3, 2026-05-11, 7d
    Despliegue y Test Local         :b4, 2026-05-18, 7d

    section Documentación y Entrega
    Memoria y README.md             :c1, 2026-05-11, 7d
    Pruebas y Capturas de Pantalla  :c2, 2026-05-18, 7d
    Entrega Final                   :milestone, 2026-06-01, 0d
    ```