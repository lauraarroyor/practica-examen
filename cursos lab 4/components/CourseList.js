app.component("lista", {
  props: {
   
    id: { type: Number, required: true },
    nombre: { type: String, required: true },
    sigla: { type: String, required: true },
    src: { type: String, required: false },
  },
 
  methods: {
    verDetalles() {
      this.$emit('ver-detalles',this.id);
  }
},
  template: /*html*/ ` 
  <div class="curso" >
   <h2>{{nombre}}</h2> 
  <h2>{{sigla}}</h2> 
  <img :style="{height:'100px', width:'100px'}" 
  :src="src" alt="imagen de curso">
  <button @click="verDetalles">Detalles</button> 
  </div> `

});
