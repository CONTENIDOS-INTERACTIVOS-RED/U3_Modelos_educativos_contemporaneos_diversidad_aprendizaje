<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Integración de herramientas digitales en los procesos de enseñanza-aprendizaje'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    .row.mb-5 
      .col-lg-5.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/3.png", data-aos="zoom-in")           
      .col-lg-7
        .bg-color-4.p-4.h-100.j1(data-aos="fade-left")
          p.mb-0 La integración de herramientas digitales en los procesos de enseñanza y aprendizaje es un factor clave para modernizar y mejorar la educación en el siglo XXI. Estas tecnologías transforman el aprendizaje tradicional hacia una pedagogía activa y centrada en el estudiante, haciendo del proceso algo dinámico, interactivo y personalizado. Además, permiten la adaptación a las necesidades individuales, fomentando habilidades esenciales como el pensamiento crítico, la colaboración y la autonomía.

    .bg-full-width-2.bg-fondo-2
      .px-4.px-md-5.pb-md-3
        #t_1_1.titulo-segundo(data-aos="flip-up")
          h2 #[span 1.1] Oportunidades de la integración de tecnologías en el aprendizaje
        p(data-aos="fade-down") Diversos estudios destacan cómo las tecnologías mejoran la enseñanza y favorecen el logro de aprendizajes significativos. A continuación, se presentan las principales oportunidades:
        .row.mb-5.text-center
          .col-lg-3.mb-3.mb-lg-0  
            .bg-color-white.p-4.h-100.sha.brounded-sm
              img(src='@/assets/curso/temas/4.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
              h4.mb-4 Personalización del aprendizaje
              p Permite adaptar la enseñanza a los ritmos y estilos individuales. Facilita una retroalimentación constante, precisa y en tiempo real.            
          .col-lg-3.mb-3.mb-lg-0  
            .bg-color-white.p-4.h-100.sha.brounded-sm
              img(src='@/assets/curso/temas/5.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
              h4.mb-4 Fomento de la colaboración y reconocimiento del otro
              p Facilita la comunicación entre estudiantes, docentes y familias. Promueve el respeto, la empatía y la inclusión mediante el diálogo entre pares.
          .col-lg-3.mb-3.mb-lg-0  
            .bg-color-white.p-4.h-100.sha.brounded-sm
              img(src='@/assets/curso/temas/6.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
              h4.mb-4 Desarrollo de competencias digitales
              p Estimula el pensamiento crítico, reflexivo y analítico frente a la información y el conocimiento. Prepara al estudiante para los retos del mundo digital.
          .col-lg-3.mb-3.mb-lg-0  
            .bg-color-white.p-4.h-100.sha.brounded-sm
              img(src='@/assets/curso/temas/7.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
              h4.mb-4 Promoción del aprendizaje significativo
              p El uso de recursos interactivos como videos, presentaciones animadas, juegos o plataformas colaborativas facilita la comprensión de conceptos complejos.


    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Retos de la integración de tecnologías en el aprendizaje
    p(data-aos="fade-down") A pesar de las oportunidades, la integración tecnológica también enfrenta diversos desafíos, especialmente en función de los contextos educativos y niveles de formación (inicial, básica, media y terciaria):

    .row.align-items-start.mb-5
      .col-lg-8
        AcordionA(tipo="b")(data-aos="fade-left")
          .div(titulo="Dificultad en el acceso a la conectividad y tecnología")
            p Persisten brechas en territorios periurbanos y rurales, debido a la geografía, los costos y la disponibilidad de infraestructura tecnológica.
          .div(titulo="Uso inapropiado por falta de orientación")
            p Aunque el acceso a la información es amplio, su uso efectivo requiere habilidades individuales como el pensamiento crítico, la creatividad y la adaptabilidad.
          .div(titulo="Analfabetismo tecnológico y digital")
            p Afecta a personas o grupos que desconocen el uso de las tecnologías, debido a la falta de habilidades, acceso a herramientas o formación adecuada.
          .div(titulo="Desmotivación o desinterés")
            p Puede derivarse de los puntos anteriores o de experiencias poco atractivas con el uso de tecnología en el aula. Afecta tanto a estudiantes como a docentes. 
          .div(titulo="Autoexclusión y rechazo a la tecnología")
            p Surge como consecuencia de los retos anteriores. Implica una actitud negativa frente al uso de tecnologías, generando desventajas en la vida educativa, profesional y cotidiana.                                                          
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/8.png", alt="")  

    p(data-aos="fade-down") La efectividad de la integración tecnológica en la educación depende en gran medida de tres factores clave:


    .bg-color-7.dot-1.mb-5(data-aos="fade-down")
      .px-4
        .row.align-items-center
          .col-lg-auto
            img.img-a.img-t(src="@/assets/curso/temas/9.png")        
          .col-lg
            ul.lista-ul--color
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 La formación permanente y la curiosidad del docente,
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 La infraestructura tecnológica disponible.
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 El acceso a recursos adecuados y conectividad estable en las instituciones educativas.

    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Estrategias y herramientas comunes en los procesos de enseñanza y aprendizaje
    p(data-aos="fade-down") A continuación, se abordan las estrategias y herramientas comunes en los procesos de enseñanza y aprendizaje, destacando la importancia de una selección contextualizada y pedagógicamente fundamentada, del uso de tecnologías en el ámbito educativo.
    .bg-full-width.bg-color-2.mb-5(data-aos="fade-down")
      .px-4.px-md-5.py-4
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-3.mb-lg-0 
            p(data-aos="fade-left").mb-4 Para conocer sobre esta temática, lo invitamos a escuchar el siguiente podcast.
            
            TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
              texto="Estrategias y herramientas en la enseñanza"
              tiempo
              :audio="require('../../assets/curso/podcast/podcast1.mp3')"
            )    
          .col-lg-6.p-0
            figure
              img.img-a.img-t(src="@/assets/curso/temas/10.png", data-aos="zoom-in")     


    .bg-full-width-1.bg-fondo-1
      .px-4.px-md-5.pb-md-3
        p(data-aos="fade-down") A continuación, se presentan algunas herramientas tecnológicas útiles para docentes, en la creación de estrategias educativas, clasificadas con una breve descripción y su enlace correspondiente:      
        .row.justify-content-center.mb-5
          .col-lg-4
            figure
              img(src='@/assets/curso/temas/11.png', alt='')          
          .col-lg-8
            SlyderF.text-center(columnas="col-12 col-lg-6")(data-aos="fade-right")
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/12.png' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Replika
                p Chatbot con inteligencia artificial que actúa como compañero virtual. Ayuda a reflexionar sobre emociones y experiencias personales. Enlace:
                a.link-1(href="https://www.replika.com/" target="_blank" rel="noopener noreferrer") https://www.replika.com/      
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/13.png' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Educaplay
                p Plataforma que permite crear y compartir actividades educativas basadas en juegos. Cuenta con más de 5 millones de recursos disponibles. Enlace: 
                a.link-1(href="https://es.educaplay.com/" target="_blank" rel="noopener noreferrer") https://es.educaplay.com/   
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/14.png' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Magic School
                p Plataforma con más de 50 herramientas de IA que facilita la creación de rúbricas, evaluaciones y retroalimentaciones personalizadas. Enlace: 
                a.link-1(href="https://www.magicschool.ai/" target="_blank" rel="noopener noreferrer") https://www.magicschool.ai/   
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/15.png' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Quizlet
                p Herramienta basada en tarjetas educativas y juegos para el aprendizaje de distintos temas. Enlace:  
                a.link-1(href="https://www.quizlet.com/" target="_blank" rel="noopener noreferrer") https://www.quizlet.com/ 
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/16.png' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Socrative
                p Aplicación que permite crear ejercicios o juegos en tiempo real para ser resueltos por los estudiantes. Enlace: 
                a.link-1(href="https://www.socrative.com/" target="_blank" rel="noopener noreferrer") https://www.socrative.com/  
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/17.png' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Wordwall
                p Plataforma para crear actividades personalizadas como cuestionarios, juegos de palabras, "une las parejas", entre otros. Enlace: 
                a.link-1(href="https://wordwall.net/es" target="_blank" rel="noopener noreferrer") https://wordwall.net/es  
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/18.png' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Padlet 
                p Espacio colaborativo que fomenta la creatividad, la investigación y la integración de recursos TIC. Permite evaluaciones mediante comentarios y reflexiones. Enlace: 
                a.link-1(href="https://es.padlet.com/" target="_blank" rel="noopener noreferrer") https://es.padlet.com/  
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/19.png' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Miró
                p Herramienta de colaboración visual para construir en equipo desde la concepción de una idea hasta su implementación final. Enlace: 
                a.link-1(href="https://www.miro.com/" target="_blank" rel="noopener noreferrer") https://www.miro.com/  
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/20.png' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Canva
                p Plataforma de diseño gráfico gratuita para crear presentaciones, infografías, carteles, videos, logos, entre otros recursos visuales. Enlace: 
                a.link-1(href="https://www.canva.com/" target="_blank" rel="noopener noreferrer") https://www.canva.com/
                  
    .bg-full-width.bg-color-3.mb-5(data-aos="fade-down")
      .px-4.px-md-5.py-4
        p.mb-0 Otro uso de herramientas tecnológicas, se evidencia en la incorporación de aulas virtuales, videoconferencias y recursos multimedia para facilitar el acceso y la gestión del conocimiento. A partir del fenómeno mundial de la pandemia, muchas instituciones educativas han adoptado estas herramientas, que también integran elementos como videos, grupos en línea, recordatorios y agendas compartidas, entre otros recursos.


    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.researchgate.net/publication/362722196_Metodologias_Activas_Herramientas_para_el_empoderamiento_docente" target="_blank" rel="noopener noreferrer") Suniaga, Asunción. (2019). Metodologías Activas: Herramientas para el empoderamiento docente. Revista internacional docente Revista Docentes 2 0, 7(1), 65-80. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=b5CftFqJ7qo" target="_blank" rel="noopener noreferrer") INDEE. (2022). Integración de las tecnologías digitales en la gestión educativa (video). 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
