app.component("detalles", {
  props: {
  categoria: { type: String, required: true },
    duracion: { type: String, required: true },
    descripcion: { type: String, required: true },
  },
  computed: {},
  methods: {
    cerrarDetalles() {
      this.$emit('cerrar-detalles');
    },
  },
  template: /*html*/ ` 
  <div class="detalles"> 
  <h3 :style="{color:'blue'}">{{categoria}}</h3> 
  <span>{{duracion}}</span> 
  <p>{{descripcion}}</p> 
  <button @click="cerrarDetalles">Cerrar</button> 
  </div> `,
});
