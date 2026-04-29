const app = Vue.createApp({
  data() {
    return {
      cursos:
        [{ id:1,nombre: "Desarrollo aplicaciones", sigla: "TM-4100", categoria: "Tecnología y Lógica", duracion: "4 meses", descripcion: "Curso orientado en el desarrollo de aplicaciones interactivas con diferentes frameworks", src: "./assets/img/aplicacioness.jpg" },
        { id:2,nombre: "Cyberseguridad", sigla: "TM-4200", categoria: "Tecnología y Lógica", duracion: "4 meses", descripcion: "Curso orientado a la proteccion de aplicaciones y servidores", src: "./assets/img/seguridad.jpg" },
        {id:3, nombre: "Programacion I", sigla: "TM-3100", categoria: "Tecnología y Lógica", duracion: "4 meses", descripcion: "Curso introductorio a laprogramacion", src: "./assets/img/progra.jpg" },
        { id:4,nombre: "Dibujo I", sigla: "TM-3200", categoria: "Arte y Diseño ", duracion: "4 meses", descripcion: "Curso introductorio al dibujo artistico", src: "./assets/img/dibujo.jpg" },
        { id:5,nombre: "Diseno web", sigla: "TM-4300", categoria: "Arte y Diseño ", duracion: "4 meses", descripcion: "Curso orientado al desarrollo de habilidades para diseno de interfaces", src: "./assets/img/diseno.jpg" },
        { id:6,nombre: "Comunicacion escrita", sigla: "TM-5100", categoria: "Comunicación y Gestión", duracion: "4 meses", descripcion: "Curso orientado en el desarrollo de habilidades comunicativas", src: "./assets/img/comunic.jpg" },
        { id:7,nombre: "Desarrollo empresarial", sigla: "TM-5200", categoria: "Comunicación y Gestión", duracion: "4 meses", descripcion: "Curso orientado a la gestion de empresas", src: "./assets/img/negocios.jpg" },
        ],
         cursoSeleccionado: null
      }
  },
  
      methods: {
verDetalles(id) {
this.cursoSeleccionado=this.cursos.find(curso => curso.id === id);
    },

    cerrarDetalles() {
      this.cursoSeleccionado = null;
    }
   
  }

  });