function saludar() {
    var numeroUno=5;
    var numeroDos=12;
    var suma=numeroUno+numeroDos;
    //console.log("El resultado de la suma es: "+suma);
    window.alert("El resultado de la suma es: "+suma);
} 
function formarOperacion(numero) {

    var pantalla=document.getElementById("pantalla");//referencia de un objeto HTML
    var operacion=document.getElementById("pantalla").value;//valor que está en el objeto
    operacion+=numero;
    pantalla.value=operacion;

}
function limpiarPantalla() {
    var pantalla=document.getElementById("pantalla");//referencia de un objeto HTML
    pantalla.value="";
}
function formarSuma() {

    var pantalla=document.getElementById("pantalla");//referencia de un objeto HTML
    var operacion=document.getElementById("pantalla").value;//valor que está en el objeto
    operacion+="+";
    pantalla.value=operacion;

}
function formarResta() {

    var pantalla=document.getElementById("pantalla");//referencia de un objeto HTML
    var operacion=document.getElementById("pantalla").value;//valor que está en el objeto
    operacion+="-";
    pantalla.value=operacion;

}
function formarMultiplicacion() {

    var pantalla=document.getElementById("pantalla");//referencia de un objeto HTML
    var operacion=document.getElementById("pantalla").value;//valor que está en el objeto
    operacion+="*";
    pantalla.value=operacion;

}
function formarDivision() {

    var pantalla=document.getElementById("pantalla");//referencia de un objeto HTML
    var operacion=document.getElementById("pantalla").value;//valor que está en el objeto
    operacion+="/";
    pantalla.value=operacion;

}
function calcularResultado() {

    var pantalla=document.getElementById("pantalla");//referencia de un objeto HTML
    var operacion=document.getElementById("pantalla").value;//valor que está en el objeto
    pantalla.value=eval(operacion);

}