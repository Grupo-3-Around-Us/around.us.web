import { Event } from './../../shared/models/event.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private events: Event[] = [
    {
      id: 1,
      name: 'AYNI Hackathon 2024',
      programation: {
        date: new Date('2024-11-08'),
        startTime: '9:00 am',
        place:
          'Sede región Oriente: Universidad Nacional Toribio Rodríguez de Mendoza - Chachapoyas, Amazonas\nSede región Norte: Universidad Privada Antenor Orrego - Trujillo, La Libertad\nSede región Centro: Universidad Peruana de Ciencias Aplicadas - Monterrico, Lima\nSede región Sur: Universidad Católica San Pablo San Lazaro - Arequipa',
      },
      price: 0,
      imageUrl: '../../../../public/assets/customer-home/algorythm-evento.png',
      category: { name: 'IA Event' },
      isOpen: true,
      eventdescription: {
        description:
          'AYNI Hackathon es un evento nacional organizado por el Ministerio de Relaciones Exteriores...',
        objetivos: [
          'Generar soluciones tecnológicas alineadas con los objetivos de APEC PERÚ 2024...',
          'Descentralizar oportunidades brindando acceso equitativo...',
          'Incubar las mejores propuestas para su validación y escalamiento.',
        ],
        acercaDelConcurso: `Duración: 08 y 09 de Noviembre de 9:00 am a 5:00 pm.
              Sedes: Cuatro universidades comprometidas a proporcionar la infraestructura y condiciones óptimas para el desarrollo del evento.
              Región Norte: Universidad Privada Antenor Orrego, Trujillo - La Libertad;
              Región Centro: Universidad de Ciencias Aplicadas UPC, Surco - Lima;
              Región Sur: Universidad Católica San Pablo, San Lazaro - Arequipa;
              Región Oriente: Universidad Santo Toribio Rodriguez de Mendoza, Chachapoyas - Amazonas.
              Participantes: Los competidores pueden postular en equipos de 2 a 4 personas.
              Mentorías: Los competidores contarán con mentorías virtuales y presenciales por parte de expertos nacionales e internacionales en áreas especializadas de desarrollo de producto, tecnología y UX/UI.
              La competencia: Los equipos participarán en una primera ronda regional en su sede donde se seleccionará un ganador por categoría de reto. El ganador de cada categoría pasará a una ronda nacional entre las cuatro sedes, donde dará una presentación virtual al jurado nacional.
              Premiación: Los proyectos ganadores ingresarán a la incubadora de la universidad donde participaron. Cada miembro de un equipo ganador recibirá US$250.00 (doscientos cincuenta dólares americanos).`,
        organizadores: [
          'Ministerio de Relaciones Exteriores',
          'Asociación de Peruanos en Silicon Valley (PeruSV)',
        ], // Agregar organizadores
      },
    },
    {
      id: 2,
      name: 'Algorythm+ | How to Navigate AI Landscape?',
      programation: {
        date: new Date('2024-11-08'),
        startTime: '7:00 pm',
        place: 'Algorythm Online Classroom',
      },
      price: 49.99,
      imageUrl: '../../../../public/assets/customer-home/algorythm-evento.png',
      category: {
        name: 'IA Event',
      },
      isOpen: true,
      eventdescription: {
        description:
          'Algorythm+ es un evento virtual que explora las tendencias y aplicaciones más recientes de la inteligencia artificial en la industria global. Organizado por expertos de Algorythm, este evento ofrece una experiencia inmersiva y accesible a estudiantes, profesionales y entusiastas de la tecnología que buscan comprender cómo aprovechar el potencial de la IA en el desarrollo de sus propios proyectos e iniciativas empresariales.',
        objetivos: [
          'Proporcionar una visión general de los conceptos actuales y futuros de la inteligencia artificial aplicada en diferentes sectores, incluyendo la industria, la educación, y los servicios financieros.',
          'Facilitar un espacio de networking y colaboración, permitiendo que los asistentes interactúen con expertos y otros participantes interesados en la transformación digital.',
          'Incitar a los participantes a explorar y aplicar herramientas de inteligencia artificial que puedan transformar sus procesos y productos.',
        ],
        acercaDelConcurso:
          'Duración: Viernes a partir de las 19:00 horas, con una duración estimada de 3 horas.\nPlataforma: Algorythm Online Classroom, permitiendo a los participantes asistir de forma virtual desde cualquier lugar.',
        organizadores: ['Algorythm'],
      },
    },
    {
      id: 3,
      name: 'AI Connect 2024: Connecting Minds, Driving Change',
      programation: {
        date: new Date('2024-11-05'),
        startTime: '4:00 pm',
        place: 'Evento en formato virtual - Plataforma de transmisión en línea',
      },
      price: 0,
      imageUrl: '../../../../public/assets/customer-home/algorythm-evento.png',
      category: {
        name: 'IA Event',
      },
      isOpen: true,
      eventdescription: {
        description:
          'AI Connect 2024 es un evento virtual sin costo que busca reunir a profesionales, investigadores y entusiastas de la inteligencia artificial para explorar las últimas innovaciones y su impacto en diversos sectores. Este evento es una excelente oportunidad para intercambiar conocimientos, experiencias y conectar con otros profesionales interesados en el cambio impulsado por la tecnología.',
        objetivos: [
          'Facilitar la comprensión y discusión de las tendencias emergentes en inteligencia artificial y cómo están transformando la sociedad y la industria.',
          'Promover la colaboración y el networking entre profesionales y entusiastas de la IA, facilitando un entorno en el cual se generen nuevas ideas y alianzas estratégicas.',
          'Inspirar a los asistentes a aplicar el conocimiento adquirido en sus propios proyectos o trabajos, impulsando la adopción de IA en múltiples sectores.',
        ],
        acercaDelConcurso:
          'Duración: El evento se llevará a cabo el 5 de noviembre, con una duración estimada de 4 horas.\nFormato: Virtual, permitiendo la participación desde cualquier lugar del mundo a través de una plataforma de streaming.',
        organizadores: ['AI Connect'],
      },
    },
    {
      id: 4,
      name: 'Women in AI & Blockchain: Impulsando el cambio y liderando la revolución tecnológica I 06.11',
      programation: {
        date: new Date('2024-11-06'),
        startTime: '5:00 pm',
        place: 'Evento en formato virtual - Plataforma en línea',
      },
      price: 0,
      imageUrl: '../../../../public/assets/customer-home/algorythm-evento.png',
      category: {
        name: 'IA Event',
      },
      isOpen: true,
      eventdescription: {
        description:
          'Women in AI & Blockchain es un evento gratuito que celebra y empodera a las mujeres que lideran e innovan en los campos de la inteligencia artificial y la tecnología blockchain. Este evento está diseñado para inspirar a más mujeres a explorar y liderar estos sectores tecnológicos, compartiendo historias de éxito, estudios de casos y perspectivas únicas que fomentan la diversidad y la inclusión en la tecnología.',
        objetivos: [
          'Promover el liderazgo femenino en los sectores de IA y blockchain, mostrando el impacto de mujeres en roles innovadores.',
          'Fomentar una comunidad inclusiva de mujeres profesionales y aspirantes en tecnología, facilitando la creación de redes de apoyo y mentoría.',
          'Ofrecer a las participantes herramientas y conocimientos prácticos para avanzar en sus carreras tecnológicas y de innovación.',
        ],
        acercaDelConcurso:
          'Duración: Este evento tendrá una duración de 3 horas y media, ofreciendo una combinación de charlas, paneles de discusión y sesiones de preguntas y respuestas.\nFormato: Virtual, brindando la posibilidad de participar desde cualquier lugar a través de una plataforma de videoconferencia.',
        organizadores: ['Women in AI & Blockchain'],
      },
    },
    {
      id: 5,
      name: "PMxIA Day 2024: Inteligencia Artificial en Dirección de Proyectos",
      programation: {
        date: new Date('2024-11-08'),
        startTime: '8:30 am',
        place: 'Centro de Convenciones - Lima, Perú'
      },
      price: 99.99,
      imageUrl: '../../../../public/assets/customer-home/algorythm-evento.png',
      category: {
        name: "IA Event"
      },
      isOpen: true,
      eventdescription: {
        description: "PMxIA Day 2024 es un evento dedicado a explorar cómo la inteligencia artificial puede revolucionar la gestión de proyectos, optimizando el rendimiento, mejorando la toma de decisiones y automatizando procesos clave. Diseñado para profesionales de la gestión de proyectos, este evento proporcionará conocimientos prácticos y perspectivas avanzadas sobre el uso de IA en diversas fases de los proyectos.",
        objetivos: [
          "Proveer herramientas y técnicas para integrar IA en la dirección de proyectos, desde la planificación hasta la ejecución y evaluación.",
          "Capacitar a los asistentes en la utilización de soluciones basadas en IA para el análisis de datos, gestión de riesgos y optimización de recursos.",
          "Fomentar un entorno de colaboración y networking para que profesionales de proyectos compartan mejores prácticas y experiencias en el uso de IA."
        ],
        acercaDelConcurso: "Duración: Este evento de un día completo incluye conferencias, paneles y talleres prácticos que permitirán a los participantes aplicar lo aprendido.\nFormato: Presencial, ofreciendo una oportunidad única para conectarse y aprender de expertos en el sector de proyectos y tecnología.",
        organizadores: ["PMxIA Day"]
      }
    },
    {
      id: 6,
      name: "CodeOn 2024",
      programation: {
        date: new Date('2024-11-09'),
        startTime: '9:00 am',
        place: 'Universidad de Ingeniería y Tecnología (UTEC) - Barranco, Lima, Perú'
      },
      price: 0,
      imageUrl: '../../../../public/assets/customer-home/algorythm-evento.png',
      category: {
        name: "Programming Event"
      },
      isOpen: true,
      eventdescription: {
        description: "CodeOn 2024 es una conferencia y maratón de programación dirigida a entusiastas de la tecnología, desarrolladores y estudiantes, organizada para inspirar e impulsar el talento en el mundo del desarrollo de software. Este evento combina charlas, talleres prácticos y una hackathon para que los participantes puedan explorar nuevas tecnologías, aprender de expertos de la industria y trabajar en proyectos innovadores.",
        objetivos: [
          "Fomentar el aprendizaje de nuevas herramientas y metodologías de desarrollo de software.",
          "Crear un espacio de colaboración para la resolución de problemas tecnológicos a través de una hackathon.",
          "Facilitar el networking entre estudiantes, profesionales y empresas tecnológicas de Perú."
        ],
        acercaDelConcurso: "Duración: 9 horas de actividades intensivas, incluyendo charlas y un reto de programación en equipo.\nFormato: Presencial, proporcionando una experiencia práctica en tiempo real.",
        organizadores: ["CodeOn 2024"]
      }
    },
    {
      id: 7,
      name: "Pisco Sour Tech Night by Worthit",
      programation: {
        date: new Date('2024-11-04'),
        startTime: '7:00 pm',
        place: 'Worthit Hub - Miraflores, Lima, Perú'
      },
      price: 0,
      imageUrl: '../../../../public/assets/customer-home/algorythm-evento.png',
      category: {
        name: "Networking Event"
      },
      isOpen: true,
      eventdescription: {
        description: "Pisco Sour Tech Night by Worthit es una noche de networking y tecnología, organizada por la plataforma de emprendimiento Worthit, que invita a la comunidad tecnológica a compartir ideas, proyectos y experiencias en un ambiente relajado. Con la combinación perfecta de innovación y cultura peruana, el evento incluirá una degustación de Pisco Sour, permitiendo a los asistentes disfrutar de un espacio social mientras exploran las últimas tendencias en tecnología.",
        objetivos: [
          "Fomentar el networking y la colaboración en la comunidad tecnológica.",
          "Crear un ambiente donde los participantes puedan compartir conocimientos y experiencias en tecnología y emprendimiento.",
          "Promover la cultura peruana a través de una degustación del emblemático Pisco Sour."
        ],
        acercaDelConcurso: "Duración: 3 horas de actividades y networking.\nFormato: Presencial, creando un ambiente amigable e informal para facilitar la conexión entre asistentes.",
        organizadores: ["Worthit"]
      }
    },
  ];
  constructor() {}

  getEvents(): Event[] {
    return this.events;
  }

  // Métodos adicionales según sea necesario...
}