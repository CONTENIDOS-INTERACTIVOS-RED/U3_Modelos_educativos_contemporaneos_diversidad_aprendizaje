<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Metodologías activas'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    .row.mb-5.align-items-center
      .col-lg-8.mb-3.mb-lg-0 
        .bg-color-10.p-4(data-aos="fade-up") 
          p(data-aos="fade-down").mb-0 Las metodologías activas son enfoques pedagógicos que colocan al estudiante en el centro del proceso de aprendizaje, fomentando su participación, la colaboración y la construcción de conocimientos a partir de experiencias significativas y contextualizadas.
           
        .bloque-texto-c.bg-color-2.p-4
          i.fas.fa-quote-left
          h5.mb-2 “La tendencia actual promueve el aprendizaje autónomo, enseñanza compartida y basada en la experiencia, haciendo del acto de conocer un placer y no una obligación, motivando a los estudiantes con metodologías que activen los procesos de enseñanza-aprendizaje”. 

          span (Asunción, 2019).      
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/21.png", data-aos="zoom-in")     
    p(data-aos="fade-down") Estas metodologías se caracterizan por:

    .bg-full-width.bg-color-1.mb-5(data-aos="fade-down")
      .px-4.px-md-5
        .row.align-items-center
          .col-lg-auto
            img.img-a.img-t(src="@/assets/curso/temas/22.png")        
          .col-lg
            ul.lista-ul--color.mb-0
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Centrarse en el estudiante, quien asume un rol activo y protagónico, desarrollando autonomía y responsabilidad.
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Promover el aprendizaje a partir de la experiencia, la reflexión y la interacción, más allá de la memorización.
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Fomentar el trabajo en equipo, la comunicación y la resolución conjunta de problemas.
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Vincular los aprendizajes con situaciones reales o simuladas, facilitando su aplicación en contextos cotidianos o profesionales.
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Estimular el pensamiento crítico, la creatividad, la capacidad de análisis y la toma de decisiones.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Incorporar tecnologías de la información y la comunicación como recurso potenciador del aprendizaje.

    p(data-aos="fade-down") Las principales metodologías activas aplicadas en la educación, son: 

    .row.align-items-start.mb-5
      .col-lg-8.mb-3.mb-lg-0
        AcordionA(tipo="b")(data-aos="fade-left")
          .div(titulo="Aprendizaje basado en proyectos (ABP)")
            p Los estudiantes diseñan y desarrollan un proyecto real, integrando saberes interdisciplinares y aplicando habilidades prácticas y de investigación.
          .div(titulo="Aprendizaje basado en problemas (ABP)")
            p El docente plantea un problema complejo para que sea analizado y resuelto en grupo, promoviendo el pensamiento crítico y la indagación.
          .div(titulo="Aprendizaje-servicio")
            p Integra el aprendizaje académico con acciones de servicio a la comunidad, desarrollando compromiso social y responsabilidad ciudadana.
          .div(titulo="Estudio de casos")
            p Consiste en analizar situaciones reales o simuladas para aplicar conocimientos teóricos y proponer soluciones diversas.
          .div(titulo="Aprendizaje cooperativo")
            p Los estudiantes trabajan en pequeños grupos con responsabilidades compartidas para alcanzar metas comunes.
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/23.png", alt="")                                                                                                          
 
    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img.img-a.img-t(src="@/assets/curso/temas/24.png", alt="")    
      .col-lg-8
        AcordionA(tipo="b")(data-aos="fade-left")
          .div(titulo="Juego de roles y simulaciones")
            p Los estudiantes asumen personajes y contextos simulados, desarrollando empatía, habilidades sociales y comprensión de distintas perspectivas.
          .div(titulo="<i>Capstone Project</i>")
            p Proyecto integrador al cierre de un ciclo educativo. Permite evidenciar competencias adquiridas mediante la resolución de un caso real o simulado.
          .div(titulo="<i>Flipped Classroom</i>")
            p Modelo en el que el estudiante revisa contenidos fuera del aula (generalmente en formato digital) y el tiempo de clase se dedica a actividades prácticas.
          .div(titulo="Gamificación")
            p Uso de elementos de juego (puntos, niveles, recompensas) para motivar la participación y el aprendizaje activo.
          .div(titulo="Aprendizaje basado en competencias")
            p Se enfoca en el desarrollo de capacidades y habilidades aplicables a contextos reales, priorizando el saber hacer y la toma de decisiones.
          .div(titulo="<i>Visual Thinking</i>")
            p Estrategia que utiliza dibujos, esquemas y mapas visuales para facilitar la comprensión, síntesis y comunicación de ideas complejas.                                    
                                                         


    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Gamificación

    .row.mb-5 
      .col-lg-5.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/25.png", data-aos="zoom-in")           
      .col-lg-7
        .bg-color-4.p-4.mb-4.j1(data-aos="fade-left")
          p.mb-0 La gamificación es una técnica que consiste en aplicar mecánicas, dinámicas y elementos propios de los juegos en contextos no lúdicos, como la educación o el ámbito profesional. Su propósito es motivar, involucrar y facilitar el aprendizaje de una forma más atractiva, divertida y efectiva. 

        p(data-aos="fade-down") En el ámbito educativo, la gamificación no implica jugar por jugar, sino integrar elementos del diseño de juegos, para transformar actividades pedagógicas tradicionales, en experiencias más estimulantes, generando compromiso, participación activa y mejor retención del conocimiento. Los principales elementos de la gamificación son: 


    .bg-full-width.bg-color-info
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.my-5
          .col-lg-10
            ImagenInfografica.color-secundario
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/temas/26.svg', alt='', style="max-width: 1106px;").mx-auto

                .bg-color-white.box-shadow.p-3(x="3.6%" y="20.3%" numero="+")
                  h5 Acumulación de puntos             
                  p Se asigna un valor numérico a determinadas acciones (responder, participar, colaborar), que se van acumulando.
                .bg-color-white.box-shadow.p-3(x="8.7%" y="41.9%" numero="+")
                  h5 Misiones o retos            
                  p Se plantean tareas específicas (individuales o grupales) que deben resolverse para avanzar o desbloquear recompensas.
                .bg-color-white.box-shadow.p-3(x="3%" y="60.3%" numero="+")
                  h5 Escalado de niveles            
                  p El usuario progresa superando niveles definidos, lo que representa avance en el dominio de contenidos o habilidades.
                .bg-color-white.box-shadow.p-3(x="28%" y="90.5%" numero="+")
                  h5 Regalos            
                  p Bienes o incentivos dados de forma gratuita al alcanzar un objetivo (insignias, bonos, accesos especiales, etc.).
                .bg-color-white.box-shadow.p-3(x="74.3%" y="5.9%" numero="+")
                  h5 Obtención de premios             
                  p Se otorgan recompensas simbólicas por logros alcanzados, a modo de colección o distintivo.
                .bg-color-white.box-shadow.p-3(x="96.9%" y="26.5%" numero="+")
                  h5 Clasificaciones             
                  p Se crean #[i rankings] o listas visibles que ordenan a los usuarios según sus logros o puntuaciones.
                .bg-color-white.box-shadow.p-3(x="93.9%" y="57.6%" numero="+")
                  h5 Desafíos             
                  p Competencias entre usuarios, donde quien alcanza mejores resultados obtiene puntos o premios.
    .bg-full-width.bg-color-1.mb-5(data-aos="fade-down")
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img.img-a.img-t(src="@/assets/curso/temas/27.svg")
          .col-lg
            p.mb-0 La implementación adecuada de la gamificación puede contribuir significativamente a la #[b motivación intrínseca], el desarrollo de habilidades cognitivas y socioemocionales, y la consolidación del aprendizaje mediante la experiencia activa y el reconocimiento del esfuerzo.

    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Aprendizaje Basado en Proyectos
    p(data-aos="fade-down") El Aprendizaje Basado en Proyectos, es una metodología educativa activa que propone que los estudiantes desarrollen conocimientos, habilidades y competencias mediante la formulación, diseño y ejecución de proyectos que responden a problemas reales y motivadores. Este enfoque promueve un aprendizaje autónomo, investigativo y colaborativo, en el que el estudiante es protagonista en la indagación y presentación de un producto final que da cuenta de lo aprendido. Los principios del ABP, son: 

    .bg-full-width.bg-color-7.mb-5(data-aos="fade-down")
      .px-4.px-md-5
        .row.align-items-center
          .col-lg-auto
            img.img-a.img-t(src="@/assets/curso/temas/28.png")        
          .col-lg
            ul.lista-ul--color
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 La estructura curricular fomenta la #[b interdisciplinariedad.]
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 El aprendizaje no tiene un único protagonista: #[b docentes y estudiantes, comparten responsabilidades.]
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Se promueve la #[b inclusión educativa] y se valora la #[b diversidad] del aula.
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Puede partir de una #[b pregunta guía], una situación concreta o un reto contextualizado.
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 La #[b evaluación y reflexión] son continuas y no se limitan a momentos específicos.
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Favorece la #[b socialización, comunicación y organización] de ideas, hipótesis, argumentos y conclusiones.

    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Aprendizaje Basado en Retos
    p(data-aos="fade-down") El Aprendizaje Basado en Retos también es una metodología activa y centrada en el estudiante. En este caso, los estudiantes abordan problemas reales y significativos de su entorno, desarrollando competencias esenciales como el pensamiento crítico, la creatividad, el liderazgo, la comunicación y el trabajo colaborativo. Las etapas del ABR, son: 

    .bg-full-width-1.bg-fondo-1
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5
          .col-lg-8
            SlyderF.text-center(columnas="col-12 col-lg-6")(data-aos="fade-right")
              .custom-image-card-2.h-100.br-1
                img.custom-image-card__image(src="@/assets/curso/temas/29.png" alt="")
                .custom-image-card__text.p-4
                  p.mb-0 #[b Identificación del reto], vinculado al contexto y realidad del alumnado.
              .custom-image-card-2.h-100.br-1
                img.custom-image-card__image(src="@/assets/curso/temas/30.png" alt="")
                .custom-image-card__text.p-4
                  p.mb-0 #[b Indagación e investigación] sobre la problemática planteada.
              .custom-image-card-2.h-100.br-1
                img.custom-image-card__image(src="@/assets/curso/temas/31.png" alt="")
                .custom-image-card__text.p-4
                  p.mb-0 #[b Generación de propuestas creativas], fundamentadas y viables.
              .custom-image-card-2.h-100.br-1
                img.custom-image-card__image(src="@/assets/curso/temas/32.png" alt="")
                .custom-image-card__text.p-4
                  p.mb-0 #[b Implementación o simulación] de las soluciones diseñadas.
              .custom-image-card-2.h-100.br-1
                img.custom-image-card__image(src="@/assets/curso/temas/33.png" alt="")
                .custom-image-card__text.p-4
                  p.mb-0 #[b Evaluación y reflexión crítica], sobre el proceso y los resultados obtenidos.
          .col-lg-4
            figure
              img(src='@/assets/curso/temas/34.png', alt='') 

        .bg-color-6.dot-1.mb-5(data-aos="fade-down")
          .px-4.px-md-5
            .row.align-items-center
              .col-lg-auto
                img.img-a.img-t(src="@/assets/curso/temas/35.png")        
              .col-lg
                p(data-aos="fade-down") Ejemplos comunes de retos, incluyen:
                ul.lista-ul--color
                  li.mb-3.d-flex
                    i.far.fa-arrow-alt-circle-right.color-1
                    p.mb-0 Juegos de simulación.
                  li.mb-3.d-flex
                    i.far.fa-arrow-alt-circle-right.color-1
                    p.mb-0 Debates para argumentar y defender posturas.
                  li.mb-3.d-flex
                    i.far.fa-arrow-alt-circle-right.color-1
                    p.mb-0 Estudios de caso con resolución colaborativa.



    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=oMPQNOD-2fo&t=175s" target="_blank" rel="noopener noreferrer") Sprouts Español. (2023). El método de aprendizaje activo (video). 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=BqGj_XyKE_g" target="_blank" rel="noopener noreferrer") Compartir Palabra Maestra. (2019). Gamificación en Educación: Qué es y Cómo Aplicarla en Clase (video). 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=1kb4KoF8_Sc" target="_blank" rel="noopener noreferrer") Compartir Palabra Maestra. (2019) ¿Cuáles son los beneficios de la Gamificación? (video). 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=G3HNJrP25fc" target="_blank" rel="noopener noreferrer") Mariacanovirtual. (2023). Elementos de la gamificación (video).                                           
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=DPIhyUAc0uE" target="_blank" rel="noopener noreferrer") Flippin First Project. (2018). Aprendizaje Basado en Problemas (video).            
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=8_YokNAK3wE" target="_blank" rel="noopener noreferrer") Autores Aula Desigual. (2023). Aprendizaje basado en retos: Características del producto final de una situación de aprendizaje (video). 


          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
