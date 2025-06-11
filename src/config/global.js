export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'Innovación y tecnología en la educación',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Integración de herramientas digitales en los procesos de enseñanza-aprendizaje',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Oportunidades de la integración de tecnologías en el aprendizaje',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Retos de la integración de tecnologías en el aprendizaje',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo:
              'Estrategias y herramientas comunes en los procesos de enseñanza y aprendizaje',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Metodologías activas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Gamificación',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Aprendizaje Basado en Proyectos',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Aprendizaje Basado en Retos',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Inteligencia Artificial y análisis de datos, para la personalización del aprendizaje',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Conceptos claves de la Inteligencia Artificial (IA)',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Clasificación de la IA',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'El uso de la IA asociado al aprendizaje',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Asuntos éticos del uso de la IA aplicada a la educación',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Sánchez Changoluisa, M. F., Hallo Caiza, E. P. & Toapanta Toapanta, M. E. (2025) Impacto de la implementación de herramientas digitales en el aprendizaje de los estudiantes: contexto de Educación Básica. Reincisol, 4(7), 735-749.',
      link: 'https://doi.org/10.59282/reincisol.V4(7)735-749 ',
    },
    {
      referencia:
        'MESEGUER GONZÁLEZ, P. & LÓPEZ DE MÁNTARAS BADIA, R. (2017). <i>Inteligencia artificial.</i> Editorial CSIC. Consejo Superior de Investigaciones Científicas. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/42319',
    },
    {
      referencia:
        'FLORES-ALARCIA, Ò. (IL.) & FORNONS CASOL, L. (Il.). (2024). <i>Educación e inteligencia artificial: horizontes de transformación.</i> Dykinson.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/279605',
    },
    {
      referencia:
        'Sunkel, G., Trucco, D. & Espejo, A. (2013. La integración de las tecnologías digitales en las escuelas de América Latina y el Caribe. Una mirada multidimensional. CEPAL.',
      link:
        'https://repositorio.cepal.org/server/api/core/bitstreams/1430a3ff-1b88-4a49-a8e1-037f89bd77e6/content',
    },
    {
      referencia:
        'Robles Robles, M. D. & Zambrano Acosta, J. M. (2025). Aplicación de herramientas digitales en el proceso de enseñanza-aprendizaje. <i>Universidad Ciencia Y Tecnología, 29</i>(126), 130-138.',
      link: 'https://doi.org/10.47460/uct.v29i126.947',
    },
  ],
  glosario: [
    {
      termino: 'Alfabetización digital',
      significado:
        'Es la capacidad de acceder, gestionar, comprender, integrar, comunicar, evaluar y crear información mediante el uso seguro y pertinente de tecnologías digitales. Esta habilidad es fundamental para el empleo, el trabajo decente y la iniciativa empresarial en la sociedad actual.',
    },
    {
      termino: 'Ambiente de aprendizaje',
      significado:
        'Espacios diseñados para facilitar y potenciar el proceso de enseñanza-aprendizaje, integrando aspectos físicos, sociales, culturales, psicológicos y pedagógicos que favorecen el desarrollo integral de los estudiantes.',
    },
    {
      termino: 'Aprendizaje',
      significado:
        'Proceso a través del cual se adquieren o modifican habilidades, destrezas, conocimientos, conductas o valores.',
    },
    {
      termino: 'Aprendizaje basado en retos',
      significado:
        'Metodología activa y centrada en el estudiante que promueve la resolución de problemas reales y significativos del entorno mediante la innovación, el trabajo colaborativo y el pensamiento crítico.',
    },
    {
      termino: 'Aprendizaje basado en problemas',
      significado:
        'Método de enseñanza centrado en el estudiante en el que éste adquiere conocimientos, habilidades y actitudes a través de situaciones de la vida real.',
    },
    {
      termino: 'Gamificación',
      significado:
        'Aplicación de mecánicas, dinámicas y elementos propios de los juegos en contextos no lúdicos, especialmente en ámbitos educativos y profesionales, con el fin de motivar, enseñar y fomentar el compromiso de los usuarios de forma divertida y atractiva.',
    },
    {
      termino: 'Inteligencia Artificial',
      significado:
        'Rama de la informática que se enfoca en desarrollar sistemas y algoritmos capaces de realizar tareas que normalmente requieren inteligencia humana, como el reconocimiento de voz, la toma de decisiones, la traducción de idiomas y la visión por computadora.',
    },
    {
      termino: 'Inteligencia Artificial Generativa',
      significado:
        'Tipo de Inteligencia Artificial capaz de crear contenido nuevo y original, como texto, imágenes, videos, música, código de software y otros medios, a partir de datos aprendidos previamente.',
    },
    {
      termino: 'Metodologías activas',
      significado:
        'Enfoques pedagógicos que sitúan al estudiante como protagonista del proceso de aprendizaje, promoviendo su participación, reflexión y construcción del conocimiento, en contraste con métodos tradicionales centrados en la transmisión pasiva de contenidos.',
    },
    {
      termino: 'Personalización del aprendizaje',
      significado:
        'Es un enfoque educativo que adapta la enseñanza a las fortalezas, necesidades, habilidades, intereses y ritmos únicos de cada estudiante, situándose en el centro del proceso educativo.',
    },
  ],
}
