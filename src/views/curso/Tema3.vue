<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Inteligencia Artificial y análisis de datos, para la personalización del aprendizaje'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    .bg-color-3.mb-5(data-aos="fade-down")
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img.img-a.img-t(src="@/assets/curso/temas/36.svg")
          .col-lg
            p.mb-0 La Inteligencia Artificial (IA) y el análisis de datos pueden aportar a la personalización del aprendizaje, permitiendo adaptar las estrategias educativas a las necesidades, ritmos y estilos individuales de cada estudiante.

    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Conceptos claves de la Inteligencia Artificial (IA)

    .row.mb-5 
      .col-lg-7.mb-3.mb-lg-0
        .bg-color-6.p-4.h-100.j1(data-aos="fade-left")
          p.mb-0 La Inteligencia Artificial (IA) es una rama de la informática que desarrolla sistemas capaces de realizar tareas que requieren inteligencia humana: #[b aprender, razonar, tomar decisiones, reconocer patrones, comprender lenguaje natural y resolver problemas complejos.] Su objetivo es imitar las funciones cognitivas humanas, como la percepción, el razonamiento, el aprendizaje, la creatividad y la interacción lingüística.    
      .col-lg-5 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/37.png", data-aos="zoom-in") 

    h3(data-aos="fade-down") Algoritmos en la IA
    p(data-aos="fade-down") Los algoritmos son instrucciones precisas que permiten a las máquinas realizar tareas complejas y resolver problemas. Son esenciales en el desarrollo de sistemas inteligentes.

    .bg-full-width.bg-color-1.mb-5(data-aos="fade-down")
      .px-4.px-md-5
        .row.align-items-center
          .col-lg-auto
            img.img-a.img-t(src="@/assets/curso/temas/38.png")        
          .col-lg
            h5(data-aos="fade-down") Las características de los algoritmos son: 
            ul.lista-ul--color
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 #[b Secuencialidad:] cada paso debe seguir un orden lógico.
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 #[b Precisión:] deben estar claramente definidos.
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 #[b Finitud:] deben concluir tras un número limitado de pasos.
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 #[b Definición:] no debe haber ambigüedades.
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 #[b Entrada y salida (input/output):] reciben datos y producen un resultado.

    p(data-aos="fade-down") #[b Ejemplos cotidianos:] recetas de cocina, manuales de uso, algoritmos matemáticos (división, MCD), algoritmos informáticos (búsqueda, ordenamiento).

    h3(data-aos="fade-down") #[i Machine Learning] (Aprendizaje automático)

    .row.mb-5       
      .col-lg-8.mb-3.mb-lg-0
        p(data-aos="fade-down") El #[i machine learning] permite a los sistemas aprender a partir de datos y mejorar su rendimiento sin programación específica para cada tarea. Este proceso consta de varias fases:

        .bg-color-7.p-4.mb-4(data-aos="fade-left")
          ul.lista-ul--color
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Recolección de datos relevantes.
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Selección y entrenamiento de un algoritmo para detectar patrones.
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Validación con datos de prueba para medir precisión.
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Ajuste y mejora continua del modelo.
        p(data-aos="fade-down") Las aplicaciones cotidianas son:
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/39.png", data-aos="zoom-in") 

    .row.justify-content-center.mb-5  
      .col-lg-4.mb-3 
        .bg-color-4.p-2.j1.h-100(data-aos="fade-left")
          .row.align-items-center    
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/40.svg")
            .col-lg
              p.mb-0 Asistentes virtuales (Siri, Alexa).
      .col-lg-4.mb-3 
        .bg-color-4.p-2.j1.h-100(data-aos="fade-down")
          .row.align-items-center    
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/41.svg")
            .col-lg
              p.mb-0 Motores de búsqueda.
      .col-lg-4.mb-3 
        .bg-color-4.p-2.j1.h-100(data-aos="fade-right")
          .row.align-items-center    
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/42.svg")
            .col-lg
              p.mb-0 Traducción automática.
      .col-lg-4.mb-3 
        .bg-color-4.p-2.j1.h-100(data-aos="fade-left")
          .row.align-items-center    
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/43.svg")
            .col-lg
              p.mb-0 Sistemas de detección de fraudes o #[i malware.]
      .col-lg-4.mb-3 
        .bg-color-4.p-2.j1.h-100(data-aos="fade-right")
          .row.align-items-center    
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/44.svg")
            .col-lg
              p.mb-0 Recomendaciones en streaming y comercio electrónico.

    h3(data-aos="fade-down") #[i Deep Learning] (Aprendizaje profundo)
    p(data-aos="fade-down") El #[i deep learning] utiliza redes neuronales artificiales que simulan el funcionamiento del cerebro humano. Se emplea especialmente para analizar datos no estructurados. Las aplicaciones destacadas son:

    .bg-full-width.bg-color-2.mb-5(data-aos="fade-down")
      .px-4.px-md-5
        .row.align-items-center
          .col-lg-auto
            img.img-a.img-t(src="@/assets/curso/temas/45.png")        
          .col-lg
            ul.lista-ul--color
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Reconocimiento facial e imágenes médicas.
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Vehículos autónomos.
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Traducción automática avanzada.
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Chatbots y asistentes virtuales.
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Reconocimiento de voz y audio. 

    h3(data-aos="fade-down") Inteligencia Artificial Generativa (IAG)
    p(data-aos="fade-down") La IA Generativa, puede crear contenido nuevo y original a partir del análisis de grandes cantidades de datos. Utiliza modelos deep learning que identifican patrones y los reutilizan para generar texto, imágenes, música, videos, etc. Las aplicaciones educativas de la IAG son: 
    .row.align-items-start.mb-5
      .col-lg-8.mb-3.mb-lg-0
        AcordionA(tipo="b")(data-aos="fade-left")
          .div(titulo="Personalización del aprendizaje")
            p Adapta contenidos y explicaciones a los estilos, ritmos y necesidades de cada estudiante, promoviendo equidad y efectividad.
          .div(titulo="Automatización de tareas docentes")
            p Genera automáticamente exámenes, ejercicios, materiales y retroalimentaciones, liberando tiempo para el acompañamiento pedagógico.
          .div(titulo="Tutorías virtuales 24/7")
            p Ofrece seguimiento continuo y personalizado en entornos autodirigidos o con necesidades educativas especiales.
          .div(titulo="Generación de contenido creativo")
            p Crea ejercicios interactivos, recursos multimedia y proyectos didácticos innovadores, aumentando la motivación del alumnado.
          .div(titulo="Mejora de la gestión educativa")
            p Permite analizar datos para diseñar unidades didácticas, seleccionar recursos y tomar decisiones pedagógicas informadas.
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/23.png", alt="")  

    #t_3_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2] Clasificación de la IA 

    .bg-full-width-1.bg-fondo-1
      .px-4.px-md-5.pb-md-3
        p(data-aos="fade-down") La IA puede clasificarse, según su nivel de inteligencia, capacidad de imitar el comportamiento humano y tipo de aplicación. A continuación, se presentan los tipos más relevantes: 

        .row.justify-content-center.mb-5
          .col-lg-4
            figure
              img(src='@/assets/curso/temas/47.png', alt='')          
          .col-lg-8
            SlyderF.text-center(columnas="col-12 col-lg-6")(data-aos="fade-right")
              .custom-image-card-2.h-100.br-1
                img.custom-image-card__image(src="@/assets/curso/temas/48.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-4 Máquinas reactivas
                  p.mb-0 Sistemas básicos que responden a estímulos inmediatos. No almacenan experiencias pasadas ni aprenden de ellas.
              .custom-image-card-2.h-100.br-1
                img.custom-image-card__image(src="@/assets/curso/temas/49.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-4 Memoria limitada
                  p.mb-0 Pueden almacenar datos temporales para tomar decisiones con base en experiencias recientes.
              .custom-image-card-2.h-100.br-1
                img.custom-image-card__image(src="@/assets/curso/temas/50.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-4 IA Estrecha o Débil (ANI)
                  p.mb-0 Diseñada para realizar tareas específicas. Tiene capacidades limitadas, sin conciencia ni razonamiento general.
              .custom-image-card-2.h-100.br-1
                img.custom-image-card__image(src="@/assets/curso/temas/51.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-4 IA General (AGI)
                  p.mb-0 IA con capacidad de aprender, razonar y resolver problemas en diferentes contextos, de forma similar a un ser humano.
              .custom-image-card-2.h-100.br-1
                img.custom-image-card__image(src="@/assets/curso/temas/52.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-4 Súper Inteligencia Artificial
                  p.mb-0 Nivel hipotético donde la IA supera ampliamente la inteligencia humana en todas las áreas cognitivas y emocionales.
              .custom-image-card-2.h-100.br-1
                img.custom-image-card__image(src="@/assets/curso/temas/53.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-4 IA Generativa (IAG)
                  p.mb-0 Capaz de generar contenido nuevo (texto, imagen, música, código) basado en el análisis de grandes volúmenes de datos.
              .custom-image-card-2.h-100.br-1
                img.custom-image-card__image(src="@/assets/curso/temas/54.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-4 IA Multimodal
                  p.mb-0 Procesa y combina diferentes tipos de datos (texto, imagen, audio, video), mejorando la comprensión y contextualización de la información. 
              .custom-image-card-2.h-100.br-1
                img.custom-image-card__image(src="@/assets/curso/temas/55.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-4 IA Cuántica
                  p.mb-0 Integra algoritmos cuánticos para incrementar la velocidad y capacidad de procesamiento de datos complejos en los sistemas de IA.


    #t_3_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.3] El uso de la IA asociado al aprendizaje
    .row.mb-5       
      .col-lg-8.mb-3.mb-lg-0 
        .bg-color-1.p-4.mb-4(data-aos="fade-left")
          .row.align-items-center
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/56.svg")
            .col-lg
              p.mb-0 La rápida masificación del acceso a la IA Generativa, especialmente desde el lanzamiento de ChatGPT presentado por la empresa OpenAI en el 2022, ha generado tensiones en los sistemas educativos, sobre todo en niveles superiores. Según García (2024), citado en Flores y Fornons (2024), la preocupación principal es el uso indiscriminado de IAG por parte del estudiantado para resolver actividades sin mediación pedagógica.
        p(data-aos="fade-down") Sin embargo, esta preocupación es solo una parte del panorama. Cada vez más instituciones reconocen el potencial positivo de la IA en la personalización, seguimiento y mejora del proceso educativo. Los usos educativos de la IA son: 

      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/57.png", data-aos="zoom-in") 

    .bg-full-width.bg-fondo-slider.mb-5(data-aos="fade-right")
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/58.png")           
            .col-lg-7
              h5.mb-4 Análisis de rendimiento
              p Permite identificar patrones de aprendizaje, dificultades comunes y oportunidades de mejora, a partir del análisis de datos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/59.png")           
            .col-lg-7
              h5.mb-4 Monitoreo y adaptación
              p Algoritmos que ajustan actividades, recursos y niveles de dificultad, según el progreso del estudiante.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/60.png")           
            .col-lg-7
              h5.mb-4 Asistentes virtuales y tutorías IA
              p Proveen apoyo 24/7 con respuestas inmediatas, guías, retroalimentación y explicaciones personalizadas.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/61.png")           
            .col-lg-7
              h5.mb-4 IA en salud y estilo de vida
              p #[b Ejemplo.] Herramienta de la OMS para promover hábitos saludables mediante IA, que también recopila datos para futuras políticas de salud.                                           

    .bg-full-width.bg-color-2.mb-5(data-aos="fade-down")
      .px-4.px-md-5
        .row.align-items-center
          .col-lg
            ul.lista-ul--color
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 #[b Seguimiento personalizado.] Análisis continuo de calificaciones, participación, evaluaciones y conducta.
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 #[b Evaluación en tiempo real.] Plataformas como Socrative permiten retroalimentación inmediata para adaptar estrategias pedagógicas.
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 #[b Corrección automatizada y análisis predictivo.] Herramientas como Gradescope y Brightspace automatizan calificaciones y predicen desempeño futuro.
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 #[b Identificación de brechas.] Sugiere recursos adecuados para reforzar áreas débiles.
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 #[b Alerta temprana.] Predicción del riesgo de bajo rendimiento y activación de intervenciones docentes oportunas. 
          .col-lg-auto
            img.img-a.img-t(src="@/assets/curso/temas/62.png")  


    .bg-full-width-1.bg-fondo-1.mb-5
      .px-4.px-md-5.pb-md-3
        p(data-aos="fade-down") A continuación, se presentan las herramientas digitales basadas en Inteligencia Artificial que apoyan la planificación, evaluación, creación de contenidos y personalización del aprendizaje en diferentes niveles educativos:       
        .row.justify-content-center.mb-5
          .col-lg-4
            figure
              img(src='@/assets/curso/temas/63.png', alt='')          
          .col-lg-8
            SlyderF.text-center(columnas="col-12 col-lg-6")(data-aos="fade-right")
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/64.png' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Planeo
                p Planificación curricular desde básica hasta superior. Enlace: 
                a.link-1(href="https://www.planeo.ai/" target="_blank" rel="noopener noreferrer") https://www.planeo.ai/
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/65.png' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Mathway
                p Resolución de problemas matemáticos paso a paso. Enlace: 
                a.link-1(href="https://www.mathway.com/" target="_blank" rel="noopener noreferrer") https://www.mathway.com/
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/66.png' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Diffit
                p Adaptación de textos al nivel del estudiante con vocabulario clave y cuestionarios. Enlace:  
                a.link-1(href="https://www.diffit.me/" target="_blank" rel="noopener noreferrer") https://www.diffit.me/
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/67.png' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Magic Tools
                p Más de 50 herramientas para planificación, rúbricas, corrección y más. Enlace: 
                a.link-1(href="https://www.magicschool.ai/magic-tools" target="_blank" rel="noopener noreferrer") https://www.magicschool.ai/magic-tools
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/68.png' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 QuestionWell
                p Generación rápida de cuestionarios exportables a Kahoot, Quizizz o Moodle. Enlace: 
                a.link-1(href="https://www.questionwell.org/" target="_blank" rel="noopener noreferrer") https://www.questionwell.org/
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/69.png' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Cuenti.to
                p Crea cuentos ilustrados infantiles a partir de ideas del docente. Enlace: 
                a.link-1(href="https://www.cuenti.to/" target="_blank" rel="noopener noreferrer") https://www.cuenti.to/
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/70.png' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 SlidesAI.io
                p Automatiza presentaciones en Google Slides a partir de texto. Enlace: 
                a.link-1(href="https://www.slidesai.io/" target="_blank" rel="noopener noreferrer") https://www.slidesai.io/
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/71.png' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 EdutekaLab
                p Ecosistema de herramientas IA para planificación, gamificación, diseño de cursos y más. Enlace: 
                a.link-1(href="https://www.eduteka.net/lab/" target="_blank" rel="noopener noreferrer") https://www.eduteka.net/lab/                                            
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/72.png' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 QuillBot
                p Corrector, traductor, resumidor y detector de plagio. Enlace: 
                a.link-1(href="https://www.quillbot.com/" target="_blank" rel="noopener noreferrer") https://www.quillbot.com/
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/73.png' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Yippity
                p Genera cuestionarios desde textos o webs. Enlace: 
                a.link-1(href="https://www.yippity.io/" target="_blank" rel="noopener noreferrer") https://www.yippity.io/
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/74.png' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 PDFgear
                p Editor de PDF con chatbot para resumir, traducir y corregir documentos. Enlace: 
                a.link-1(href="https://www.pdfgear.com/" target="_blank" rel="noopener noreferrer") https://www.pdfgear.com/

    #t_3_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.4] Asuntos éticos del uso de la IA aplicada a la educación

    .bg-color-4.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-down") El uso creciente de la IA en contextos educativos, ha generado debates entre académicos, investigadores y docentes. Aunque esta tecnología ofrece múltiples beneficios, también plantea desafíos éticos que deben ser atendidos con responsabilidad para evitar que su implementación provoque desigualdades, violaciones a la privacidad o vacíos normativos.
        .col-lg-auto
          figure
            img(src='@/assets/curso/temas/78.png', alt='')   

    p(data-aos="fade-down") La clave está en orientar el diseño, uso y regulación de la IA, desde una perspectiva ética, centrada en el bienestar de los usuarios, el respeto de sus derechos y el fomento de la equidad educativa.
    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img.img-a.img-t(src="@/assets/curso/temas/75.png", alt="")    
      .col-lg-8
        AcordionA(tipo="b")(data-aos="fade-left")
          .div(titulo="Equidad y no discriminación")
            p Es fundamental evitar sesgos algorítmicos que puedan reproducir o amplificar prejuicios sociales. Los datos de entrenamiento deben ser diversos y representativos para no favorecer ni excluir a ningún grupo.
          .div(titulo="Transparencia y explicabilidad")
            p Los procesos de toma de decisiones de la IA deben ser comprensibles para usuarios y partes interesadas. Esto fomenta la confianza y el uso responsable. Es necesario explicar cómo se usan los datos y cómo se generan las respuestas, especialmente en la producción académica.
          .div(titulo="Protección de datos y privacidad")
            p Se deben implementar medidas para garantizar que los datos personales (especialmente los de menores) sean recolectados con consentimiento informado, protegidos con seguridad adecuada y usados únicamente con fines pedagógicos claramente establecidos.
          .div(titulo="Responsabilidad y autonomía")
            p Es indispensable definir claramente quién es responsable de las decisiones tomadas por los sistemas de IA, especialmente en situaciones que impliquen errores, perjuicios o decisiones automatizadas que afecten a los estudiantes.

    .row.align-items-start.mb-5
      .col-lg-8.mb-3.mb-lg-0
        AcordionA(tipo="b")(data-aos="fade-left")
          .div(titulo="Impacto social y educativo")
            p Se deben prever los efectos de la IA sobre el aprendizaje, la enseñanza, la cultura escolar, las competencias profesionales y la empleabilidad. Es clave fomentar políticas que mitiguen riesgos, reduzcan brechas y promuevan la inclusión.
          .div(titulo="Diseño centrado en el usuario")
            p Los sistemas de IA deben construirse respetando los valores, derechos y necesidades de los usuarios (estudiantes, docentes, familias), con el objetivo de empoderar a las personas y no reemplazarlas.
          .div(titulo="Cumplimiento normativo y ético")
            p La implementación debe ajustarse a las normas legales y marcos éticos internacionales y locales, que aseguren el uso justo, seguro y responsable de estas tecnologías. Esto incluye la formación ética en el uso de IA por parte de todos los actores del sistema educativo.
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/76.png", alt="")    
          
                                                              
    .bg-full-width.bg-color-3.mb-5(data-aos="fade-down")
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img.img-a.img-t(src="@/assets/curso/temas/77.svg")
          .col-lg
            p.mb-0 Para que la IA se convierta en una aliada en la transformación educativa, no basta con integrarla técnicamente. Es indispensable formar a los usuarios, establecer protocolos de ética digital, fomentar la alfabetización en IA y promover una visión crítica y humana del uso de la tecnología en la educación. 


    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://revista.gnerando.org/revista/index.php/RCMG/article/view/214" target="_blank" rel="noopener noreferrer") García Caicedo, S. S., Reyes Vélez, N. P., Solórzano Zambrano, Á. A., Quiñonez Godoy, N. A. & Vega Macias, J. R. (2024). Análisis al uso de herramientas de inteligencia artificial para la personalización del aprendizaje en la Educación Superior. Revista Científica Multidisciplinar G-Nerando, 5(1), 573–598. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://www.unesco.org/es/articles/que-debe-saber-acerca-de-los-nuevos-marcos-de-competencias-en-materia-de-ia-de-la-unesco-para?hub=32618" target="_blank" rel="noopener noreferrer") UNESCO. (2024). Qué debe saber acerca de los nuevos marcos de competencias en materia de IA de la UNESCO para estudiantes y docentes.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://unesdoc.unesco.org/ark:/48223/pf0000381137_spa" target="_blank" rel="noopener noreferrer") UNESCO. (2021). Recomendación sobre la ética de la inteligencia artificial. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://unesdoc.unesco.org/ark:/48223/pf0000389227" target="_blank" rel="noopener noreferrer") UNESCO. (2024). Guía para el uso de IA generativa en educación e investigación. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://who-es.digitalhero.cloud/landing/index.html " target="_blank" rel="noopener noreferrer") Promotor virtual de salud SARAH.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://edtk.co/me/ingresar.php?o=3" target="_blank" rel="noopener noreferrer") HERRAMIENTA DE IA EdutekaLab. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://www.mathway.com/es/Algebra" target="_blank" rel="noopener noreferrer") HERRAMIENTA DE IA Mathway. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://web.diffit.me/" target="_blank" rel="noopener noreferrer") HERRAMIENTA DE IA Diffit. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://www.magicschool.ai/magic-tools" target="_blank" rel="noopener noreferrer") HERRAMIENTA DE IA Magic Tools. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://questionwell.org/" target="_blank" rel="noopener noreferrer") HERRAMIENTA DE IA QuestionWell. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://cuenti.to/" target="_blank" rel="noopener noreferrer") HERRAMIENTA DE IA Cuenti.to. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://www.slidesai.io/es" target="_blank" rel="noopener noreferrer") HERRAMIENTA DE IA SlidesAI.io. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://edtk.co/" target="_blank" rel="noopener noreferrer") HERRAMIENTA DE IA EdutekaLab 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://quillbot.com/es/" target="_blank" rel="noopener noreferrer") HERRAMIENTA DE IA QuillBot 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://yippity.io/" target="_blank" rel="noopener noreferrer") HERRAMIENTA DE IA Yippity
                                            
            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="www.pdffiller.com" target="_blank" rel="noopener noreferrer") HERRAMIENTA DE IA PDFgear
                                                                                                                                          

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=srDIV4o9tKU" target="_blank" rel="noopener noreferrer") EducaTec. (2024). ¿Qué es Inteligencia Artificial Generativa? (video). 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema:
          'Modelos Educativos Contemporáneos y Diversidad en el Aprendizaje',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto: 'La sigla IA significa:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Inteligencia artificial generativa',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Inteligencia artificial',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Inducción al Aprendizaje',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Institución académica',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              'Son enfoques pedagógicos que sitúan al estudiante en el centro del proceso de aprendizaje, promoviendo su participación, la colaboración y la construcción de conocimiento a partir de experiencias significativas y contextualizadas:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Inteligencia artificial',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Metodologías activas',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Inteligencia artificial generativa',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Machine Learning',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              'Una de estas metodologías NO corresponde a una metodología activa en educación:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Aprendizaje basado en retos',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Aprendizaje basado en el lenguaje',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Aprendizaje basado en proyectos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Gamificación',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto: 'La personalización del aprendizaje implica:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Adaptar la enseñanza a las fortalezas, necesidades, habilidades, intereses y ritmos únicos de cada estudiante',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Adaptar los currículos a las aulas multigrados',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto:
                  'Adaptar el aprendizaje a los roles del tutor, mentor, profesor o maestro',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Adaptar los ambientes de aprendizaje y las aulas para colaborar en grupos',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto: 'Un ejemplo de machine learning es:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Los libros de texto, la escritura y los registros audiovisuales',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Reconocimiento de voz, traducción automática y análisis de sentimientos',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto:
                  'La literatura digital, las grabaciones electromagnéticas y la cinematografía',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Las empresas, industrias y el teletrabajo',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
